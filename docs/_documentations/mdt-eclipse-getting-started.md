---
layout: docs
title: "Getting Started with Codewind for Eclipse"
description: "Getting Started with Codewind for Eclipse"
keywords: introducing, introduction, overview, what is, tools, eclipse, getting started, Codewind for Eclipse, work within Eclipse
duration: 1 minute
permalink: mdteclipsegettingstarted
type: document
order: 5
parent: mdteclipseoverview
---

# Getting started with Codewind for Eclipse

Codewind for Eclipse enables you to develop your containerized projects from within Eclipse. 

The following information describes how to install Codewind for Eclipse, and introduces the tools and the Codewind Explorer view. It then describes how you can create a new project or work with an existing project, and introduces the wide range of Codewind development features available to you.  

To install Codewind for Eclipse, complete the following steps:

1. Download and install the latest [Eclipse IDE for Java EE Developers](https://www.eclipse.org/downloads/packages/release/) or use an existing installation.
    - Install Eclipse IDE Version 2019-09 R (4.13.0) or later to avoid [Bug 541220](https://bugs.eclipse.org/bugs/show_bug.cgi?id=541220).
    - However, the earliest supported version of the Eclipse IDE is Version 2019-03 (4.11).
2. Install [Docker](https://docs.docker.com/install/). If you use Linux, you also need to install Docker Compose.
3. Install [Codewind from Eclipse Marketplace](https://marketplace.eclipse.org/content/codewind).
    - [![Drag to your running Eclipse workspace. ](https://marketplace.eclipse.org/sites/all/themes/solstice/public/images/marketplace/btn-install.png)](http://marketplace.eclipse.org/marketplace-client-intro?mpc_install=4638524 "Drag to your running Eclipse* workspace. *Requires Eclipse Marketplace Client") Drag this install button to your running Eclipse workspace. Note: You need to have the Eclipse Marketplace Client.
    - Or, if you want to install from the Eclipse IDE, complete the following steps:
        1. Open the Eclipse IDE and navigate to **Help** > **Eclipse Marketplace**.
        2. Search for **Codewind**.
        3. Click the **Install** button.
        4. Finish the wizard and accept licenses as needed.
        5. When the installation is complete, restart Eclipse.
4. Open the Codewind view.  Navigate to **Window** > **Show View** > **Other...** > **Codewind** > **Codewind Explorer**
5. Codewind requires the installation of additional Docker images to run.  Double-click on the **Codewind** item in the Codewind Explorer view to complete the installation. The installation may take a few minutes to complete.
6. Codewind creates a codewind-data directory for storing its metadata. You should not save your projects to the codewind-data directory. 

You are now ready to use the tools. You can use the Codewind Explorer view to create new projects or add existing ones.  Right-click an element in the Codewind Explorer to look at the features available.

1. Create a new project or work with an existing project.
  - To create a new Codewind project, right-click the **Local** item and select **New Project**. If you create a new project from within Eclipse, the new project is imported into the Eclipse workspace for you.
   <br>![Create a new project](./dist/images/cdt-eclipse/cdt-eclipse-newproject.png)<br>
  - To work with an existing project, right-click the **Local** item and select **Add Existing Project**. Note that the project must already have been added to the Eclipse workspace.
   <br>![Import your project](./dist/images/cdt-eclipse/cdt-eclipse-importproject.png)<br>

2. Work with your project from within Eclipse including:
    - Editing
    - Debugging MicroProfile/Java EE, Spring, and Node.js projects
    - Opening the application in a browser
    - Viewing the logs
    - Opening a shell into the application container
    - And more
    <br>![Work with your project](./dist/images/cdt-eclipse/cdt-eclipse-actions.png)<br>
