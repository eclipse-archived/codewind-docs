---
layout: docs
title: Installing Codewind for Eclipse
description: Installing Codewind for Eclipse
keywords: install, installing, add, adding, tools, Eclipse, installing Codewind for Eclipse
duration: 1 minute
permalink: mdt-eclipse-installinfo
type: document
order: 
parent: 
---

# Installing Codewind for Eclipse

The Codewind installation includes two parts:
1. The Eclipse plug-in installs when you install Codewind from the Eclipse Marketplace or when you install by searching in the **Eclipse Extensions** view.
2. The Codewind back end containers install after you click **Install** when you are prompted. After you click **Install**, the necessary images are downloaded from the internet. The download is approximately 1 GB.
3. Optional: If you don't click **Install** when the notification window first appears, you can access the notification again. Go to the Explorer view, hover the cursor over **Codewind**, and click the switch so that it changes to the **On** position. The window appears.

The following images are pulled. These images together form the Codewind back end:
- `eclipse/codewind-initialize-amd64`
- `eclipse/codewind-performance-amd64`
- `eclipse/codewind-pfe-amd64`

## Using Codewind
When the installation is complete, the extension is ready to use, and you are prompted to open the Codewind workspace.

You can open the `codewind-workspace` or a project within the workspace as your Eclipse workspace. For more information, see [Getting started: Codewind for Eclipse](mdteclipsegettingstarted.html).

## Working with workspaces
Codewind creates the Codewind workspace on your system. The Codewind workspace is where Codewind expects to find your projects and where Codewind stores its metadata. On macOS and Linux, the workspace folder is `~/codewind-workspace`. On Windows, the workspace folder is `C:\codewind-workspace`. When Codewind creates a new project, it is created in the Codewind workspace. If you want to add an existing project to Codewind, first copy it into the Codewind workspace.

## Removing containers and images
To remove Codewind, see [Uninstalling Codewind from Eclipse](mdteclipseuninstall.html).

## Troubleshooting
To troubleshoot Codewind, see the [Troubleshooting page](troubleshooting.html).