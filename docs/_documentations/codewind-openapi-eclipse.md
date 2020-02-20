---
layout: docs
title: Codewind OpenAPI Tools for Eclipse
description: How to work with the OpenAPI tools in Eclipse
keywords: install, run, open, import, show, restart, edit, build, logs, tools, eclipse, Codewind OpenAPI tools for Eclipse
duration: 1 minute
permalink: open-api-tools-for-eclipse
type: document
order: 30
---

# Codewind OpenAPI Tools for Eclipse

The Codewind OpenAPI Tools for Eclipse includes wizards that invoke the OpenAPI Generator to create API clients, server stubs, and HTML documentation from OpenAPI definitions. The tools are integrated and customized to work with Codewind for Eclipse, but they also work with a base Eclipse IDE for Java EE Developers installation.

## Installing
1. Download and install the latest [Eclipse IDE for Java EE Developers](https://www.eclipse.org/downloads/packages/release/) or use an existing installation. If you use Codewind OpenAPI Tools with Codewind, the earliest supported version of the Eclipse IDE is 4.11.0 (2019-03).
2. [Optional] Install [Codewind from the Eclipse Marketplace](https://marketplace.eclipse.org/content/codewind).
3. Install the [Codewind OpenAPI Tools from the Eclipse Marketplace](https://marketplace.eclipse.org/content/codewind).

## Generating HTML and client and server stubs by using the OpenAPI wizard
1. Launch the context menu on any existing workspace projects or any `openapi.yaml` workspace OpenAPI definition files from the **Package Explorer** or **Project Explorer** views.
2. If Codewind is installed, the context menu generator actions are available in the **Codewind Explorer** view.
3. Ensure at least one OpenAPI definition is in the project.
4. Select an action to generate the client or server stubs or HTML documentation.
5. Enter the requested information that is displayed in the wizard. For the output folder, keep the default selection. The project root, which is the parent of the source folder, is selected by default.
6. Click **Finish**.
7. If a client or server stub is selected, and if it is a Java Maven project, then when prompted with the warning message, click **Yes** to merge the generated `.pom` file with the existing `.pom` file. The existing `pom.xml` file is backed up as `pom-backup.xml` or as a variation of this name. The new `pom.xml` file is a merged version of the original `.pom` file and the `.pom` file that is generated. The merge attempts to include all necessary dependencies for the project to build properly. Because of limitations in the merge process, XML comments, such as `<!-- example comment -->`, from the original `.pom` file are removed. For any Codewind project, if autobuild is turned on, the project builds automatically.
8. See that your `src` folder shows the newly generated code. Depending on the generator type that you chose, a `gen` package is created. Your Codewind project state returns to the `[Running]` state. The target source folders, `src/main/java` and `src/test/java`, are not customizable.
9. Now, you can customize the application logic.
10. After generation, edit the `.openapi-generator-ignore` file to ensure that subsequent code generation does not overwrite custom code.

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