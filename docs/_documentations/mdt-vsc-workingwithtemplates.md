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

Codewind templates are stored in the [codewind-resources/codewind-templates](https://github.com/codewind-resources/codewind-templates) repository. Standard Codewind Templates, the default set of templates from Kabanero Collections,  and Appsody Stacks to develop applications with sharable technology stacks, are already included in Codewind and you can refer to those as examples.

Use the **Template Source Manager** to perform the following actions:
1. To add a new template source to the table, click `Add new`. For more information, see [Adding your own templates](#adding-your-own-templates)
2. To remove non-default template sources, click delete. 
3. To enable a set of templates so they appear in the **Create Project** wizard, toggle the `Enabled` slide to on. 
4. To disable a set of templates so they do not appear in the **Create Project** wizard, toggle the `Enabled` slide to off.

## Adding your own templates

Add your own template to use Codewind with the framework of your choice. This is a two-step process comprising the following steps:
1. Configure your template repository.
2. Add your template repository to Codewind. 

### Configuring your template repository

To configure your template repository:
1. Create a folder for your template in the `codewind-templates/devfiles` repository. Include the name of the framework in the name of the new folder.
2. Add `devfile.yaml` and `meta.yaml` files.
    - The devfile.yaml file needs to include...
    - The meta.yaml file needs to include...
3. Update the `codewind-templates/devfiles/index.json` file with information about your new template, for example, see [https://github.com/kabanero-io/codewind-templates/blob/master/devfiles/index.json](https://github.com/kabanero-io/codewind-templates/blob/master/devfiles/index.json).

### Adding your template repository to Codewind

To add your template repository to Codewind:
1. In the Codewind view project tree, right-click **Local**. A menu appears.
2. Click **Manage Template Sources**. The **Template Source Manager** appears.
3. Click **Add New**.
4. Enter the URL to your template source's index file, and press `Enter` to confirm, or `Escape` to cancel. 
