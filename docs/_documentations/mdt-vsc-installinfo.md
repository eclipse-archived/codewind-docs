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

The Codewind installation includes two parts.
1. The first part installs when you Install Codewind from the VS Code Marketplace or when you install by searching in the VS Code Extensions view.
2. The second part installs when you click **Install** when you are prompted by the dialog box.

After you click **Install**, the necessary images are downloaded from the internet. The download is approximately 1 GB. Your IDE displays a progress meter to indicate that the installation is being performed as well as messages that state which pieces, such as individual containers, are being installed.

The following images are pulled:
- `eclipse/codewind-initialize-amd64`
- `eclipse/codewind-performance-amd64`
- `eclipse/codewind-pfe-amd64`
Then, an alias, technically a second tag, is created for each image:
- `codewind-initialize-amd64`
- `codewind-performance-amd64`
- `codewind-pfe-amd64`

## Using Codewind
When the installation is complete, the extension starts, and you are prompted to open the workspace. For more information about using Codewind, see [Tutorial: Codewind for VS Code](mdt-vsc-tutorial.html).

## Removing containers and images
To remove Codewind, see [Uninstalling Codewind from VS Code](mdt-vsc-uninstall.html).

## Troubleshooting
To troubleshoot Codewind, see the [Troubleshooting page](troubleshooting.html).