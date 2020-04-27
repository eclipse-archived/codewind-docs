---
layout: docs
title: "Installing Codewind for VS Code"
description: "Installing Codewind for VS Code"
keywords: introducing, introduction, overview, tools, get, getting, start, started, install, vscode, visual, studio, code, Codewind for VS Code getting started, VS Code Marketplace, VS Code Extensions view, VS Code workspace,installing Codewind for VS Code
duration: 1 minute
permalink: vsc-getting-started
type: document
order: 1
---
# Getting Started with Codewind

There are three ways of using Codewind - locally, remotely or as a hosted application on the cloud. To get started, **you can try out Codewind by using the local configuration**. In this configuration, you create, develop, build and run your containerised applications on your local machine using your local IDE.

Follow the instructions to get started with using Codewind locally. This will guide you through:

1. Installing Codewind into your IDE on your local machine
2. Creating your first project
3. Making a code change to try out the inner loop experience

Select your IDE to get started:

* [VS Code](./vsc-getting-started.html#installing-codewind-for-vs-code)
* [Eclipse](./eclipse-getting-started.html#installing-codewind-for-eclipse) 
* [IntelliJ](./intellij-getting-started.html#installing-codewind-for-intellij)

**Codewind on Eclipse Che** if you want to go straight to using codewind as a hosted application in the cloud, follow [these instructions](./che-installinfo.html).

**Using Codewind Remotely** If you want to use codewind remotely, **you must first [follow the step to install codewind locally](##installing-codewind-for-vs-code)**. By [using Codewind remotely](./remote-codewind-overview.html), Codewind is configured for making code changes on your local IDE but building and running your application in the cloud. Once you have installed Codewind remotely, you can proceed to either:

1. Deploy Codewind to your cloud if not already done so by you or a sysadmin/DevOps engineer. See tutorial [Deploying Codewind Remotely](./remote-deploying-codewind.html).
2. Connect your Codewind extension of your local desktop IDE to Codewind in your cloud by following the tutorial [Using Codewind Remotely](./remote-codewind-overview.html).

**The different configurations of Codewind** To find out about the different ways of using Codewind - locally, remotely, or as an application hosted on the cloud - see [Codewind Architecture](./overview.html#architecture).

### Installing Codewind for VS Code

 Install Codewind for Visual Studio Code (VS Code) to develop your containerized projects from within VS Code. 

 To install Codewind for VS Code, complete the following steps:

1. Install [VS Code version 1.41.0 or later](https://code.visualstudio.com/download).
2. Install [Docker](https://docs.docker.com/install/) 17.06 or later. If you use Linux, you must also install [Docker Compose](https://docs.docker.com/compose/install/).
3. If you are planning to work with Appsody projects, enable your local drive for sharing in Docker. To do this, open the **Docker Settings** window, click the **Shared Drives** tab, and select the drive on which you are installing Codewind. 
4. Install Codewind by clicking [this link](vscode:extension/IBM.codewind) to install from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=IBM.codewind) or by searching for `Codewind` in the [VS Code Extensions view](https://code.visualstudio.com/docs/editor/extension-gallery#_browse-for-extensions).
    - If you're going to work on Java projects, install the [Java Extension Pack](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack).
5. Open the Codewind view in the [Explorer view group](https://code.visualstudio.com/docs/getstarted/userinterface) or enter `Focus on Codewind View` into the [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette).
    - If you do not see the Codewind view in either the Explorer or the Command Palette, the extension did not install correctly.
6. Codewind requires the installation of additional Docker images to run. Choose **Install** when prompted to complete the installation. The installation might take a few minutes to complete.
7. Once complete, you have a **Codewind** section in the IDE. 
   
![image of Codewind once installed](images/installed.png){:width="800px"}

### After Installation

**Getting started with Codewind - next steps** Continue to instructions for [creating your first VS Code Codewind Project](./vsc-firstproject.html).

**Installing Codewind for remote use** If you intend to use Codewind [remotely](./remote-codewind-overview.html), you have now completed the pre-requisite step of installing Codewind on your local machine and can proceed to:

1. Deploy Codewind to your cloud if not already done so by you or a sysadmin/DevOps engineer. See tutorial [Deploying Codewind Remotely](./remote-deploying-codewind.html).
2. Connect your Codewind extension of your local desktop IDE to Codewind in your cloud by following the tutorial [Using Codewind Remotely](./remote-codewind-overview.html).
