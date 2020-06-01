---
layout: docs
title: Developing with packages from private registries and repositories 
description: Developing with packages from private registries and repositories 
keywords: install, installing, IntelliJ, Eclipse, Codewind, IDE, plugin, plug-in, settings, creating, project, projects, template, code change, edit, edits, application, removing, private, registry, registries, repository, repositories, package, package 
duration: 5 minutes 
permalink: private-registries  
type: document 
---

# Developing with packages from private registries and repositories 

Packages, reusable pieces of software, help you build and reduce development time. Sometimes, the packages for your application must be installed from an external private registry or one hosted by your organization. Registries help you manage your code and dependencies. Codewind supports two private registry types: NPM registries for Node.js projects and Maven repositories for Java projects. 

## Developing with packages from private NPM registries 

1. Configure your local system to access the private registry. To do this, add the registry configuration and credentials to your profile's `.npmrc` file. For more information, refer to the [NPM documentation](https://docs.npmjs.com/configuring-npm/npmrc.html). 
    **Note:** you should not put the `.npmrc` file inside your project as it contains sensitive data.
2. Add a [reference](referencing-files.html) to the `.npmrc` file in your project.
3. Install packages from the configured registry to your project locally (e.g. `npm install @myorg/mypackage`). When Codewind builds the Docker image for your application, it pulls down the packages from the private registry you have configured.

## Developing with packages from private Maven repositories 

1. Configure your local system to access the private repository. To do this, add the repository server credentials to your profile's `settings.xml` file. For more information, refer to the [Maven documentation](https://maven.apache.org/settings.html#Servers). 
    **Note:** you should not put the `settings.xml` file inside your project as it contains sensitive data.
2. Add a [reference](referencing-files.html) to the `settings.xml` file in your project.
3. Modify your `pom.xml` file, add the appropriate configuration to your `<repositories>`/`<pluginRepositories>`, then add the packages your application requires to your `<dependencies>` references. When Codewind builds the Docker image for your application, it pulls down the packages from the private repository you have configured.

## Supported project types 

You can apply all the preceding instructions to these project types:

* Lagom Java
* Node.js Express
* Open Liberty
* Spring Boot
* WebSphere Liberty MicroProfile
 