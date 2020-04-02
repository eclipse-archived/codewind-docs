---
layout: post
title: "Working with Private Registries"
categories: blog
author_picture: images/blog/author_icon_andrew_mak.jpeg
author_url: 
author: Andrew Mak
blog_description: "Need a specific capability in your application? Chances are there's a code library or package out there that already does the job."
permalink: working-with-private-registries
duration: 10 minutes
tags: [private, registry, registries, repository, repositories]
---

Need a specific capability in your application? Chances are there's a code library or package out there that already does the job. Such is the norm for modern-day application development, which is part writing your own code and part reusing code pulled from a registry or repository somewhere.

In most cases, these 3rd-party bits of code are hosted on well-known public registries and repositories, and build and package tools such as `npm` and `mvn` (Maven) helps you manage these dependencies and makes pulling the code down for use simple. However, if you work in a medium or large-sized organization, you may be required to pull 3rd-party code from private servers within the organization--it's also simple to do, as long as you have proper configuration in place.

### Working with Private Registries in Codewind

In this blog entry let's explore working with private NPM registries and private Maven repositories in Codewind. Most developers should already be familiar with how to configure their environment to access private servers, but if you need a refresher, take a look at the [NPM documentation](https://docs.npmjs.com/configuring-npm/npmrc.html) or [Maven documentation](https://maven.apache.org/settings.html#Servers) on the steps involved. If you happen to be building your application by Docker (and who isn't these days?), then there is an added layer of complexity with the setup, such as making the configuration available to the Docker build while ensuring you do not leak any sensitive data--your server username and password--in the final Docker image. Fortunately, Codewind provides mechanisms and project templates that makes this process simpler.

### A Node.js NPM Example

I'm starting with a Codewind project created using the Node.js Express project template. When I open the application and navigate to its `/codewind` endpoint, I'm greeted with:

![image of Hey there, this is codewind saying hi and thanks for using me](images/blog/privateregnode01.png){:width="500px"}
*Hey there, this is codewind saying hi and thanks for using me*
{:style="margin: 30px; text-align: center;"}

The message looks pretty bland doesn't it? Luckily, I happen to have a special package hosted on my private GitHub NPM registry that I can use to give this message some flair. First, I'll configure the credentials for the registry in my `~/.npmrc` configuration file:

```properties
@makandre:registry=https://npm.pkg.github.com/makandre
//npm.pkg.github.com/:_authToken=****************************************
```
{:style="margin: 30px;"}

Now I can install the package to my project:

```bash
cwNodeProj$ npm install @makandre/samplepkg
```
{:style="margin: 30px;"}

And now to use the package in the `cwNodeProj/server/routers/codewind.js` file:

```js
const express = require('express');
const hello = require('@makandre/samplepkg'); // added require here

module.exports = function (app) {
  const router = express.Router();

  router.get('/', function (req, res, next) {
    // replaced "Hey there" with a call to hello()
    const stringToReturn = hello() + ", this is codewind saying hi and thanks for using me"
    res.status(200).send(stringToReturn);
  });

  app.use('/codewind', router);
}
```
{:style="margin: 30px;"}

All is set so I force a full project build in Codewind--right-click project in Codewind view and select *Build*... and the build fails. I check the build log and see the following:

```bash
npm ERR! code E404
npm ERR! 404 Not Found: @makandre/samplepkg@^1.0.0
```
{:style="margin: 30px;"}

So what happened? Well it's true I had configured everything correctly on my system to pull from the private registry. However, that's just for my local environment. When Codewind builds the project into a Docker image, the Docker build does not have access to the same configuration. This can be easily remedied by adding a [reference](referencing-files.html) to the `~/.npmrc` file into my project--using a reference keeps sensitive information out of my project where it may get accidentally committed to source control. After adding the reference, my project built successfully and it shows the updated message:

*Hello there, general Kenobi, this is codewind saying hi and thanks for using me*
{:style="margin: 30px; text-align: center;"}

Much better.

At this point, I'd like to highlight the structure of the `Dockerfile` with respect to what is actually happening with the `.npmrc` file. The relevant lines in the `Dockerfile` are:

```Dockerfile
# Install npm production packages
COPY package.json .npmrc ./
RUN npm install --production

# Copy application source
COPY . ./
RUN rm .npmrc
```
{:style="margin: 30px;"}

This is the last piece of the puzzle--as you can see, the `.npmrc` file is copied to the Docker build for the `npm install` and removed afterwards. The build is also a multi-stage one, which ensures the `.npmrc` file is not leaked in an intermediate layer of the final Docker image. **Note:** if you are trying this exercise yourself, make sure you have the latest multi-stage version of the `Dockerfile` [here](https://github.com/codewind-resources/nodeExpressTemplate/blob/master/Dockerfile).

### A Java Maven Example

The steps to configure and pull from a private Maven repository for Java projects is very similar to the NPM example I've described, so I won't go into too much detail here. Once again, I start by setting up the proper credentials to access the private server; for Maven, that means adding a `server` element to my `~/.m2/settings.xml` file:

```xml
<server>
  <id>github</id>
  <username>makandre</username>
  <password>****************************************</password>
</server>
```
{:style="margin: 30px;"}

And now to add the repository location and dependency I need to my project's `pom.xml`:

```xml

```
{:style="margin: 30px;"}

### More Information

- Working with private registries in the Codewind [documentation](private-registries.html)
