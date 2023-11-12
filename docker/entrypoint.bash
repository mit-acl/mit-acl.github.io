#!/usr/bin/env bash

source ~/.bashrc
cd ~/bridge

# shouldn't need to redo this, but for some reason I do...
bundle update
bundle install

# builds image
bundle exec jekyll build

#bash
