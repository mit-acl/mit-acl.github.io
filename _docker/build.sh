#!/usr/bin/env bash
#docker build --no-cache -t $DOCKER_TAG .
#docker build -t $DOCKER_TAG .

source CONFIG.sh

ARGS=''
if [ "$1" == 'clean' ]; then
    ARGS="--no-cache"
fi

docker build $ARGS -t $DOCKER_TAG .
