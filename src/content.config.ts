import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Legacy frontmatter is messy: empty fields parse as `null`, and `active` shows
// up as both booleans and the strings "true"/"false". These helpers keep the
// schema forgiving about that while still catching genuine mistakes (a typo'd
// required field, a malformed list, etc).
const looseStr = z.string().nullish();
const yearLike = z.union([z.string(), z.number()]).nullish();
// `true`/"true" and `false`/"false" are normalized; a missing value stays
// `undefined` (e.g. projects without `active` are listed in neither section).
const bool = z
  .union([z.boolean(), z.enum(['true', 'false']), z.null()])
  .optional()
  .transform((v) => (v === null || v === undefined ? undefined : v === true || v === 'true'));

const fileName = ({ entry }: { entry: string }) => entry.replace(/\.md$/, '');

// People with a full profile page at /people/<kerberos>. The body is their bio.
const members = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/members', generateId: fileName }),
  schema: z.object({
    name: z.string(),
    kerberos: z.string(),
    active: bool,
    position: looseStr, // Admin | Research | Postdoc | PhD | Master | Visiting (see src/data/site.ts)
    title: looseStr, // human-readable title, e.g. "PhD Candidate"
    portrait: z
      .string()
      .nullish()
      .transform((v) => v || '/images/members/default.png'),
    office: looseStr,
    phone: yearLike,
    links: z.array(z.object({ type: z.string(), url: z.string() })).nullish(),
    education: z
      .array(
        z.object({
          type: looseStr,
          study: looseStr,
          school: looseStr,
          graduation: yearLike,
          start: yearLike,
          current: z.boolean().nullish(),
        }),
      )
      .nullish(),
    interests: z.array(z.string()).nullish(),
    awards: z.array(z.object({ name: z.string(), date: yearLike })).nullish(),
  }),
});

// Research projects at /projects/<slug>, where the slug is the file name with
// underscores turned into hyphens. `authors` are member kerberos IDs (linked
// automatically); `papers` are BibTeX keys shown as "Related Publications".
const projects = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content/projects',
    generateId: ({ entry }) =>
      entry
        .replace(/\.md$/, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, ''),
  }),
  schema: z.object({
    title: z.string(),
    subtitle: looseStr,
    date: z.coerce.date().nullish(),
    description: looseStr,
    summary: looseStr,
    featured_image: z
      .string()
      .nullish()
      .transform((v) => v || '/images/social.jpg'),
    image_alt: looseStr,
    authors: z.array(z.string()).nullish(),
    papers: z.array(z.string()).nullish(),
    active: bool,
    redirect_to: looseStr,
  }),
});

// News posts, shown on the home page newest first. File names are
// YYYY-MM-DD-title.md; each also gets its own page at /YYYY/MM/DD/title.html.
const news = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/news', generateId: fileName }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    featured_image: looseStr,
  }),
});

// Posts pinned to the top of the home page, in file-name order.
const pinned = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pinned', generateId: fileName }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().nullish(),
  }),
});

// Standalone Markdown pages (contact, thanks).
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages', generateId: fileName }),
  schema: z.object({
    title: z.string(),
    subtitle: looseStr,
    description: looseStr,
    featured_image: looseStr,
  }),
});

export const collections = { members, projects, news, pinned, pages };
