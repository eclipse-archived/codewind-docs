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

Codewind creates the `~/codewind-workspace` folder to contain your projects. On Windows, you can find the workspace at the `C:\codewind-workspace` folder. You can open the `codewind-workspace` or a project within the workspace as your VS Code workspace. For more information, see [Getting started: Codewind for VS Code](mdt-vsc-getting-started.html).

## Updating the Codewind plug-in
Update your Codewind plug-in without uninstalling the extension.
1. Go to the **Extensions** view in VS Code.
2. Search for the latest Codewind version in the Marketplace.
3. Install the latest version of Codewind. Then, reload Codewind.
4. Go to the **Explorer** view in VS Code.
5. Depending on the current status of Codewind, one of two messages appear:
   - If the images from a previous version or release of Codewind are installed on the system, but Codewind is not running, a message asks you to install the most recent images. Click **OK** to start the download.
   - If an older version of Codewind is installed and running, a message asks you to update the older version. Click **OK**, and Codewind stops automatically, and new images begin to download.
5. Wait for the Codewind installation to complete. Codewind starts and is ready to use.

## Removing containers and images
To remove Codewind, see [Uninstalling Codewind from VS Code](mdt-vsc-uninstall.html).

## Troubleshooting
To troubleshoot Codewind, see the [Troubleshooting page](troubleshooting.html).