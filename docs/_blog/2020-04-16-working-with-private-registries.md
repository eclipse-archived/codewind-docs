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

Need a specific capability in your application? Chances are there's a code library or package out there that already does the job. Such is the norm for modern day application development, which is part writing your own code and part reusing code pulled from a registry or repository somewhere.

In most cases, these 3rd-party bits of code are hosted on well-known public registries and repositories, and build and package tools such as `Maven` and `npm` helps you manage these dependencies and makes pulling the code down for use simple. However, if you work in a medium or large-sized organization, you may be required to pull 3rd-party code from private servers within the organization--it's also simple to do, as long as you have proper configuration in place.

### Working with Private Registries in Codewind

I assume most developers already know how to configure their enviroment to pull from private servers. If not, take a look at the [Maven documentation](https://maven.apache.org/settings.html#Servers) or [NPM documentation](https://docs.npmjs.com/configuring-npm/npmrc.html) to familiarize yourself with the steps involved. If you happen to be building your application by Docker (and who isn't these days?), then there is an added layer of complexity with the setup, such as making the configuration avaiable to the Docker build while ensuring you do not leak any sensitive data--your server username and password--in the final Docker image. Fortunately, Codewind provides mechanisms and project templates that makes this process simpler, and in this blog, I will show you step-by-step how to use code from private servers in your Codewind projects.

### A Java Example


### A Node.js Example
