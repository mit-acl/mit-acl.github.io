#!/usr/bin/env bash

set -x

read -p "Reset _site and _bibliography to last commit? (yes/no) " yn

case $yn in 
	yes ) echo "reseting...";
        rm -rfv $WORKSPACE/bags/*.bag;;
	no ) echo exiting...;
		exit;;
	* ) echo invalid response;;
esac

git -C _site reset --hard
git -C _bibliography reset --hard

git -C _site clean -f
git -C _bibliography clean -f
