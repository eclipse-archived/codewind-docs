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
When the installation is complete, the extension is ready to use.

Codewind creates a codewind-data directory for storing its metadata. Do not save your projects to the codewind-data directory. 

## Updating the Codewind plug-in
Update the Codewind Eclipse plug-in to the latest version.
1. From Eclipse, go to **Help**>**About Eclipse IDE**.
2. Click **Installation details**.
3. To look for the latest release, highlight **Codewind tech preview** and click **Update...**.
4. Select the latest version and click **Next**.
5. Review the license and click **Finish**.
6. Click **Restart Now** to refresh Codewind to the latest version.
7. After Codewind restarts, go to the **Codewind Explorer** view. Double-click **Local** to update it to the latest version.
8. Click **OK** in the **Codewind Update** window that states that the older version of Codewind will be removed, and the newer version will be started.
9. After Codewind updates, the **Codewind Explorer** view appears with your projects.

## Removing containers and images
To remove Codewind, see [Uninstalling Codewind from Eclipse](mdteclipseuninstall.html).

## Troubleshooting
To troubleshoot Codewind, see the [Troubleshooting page](troubleshooting.html).