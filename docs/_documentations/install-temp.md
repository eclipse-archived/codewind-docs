---
layout: docs
title: Codewind technical preview install instruction
description: Codewind technical preview
keywords: Codewind technical preview, Codewind, introduction, about, getting started, install, setup, use, uninstall
duration: 1 minute
permalink: codewind-install
type: document
---

<!-- Eclipse Codewind proposal https://projects.eclipse.org/proposals/eclipse-codewind -->

# Introducing Eclipse Codewind

Welcome to a technical preview of Eclipse Codewind, an evolution of Microclimate!

Our first Microclimate release was over a year ago now, and we've talked to customers about what's important to them and learned how to build tools for cloud native applications. As a result of this experience we've taken stock and decided to go in a new direction.

Two of the major decisions we've made are to switch to the powerful [Eclipse Che](https://www.eclipse.org/che/) for our cloud-hosted IDE and evolve our CI/CD pipeline to be based on [Tekton Pipelines](https://tekton.dev). However, today is special for another reason - an initial preview of how we expect our support for local IDEs to evolve.

![Microclimate evolution](images/evolution.png "Microclimate evolution"){:width="100%"}

Developers expect high-quality open source tools to be available in their IDE of choice. To deliver on this, we've started putting the local Microclimate installation on a diet and contributed it to a new Eclipse project that we've helped to form: Eclipse Codewind. Today we're happy to announce a first glimpse of what Codewind will look like. This preview shows the state of the codebase as it begins the move to Eclipse.

Why Eclipse? That's easy - it's because the Eclipse Foundation has a strong history and community around building vendor-agnostic developer tools. Eclipse also hosts two of the main IDEs that we plan to extend, making it a natural fit for Codewind.

The initial contribution for Codewind is coming from Microclimate. The Eclipse plug-in and Visual Studio Code extension are already open source and licensed under EPL 2. The common library that these depend on (a Docker container for now) has been relicensed under EPL 2 and is in the process of being legally cleared to release at Eclipse. All future releases of Codewind will come from the Eclipse codebase - we hope to see you there soon!

## Limitations

This preview is only available to use on Apple Mac (macOS).

You must run a local installer (which installs almost 1 Gb of Docker containers - we're working on it!) in addition to the IDE plug-in/extension.

Projects must be located in `<user>/microclimate-workspace`.

## Prerequisites

- Docker
- Git
- VS Code or Eclipse
- Either uninstall Microclimate or prevent the Microclimate images from running. For more information about uninstalling Microclimate, see [Uninstalling Microclimate on Linux or Mac/OS](https://microclimate.dev/uninstalllinuxmac).

## Installing Codewind

#### Downloading the release binary on MacOS
1. Download <a href="download/codewind" class="download-link trackdownload">codewind</a> to a folder on your system.
2. Make the `codewind` file usable with the `chmod +x codewind` command.
3. Enter the `./codewind install` command in the Terminal.
4. Run the `./codewind` command to see the available commands.

#### Installing the VS Code extension
1. Install VS Code Version 1.27 or later.
2. Install the [Codewind VS Code extension](https://marketplace.visualstudio.com/items?itemName=IBM.codewind) from the VS Code Marketplace or by searching for `Codewind` in the VS Code Extensions view.
3. **Optional:** If you plan to work on Java projects, also install the Java Extension Pack.
4. After installing the extension, the Codewind view is available in the Explorer view and the Command Palette. In the VS Code Explorer view group, open the Codewind view, or enter `Focus on Codewind` into the Command Palette.

#### Installing the Eclipse plug-in
1. Download and install the [latest Eclipse IDE for Java EE Developers](https://www.eclipse.org/downloads/packages/release/) or use an existing installation. The earliest supported version of the Eclipse IDE is Version 2019-03 (4.11).
2. Obtain the plug-in in one of the following ways:
    - [![Drag this install button to your running Eclipse workspace. Note: You need to have the Eclipse Marketplace Client.](https://marketplace.eclipse.org/sites/all/themes/solstice/public/images/marketplace/btn-install.png)](http://marketplace.eclipse.org/marketplace-client-intro?mpc_install=4638524 "Drag to your running Eclipse* workspace. *Requires Eclipse Marketplace Client") Drag this install button to your running Eclipse workspace. Note: You need to have the Eclipse Marketplace Client.
    - Open the [Eclipse IDE](https://marketplace.eclipse.org/content/codewind) and go to **Help**>**Eclipse Marketplace**. Then, search for `Codewind`. Click **Install** and finish the wizard and accept licenses as prompted.
3. When the installation is complete, restart Eclipse.
4. Open the Codewind Explorer view. Go to **Window**>**Show View**>**Other** and type `Codewind` in the filter field.
5. Then, select **Codewind Explorer** and click **Open**.

## Getting started

You can use Codewind to develop Node.js, Spring, and Liberty projects.

#### Getting started with Codewind in Eclipse

**Creating a project in Codewind**
1. To create a project, right-click the **Project Explorer** view. When the menu appears, click **New**>**Project**.
2. In the **New Project** window, click the `Codewind` folder and **New Codewind Project**.
3. Name your project, select a template, and click **Finish**.

**Binding a project in Codewind**
1. From the **Project Explorer** view, select a node. When the menu appears, click **Codewind**>**Add Project**.
2. In the **Add Project to Codewind** window, select a langauge and, if applicable, a project type.
3. Click **Finish**. The project builds.

#### Getting started with Codewind in VS Code

In the `README` file on the `codewind-vscode` repository, see the [**How to use**](https://github.com/microclimate-dev2ops/codewind-vscode#how-to-use) section to begin working with Codewind in VS Code. 

## Deactivating Codewind

With Codewind, you have a single connection that is either active or inactive. To deactivate Codewind, click the **Codewind (Local)** menu and click **Deactivate Connection**.

## Discovering more

For more information, see the [Eclipse Codewind site](http://codewind.dev). If you can't find what you need, contact us in our `ibm-cloud-tech` [Slack channel](https://ibm-cloud-tech.slack.com/messages/microclimate)! If you are new to Slack, you can [create a user ID here](https://slack-invite-ibm-cloud-tech.mybluemix.net/)!
