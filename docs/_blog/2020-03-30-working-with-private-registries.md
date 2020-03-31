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

In this blog entry we will explore working with private `npm` registries and private `Maven` repositories in Codewind. Most developers should already be familiar with how to configure their enviroment to access private servers, but if you need a refresher, take a look at the [NPM documentation](https://docs.npmjs.com/configuring-npm/npmrc.html) or [Maven documentation](https://maven.apache.org/settings.html#Servers) on the steps involved. If you happen to be building your application by Docker (and who isn't these days?), then there is an added layer of complexity with the setup, such as making the configuration avaiable to the Docker build while ensuring you do not leak any sensitive data--your server username and password--in the final Docker image. Fortunately, Codewind provides mechanisms and project templates that makes this process simpler. Let's get started!

### A Node.js Example

The example we are using here is a Codewind project created using the Node.js Express project template. If you open the application and navigate to its `/codewind` endpoint, you will see a greeting from the application:

![image of Hey there, this is codewind saying hi and thanks for using me](images/blog/privateregnode01.png){:width="500px"}
*Hey there, this is codewind saying hi and thanks for using me*
{:style="text-align: center;"}

The message looks pretty bland doesn't it? Well, we can spice it up using a special package that happens to be hosted on a private NPM registry. First, configure the credentials for the registry by putting the following lines into the `~/.npmrc` configuration file:

```properties
@makandre:registry=https://npm.pkg.github.com/makandre
//npm.pkg.github.com/:_authToken=2605ca1a983f27a8cdc8b1e624d98a1712016913
```

Then in a terminal window, install the package to the project:

```bash
cwNodeProj$ npm install @makandre/samplepkg --save
```

Back in Codewind, modify `cwNodeProj/server/routers/codewind.js` to use the package we just installed:

```js
const express = require('express');
const hello = require('@makandre/samplepkg'); // add require here

module.exports = function (app) {
  const router = express.Router();

  router.get('/', function (req, res, next) {
    // replace "Hey there" with a call to hello()
    const stringToReturn = hello() + ", this is codewind saying hi and thanks for using me"
    res.status(200).send(stringToReturn);
  });

  app.use('/codewind', router);
}
```


### A Java Example
