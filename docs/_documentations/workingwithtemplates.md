---
layout: docs
title: Working with templates
description: Working with templates
keywords: template, project, projects, develop, development, language, languages, build, custom, layout, sample, dockerfile, docker, code, python, go, java, node, yaml, adding development languages, adding sample projects
duration: 1 minute
permalink: workingwithtemplates
type: document
order: 5
parent: usingmicroclimate
---

# Working with templates

Beginning with Microclimate Version 18.09, you can add more development languages and sample projects by adding Microclimate extensions, called templates. These templates appear as new language and project types within the Microclimate user interface. You can code and develop in languages of your choice and provide sample projects that are suited to your environment.

Microclimate templates are stored in the `microclimate-workspace/.extensions` directory. Templates for Python and Go languages and for additional Java and Node.js sample projects are already included in Microclimate, and you can refer to those as examples.

You can create templates in one of two ways: you can create them using the template wizard, or you can create them manually. Using the wizard is easier if your project uses one of the supported languages, as shown in the following instructions.

## Prerequisites
- You need your sample project code, either on your local disk or in a public GitHub repository.
- The sample must include a Dockerfile, and you must be able to build and run it in Docker.

## Creating a template using the template wizard

To create a template using the wizard:

1. In the Microclimate header, click **Templates**.
2. Click **Create a new template**.
3. Enter a unique name and a description for the template.
4. If you have one or more compatible projects in your workspace, complete the following steps to create the template from one of those projects:
- Select the **Existing local project** radio button.
- Select the project from which you want to create the template.
- Click **Create**.
5. Alternatively, complete the following steps to create a template from a public Git repository:
- Select the **Public Git repository URL** radio button.
- Enter the repository URL, for example, `https://github.com/username/reponame`.
- Change the **Branch** value if necessary.
- Select the **Language**. Options available are Java, Node.js, Swift, Python, and Go. If your project uses a different language, [create the template manually](#creating-a-template-manually).
- A **Build type** is selected for you based on the chosen language. Select a different build type if necessary.
- A default **Application port** value is entered for you based on the chosen build type. Enter a different value if necessary.
- Click **Create**.

## Creating a template manually

To make your own template:

1. Create a `microclimate.yaml` file to provide the specification for your sample project. See the [format specification of the microclimate.yaml file](#format-specification-of-the-microclimateyaml-file) along with the example.

2. Your `microclimate.yaml` file needs to be placed in a new directory within the `microclimate-workspace/.extensions` directory.
  * The directory name must match the value you provide for the `extensionID` field in your `microclimate.yaml` file.
  * If you are providing sample project code from your local disk rather than in a GitHub repository, include the project code in the same directory. In the `microclimate.yaml` file, set the `localpath` value with a period.

3. If you are running Microclimate in IBM Cloud Private, you can use `kubectl` to upload your template directory, which contains `microclimate.yaml`:

`kubectl cp <your template directory> <namespace>/<ibm-microclimate pod>:microclimate-workspace/<icp-username>/.extensions`

**Note:**
- The `<your-template-directory>` directory must end in a forward slash (/) so that the `kubectl` command performs a recursive directory copy.
- The `extensions` directory in the root of the file system for the `ibm-microclimate` pod contains only the templates that Microclimate supplies. Place your new template in the `microclimate-workspace/<icp-username>/.extensions` directory as previously described.
- In addition to the provided language options, you can type in your own language. The manually added language will then be included as an option in the template wizard.

4. If you are running in a local installation, restart Microclimate. If you are running in IBM Cloud Private, restart the `ibm-microclimate` pod. After you restart, your template appears as a selectable project type when you create a new project.

## Format specification of the microclimate.yaml file
The following code is an example `microclimate.yaml` file for the [Go language template](https://github.com/microclimate-dev2ops/microclimateGoTemplate) as supplied in the `microclimate-workspace/.extensions/templateGoExample` directory.
```yaml
# extensionId must match the directory name, repository name, and chart/ directory
extensionId: templateGoExample
buildType: docker
# Project language to display in the Microclimate UI
language: go
# Must be "template"
creationType: template
info:
  # Customize these to your liking
  provider: IBM
  version: 0.0.1
userInterface:
  # Template label to display in the Microclimate UI
  label: Go sample template
  # Description of the template project
  description: Sample microservice for simple Go app
template:
  # Link to the GitHub repo, if your source is in GitHub
  giturl: https://github.com/microclimate-dev2ops/microclimateGoTemplate
  # Git branch to clone new projects from
  gitbranch: master
  # Path to your project's root directory relative to this file
  # Ignored if giturl and gitbranch are set above
  localpath: .
application:
  # Application's HTTP port
  port: 8000
  # The application'  s "root path", default is "/"
  # Microclimate will ping this endpoint to determine when your app is running
  contextroot: /my-root-endpoint
```

## Limitations
Monitoring is unavailable for projects created from a template.
