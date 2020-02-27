---
layout: docs
title: Installing Codewind on IntelliJ
description: Installing Codewind on IntelliJ
keywords: install, installing, IntelliJ, Eclipse, Codewind, IDE, plugin, plug-in, settings, creating, project, projects, template, code change, edit, edits, application, removing
duration: 1 minute
permalink: intellij-getting-started
type: document
---

# Getting started with Codewind on IntelliJ: Tech Preview
Use Codewind on IntelliJ to develop your applications.

## Installing Codewind on IntelliJ
Complete the prerequisites and install Codewind on IntelliJ.

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

## Creating your first project from a template
1. Start IntelliJ. From the welcome page, click **Create New Project**. The **New Project** window opens.
2. Create a Codewind project by clicking **Codewind**.
   - If Codewind isn't installed yet, click **Install Codewind** to complete the installation.
   - If Codewind isn't running yet, click **Start Codewind**. A **Starting Codewind** window appears.
3. After Codewind is installed and started, click **Next**. A list of available templates appears.
   - Currently, IntelliJ supports only the Java language templates.
4. Click the template of your choice. Then, click **Next**.
5. Enter the **Project name:** field to name your project and enter the **Project location:** field to choose where to put it.
6. Click **Finish**. A window for your project appears.
7. IntelliJ detects a `pom.xml` file and asks if you want to add the file as a Maven project. In the **Non-managed pom.xml file found:** notification, click **Add as Maven Project** to create the correct project structure.
   - The **Non-managed pom.xml file found:** notification might disappear after some time. To create the correct project structure, go to the IntelliJ project view and right-click the `pom.xml` file. From the context menu, click **Add as Maven Project** to create the correct project structure.
8. To access the Codewind view, click the **Codewind** tab. From the Codewind view, right-click your project to open an application, start a build, and more.

## Creating more projects from templates
1. From an IntelliJ project that's already open, go to **File**>**New**>**Project...**. The **New Project** window appears.
   - **Note:** Unlike other IDEs, IntelliJ doesn't have a **Create New Project** menu item in the Codewind view.
2. Click **Next**.
3. Click the template of your choice and click **Next**. A list of available templates appears.
   - Currently, IntelliJ supports only the Java language templates.
4. Enter the **Project name:** and **Project location:** and click **Finish**. The **Open Project** window appears.
5. To create a new project, click **New Window**. A new window appears for the new project.
6. IntelliJ detects a `pom.xml` file and asks if you want to add the file as a Maven project. In the **Non-managed pom.xml file found:** notification, click **Add as Maven Project** to create the correct project structure.
   - The **Non-managed pom.xml file found:** notification might disappear after some time. To create the correct project structure, go to the IntelliJ project view and right-click the `pom.xml` file. From the context menu, click **Add as Maven Project** to create the correct project structure.
7. To access the Codewind view, click the **Codewind** tab.
   - The new project appears with any other projects.
   - Right-click your project to open an application, start a build, and more.

## Making a code change
1. From a project, open the file that you want to edit, for example, **Project1**>**src**>**main**>**java**>**application**>**rest**>**v1**>**example**.
2. Edit your file.
3. Save your changes. By default, IntelliJ automatically saves your changes. However, if you manually save your changes, you can help Codewind detect changes more quickly.
4. Open the application again. Your changes appear.

## Removing a project
1. If you delete a project, it is removed from Codewind.
2. However, the files remain in the file system, and you need to manually delete them.
