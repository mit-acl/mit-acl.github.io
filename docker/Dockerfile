FROM ubuntu:20.04

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -q -y --no-install-recommends apt-utils
RUN apt-get install -q -y --no-install-recommends net-tools iproute2 iputils-ping
RUN apt-get install -q -y --no-install-recommends git tmux vim
RUN apt-get install -q -y --no-install-recommends ruby-full build-essential zlib1g-dev
RUN apt-get install -q -y --no-install-recommends jekyll bundler
RUN apt-get autoremove -y
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/*

COPY Gemfile /Gemfile
SHELL ["/bin/bash", "-c"]
RUN source ~/.bashrc && bundle update
RUN bundle install

COPY ./entrypoint.bash /entrypoint.bash
ENTRYPOINT ["/entrypoint.bash"]
