// Formats BibTeX entries as AIAA-style citations (HTML), using the CSL style
// file that ships with the bibliography repo. Parsing, years and links come
// from ./bibtex.ts; this module only produces the formatted reference text.

import { Cite, plugins } from '@citation-js/core';
import '@citation-js/plugin-bibtex';
import '@citation-js/plugin-csl';
import { readFileSync } from 'node:fs';
import { bibliographySource, getPublicationMap } from './bibtex';

plugins.config.get('@csl').templates.add('aiaa', readFileSync('_bibliography/aiaa.csl', 'utf8'));

const THESIS_GENRES: Record<string, string> = {
  phdthesis: 'PhD thesis',
  mastersthesis: "Master's thesis",
};

type CslItem = Record<string, any>;

/** Split `text` on whitespace (or `~`) outside of braces. */
function words(text: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let cur = '';
  for (const ch of text) {
    if (ch === '{') depth++;
    else if (ch === '}') depth--;
    if (depth === 0 && /[\s~]/.test(ch)) {
      if (cur) out.push(cur);
      cur = '';
    } else cur += ch;
  }
  if (cur) out.push(cur);
  return out;
}

/**
 * Rewrite "First von Last" names as "von Last, First", splitting on whitespace
 * like BibTeX does. citation-js splits on hyphens too, which mangles names
 * such as "Ali-akbar Agha-mohammadi".
 */
function normalizeName(name: string): string {
  if (name.includes(',')) return name;
  const tokens = words(name);
  if (tokens.length < 2) return name;
  const isLower = (t: string) => /^[a-z]/.test(t.replace(/^[{\\]+/, ''));
  const firstLower = tokens.slice(0, -1).findIndex(isLower);
  const split = firstLower === -1 ? tokens.length - 1 : firstLower;
  return `${tokens.slice(split).join(' ')}, ${tokens.slice(0, split).join(' ')}`;
}

/** Apply normalizeName to every author/editor field in a .bib source. */
function normalizeNames(source: string): string {
  const field = /\b(author|editor)\s*=\s*\{/gi;
  let out = '';
  let last = 0;
  for (let m; (m = field.exec(source)); ) {
    const open = m.index + m[0].length - 1;
    let depth = 0;
    let close = open;
    for (; close < source.length; close++) {
      if (source[close] === '{') depth++;
      else if (source[close] === '}' && --depth === 0) break;
    }
    const names = source
      .slice(open + 1, close)
      .split(/\s+and\s+/i)
      .map((n) => normalizeName(n.trim()));
    out += source.slice(last, open + 1) + names.join(' and ');
    last = close;
    field.lastIndex = close;
  }
  return out + source.slice(last);
}

let _items: Map<string, CslItem> | null = null;

function cslItems(): Map<string, CslItem> {
  if (_items) return _items;
  const pubs = getPublicationMap();
  _items = new Map();
  const source = normalizeNames(bibliographySource)
    .replace(/\\mathcal\s*\{?([A-Za-z])\}?/g, '$1')
    .replace(/\\infty\b/g, '∞')
    .replace(/\\mu\b/g, 'μ');
  for (const item of new Cite(source).data as CslItem[]) {
    const pub = pubs.get(item.id);
    if (pub) {
      const f = pub.fields;
      if (THESIS_GENRES[pub.type]) item.genre = THESIS_GENRES[pub.type];
      // `school`/`institution` are free text; don't let citation-js split them on "and".
      const org = f.school || f.institution;
      if (org) item.publisher = org.replace(/[{}]/g, '');
      // Only show a place when it was given as `address`.
      if (!f.address) delete item['publisher-place'];
      // citation-js can't read months like "Sept" or "Oct-Dec"; bibtex.ts can.
      if (pub.year && pub.month && !item.issued?.['date-parts']?.[0]?.[1]) {
        item.issued = { 'date-parts': [[pub.year, pub.month]] };
      }
    }
    // Initials written without periods ("JP") -> "J. P."
    for (const name of item.author ?? []) {
      if (typeof name.given === 'string' && /^[A-Z]{2,3}$/.test(name.given)) {
        name.given = name.given.split('').join('. ') + '.';
      }
    }
    _items.set(item.id, item);
  }
  return _items;
}

const _html = new Map<string, string>();

/** The formatted citation for a BibTeX key, or null if the key is unknown. */
export function formatCitation(key: string): string | null {
  if (_html.has(key)) return _html.get(key)!;
  const item = cslItems().get(key);
  if (!item) return null;
  const html = (new Cite(item).format('bibliography', { format: 'html', template: 'aiaa', lang: 'en-US' }) as string)
    .replace(/^[\s\S]*?<div class="csl-left-margin">/, '')
    .replace('</div><div class="csl-right-inline">', '')
    .replace(/<\/div>\s*<\/div>\s*<\/div>\s*$/, '')
    .replace(/([,.])<\/b>”/g, '</b>$1”')
    .trim();
  _html.set(key, html);
  return html;
}
