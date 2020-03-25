---
layout: docs
title: Using packages from private registries and repositories
description: Using packages from private registries and repositories
keywords: install, installing, IntelliJ, Eclipse, Codewind, IDE, plugin, plug-in, settings, creating, project, projects, template, code change, edit, edits, application, removing, private, registry, registries, repository, repositories, package, packages
duration: 5 minute
permalink: private-registries
type: document
---

# Using packages from private registries and repositories

There are times when packages your application uses must be installed from an external private registry or one hosted by your organization. The 2 private registry types supported in Codewind are NPM registries for Node.js projects and Maven repositories for Java projects.

## Using packages from private NPM registries

1. Configure your local system to access the private registry. Typically, this is done by adding the registry configuration and credentials to your profile's `.npmrc` file. Refer to the [NPM documentation](https://docs.npmjs.com/configuring-npm/npmrc.html) for more information. **Note:** you should not put the `.npmrc` file inside your project as it contains sensitive data.

2. Add a [reference](referencing-files.html) to the `.npmrc` file in your project.

3. You can now install packages from the configured registry to your project locally (e.g. `npm install @myorg/mypackage`). When Codewind builds the Docker image for your applicaiton, it will be able to pull down the packages from the private registry you have configured.

## Using packages from private Maven repositories

1. Configure your local system to access the private repository. Typically, this is done by adding the repository server credentials to your profile's `settings.xml` file. Refer to the [Maven documentation](https://maven.apache.org/settings.html#Servers) for more information. **Note:** you should not put the `settings.xml` file inside your project as it contains sensitive data.

2. Add a [reference](referencing-files.html) to the `settings.xml` file in your project.

3. You can now modify your `pom.xml` file and add to your `<repositories>`/`<pluginRepositories>` elements the appropriate configuration, as well as add to your `<dependencies>` element references to the packages your application requires.  When Codewind builds the Docker image for your application, it will be able to pull down the packages from the private repository you have configured.

## Supported project types

The techniques described previously can be used in these project types:

- Lagom Java
- Node.js Express
- Open Liberty
