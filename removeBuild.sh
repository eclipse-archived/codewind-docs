#!/bin/sh

# Shut down apache
echo "Shutting down apache server..."
docker stop my-apache-app >/dev/null 2>&1

echo "Removing apache container..."
docker container rm my-apache-app >/dev/null 2>&1