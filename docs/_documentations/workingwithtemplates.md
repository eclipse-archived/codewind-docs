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

Codewind provides preconfigured, containerized project templates covering several languages, including [Node.js](https://nodejs.dev/), [Java](https://www.java.com/), [Python](https://www.python.org/), and [Swift](https://swift.org/), and several frameworks, such as [Express](https://expressjs.com/), [Spring Boot](https://spring.io/projects/spring-boot), and [Open Liberty](https://openliberty.io/). [Quickly create and deploy microservices](https://www.youtube.com/watch?v=zKMggp10gq4&t=12s) in languages and frameworks that you're familiar with. You can easily modify these preconfigured projects to develop your customized microservices.

## Managing templates

Template management in Codewind is provided by the **Template Source Manager**. To open the **Template Source Manager**, right-click a Codewind connection, then **Manage Template Sources**. The **Template Source Manager** appears. 

- **Note:** **Template Source Manager** is the name used in VS Code. Eclipse uses the name **Manage Template Sources**.

Codewind templates are stored in the [codewind-resources/codewind-templates](https://github.com/codewind-resources/codewind-templates)
GitHub repository. Three examples are included in Codewind for your reference: 
* Standard Codewind Templates.
* Default templates from Kabanero Collections.
* Appsody Stacks to develop applications with sharable technology stacks. 

Use the **Template Source Manager** to perform the following actions:

1. To add a new template source to the table, click **Add New**. For more information, see [Adding your template sources to Codewind](#adding-your-template-sources-to-codewind).
2. **VSCode:** To remove non-default template sources, click the trash icon. 
   **Eclipse:** To remove non-default template sources, first make sure you are in the **Manage Template Sources** wizard. Select the non-default templates you want to remove. Then click the **Remove** button.
3. **VSCode:** Toggle the **Enabled** slide to **On** so template source templates appear in the **Create Project** wizard. 
   **Eclipse:** In the Manage Template Sources wizard, check the check boxes for the template sources you want to enable. Once done, click the OK button. You should see a notification in the bottom right saying **Updating Template Sources: (0%)**. Once that message disappears, it has successfully set your preferred template sources. 
   * Use template sources to add style projects to Codewind. 
   * For example, before adding an Appsody project, enable at least one Appsody-style template source. 
4. **VSCode:** To disable a set of templates so they do not appear in the **Create Project** wizard, toggle the **Enabled** slide to **Off**.
   **Eclipse:** In the Manage Template Sources, simply uncheck the template sources you want to disable, and then click OK. 

## Adding your template sources to Codewind

Add your template sources to use Codewind with the framework of your choice. 
1. Ensure your template source has an `index.json` file containing information about your new templates. Follow the same format as the `index.json` file found in [https://github.com/codewind-resources/codewind-templates/blob/master/devfiles/index.json](https://github.com/codewind-resources/codewind-templates/blob/master/devfiles/index.json).
2. **VSCode:** In the **Template Source Manager**, click **Add New**. 
   **Eclipse:** Right click on the connection in the Codewind Explorer view, and select **Manage Template Sources...**. Once the **Manage Template Sources** wizard pops up, click **Add...**.
3. **VSCode:** Enter the URL to your template source's index file and click `Enter` to confirm.
   **Eclipse:** Fill in the fields for URL, Name, and Description. Click the **OK** button once you are finished.

## Creating your own templates
1. Choose a GitHub repository to contain all of your new template sources.
   - Codewind uses [`codewind-templates/devfiles`](https://github.com/codewind-resources/codewind-templates/tree/master/devfiles).
2. Within this repository, create a folder for each template source.
   - For example, within the `devfiles` folder, Codewind has subfolders for template sources that include Go, MicroProfile, Lagom Java, and more.
3. Each template source folder needs a `devfile.yaml` file with the following information:
  ```
  apiVersion: <The version of the API that you use>
  metadata:
  name: <The name of your template>
  projects:
    - name: <The name of your project>
      source:
        type: git
        location: <"The GitHub URL of the template location">
  ```
4. In the same GitHub repository that you saved the template source folders, create an `index.json` file. In this file, add the following values for each of the templates that you want to work with in Codewind:
  ```
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
   - For an example `index.json` file, see the [`index-json` file](https://github.com/codewind-resources/codewind-templates/blob/master/devfiles/index.json) in the `codewind-templates` repository.
5. Clone the [`codewind-templates` repository](https://github.com/codewind-resources/codewind-templates).
