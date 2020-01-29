---
layout: docs
title: Working with templates
description: Working with templates
keywords: getting started, setting up, projects, update, help, Theia, test, edit, Theia editor, using own IDE, empty page, refresh, credentials, default editor, Node.js profiling support, code highlighting, JavaScript file, template source
duration: 1 minute
permalink: workingwithtemplates
type: document
order: 8
parent: usingcodewind
---

# Working with templates

Codewind gives you the flexibility to code and develop in languages of your choice by using templates. Templates make application development easier by providing a structure and boilerplate code, or framework, to help you start a new project. Templates appear as a new language and project type within the Codewind user interface. 

When you create a new project, you can choose from the default set of templates available in Codewind, or you can choose a template source of your own. You can add more development languages and sample projects by adding new templates. 

Codewind provides pre-configured, Docker-containerized project templates covering several languages including [Node.js](https://nodejs.dev/), [Java](https://www.java.com/), [Python](https://www.python.org/) and [Swift](https://swift.org/), and several frameworks such as [Express](https://expressjs.com/), [Spring Boot](https://spring.io/projects/spring-boot) and [Open Liberty](https://openliberty.io/). [Quickly create and deploy microservices](https://www.youtube.com/watch?v=zKMggp10gq4&t=12s) in languages and frameworks that you're familiar with. You can easily modify these pre-configured projects to develop your customised microservices.

## Managing templates

Template management in Codewind is provided by the **Template Source Manager**. To open the **Template Source Manager**, right-click **Local** then **Manage Template Sources**. The **Template Source Manager** appears. 

Codewind templates are stored in the [codewind-resources/codewind-templates](https://github.com/codewind-resources/codewind-templates)
GitHub repository. Three examples are included in Codewind for your reference: 
* Standard Codewind Templates.
* Default templates from Kabanero Collections.
* Appsody Stacks to develop applications with sharable technology stacks. 

Use the **Template Source Manager** to perform the following actions:
1. To add a new template source to the table, click **Add new**. For more information, see [Adding your own template sources to Codewind](#adding-your-own-template-sources-to-codewind).
2. To remove non-default template sources, click the trash icon. 
3. Toggle the **Enabled** slide to **On** so template source templates appear in the **Create Project** wizard. 
    * Use template source templates to add style projects to Codewind. 
    * For example, before adding an Appsody project, enable at least one Appsody-style template. 
4. To disable a set of templates so they do not appear in the **Create Project** wizard, toggle the **Enabled** slide to **Off**.

## Adding your own template sources to Codewind

Add your own template sources to use Codewind with the framework of your choice. 
1. Ensure your template source has an `index.json` file containing information about your new templates. Follow the same format as the `index.json` file found in [https://github.com/kabanero-io/codewind-templates/blob/master/devfiles/index.json](https://github.com/kabanero-io/codewind-templates/blob/master/devfiles/index.json).
2. In the **Template Source Manager**, click **Add New**.
3. Enter the URL to your template source's index file and click `Enter` to confirm. 
