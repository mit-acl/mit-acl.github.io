#/usr/bin/env bash
#docker run -it $DOCKER_TAG

source CONFIG.sh

OPTIONS="--rm"
NETWORK="--net=host"
VOLUMES="-v $(pwd)/..:/root/bridge"

docker run -it $OPTIONS $NETWORK $VOLUMES $DOCKER_TAG $@
