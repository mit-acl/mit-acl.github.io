// Minimal, dependency-free BibTeX parser tailored to ACL_Publications.bib.
//
// Why hand-rolled: the lab's workflow is "add a BibTeX entry, rebuild", and we
// want full control over how the 800+ entries render (grouping, links, raw
// BibTeX popovers) without pulling in a heavy citation library. The file uses
// @string macros, brace/quote-delimited and concatenated values, and TeX accent
// escapes — all handled below.

// Read from disk (relative to the project root) so this module also works when
// imported from astro.config.mjs.
import { readFileSync } from 'node:fs';

const bibText = readFileSync('bibliography/ACL_Publications.bib', 'utf8');

export interface Publication {
  key: string;
  type: string;
  title: string;
  authors: string[];
  venue: string;
  year: number | null;
  month: number | null;
  pages: string;
  links: { label: string; url: string }[];
  raw: string; // original BibTeX entry text, for the "BibTeX" disclosure
  fields: Record<string, string>;
  index: number; // position in the .bib file (tie-breaker when sorting)
}

// ---------------------------------------------------------------------------
// Tokenizer
// ---------------------------------------------------------------------------

/** Read the {...}-balanced block starting at `open` (text[open] === '{'). */
function readBalanced(text: string, open: number): { body: string; end: number } {
  let depth = 0;
  for (let i = open; i < text.length; i++) {
    const ch = text[i];
    const escaped = text[i - 1] === '\\';
    if (ch === '{' && !escaped) depth++;
    else if (ch === '}' && !escaped) {
      depth--;
      if (depth === 0) return { body: text.slice(open + 1, i), end: i + 1 };
    }
  }
  return { body: text.slice(open + 1), end: text.length };
}

/** Split on `sep` at top brace/quote depth (ignores separators inside {} or ""). */
function splitTopLevel(text: string, sep: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let inQuote = false;
  let start = 0;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '{' && text[i - 1] !== '\\') depth++;
    else if (ch === '}' && text[i - 1] !== '\\') depth--;
    else if (ch === '"' && depth === 0) inQuote = !inQuote;
    else if (ch === sep && depth === 0 && !inQuote) {
      out.push(text.slice(start, i));
      start = i + 1;
    }
  }
  out.push(text.slice(start));
  return out;
}

/** Resolve a raw field value: strip braces/quotes, expand macros, join `#`. */
function resolveValue(raw: string, macros: Map<string, string>): string {
  return splitTopLevel(raw, '#')
    .map((part) => {
      const p = part.trim();
      if (p.startsWith('{')) return readBalanced(p, 0).body;
      if (p.startsWith('"')) return p.slice(1, p.endsWith('"') ? -1 : undefined);
      // Bare token: a number, or a @string macro name.
      return macros.get(p.toLowerCase()) ?? p;
    })
    .join('')
    .replace(/\s+/g, ' ')
    .trim();
}

// ---------------------------------------------------------------------------
// TeX accent / special-character handling -> Unicode
// ---------------------------------------------------------------------------

const SPECIALS: [RegExp, string][] = [
  [/\\ss\b/g, 'ß'], [/\{\\ss\}/g, 'ß'],
  [/\\ae\b/g, 'æ'], [/\\AE\b/g, 'Æ'],
  [/\\oe\b/g, 'œ'], [/\\OE\b/g, 'Œ'],
  [/\\aa\b/g, 'å'], [/\\AA\b/g, 'Å'],
  [/\\o\b/g, 'ø'], [/\\O\b/g, 'Ø'],
  [/\\l\b/g, 'ł'], [/\\L\b/g, 'Ł'],
];

const SYMBOL_ACCENTS: Record<string, string> = {
  "'": '́', '`': '̀', '"': '̈', '^': '̂',
  '~': '̃', '=': '̄', '.': '̇',
};
const LETTER_ACCENTS: Record<string, string> = {
  v: '̌', u: '̆', c: '̧', H: '̋', r: '̊', k: '̨',
};

