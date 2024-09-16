#!/usr/bin/env bash

# show commands
set -x

# Repo Links:
# https://github.com/mit-acl/mit-acl.github.io
# https://github.com/mit-acl/bibliography

cd _docker

# build and run the image
./build.sh && \
    ./run.sh serve
