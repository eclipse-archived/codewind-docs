
# Temporary repo for Codewind landing page. DO NOT MERGE TO Microclimate LANDING PAGE!

Once the server is launched you can view your changes online by visiting `http://localhost:4321/codewind/<link>`

The `<link>` is in your md file.

Example: in `clicommands.md` file, line 7 is `permalink: clicommands`, to view this page in browser, use this url:

`http://localhost:4321/clicommands.html`


# codewind-docs
This repo contains the landing page of Eclipse Codewind project.

# Landing Pages UI repo
Store any pages to be part of the landing pages in the `docs/_documentations` folder.

## View the landing pages on your local machine
View your changes before creating a pull request so you can fix problems before the changes are merged. Each time you merge or push to GitHub, GitHub runs Jekyll.

Prerequisites:
* Install Docker and make sure Docker daemon is running.

1. Run the following command: `./serve.sh`.
2. View the page with this URL: `http://localhost:4321/codewind/`.

## Run the build locally

Prerequisites:
* Install Docker and make sure Docker daemon is running.

1. Run the following command: `./build.sh`.
2. The HTML site content are generated in `docs/_site` folder.

## Push to the external landing page

TBD

## To assign an issue

TBD

## To create a backup

TBD

## To update the docs

TBD