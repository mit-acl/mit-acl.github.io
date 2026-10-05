# mit-acl.github.io

Website for the Aerospace Controls Laboratory at MIT ([acl.mit.edu](https://acl.mit.edu)), built with
[Astro](https://astro.build). Content is Markdown with a short YAML block at the top of each file.

## Setup

```bash
git clone git@github.com:mit-acl/mit-acl.github.io.git
cd mit-acl.github.io
```

## Running it locally

You only need **Docker** installed. Then:

```bash
./serve.sh            # live preview at http://localhost:4321 (auto-reloads as you edit)
./serve.sh build      # build the static site into ./dist
./serve.sh preview    # build, then preview the production output at http://localhost:4321
./serve.sh stop       # stop the dev server
```

The first run builds the Docker image (~30s); after that it starts in a few seconds.

> **Heads up:** editing existing files hot-reloads automatically, but if you **add a new
> file to `public/`** (e.g. a new image) while the server is running, restart it so the
> file is picked up: `./serve.sh stop && ./serve.sh`.

## Deploying

Open a PR to deploy any website changes. When your PR is approved and merged into `main`, it will deploy automatically: the [Deploy to GitHub Pages](.github/workflows/deploy.yml)
workflow builds the site and publishes it. Check its progress
[here](https://github.com/mit-acl/mit-acl.github.io/actions). To redeploy without a code change,
run the workflow manually from the Actions tab.

## Editing content

| What | Where | How to add one |
|------|-------|----------------|
| **People** | `src/content/members/<kerberos>.md` | Copy [`howto/template_member.md`](howto/template_member.md); put the headshot in `public/images/members/`. |
| **Projects** | `src/content/projects/<slug>.md` | Copy [`howto/template_project.md`](howto/template_project.md); `authors` are kerberos IDs, `papers` are BibTeX keys. |
| **News** | `src/content/news/YYYY-MM-DD-title.md` | Copy [`howto/template_news_post.md`](howto/template_news_post.md). |
| **Home page intro** | `src/content/pinned/` | The welcome text and statement of values pinned above the news. |
| **Contact / Thanks pages** | `src/content/pages/` | |
| **Publications** | `bibliography/ACL_Publications.bib` | Paste a BibTeX entry; see below. |
| **Faculty / UROPs** | `src/data/people.ts` | Directory-only entries that don't have a profile page. |
| **Menu, quick links, logos, People sections** | `src/data/site.ts` | Site-wide settings in one place. |
| **Colors, fonts** | `src/styles/style.scss` | Variables at the top of the file. |

If you mistype a field, the build tells you exactly which file and field is wrong.

Images and other files go under `public/` and are linked without the `public` prefix: a file at
`public/images/projects/foo.jpg` is linked as `/images/projects/foo.jpg`.

### Publications

All ACL publications live in [`bibliography/ACL_Publications.bib`](bibliography/ACL_Publications.bib)
(formerly the separate `mit-acl/bibliography` repo). Add or fix entries
there and the Publications page rebuilds from it; see [`bibliography/README.md`](bibliography/README.md)
for the validation and merge scripts. The dev server reads the file once at startup, so restart it
(`./serve.sh stop && ./serve.sh`) to see bibliography edits.

Projects can cite entries in their Markdown body with `{% reference <BibTeX key> %}`, or list them
under `papers:` in the front matter.

## New Students

If you're a new student, you need to be added to the website. You can do this via a PR that adds:
1. A headshot (i.e. `.jpg` or `.png`)
2. Markdown providing your information [(See this example.)](howto/template_member.md)

## How it's organized

```
src/
  content/          Markdown content (members, projects, news, pinned, pages)
  content.config.ts the allowed fields for each content type
  data/             site.ts (settings), people.ts (faculty/UROPs)
  lib/              bibtex.ts (BibTeX parser), citations.ts (AIAA formatting), Markdown plugins
  components/       Header, Footer, ...
  layouts/          Default.astro (the page shell)
  pages/            one file per route (/, /people, /projects, /publications, ...)
  styles/           style.scss + the theme's Sass partials
public/             static files served as-is (images, files, the theme's JS, CNAME)
bibliography/       ACL_Publications.bib, the AIAA citation style, and helper scripts
```

## Notes

* The visual theme is "Index" by JekyllThemes.io; see [`_LICENSE.md`](_LICENSE.md).
