---
layout: docs
title: "Project commands: Tools for VS Code"
description: "Project commands: Tools for VS Code"
keywords: tools, vscode, visual, studio, code, commands, project, Codewind Developer Tools for VS Code project commands overview, connection commands, restart, debug
duration: 1 minute
permalink: mdt-vsc-commands-project
type: document
order: 2
parent: mdt-vsc-commands-overview
---

# Project commands: Codewind for VS Code

### **See also:**
- [Commands overview](mdt-vsc-commands-overview.html)
- [Restart and debug](mdt-vsc-commands-restart-and-debug.html)

***

## Create a new project or work with an existing project

- To create a new project, right-click the *Projects (Local)* item and select **Create New Project**, or click on the *+* icon beside the *Projects (Local)* item. You can also create a new project using the **Command Palette**.
- To work with an existing project, right-click the *Projects (Local)* item and select **Add Existing Project**, or click on the *link* icon beside the *Projects (Local)* item. You can also add an existing project using the **Command Palette**. Note that the project must already exist within the *codewind-workspace* folder.

Right-click a project in the **Codewind view** to see most project commands. All commands are available in the **Command Palette**.

## Commands

### **Open in browser**
Open the project application root endpoint in the system browser. The project must be in the *Running* or *Debugging* state, or the application server won't be available.

### **Open application monitor**
Open the Codewind **Application Monitor** page for this project in the system browser.

### **Open folder as workspace**
Open the project as your VS Code workspace folder. This command is useful if you want to work on just one project at a time per window. If you want the folder to open in a new window, set *window.openFoldersInNewWindow* to **true**.

### **Show project overview**
Open an editor tab that displays all of the Codewind information for the project. From this page, you can build, disable, or delete the project, and you can change the project auto build setting. This page is the only place in the extension where you can delete a project. If you delete a project, you remove it from both Codewind and from your file system.

### **Build**
Manually request an application build for this project. If the project has auto build enabled, this command should not be necessary because builds are triggered automatically with a code change. This command is also available in the project info page.
This command is equivalent to clicking the **Build** button in the Codewind **Overview** page.

### **Toggle auto build**
Enable or disable auto build for the project. This command is also available in the project info page. This command is equivalent to clicking the **Auto Build** toggle in the Codewind **Overview** page.

### **Open container shell**
Open a shell, either *bash* or *sh*, in the project application container with *docker exec*. The project must have a container running. The VS Code integrated terminal needs access to your *PATH* environment variable so that it can run the *docker* command.

### **Enable or disable project**
Enable or disable the project. This command is also available in the project info page.<br>

## Logs

### **Show all logs**
Open a channel in the **Output** view for each of the project's logs. To remove the output channel, use the **Hide logs** command.

### **Hide all logs**
This command hides all the output channels that contain logs for this project.

### **Manage logs**
This command presents a list of all logs for this project, which you can toggle individually.

## Project-specific settings
Edit the internal app and debug ports as well as the **application endpoint**, sometimes known as the **context root**, from the **Project Overview** page.

***

[Next: Restart and debug](mdt-vsc-commands-restart-and-debug.html)

[Back to the commands overview](mdt-vsc-commands-overview.html)

[Back to the VS Code tools overview](mdt-vsc-overview.html)

[Troubleshooting](mdt-vsc-troubleshooting.html)
