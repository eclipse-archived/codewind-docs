---
layout: docs
title: Installing Codewind on IntelliJ
description: Installing Codewind on IntelliJ
keywords: install, installing, IntelliJ, Eclipse, Codewind, IDE, plugin, plug-in, settings, creating, project, projects, template, code change, edit, edits, application, removing
duration: 1 minute
permalink: mdt-intellij-getting-started
type: document
---

# Getting started with Codewind on IntelliJ: Tech Preview
Use Codewind on IntelliJ to develop your applications.

## Installing Codewind on IntelliJ
Complete the prerequisites and choose to install Codewind on IntelliJ with either the custom plug-in repository or the Eclipse Downloads page.

### Prerequisites
- Install [IntelliJ](https://www.jetbrains.com/idea/download/#section=mac).
- Install Docker.
- If you use Linux, also install Docker Compose.

### Installing Codewind on IntelliJ with the custom plug-in repository
1. From IntelliJ, open either **Preferences** or **Settings**. A new window appears.
   - On macOS, go to **Main**>**Preferences**.
   - On Windows, go to **File**>**Settings**.
2. Click the **Manage Repositories, Configure Proxy or Install Plugin from Disk** gear icon.
3. From the menu, click the **Manage Plugin Repositories...** gear icon.
4. Click the **+** button.
5. Enter `https://download.eclipse.org/codewind/milestone/0.9.0/updatePlugins.xml`.
6. **For IntelliJ on Linux and Windows:** After you paste the URL, click outside the entry field so that the URL is deselected. If the URL isn't deselected before clicking **OK**, the URL is saved as a blank entry, and an error occurs.
7. Click **OK**.
8. Click the **Marketplace** heading.
9. In the search field, type `codewind`. The `codewind-intellij` plug-in appears. Click **Install**.

### Installing Codewind on IntelliJ from the Eclipse Downloads page
1. Go to the [Eclipse Downloads page](https://download.eclipse.org/codewind/milestone/0.9.0/codewind-intellij-0.9.0.zip) and click `codewind-intellij-0.9.0.zip` to download the file.
2. From IntelliJ, open either **Preferences** or **Settings**. A new window appears.
   - On macOS, go to **Main**>**Preferences**.
   - On Windows, go to **File**>**Settings**.
3. Click the **Manage Repositories, Configure Proxy or Install Plugin from Disk** gear icon. From the menu, click **Install Plugin from Disk...**. A window appears that displays the files on your computer.
4. Choose the `codewind-intellij-0.9.0.zip` file and click **Open**.

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
