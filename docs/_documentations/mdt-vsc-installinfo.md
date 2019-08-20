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

The following images are pulled. These images together form the Codewind back end:
- `eclipse/codewind-initialize-amd64`
- `eclipse/codewind-performance-amd64`
- `eclipse/codewind-pfe-amd64`

## Using Codewind
When the installation is complete, the extension is ready to use, and you are prompted to open the Codewind workspace.

The `codewind-workspace` appears when Codewind creates the folder within your home directory to contain your projects. On Windows, you can find the workspace in the `C:\codewind-workspace` directory. You can open the `codewind-workspace` folder or a project within the workspace as your VS Code workspace. For more information, see [Getting started: Codewind for VS Code](mdt-vsc-getting-started.html).

## Removing containers and images
To remove Codewind, see [Uninstalling Codewind from VS Code](mdt-vsc-uninstall.html).

## Troubleshooting
To troubleshoot Codewind, see the [Troubleshooting page](troubleshooting.html).