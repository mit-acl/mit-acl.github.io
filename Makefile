.PHONY: serve build install

build:
	bundle exec jekyll build

serve:
	bundle exec jekyll serve --watch --port 4001 

install:
	bundle install
