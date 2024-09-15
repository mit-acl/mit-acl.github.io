#!/usr/bin/env bash

# https://github.com/mit-acl/mit-acl.github.io
# https://github.com/mit-acl/bibliography

confirm_commit() {
    if [ $(git -C $1 status -s | wc -l) -gt 0 ]; then
        false
    else
        true
    fi
}

check_repo_fresh() {
    if ! confirm_commit $1 ; then
        echo "$1 :: please commit all changes before building and deploying"
        exit 1
    fi
}

# confirm repos are fresh
check_repo_fresh _site
check_repo_fresh _bibliography

# pull updates
git -C _site pull -f
git -C _bibliography pull -f

cd docker

# copy in Gemfile to ensure correct dependenies are built into the image
cp ../Gemfile .

# build and run the image
./build.bash && ./run.bash && \
    git -C _site add -A && \
    git -C _site commit -m "docker build: $(date)" && \
    git -C _site push