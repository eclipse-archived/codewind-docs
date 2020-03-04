@echo off 
echo Ensure Codewind docs is running on port 4321
docker run --network="host" --rm -it linkchecker/linkchecker http://localhost:4321/codewind/