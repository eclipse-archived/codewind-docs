#!/bin/sh
docker run --rm -it \
  --volume="$PWD/docs:/srv/jekyll" \
  --volume="$PWD/vendor/bundle:/usr/local/bundle" \
  -p 4321:4321 jekyll/jekyll:3.8.5 \
  jekyll build