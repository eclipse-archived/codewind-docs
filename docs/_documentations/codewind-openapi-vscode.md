---
layout: docs
title: Codewind OpenAPI Tools for VS Code
description: How to work with the OpenAPI tools in VS Code
keywords: install, run, open, import, show, restart, edit, build, logs, tools, eclipse, Codewind OpenAPI tools for VS Code
duration: 1 minute
permalink: open-api-tools-for-vscode
type: document
order: 30
---

# Codewind OpenAPI Tools for VS Code

The Codewind OpenAPI Tools for VS Code provides commands that invoke the OpenAPI Generator to create API clients, server stubs, and HTML documentation from OpenAPI definitions. The tools are integrated and customized to work with Codewind for VS Code, but they can also work without the Codewind extension.

## Prerequisites
- Install Docker before you run the generator. In VS Code, the plug-in pulls in the OpenAPI generator image from [Docker](https://github.com/OpenAPITools/openapi-generator#16---docker).

## Installing
1. Install [VS Code version 1.27 or later](https://code.visualstudio.com/download).
2. (OPTIONAL) Install Codewind for VS Code from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=IBM.codewind) or by searching for `Codewind` in the [VS Code Extensions view](https://code.visualstudio.com/docs/editor/extension-gallery#_browse-for-extensions).
3. This extension pulls the [OpenAPI Generator CLI Docker Image](https://github.com/OpenAPITools/openapi-generator#16---docker) and runs the OpenAPI Generator in a Docker container. Install Docker if necessary.
4. Install the Codewind OpenAPI Tools from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=IBM.codewind-openapi-tools) or by searching for `Codewind OpenAPI` in the [VS Code Extensions view](https://code.visualstudio.com/docs/editor/extension-gallery#_browse-for-extensions).

## Generating and building code in an existing Java Maven project
1. Right-click your Codewind project and launch the **Generate Server from OpenAPI Definition** wizard.
2. Select your OpenAPI document `.json` file.
3. Select the `jaxrs-spec` server generator type. When you're prompted to select the output folder, the project root, which is the parent of the source folder, is selected by default.
4. Click **Select As Output Folder** to merge the generated `.pom` file with the existing `.pom` file. When prompted with the warning message, click **Yes** to proceed. The files build.
5. Your `src` folder shows the newly generated code complete with a `gen` package. Your project state returns to the `[Running]` state.
6. Now, you can customize the application logic.

## Generating and building code in an existing Java Spring project
When you generate into a Spring project, don't override the implicitly or explicitly configured main class that comes with the project.
1. To use the generated class, comment out the main class text in the project `.java` file.
2. To use the current application, copy the packages at the component scan annotation and move them to the `SBApplication.java` file. Then, launch the project.

## Running commands
1. Before you run a command, ensure the OpenAPI definition is in the folder or project.
2. If you have **Codewind** installed, go to the **Explorer** view group and open the **Codewind** view.
  - Access the context menu commands from the Codewind view, go to the context menu on a project and select one of the **Generate** actions.
3. The commands are also available from the **Command Palette** .
  - Open the [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) and type `OpenAPI` to see the actions available.
4. After you generate code, edit the `.openapi-generator-ignore` file to ensure that subsequent code generation does not overwrite custom code.

## Generator options
The following command line equivalent options are available for client and server generation:
`-i <OpenAPI definition>`
`-g <generator name>`
`-o <output directory>`

The following command line equivalent options are available for HTML generation:
`-i <OpenAPI definition>`
`-g html2`
`-o <output directory>`

## Features
- Generate API clients in any of the supported [languages/frameworks](https://github.com/OpenAPITools/openapi-generator#overview).
- Generate server stubs in any of the supported [languages/frameworks](https://github.com/OpenAPITools/openapi-generator#overview).
- Generate HTML documentation from an OpenAPI definition file.