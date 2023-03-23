# mit-acl.github.io

Website for 

## Setup
We build the static site locally and then push it to the `gh-pages` branch for hosting. This requires you clone the repository and `_site` folder correctly.

```bash
git clone --recurse-submodules git@github.com:mit-acl/mit-acl.github.io.git
cd mit-acl.github.io.git
git clone -b gh-pages `git config remote.origin.url` _site
```

If you clone the repo without the `--recurse-submodules` flag, you can initialize the submodules after the fact with:
```bash
git submodule init 
git submodule update
```

## Publishing the site
- Update the `_bibliography` submodule with: `git submodule update --remote`
- Commit your changes to the source repo (i.e. `mit-acl.github.io`)
- Build the static site into `_site` with either:
    * Docker: `./docker/build.bash && ./docker/run.bash`
    * Local Install: `bundle exec jekyll build`
- Commit your build to the `gh-pages` branch (i.e. inside `_site`)
- Check the deployment status [here](https://github.com/mit-acl/mit-acl.github.io/actions)
- Check the website at: [https://mit-acl.github.io/](https://mit-acl.github.io/)

## New Students
If you're a new student, you need to be added to the website.
Reach out to the current ACL webmaster via Slack and provide the following:
1. A headshot (i.e. `.jpg` or `.png`)
2. Markdown providing your information. [(See this example.)](https://raw.githubusercontent.com/mit-acl/mit-acl.github.io/master/_members/kavehf.md)
Alternatively, if you're comfortable with GitHub/GitHub pages, you're welcome to make the changes yourself and submit a pull request.

## Notes
* Citations are stored in [this repo](https://github.com/mit-acl/bibliography).
* Static site builds are stored on [this branch](https://github.com/mit-acl/mit-acl.github.io/tree/gh-pages).
