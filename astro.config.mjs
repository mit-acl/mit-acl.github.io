// @ts-check
import { defineConfig } from 'astro/config';
import remarkSmartypants from 'remark-smartypants';
import remarkImageParagraphs from './src/lib/remark-image-paragraphs.ts';
import remarkReferences from './src/lib/remark-references.ts';

// ACL website. Static output in ./dist, deployed to GitHub Pages by
// .github/workflows/deploy.yml.
export default defineConfig({
  site: 'https://acl.mit.edu',
  trailingSlash: 'ignore',
  build: {
    // Keep the old site's URLs: `people/index.astro` -> /people/index.html,
    // `people/[kerberos].astro` -> /people/<kerberos>.html (served at /people/<kerberos>).
    format: 'preserve',
  },
  markdown: {
    // Typographic quotes and dashes as on the old (kramdown) site: `--` is an
    // en dash, `---` an em dash.
    smartypants: false,
    remarkPlugins: [[/** @type {any} */ (remarkSmartypants), { dashes: 'oldschool' }], remarkReferences, remarkImageParagraphs],
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'github-light' },
  },
});
