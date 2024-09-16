#!/usr/bin/env bash

#set -x

read -p "Reset _site and _bibliography to last commit? (yes/no) " yn

case $yn in 
	yes ) echo "reseting...";
        rm -rfv $WORKSPACE/bags/*.bag;;
	no ) echo exiting...;
		exit;;
	* ) echo invalid response;;
esac

# make sure contents are not owned by root
sudo chown -R $USER:$USER _site
sudo chown -R $USER:$USER _bibliography

git -C _site reset --hard
git -C _bibliography reset --hard

git -C _site clean -f -d
git -C _bibliography clean -f -d
