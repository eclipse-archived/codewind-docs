---
layout: docs
title: Working with templates
description: Working with templates
keywords: getting started, setting up, projects, update, help, Theia, test, edit, Theia editor, using own IDE, empty page, refresh, credentials, default editor, Node.js profiling support, code highlighting, JavaScript file, template source
duration: 1 minute
permalink: workingwithtemplates
type: document
---

# Working with templates

Use Codewind to code and develop in languages of your choice by using templates. Templates make application development easier by providing a structure and boilerplate code, or framework, to help you start a new project. Templates appear as a new language and project type within the Codewind user interface.

When you create a new project, choose from the default set of templates available in Codewind, or choose a template source of your own. Add more development languages and sample projects by adding new templates.

Codewind provides preconfigured, containerized project templates covering several languages, including [Node.js](https://nodejs.dev/), [Java](https://www.java.com/), [Python](https://www.python.org/), and [Swift](https://swift.org/) and several frameworks, such as [Express](https://expressjs.com/), [Spring Boot](https://spring.io/projects/spring-boot), and [Open Liberty](https://openliberty.io/). [Quickly create and deploy microservices](https://www.youtube.com/watch?v=zKMggp10gq4&t=12s) in languages and frameworks that you're familiar with. Easily modify these preconfigured projects to develop your customized microservices.

## Managing templates

The **Template Source Manager** provides template management in Codewind. To open the **Template Source Manager**, right-click a Codewind connection, then **Manage Template Sources**. The **Template Source Manager** appears.

- **Note:** **Template Source Manager** is the name used in VS Code. Eclipse uses the name **Manage Template Sources**.

Codewind templates are stored in the [codewind-resources/codewind-templates](https://github.com/codewind-resources/codewind-templates)
GitHub repository. Three examples are included in Codewind for your reference:
* Standard Codewind templates
* Default templates from Kabanero Collections
* Appsody stacks to develop applications with sharable technology stacks

Use the **Template Source Manager** to perform the following actions:

1. To add a new template source to the table, click **Add New**. For more information, see [Adding your template sources to Codewind](#adding-your-template-sources-to-codewind).
2. Remove non-default template sources.
   - **VS Code:** Click the trash icon.
   - **Eclipse:** First make sure you are in the **Manage Template Sources** wizard. Select the non-default templates you want to remove. Then click **Remove**.
3. Add templates to the wizard.
   - **VS Code:** Toggle the **Enabled** slide to **On** so template source templates appear in the **Create Project** wizard.
   - **Eclipse:** In the **Manage Template Sources** wizard, check the check boxes for the template sources you want to enable. After you're done, click **OK**. A notification appears that says, **Updating Template Sources: (0%)**. The message disappears after the wizard successfully sets your preferred template sources.
   - Use template sources to add style projects to Codewind.
   - For example, before adding an Appsody project, enable at least one Appsody-style template source.
4. Disable templates to prevent them from appearing in the wizard.
   - **VS Code:** To disable a set of templates so they do not appear in the **Create Project** wizard, toggle the **Enabled** slide to **Off**.
   - **Eclipse:** In **Manage Template Sources**, deselect the template sources you want to disable and click **OK**.

## Creating your own templates

Add your own template sources to use in the **Template Source Manager**. An application architect generally creates these templates.

- **Prerequisites:** Build and run templates that use languages and frameworks that are compatible with Codewind. Appsody, Maven, and Node.js styles built with Docker are supported.

1. Choose a GitHub repository to contain all of your new template sources.
   - Codewind uses [`codewind-templates/devfiles`](https://github.com/codewind-resources/codewind-templates/tree/master/devfiles).
2. Within this repository, create a folder for each template source.
   - For example, within the `devfiles` folder, Codewind has subfolders for template sources that include Go, MicroProfile, Lagom Java, and more.
3. Each template source folder needs a `devfile.yaml` file with the following information:

```yaml
apiVersion: <The version of the API that you use>
metadata:
  - name: <The name of your template>
projects:
  - name: <The name of your project>
    source:
      type: git
      location: <The GitHub URL of the template location>
```

4\. In the same GitHub repository where you saved the template source folders, create an `index.json` file. In this file, add the following values for each of the templates that you want to work with in Codewind:

```json
{
  "displayName":"<The name of your template>",
  "description":"<The description of your template>",
  "icon":"<The SVG graphic to be associated with your template>",
  "language":"<The programming language that your template is written in>",
  "projectType":"<The project type of your template>",
  "location":"<The Git repository where the template itself is located>",
  "links": {"self":"<The template devfile.yaml>" }
}
```

For an example `index.json` file, see the [`index-json` file](https://github.com/codewind-resources/codewind-templates/blob/master/devfiles/index.json) in the `codewind-templates` repository.

5\. To add the templates to Codewind, open your IDE and access the **Template Source Manager**.

## Adding your template sources to Codewind

Add your template sources to Codewind with the **Template Source Manager**.

1. Add the template.
   - **VS Code:** In the **Template Source Manager**, click **Add New**.
   - **Eclipse:** Right-click the connection in the Codewind Explorer view and select **Manage Template Sources...**. After the **Manage Template Sources** wizard appears, click **Add...**.
2. Enter the URL and any other information.
   - **VS Code:** Enter the URL to your template source `index` file and click **Enter** to confirm.
   - **Eclipse:** Fill in the fields for **URL**, **Name**, and **Description**. Click **OK** when you're done.
