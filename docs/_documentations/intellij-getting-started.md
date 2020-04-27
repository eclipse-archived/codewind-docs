---
layout: docs
title: Installing Codewind for IntelliJ
description: Installing Codewind for IntelliJ
keywords: install, installing, IntelliJ, Eclipse, Codewind, IDE, plugin, plug-in, settings, creating, project, projects, template, code change, edit, edits, application, removing
duration: 1 minute
permalink: intellij-getting-started
type: document
---

# Getting Started with Codewind

**Important** Codewind for Intellij is currently a Tech Preview

There are 3 ways of using Codewind - locally, remotely or as a hosted application on the cloud. To get started, **you can try out Codewind by using the local configuration**. In this configuration, you create, develop, build and run your containerised applications on your local machine using your local IDE.

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

### Installing Codewind for IntelliJ

**Important:** Codewind for Intellij is currently a Tech Preview

Install Codewind for IntelliJ to develop your containerized projects from within IntelliJ.

To install Codewind for IntelliJ, complete the following steps:

### Prerequisites
- Install [IntelliJ](https://www.jetbrains.com/idea/download/#section=mac).
- Install Docker.
- If you use Linux, also install Docker Compose.

### Installing Codewind from the IntelliJ IDE
1. From IntelliJ, open either **Preferences** or **Settings**. A new window appears.
   - On macOS, go to **Main**>**Preferences**.
   - On Windows or Linux, go to **File**>**Settings**.
2. Click **Plugins**.
3. Click the **Marketplace** tab.
4. In the search field, type `codewind`.  The `Codewind` plug-in appears. Click **Install**.

### After Installation

**Getting started with Codewind - next steps** Continue to instructions for [create your first IntelliJ Codewind Project](./intellij-firstproject.html).

**Installing Codewind for remote use** If you intend to use Codewind [remotely](./remote-codewind-overview.html), you have now completed the pre-requisite step of installing Codewind on your local machine and can proceed to:

1. Deploy Codewind to your cloud if not already done so by you or a sysadmin/DevOps engineer. See tutorial [Deploying Codewind Remotely](./remote-deploying-codewind.html).
2. Connect your Codewind extension of your local desktop IDE to Codewind in your cloud by following the tutorial [Using Codewind Remotely](./remote-codewind-overview.html).
