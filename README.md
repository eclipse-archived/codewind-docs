# codewind-docs
Stores files to be part of the Eclipse Codewind landing and documentation pages. 

* This repository is a staging environment for creating the live Eclipse Codewind website.
* The live website is located at [https://www.eclipse.org/codewind](https://www.eclipse.org/codewind).
* The live website repository is at [https://git.eclipse.org/c/www.eclipse.org/codewind.git/](https://git.eclipse.org/c/www.eclipse.org/codewind.git/). The files from this repository are commited to the website repository. This repository contains `.md` documentation files that are transformed into HTML files. As a result, this repository does not contain the same files as the website repository.

# Landing pages UI repo
Store any pages to be part of the landing pages in the `docs/_documentations` folder.

## Viewing the landing pages on your local machine
View your changes before creating a pull request so you can fix problems before the changes are merged. Each time you merge or push to GitHub, GitHub runs Jekyll.

Prerequisites:
* Install Docker and make sure the Docker daemon is running.

1. Run the following command: `./serve.sh`.
2. View the page with this URL: `http://localhost:4321/codewind/`.
3. Run the `./build.sh` command to check broken links.

## Running the build locally
Prerequisites:
* Install Docker and make sure the Docker daemon is running.

1. Run the following command: `./build.sh`.
2. The HTML site content is generated in the `docs/_site/codewind` folder.
3. Check the script result and make sure there are no broken links.

## Pushing to the landing page
See [Publishing.md](https://github.com/eclipse/codewind-docs/blob/master/Publishing.md) for instructions on publishing the landing pages.

## Assigning an issue
TBD

## Creating a backup
TBD

## Updating the docs
TBD

# Developer guide to the landing pages
The landing page is built on [Jekyll](https://jekyllrb.com/). The Jekyll templates, config, and documents are in the `docs` folder.

## Files in the `docs` folder
* `_data/docstoc.yml` - The config file for the Docs tab.
* `_data/newstoc.yml` - The config file for the News tab.
* `_documentations` - The Markdown files for the Codewind docs.
* `_includes` - Common Jekyll template snippets that are included in Jekyll templates, such as headers and footers.
* `_layouts/docs-dynamic.html` - The file to dynamically generate the Docs tab. Do not edit.
* `_layout/docs.html` - Jekyll template for docs pages.
* `_layout/landing.html` - Jekyll template for the homepage page.
* `_layout/news.html` - Jekyll template for news pages.
* `_layout/newsredirect.html` - Jekyll template for the latest news page.
* `_news` - Folder that contains release news. The latest is always `news.md`. Use the template `_layout/newsredirect.html`.
* `_site` - Folder that contains the generated site HTML.  
* `css` - CSS styles for the site.
* `dist` - The folder that contains some of the static images.
* `images` - Also contains some of the docs static images. We need to split images into two folders, one for images in any document created by the documentation team and another for images on the landing page. See issue https://github.com/eclipse/codewind/issues/1883.
* `js/docs.js` - Docs JavaScript.
* `js/index.js` - Homepage JavaScript.
* `js/jquery.matchHeight-min.js` - JavaScript library to match div heights on the homepage.
* `_config.yml` - Jekyll configuration file.
* `Gemfile` - The Gemfile that installs the [jekyll-last-modified-at](https://github.com/gjtorikian/jekyll-last-modified-at) plug-in to display `last updated on` on each doc page.
* `index.html` - The landing page homepage.

The `_includes` folder has two header files. Use the `header.html` file in the `landing.html` template, which is for the homepage only. Use the `header-fixedtop.html` in the `docs.html` template, which is for pages in the News and Docs tabs, to maintain a fixed header bar.

Steven Hung (@sghung) has permission to update the production page. Run `./build.sh` to generate the HTML files in the `_site` folder.

## Files in the root folder
* `serve.sh` - Enter `./serve.sh` to launch the landing page on localhost. Requires Docker.
* `build.sh` - Enter `./build.sh` to generate the site HTML files and perform 404 checks.
* `Publishing.md` - Instructions for launching the site on localhost and publishing to a production server.

## Q and A
Q: If we need to add another level of child topics in the documentation table of contents, do we need to make a code change? Does the dynamic table of contents allow for many child topics?
A: Edit the `_data/docstoc.yml` file.
- Also, topics have a limit to how deeply they can be nested.
- For example, if you have a **Parent topic** and a **First level child topic** nested in the parent, and then you have another **Second level child topic** nested in the first level child topic, the second level child topic cannot have its own child topics.
- If you attempt to add more nested child topics, when you merge the changes and view them on the landing pages Docs tab, the **Second level child topic** plus all its children appear at the same level, and the **Second level child topic** links out to the main homepage if you try to click it.

Q: Does the `newsredirect.html` file pick up the first entry in `newstoc` config file? 
A: Yes, this is in the template: `{% assign entry = site.data.newstoc | first %}`

Q: Quite a few places remove `.html`. What is that logic for? We had issues with `.html` before, but all our pages appear to end with `.html`.
A: When we define the URL in the `.md` file, we omit the `.html` extension. When the site is being built, it automatically adds an `.html` extension to the file. In the config file, we have `.html` added to the link. So when we compare the URL in the templates, we need to remove the `.html` extension.

Q: How does Jekyll pick up the folders with underscores, such as `_data` and `_layouts`? Is it automatic? Does Jekyll copy all folders to the generated `_site` folder?
A: Yes, they are automatically picked up by Jekyll when the the site is being built. These folders are used only for building the site. They are not used on the production server. We need only to publish files in `_site` to the production server.

## Reference
* https://jekyllrb.com/
* https://jekyllrb.com/docs/liquid/
* https://bundler.io/gemfile.html
* https://www.ostechnix.com/a-beginners-guide-to-cron-jobs/
