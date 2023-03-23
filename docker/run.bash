#/usr/bin/env bash
#docker run -it acl-website

#docker run -it --rm --net=host -v $(pwd)/..:/root/bridge acl-website
docker run -it --rm -v $(pwd)/..:/root/bridge acl-website
