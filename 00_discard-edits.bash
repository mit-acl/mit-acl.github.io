#!/usr/bin/env bash

set -x

git -C _site reset --hard
git -C _bibliography reset --hard

git -C _site clean -f
git -C _bibliography clean -f
