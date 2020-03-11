#!/bin/sh
echo "Ensure Codewind docs is running on port 4321"

docker run --network="host" --rm -it linkchecker/linkchecker http://0.0.0.0:4321/codewind/