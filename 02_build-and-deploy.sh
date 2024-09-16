#!/usr/bin/env bash

# show commands
<<<<<<<< HEAD:02_build-and-deploy.sh
#set -x
========
set -x
>>>>>>>> 27dae9c (updated build scripts):01_build-and-deploy.bash

# Repo Links:
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

cd _docker

# build and run the image
<<<<<<<< HEAD:02_build-and-deploy.sh
./build.sh && ./run.sh build && \
========
./build.bash && ./run.bash && \
>>>>>>>> 27dae9c (updated build scripts):01_build-and-deploy.bash
    cd .. && \
    git -C _site add -A && \
    git -C _site commit -m "docker build: $(date)" && \
    git -C _site push
