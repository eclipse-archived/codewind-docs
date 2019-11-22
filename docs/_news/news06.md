---
layout: news
title: New for Codewind 0.6.0
description: New for Codewind 0.6.0
keywords: news, new, updates, update, version
duration: 1 minute
permalink: news06
---

## Codewind 0.6.0
Friday 22 November 2019

#### Codewind workspace updates

**VS Code**

- You no longer need to place projects in the `codewind-workspace`.
- Do not create projects in the `~/codewind-data/` or `C:\codewind-data` directories. User configuration files are now kept in `~/.codewind/` or `C:\Users\<user>\.codewind\`.
- If you want to move an existing project, remove it from Codewind without deleting the files. Next, move the project to its new location. Then, run the `Add Existing Project` command to add it to its new location.
- In VS Code, to skip the **Select a parent directory** step when you create a project, use the `codewind.alwaysCreateProjectsInWorkspace` setting.
- Project information is now kept in the `codewind_cw-workspace` Docker volume. Information for existing projects is moved to the Docker volume when Codewind 0.6.0 is started for the first time. If this volume is deleted, your projects are deleted from Codewind. However, they still exist on your disk, and you can add them back into Codewind with the `Add Existing Project` command.
- Whenever files in the project are changed, the changed files are copied into the `codewind_cw-workspace` Docker volume. Previously, Codewind did a Docker mount of the entire `codewind-workspace`.

**Eclipse**

The information in the **VS Code** section also applies to Eclipse but with these exceptions:
- When you move a project, to add an existing project to Eclipse, right-click **Local** in the Codewind explorer view and select **Add Existing Project**.
- Select the location of the project when you create it. The Eclipse workspace is the default location, but you can clear the **Use default location** checkbox and enter another location in the **Location** field.

#### Appsody
- Appsody works on Che!

#### Che
- The file, **Setting up OpenShift on IKS for Codewind**, is removed because these steps are no longer needed. The instructions to set up Codewind on OpenShift on IKS are the same as a regular OpenShift installation.

#### Codewind OpenAPI Tools for VS Code
- Codewind 0.6.0 introduces usability improvements for Maven projects after code generation. When you generate a Maven project into the project root folder for the first time, the existing `.pom` file is merged with the one from the generator so that the Maven build completes successfully. In some cases, you might need [manual steps to expose the API endpoints](open-api-tools-for-vscode.html#generating-and-building-client-and-server-stubs-by-using-the-openapi-tools) because the OpenAPI Tools do not override existing project configurations.

#### Templates
- Templates are improved with added details about what a template is. Information is also included for managing templates, working with default templates, and adding your own templates. For Eclipse, see the Eclipse documentation for [Working with templates](mdteclipseworkingwithtemplates.html). For VS Code, see the VS Code documentation for [Working with templates](mdt-vsc-workingwithtemplates.html).

#### VS Code output view
- New to VS Code is the Codewind output stream, which logs `cwctl` commands and their output. In addition to providing status on all of your `cwctl` commands, it also helps you to debug unusual problems, especially when you start Codewind. For more information, see [Troubleshooting](mdt-vsc-troubleshooting.html).<br>

![Image of VS Code output](dist/images/cdt-vsc/output_view.png)<br>