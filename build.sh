#!/bin/sh

RED='\033[0;31m'
NC='\033[0m' # No Color
GREEN='\033[0;32m'


# Compile the files
docker run --rm -it \
  --volume="$PWD/docs:/srv/jekyll" \
  --volume="$PWD/vendor/bundle:/usr/local/bundle" \
  -p 4321:4321 jekyll/jekyll:3.8.5 \
  jekyll build
  
# Launch the site in apache

docker run -dit --name my-apache-app -p 8765:80 -v "$PWD/docs/_site":/usr/local/apache2/htdocs/codewind/ httpd:2.4

# Check link 
docker run --network="host" --rm -it -u $(id -u):$(id -g) linkchecker/linkchecker --verbose http://localhost:8765/codewind/
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
