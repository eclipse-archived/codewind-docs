# codewind-docs
Stores files to be part of the Eclipse Codewind landing and documentation pages. 

* This repository is a staging environment for creating the live Eclipse Codewind website
* The live website is located at [https://www.eclipse.org/codewind](https://www.eclipse.org/codewind)
* The live website repository is at: [https://git.eclipse.org/c/www.eclipse.org/codewind.git/](https://git.eclipse.org/c/www.eclipse.org/codewind.git/). The files from this repository will be commited to the live website repository. This repository will contain documentation files (MD files) that are transformed into HTML files. As a result, this repository will not contain the same files as the live website repository

# Landing Pages UI repo
Store any pages to be part of the landing pages in the `docs/_documentations` folder.

## View the landing pages on your local machine
View your changes before creating a pull request so you can fix problems before the changes are merged. Each time you merge or push to GitHub, GitHub runs Jekyll.

Prerequisites:
* Install Docker and make sure Docker daemon is running.

1. Run the following command: `./serve.sh`.
2. View the page with this URL: `http://localhost:4321`.

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