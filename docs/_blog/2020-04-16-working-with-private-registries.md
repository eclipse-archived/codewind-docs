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

In most cases, these 3rd-party bits of code are hosted on well-known public registries and repositories, and build and package tools such as `npm` and `Maven` helps you manage these dependencies and makes pulling the code down for use simple. However, if you work in a medium or large-sized organization, you may be required to pull 3rd-party code from private servers within the organization--it's also simple to do, as long as you have proper configuration in place.

### Working with Private Registries in Codewind

In this blog entry let's explore working with private `npm` registries and private `Maven` repositories in Codewind. Most developers should already be familiar with how to configure their enviroment to access private servers, but if you need a refresher, take a look at the [NPM documentation](https://docs.npmjs.com/configuring-npm/npmrc.html) or [Maven documentation](https://maven.apache.org/settings.html#Servers) on the steps involved. If you happen to be building your application by Docker (and who isn't these days?), then there is an added layer of complexity with the setup, such as making the configuration avaiable to the Docker build while ensuring you do not leak any sensitive data--your server username and password--in the final Docker image. Fortunately, Codewind provides mechanisms and project templates that makes this process simpler.

### A Node.js Example

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
cwNodeProj$ npm install @makandre/samplepkg --save
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

All is set so I force a full project build in Codewind--right-click project in Codewind view and select *Build*--and... the build fails. I check the build log and see the following:

```bash
npm ERR! code E404
npm ERR! 404 Not Found: @makandre/samplepkg@^1.0.0
```
{:style="margin: 30px;"}

To be continued...

### A Java Example
