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

## Generating and building code and clients for OpenAPI tools
1. Right-click your Codewind project from the Codewind view and select either the **Generate Server from OpenAPI Definition** menu or **Generate Client from OpenAPI Definition** action. You are then prompted to provide options to the OpenAPI generator.
2. Select your OpenAPI document file. The file must be a valid OpenAPI 3.0 `.yaml` or `.json` file that is in the project.
3. Select the client or server generator type.
4. When you're prompted to select the output folder, keep the default selection. The project root, which is the parent of the source folder, is selected by default.
5. Click **Select As Output Folder** to merge the generated `.pom` file with the existing `.pom` file. The existing `pom.xml` file is backed up as `pom-backup.xml` or as a variation of this name. The new `pom.xml` file is a merged version of the original `.pom` file and the `.pom` file that is generated. The merge attempts to include all necessary dependencies for the project to build properly. Because of limitations in the merge process, XML comments, such as `<!-- example comment -->`, from the original `.pom` file are removed. 
6. When prompted with the warning message, click **Yes** to proceed with code generation. For any Codewind project, if autobuild is turned on, the project builds automatically.
7. See that your `src` folder shows the newly generated code. Depending on the generator type that you chose, a `gen` package is created. Your Codewind project state returns to the `[Running]` state. The target source folders, `src/main/java` and `src/test/java`, are not customizable.
8. Now, you can customize the application logic.

## Generating and building code in an existing Java Spring project
When you generate a Spring server stub into a Spring project, the OpenAPI tools for VS Code don't override the main class that is already implicitly or explicitly configured in the project. Complete one of the following steps to expose the OpenAPI endpoints:
- To use the generated class, uncomment the main method in the `OpenAPI2SpringBoot.java` Java class  file and explicitly configure the project to use this main class.
- To continue to use the currently configured main class, copy the base packages that are listed in the `@ComponentScan` component scan annotation from the `OpenAPI2SpringBoot.java` file. Then, add the packages to the currently configured main class. For example, if you use the Codewind Spring Boot project, the implicit main class is the `SBApplication.java` file.

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