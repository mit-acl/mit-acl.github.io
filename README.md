# mit-acl.github.io
 
Jekyll website for Aerospace Controls Laboratory at MIT.

## Setup
We build the static site locally and then push it to the `gh-pages` branch for hosting. This requires you clone the repository and `_site` folder correctly.

```bash
git clone git@github.com:mit-acl/mit-acl.github.io.git
cd mit-acl.github.io.git
git clone -b gh-pages `git config remote.origin.url` _site
```

## Easy build
- Update [bibliography repo](https://github.com/mit-acl/bibliography) and commit/push any changes
  - Do not edit the contents of the `_bibliography` directory in this repo. The directory is pulled down fresh from the [bibliography repo](https://github.com/mit-acl/bibliography) on each build. Thus, edits should be made and committed directly to that repo separately.
- Build and commit the static site into `_site` with bash and Docker: `./build_and_deploy.bash`
- Check the deployment status [here](https://github.com/mit-acl/mit-acl.github.io/actions)
- Check the website at: [https://mit-acl.github.io/](https://mit-acl.github.io/)

## Alternative manual build (not recommended)
If you don't want to install Docker, you can manually build, commit, and push:
- Update the `_bibliography` submodule with: `git submodule update --remote`
- Commit your changes to the source repo (i.e. `mit-acl.github.io`)
- Build the static site into `_site` with your local Jekyll installation: `bundle exec jekyll build`
- Commit your build to the `gh-pages` branch (i.e. inside `_site`)
- Check the deployment status [here](https://github.com/mit-acl/mit-acl.github.io/actions)
- Check the website at: [https://mit-acl.github.io/](https://mit-acl.github.io/)

## New Students
If you're a new student, you need to be added to the website.
Reach out to the [current ACL webmaster](https://wikis.mit.edu/confluence/pages/viewpage.action?pageId=123502773) via Slack and provide the following:
1. A headshot (i.e. `.jpg` or `.png`)
2. Markdown providing your information. [(See this example.)](https://raw.githubusercontent.com/mit-acl/mit-acl.github.io/master/howto/template_member.md)
Alternatively, if you're comfortable with GitHub/GitHub pages, you're welcome to make the changes yourself and submit a pull request.

## Notes
* Citations are stored in [this repo](https://github.com/mit-acl/bibliography).
* Static site builds are stored on [this branch](https://github.com/mit-acl/mit-acl.github.io/tree/gh-pages).
* Derived from [the old private website repo](https://github.com/mit-acl/website). (Didn't fork because of the LFS files committed directly to the old repo.)