/** Convert TeX-escaped text to readable Unicode. */
function deTeX(s: string): string {
  if (!s) return '';
  s = s.replace(/\\i\b/g, 'i').replace(/\\j\b/g, 'j'); // dotless -> base for accenting
  for (const [re, ch] of SPECIALS) s = s.replace(re, ch);
  // \'{a}, \'a, \"o, ... (symbol accents)
  s = s.replace(/\\(['`"^~=.])\s*\{?([a-zA-Z])\}?/g, (_m, acc, ch) => ch + SYMBOL_ACCENTS[acc]);
  // \v{c}, \u{g}, \c{c}, \H{o}, \r{a}, \k{a} (letter-named accents)
  s = s.replace(/\\([vucHrk])\s*\{?([a-zA-Z])\}?/g, (_m, acc, ch) => ch + (LETTER_ACCENTS[acc] ?? ''));
  s = s.replace(/\\([&%$#_{}])/g, '$1'); // escaped punctuation
  s = s.replace(/[{}]/g, ''); // leftover grouping braces
  s = s.replace(/\\[a-zA-Z]+/g, ''); // drop any unknown remaining commands
  return s.replace(/\s+/g, ' ').trim().normalize('NFC');
}

function formatAuthors(raw: string): string[] {
  if (!raw) return [];
  return raw
    .split(/\s+and\s+/i)
    .map((a) => {
      a = a.trim();
      const comma = a.indexOf(',');
      if (comma !== -1) a = `${a.slice(comma + 1).trim()} ${a.slice(0, comma).trim()}`;
      return deTeX(a);
    })
    .filter(Boolean);
}

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
/** Month number from values like "July", "Sept./Oct.", "4-6 June" or "7". */
function parseMonth(raw?: string): number | null {
  if (!raw) return null;
  const s = raw.trim().toLowerCase();
  const name = s.match(/[a-z]{3}/g)?.map((w) => MONTHS.indexOf(w)).find((i) => i !== -1);
  if (name !== undefined) return name + 1;
  const n = parseInt(s, 10);
  return !Number.isNaN(n) && n >= 1 && n <= 12 ? n : null;
}

function buildLinks(f: Record<string, string>): { label: string; url: string }[] {
  const links: { label: string; url: string }[] = [];
  const seen = new Set<string>();
  const add = (label: string, url: string) => {
    url = url.trim();
    if (!/^https?:\/\//i.test(url) || seen.has(url)) return;
    seen.add(url);
    links.push({ label, url });
  };
  // The legacy file sometimes has junk like `url = {c}`, so we only accept real
  // http(s) links and label arXiv specially.
  for (const key of ['url', 'url-online', 'bdsk-url-1', 'bdsk-url-online-1', 'pdf', 'link']) {
    const v = f[key];
    if (v && /^https?:\/\//i.test(v.trim())) {
      add(/arxiv/i.test(v) ? 'arXiv' : 'PDF', v);
      break;
    }
  }
  if (f.doi) add('DOI', `https://doi.org/${f.doi.replace(/^https?:\/\/(dx\.)?doi\.org\//i, '').trim()}`);
  return links;
}

/**
 * Safety net for entries missing a `year` field: infer it so they never fall
 * into an "unknown year" bucket. Tries an arXiv id (YYMM.xxxxx => year+month),
 * then a 4-digit year embedded in the citation key.
 */
function inferYear(fields: Record<string, string>, key: string): { year: number; month: number | null } | null {
  const haystack = Object.values(fields).join(' ');
  const arxiv = haystack.match(/arxiv:\s*(\d{2})(\d{2})\.\d{4,5}/i);
  if (arxiv) {
    const mm = parseInt(arxiv[2], 10);
    return { year: 2000 + parseInt(arxiv[1], 10), month: mm >= 1 && mm <= 12 ? mm : null };
  }
  const inKey = key.match(/(19|20)\d{2}/);
  if (inKey) return { year: parseInt(inKey[0], 10), month: null };
  return null;
}

// ---------------------------------------------------------------------------
// Entry assembly
// ---------------------------------------------------------------------------

function parseEntry(
  type: string,
  body: string,
  raw: string,
  macros: Map<string, string>,
  index: number,
): Publication | null {
  const parts = splitTopLevel(body, ',');
  const key = parts.shift()?.trim();
  if (!key) return null;

  const fields: Record<string, string> = {};
  for (const part of parts) {
    const eq = part.indexOf('=');
    if (eq === -1) continue;
    const name = part.slice(0, eq).trim().toLowerCase();
    if (!name) continue;
    fields[name] = resolveValue(part.slice(eq + 1), macros);
  }

  const parsedYear = parseInt(fields.year ?? '', 10);
  const inferred = Number.isNaN(parsedYear) ? inferYear(fields, key) : null;
  return {
    key,
    type,
    title: deTeX(fields.title ?? ''),
    authors: formatAuthors(fields.author ?? ''),
    venue: deTeX(fields.booktitle || fields.journal || fields.school || fields.institution || fields.howpublished || ''),
    year: Number.isNaN(parsedYear) ? inferred?.year ?? null : parsedYear,
    month: parseMonth(fields.month) ?? inferred?.month ?? null,
    pages: deTeX(fields.pages ?? '').replace(/--/g, '–'),
    links: buildLinks(fields),
    raw: raw.trim(),
    fields,
    index,
  };
}

export function parseBibtex(text: string): Publication[] {
  const macros = new Map<string, string>();
  const entries: Publication[] = [];
  let i = 0;

  while (i < text.length) {
    if (text[i] !== '@') { i++; continue; }
    const start = i;
    let j = i + 1;
    while (j < text.length && /[a-zA-Z]/.test(text[j])) j++;
    const type = text.slice(i + 1, j).toLowerCase();
    while (j < text.length && /\s/.test(text[j])) j++;
    if (text[j] !== '{') { i = j + 1; continue; }

    const { body, end } = readBalanced(text, j);
    i = end;

    if (type === 'comment' || type === 'preamble') continue;
    if (type === 'string') {
      const eq = body.indexOf('=');
      if (eq !== -1) {
        const name = body.slice(0, eq).trim().toLowerCase();
        macros.set(name, resolveValue(body.slice(eq + 1), macros));
      }
      continue;
    }
    const entry = parseEntry(type, body, text.slice(start, end), macros, entries.length);
    if (entry) entries.push(entry);
  }
  return entries;
}

// ---------------------------------------------------------------------------
// Public helpers (read + cache the bibliography once per build)
// ---------------------------------------------------------------------------

let _pubs: Publication[] | null = null;

/** All publications, newest first (by year, then month), otherwise in file order. */
export function getPublications(): Publication[] {
  if (_pubs) return _pubs;
  _pubs = parseBibtex(bibText).sort(
    (a, b) => (b.year ?? 0) - (a.year ?? 0) || (b.month ?? 0) - (a.month ?? 0) || a.index - b.index,
  );
  return _pubs;
}

/** The raw .bib file contents. */
export const bibliographySource = bibText;

/** Lookup table by citation key, for projects' "Related Publications". */
export function getPublicationMap(): Map<string, Publication> {
  const map = new Map<string, Publication>();
  for (const p of getPublications()) map.set(p.key, p);
  return map;
}

/** Group publications by year, descending. */
export function groupByYear(pubs: Publication[]): { year: number; items: Publication[] }[] {
  const groups = new Map<number, Publication[]>();
  for (const p of pubs) {
    const y = p.year ?? 0;
    (groups.get(y) ?? groups.set(y, []).get(y)!).push(p);
  }
  return [...groups.entries()].sort((a, b) => b[0] - a[0]).map(([year, items]) => ({ year, items }));
}
