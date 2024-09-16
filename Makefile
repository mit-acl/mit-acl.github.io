.PHONY: serve build install

serve:
	bundle exec jekyll serve --watch --port 4001 

build:
	bundle exec jekyll build

install:
	bundle install
