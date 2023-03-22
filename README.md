# mit-acl.github.io

Website for 

## Setup
We build the static site locally and then push it to the `gh-pages` branch for hosting. This requires you clone the repository and `_site` folder correctly.

```bash
git clone git@github.com:mit-acl/mit-acl.github.io.git
cd mit-acl.github.io.git
git clone -b gh-pages `git config remote.origin.url` _site
```

## Publishing the site
Commit your changes to the source repo (i.e. `mit-acl.github.io`) **AND** the build repo (i.e. `_site`).

## New Students
If you're a new student, you need to be added to the website.
Reach out to the current ACL webmaster via Slack and provide the following:
1. A headshot (i.e. `.jpg` or `.png`)
2. Markdown providing your information. [See this example...](https://raw.githubusercontent.com/mit-acl/mit-acl.github.io/master/_members/kavehf.md)
Alternatively, if you're comfortable with GitHub/GitHub pages, you're welcome to make the changes yourself and submit a pull request.
