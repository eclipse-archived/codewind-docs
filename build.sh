#!/bin/sh

RED='\033[0;31m'
NC='\033[0m' # No Color
GREEN='\033[0;32m'

# Fix the timestamp
# https://stackoverflow.com/questions/21735435/git-clone-changes-file-modification-time
# https://gist.github.com/HackingGate/9e8169c7645b074b2f40c959ca20d738

echo "Fixing file timestamp..."

OS=${OS:-`uname`}

if [ "$OS" = 'Darwin' ]; then
  get_touch_time() {
    date -r ${unixtime} +'%Y%m%d%H%M.%S'
  }
else
  # default Linux
  get_touch_time() {
    date -d @${unixtime} +'%Y%m%d%H%M.%S'
  }
fi

git ls-tree -r --name-only HEAD | while read filename; do 
  unixtime=$(git log -1 --format="%at" -- "${filename}")
  touchtime=$(get_touch_time)
  touch -t ${touchtime} "${filename}"
done

mkdir -p _tmp
mkdir -p _jekyllHome
# Compile the files
docker run --rm -it \
  --volume="$PWD/docs:/srv/jekyll" \
  --volume="$PWD/_tmp:/tmp" \
  --volume="$PWD/_jekyllHome:/home/jekyll" \
  --volume="$PWD/vendor/bundle:/usr/local/bundle" \
  -p 4321:4321 jekyll/jekyll:3.8.5 \
  /bin/bash -c "bundle install && jekyll build"

  
# Launch the site in apache

docker run -dit --name my-apache-app -p 8765:80 -v "$PWD/docs/_site":/usr/local/apache2/htdocs/codewind/ httpd:2.4

# Check link 
docker run --network="host" --rm -it -u $(id -u):$(id -g) codewinddocs/linkchecker:1.0 http://localhost:8765/codewind/
rc=$?

# Shut down apache
echo "Shutting down apache server..."
docker stop my-apache-app >/dev/null 2>&1

echo "Removing apache container..."
docker container rm my-apache-app >/dev/null 2>&1

if [[ $rc != 0 ]]; 
then 
	printf "${RED}Find bad link(s), please fix them!${NC}\n"
	exit $rc; 
else
	printf "${GREEN}No errors found. Safe to check in.${NC}\n"
fi
