#!/usr/bin/env bash

source /usr/local/rvm/scripts/rvm
cd ~/bridge

#if [[ "$1" == "serve"]]; then
#    make serve
#fi
#
#make build

make $1
