#!/usr/bin/env bash

# pull down current master branch of bibliography repo
# https://github.com/mit-acl/bibliography
rm -f _bibliography
wget -qO- https://github.com/mit-acl/bibliography/archive/refs/heads/master.zip | busybox unzip - && mv bibliography-master/ _bibliography

# ensure _site is up-to-date
git -C _site pull

# confirm current build is committed
confirm_commit=$(git status -s | wc -l)
if [ $confirm_commit -ne 0 ]; then
    echo "please commit all changes before building and deploying"
    exit 1
fi

# TODO confirm _site and _bibliography were cloned correctly

cd docker

GIT_TARGET="-C ../_site"

# update _site directory
git $GIT_TARGET pull -f

# copy in Gemfile to ensure correct dependenies are built into the image
cp ../Gemfile .

# build and run the image
./build.bash && ./run.bash

# check if site has meaningfully changed (i.e. any file besides sitemap.xml's build timestamps have changed), if so add, commit, and push update
# Reference: https://stackoverflow.com/questions/47146064/number-of-modified-files-in-git-index
files_changed=$(git $GIT_TARGET status -s -uno | grep -v sitemap.xml$ | wc -l)

if [ $files_changed -gt 0 ]; then
    git $GIT_TARGET add -A && git $GIT_TARGET commit -m "docker build: $(date)" && git $GIT_TARGET push
else
    echo "no website content has changed"
fi
