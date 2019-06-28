---
layout: docs
title: Installing Codewind locally
description: Installing Codewind locally
keywords: linux, macos, windows, install, installing locally, installing linux, installing MacOS, installing Windows, Git, Docker Desktop, Docker Compose, start Codewind, license agreement, accept
duration: 1 minute
auto_ids: true
permalink: installlocally
type: document
order: 10
parent: root
---

# Installing Codewind locally

Codewind can be installed locally into Eclipse or into Visual Studio Code (VS Code).

***
## Prerequisites for Linux and macOS
* Linux or macOS, on x86_64 architecture only
* [Visual Studio Code](https://code.visualstudio.com/) or [Eclipse IDE for Java EE Developers](https://www.eclipse.org/downloads/packages/release/)
* [Git](https://git-scm.com/)
* [Docker Desktop for Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac) **Version 17.06 minimum**
* [Docker Compose](https://docs.docker.com/compose/install/)
* On Linux, follow the post-installation steps to [run Docker as a non-root user](https://docs.docker.com/engine/installation/linux/linux-postinstall/).

## Prerequisites for Windows
* Windows 10 and Windows Server 2016 are supported.
* [Visual Studio Code](https://code.visualstudio.com/) or [Eclipse IDE for Java EE Developers](https://www.eclipse.org/downloads/packages/release/)
* [Git](https://git-scm.com/)
* Install [Docker Desktop for Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows).
  * Use the default Linux containers setting. From the **Docker for Windows** menu, you can toggle between the Linux or Windows daemon. If your settings have been changed from the default, select **Switch to Linux containers...** to use Linux containers. Codewind only works with Linux containers.
* Enable your local disk drive for sharing in Docker. Open the **Docker Settings** window, click the **Shared Drives** tab, and select your `C:\` drive. Codewind creates it's workspace in the root of the `C:\` drive.
  * For help resolving issues when using OS authentication setups such as AzureAD, see the [Troubleshooting page](troubleshooting#docker-shared-drive-not-accepting-os-credentials-for-windows).
* Disable Docker Experimental features. Open the **Docker Settings** window, click the **Daemon** tab, and clear the **Experimental features** check box.

## Installing into VS Code

To install Codewind for VS Code, see [Getting Started: Codewind for VS Code](mdt-vsc-getting-started)

## Installing into Eclipse

To install Codewind for VS Code, see [Getting Started: Codewind for Eclipse](mdteclipsegettingstarted)

***
## Need help?
If you encounter problems with installing Codewind locally, check the [Troubleshooting page](troubleshooting#installing-codewind).
