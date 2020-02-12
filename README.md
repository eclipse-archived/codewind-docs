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
2. View the page with this URL: `http://localhost:4321/codewind/`.
3. Run `./build.sh` command to check broken links.

## Run the build locally

Prerequisites:
* Install Docker and make sure Docker daemon is running.

1. Run the following command: `./build.sh`.
2. The HTML site content are generated in `docs/_site/codewind` folder.
3. Check the script result, make sure there is no broken links.

## Push to the external landing page

TBD

## To assign an issue

TBD

## To create a backup

TBD

## To update the docs

TBD

# Code developer's guide to the Landing Pages
The landing page is built on [jekyll](https://jekyllrb.com/).  The jekyll templates, config and documents are under `docs` folder.

## Files in `docs` folder
* `_data/docstoc.yml` - This is the config file for docs' navigation menu.
* `_data/newstoc.yml` - This is the config file for news' navigation menu.
* `_documentations` - The markdown files of the codewind docs.  ID team manages this folder.
* `_includes` - The common jekyll template snippets which are included in jekyll templates, such as headers and footers.
* `_layouts/docs-dynamic.html` - Not used.  This is for dynamically generates the docs navigation menu.
* `_layout/docs.html` - Jekyll template for docs page.
* `_layout/landing.html` - Jekyll template for homepage page.
* `_layout/news.html` - Jekyll template for news page.
* `_layout/newsredirect.html` - Jekyll template for latest news page.
* `_news` - Folder contains release news.  Latest is always news.md (use template `_layout/newsredirect.html`).
* `_site` - Folder contains the generated site html.  
* `css` - CSS Styles of the site.
* `dist` - The folder contains some of the static images
* `images` - Also contains some of the docs static images.  We need to split images into two folders, one is the images that for any documents created by ID team, another one is for landing page. There is a issue opened for this: https://github.com/eclipse/codewind/issues/1883
* `js/docs.js` - Docs javascript.
* `js/index.js` - Homepage javascript
* `js/jquery.matchHeight-min.js` Javascript lib to match div heights on home page.
* `_config.yml` Jekyll configuration file
* `Gemfile` - Gemfile.  We need to install plugin [jekyll-last-modified-at](https://github.com/gjtorikian/jekyll-last-modified-at) to display `last updated on` on each docs.
* `index.html` - The landing page home page

There are two header files in `_includes` folder.  `header.html` is used in `landing.html` template, which is home page only.  `header-fixedtop.html` is used in `docs.html` template, which is for news and docs pages, because we wanted a fixed header bar.

Steven Hung has the permission to update the production page.  Run the above `build.sh` to generate the html files (in `_site` folder).  I have never done that (I don't have permission to update).

## Files in root folder

* `serve.sh` - Launch the landing page on local host.  Requires docker.
* `build.sh` - Generate the site html files, and perform 404 checks.
* `Publishing.md` - How to launch the site on local host and how to publish to production server.

## Q and A

Q: For the TOC, if we need to add another sub level, does that require code change? Or does the dynamic TOC allow for many children properties.
A: No, the template has to be modified.

Q: For the newsredirect.html, does it pick up the first entry in newstoc config file? 
A: Yes, as we have this in the template: `{% assign entry = site.data.newstoc | first %}`

Q: Quite a few places does remove: ".html" what is that logic for? I recall we had issues with .html before but all our pages appear to end with .html, so just wanted some clarification
A: When we define the url in MD file, we omit the `.html` extension.  When the site is being built it automatically adds `.html` extension to the file.  In the config file, we have `.html` added to the link.  So when we compare the url in the templates we will need to remove `.html` extension.

Q: The folders with underscores (e.g. _data, _layouts), how are they picked up by Jekyll? Is it automatic? Does Jekyll copy all folders to the generated _site folder?
A: Yes they are automatically picked up jekyll when the site is being built.  These folders are only used for building the site, and are not used on production server.  We only need to publish files in `_site` to production server.


## Reference

* https://jekyllrb.com/
* https://jekyllrb.com/docs/liquid/
* https://bundler.io/gemfile.html
* https://www.ostechnix.com/a-beginners-guide-to-cron-jobs/
