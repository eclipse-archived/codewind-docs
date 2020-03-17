---
layout: docs
title: Creating your first IntelliJ Codewind project
description: Creating your first IntelliJ Codewind project
keywords: start, starting, template, templates, install, installed, Java, location, locations, field, name, file, files, notification, notifications, pom.xml, structure, Maven, view, views, application, open, build, local, remove, removing, delete, deleting, system, change, changes, changing
duration: 1 minute
permalink: intellij-firstproject
type: document
---

# Creating your first IntelliJ Codewind project

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
If you have an IntelliJ project already open, you can create more projects.
1. Either go to **File**>**New**>**Project...** or right-click the **Local** node in the Codewind view.
2. Then, click **New Project...** and continue with creating a Codewind project by following the steps in [Creating your first project from a template](#creating-your-first-project-from-a-template).

## Removing a project
1. If you delete a project, it is removed from Codewind.
2. However, the files remain in the file system, and you need to manually delete them.

Next step: [Making a code change with IntelliJ](intellij-codechange.html)
