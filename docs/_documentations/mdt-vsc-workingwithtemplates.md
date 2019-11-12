---
layout: docs
title: Working with templates
description: Working with templates
keywords: getting started, setting up, projects, update, help, Theia, test, edit, Theia editor, using own IDE, empty page, refresh, credentials, default editor, Node.js profiling support, code highlighting, JavaScript file, template source
duration: 1 minute
permalink: mdt-vsc-workingwithtemplates
type: document
order: 8
parent: usingcodewind
---

# Working with templates

Codewind gives you the flexibility to code and develop in languages of your choice by using templates. Templates make application development easier by providing a structure and boilerplate code, or framework, to help you start a new project. Templates appear as a new language and project type within the Codewind user interface. 

When you create a new project, you can choose from the default set of templates available in Codewind or you can choose a template source of your own. You can add more development languages and sample projects by adding new templates. 

## Managing templates

Template management in Codewind is provided by the **Template Source Manager**. To open the **Template Source Manager**, right-click **Local**, and then click **Manage Template Sources**. The **Template Source Manager** appears. 

Codewind templates are stored in the [codewind-resources/codewind-templates](https://github.com/codewind-resources/codewind-templates) GitHub repository. Standard Codewind Templates, the default set of templates from Kabanero Collections, and Appsody Stacks to develop applications with sharable technology stacks, are already included in Codewind and you can refer to those as examples.

Use the **Template Source Manager** to perform the following actions:
1. To add a new template source to the table, click **Add new**. For more information, see [Adding your own template sources to Codewind](#adding-your-own-template-sources-to-codewind).
2. To remove non-default template sources, click the trash icon. 
3. To enable a template source to have its templates appear in the **Create Project** wizard so that projects of that style can be added to Codewind, toggle the `Enabled` slide to on. For example, enable at least one Appsody-style source before trying to add an Appsody project.
4. To disable a set of templates so they do not appear in the **Create Project** wizard, toggle the `Enabled` slide to off.

## Adding your own template sources to Codewind

Add your own template sources to use Codewind with the framework of your choice. 
1. Ensure your template source has an `index.json` file containing information about your new templates in the same format as, for example, [https://github.com/kabanero-io/codewind-templates/blob/master/devfiles/index.json](https://github.com/kabanero-io/codewind-templates/blob/master/devfiles/index.json).
2. In the **Template Source Manager**, click **Add New**.
5. Enter the URL to your template source's index file, and press `Enter` to confirm. 
