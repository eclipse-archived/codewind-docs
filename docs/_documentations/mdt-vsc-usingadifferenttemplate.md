---
layout: docs
title: Configuring template sources
description: Configuring template sources
keywords: getting started, setting up, projects, update, help, Theia, test, edit, Theia editor, using own IDE, empty page, refresh, credentials, default editor, Node.js profiling support, code highlighting, JavaScript file, template source
duration: 1 minute
permalink: mdt-vsc-usingadifferenttemplate
type: document
order: 8
parent: usingcodewind
---

# Configuring template sources

When you create a new project, you can choose from the default set of templates available, or you can choose from a template source of your own. Use Codewind to manage templates. Templates can make application development easier by providing a structure and boilerplate code to help get a new project started.

- To open the Template Source Manager, right-click **Projects (Local)**, and then click **Manage Template Sources**. The **Template Source Manager** appears. 
- You can perform the following actions in the **Template Source Manager**:
  - Add a new template source to the table.
  - Remove non-default sources.
  - Enable a source to make that source template appear in the **Create Project** wizard.
  - Disable a source to remove that source template from the **Create Project** wizard.

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
3. Update the `codewind-templates/devfiles/index.json` file with information about your new template. Include the following information:

    `"displayName":"The name of the framework that the template applies to",`
    `"description":"A description of the template",`
    `"language":"The programming language used for the template",`
    `"projectType":"",`
    `"location":"The GitHub URL of the folder where your template resides",`
    `"links": {"self":"The URL of the devfile.yaml of your template" }`

### Adding your template repository to Codewind

To add your template repository to Codewind:
1. In the Codewind view project tree, right-click **Projects (Local)**. A menu appears.
2. Click **Manage Template Sources**. The **Template Source Manager** appears.
3. Click **Add New**.
4. Enter the URL to your template source's index file, and press `Enter` to confirm, or `Escape` to cancel. 
