---
layout: docs
title: Project actions
description: Project actions
keywords: run, open, import, show, restart, edit, build, logs, tools, project actions, attach, build, disable, enable, validate, refresh
duration: 1 minute
permalink: project-actions
type: document
---

# Project actions

The following actions are available by right-clicking the project in the **Codewind Explorer** view. Most actions are available only if the project is enabled.

Some actions open the default browser. If the default browser cannot handle the content, change the default browser.

- **Open Application**: Opens the application in the default browser. This action is available only when the application is running or debugging.
- **Project Overview**: Opens the overview page for the project. Use this action to see information about the project or edit project settings.
- **Tekton Dashboard**: This action is available if you are using remote connections and only if you installed pipelines. Use this action to open the dashboard.
- **Open Container Shell**: Opens a shell into your application container. This action is available only when the container is active.
- **Show all logs**: If log files are available, this action opens all available log files.
- **Hide all logs**: Remove all log files from the **Console** view.
- **Manage logs**:
- **Restart in Run Mode**: Restarts the application in run mode. This action is available only on projects that support restart in run mode. 
- **Restart in Debug Mode**: Restarts the application in debug mode and attaches the debugger. This action is available only on projects that support it. For MicroProfile and Spring projects, a debug session is started automatically. For Node.js projects, you are guided in the setup of a debug session in a Chromium-based browser. For all other project types that support debug, set up a debug session manually. 
- **Attach Debugger**:  If you accidentally detached the Java debugger or restarted your IDE, use this action to set up a new debug session. This action is available only for Java applications that support restart in debug mode.
- **Launch Debug Session**: If you ended your Node.js debug session accidentally, use this action to set up a new debug session. This menu item is available only for Node.js applications that support restart in debug mode.
- **Build**: Initiate a build of your project. This action is not available if a build is already running. 
- **Disable Auto Build** and **Enable Auto Build**: Enable or disable the automatic building of projects. Use this action to disable automatic builds if you are making a lot of changes and don't want builds to be triggered until you are done. This action is enabled by default.
- **Move Project**:
- **Disable Project** or **Enable Project**: Disables or enables the project.
- **Remove Project**: This action removes a project from Codewind. You can also optionally delete the project from your workspace and the file system. When you click **Remove**, a confirmation dialog is displayed that has a checkbox for removing the project from the workspace and the file system. The checkbox is deselected by default.
- **Refresh**: If the project gets out of sync, use this action to refresh it. To refresh all projects for a connection, right-click the connection and select **Refresh**.
