FROM ubuntu:20.04

# https://dev.to/setevoy/docker-configure-tzdata-and-timezone-during-build-20bk
#ENV TZ=America/New_York
#RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

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
RUN source ~/.bashrc && bundle install

COPY ./entrypoint.bash /entrypoint.bash
ENTRYPOINT ["/entrypoint.bash"]
