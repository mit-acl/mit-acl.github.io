#FROM ros:melodic
FROM ubuntu:22.04

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -q -y --no-install-recommends apt-utils
RUN apt-get install -q -y --no-install-recommends net-tools iproute2 iputils-ping curl
RUN apt-get install -q -y --no-install-recommends git tmux vim apt-utils
RUN apt-get install -q -y --no-install-recommends gnupg2 ca-certificates
#RUN apt-get autoremove -y
RUN apt-get clean
#RUN rm -rf /var/lib/apt/lists/*

SHELL ["/bin/bash", "-c"]

# https://rvm.io/
RUN gpg2 --keyserver keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
#RUN \curl -sSL https://get.rvm.io | bash -s stable --rails
RUN curl -sSL https://get.rvm.io | bash -s stable

# Need to install OpenSSL 1.1 to build successfully
# REFERENCE: https://stackoverflow.com/a/72991803
RUN . /usr/local/rvm/scripts/rvm && rvm pkg install openssl
RUN . /usr/local/rvm/scripts/rvm && rvm install ruby-2.6 --with-openssl-dir=/usr/local/rvm/usr
RUN . /usr/local/rvm/scripts/rvm && gem install bundler -v 2.4.22

# Copy Gem files to Docker so we can make install all the needed packages
COPY ./copy/install /install
WORKDIR /install
RUN . /usr/local/rvm/scripts/rvm && bundle install

# Add rvm to .bashrc for user
RUN echo "source /usr/local/rvm/scripts/rvm" >> ~/.bashrc

WORKDIR /root/bridge

COPY ./copy/entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
