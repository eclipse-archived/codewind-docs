---
layout: docs
title: Installing Codewind for VS Code
description: Installing Codewind for VS Code
keywords: install, installing, add, adding, tools, VS Code, Eclipse, installing Codewind for VS Code
duration: 1 minute
permalink: mdt-vsc-installinfo
type: document
order: 
parent: 
---

# Installing Codewind for VS Code

The Codewind installation includes two parts:
1. The VS Code extension installs when you install Codewind from the VS Code Marketplace or when you install by searching in the **VS Code Extensions** view.
2. The Codewind back end containers install after you click **Install** when you are prompted. After you click **Install**, the necessary images are downloaded from the internet. The download is approximately 1 GB.
3. Optional: If you don't click **Install** when the notification window first appears, you can access the notification again. Go to the Explorer view, hover the cursor over **Codewind**, and click the switch so that it changes to the **On** position. The window appears.

![Switch start or stop Codewind](dist/images/cdt-vsc/on-off-switch.png)<br>

The following images are pulled. These images together form the Codewind back end:
- `eclipse/codewind-initialize-amd64`
- `eclipse/codewind-performance-amd64`
- `eclipse/codewind-pfe-amd64`

## Using Codewind
When the installation is complete, the extension is ready to use, and you are prompted to open the Codewind workspace.

You can open the `codewind-workspace` or a project within the workspace as your VS Code workspace. For more information, see [Getting started: Codewind for VS Code](mdt-vsc-getting-started.html).

## Working with workspaces
Codewind creates the Codewind workspace on your system. The Codewind workspace is where Codewind expects to find your projects and where Codewind stores its metadata. On macOS and Linux, the workspace folder is `~/codewind-workspace`. On Windows, the workspace folder is `C:\codewind-workspace`. When Codewind creates a new project, it is created in the Codewind workspace. If you want to add an existing project to Codewind, first copy it into the Codewind workspace.

## Removing containers and images
To remove Codewind, see [Uninstalling Codewind from VS Code](mdt-vsc-uninstall.html).

## Troubleshooting
To troubleshoot Codewind, see the [Troubleshooting page](troubleshooting.html).