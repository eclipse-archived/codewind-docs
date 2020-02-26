---
layout: docs
title: Project actions
description: Project actions
keywords: run, open, import, show, restart, edit, build, logs, tools, project actions, attach, build, disable, enable, validate, refresh
duration: 1 minute
permalink: project-actions
type: document
order: 30
parent: 
---

# Project actions

The following actions are available by right clicking on the project in the **Codewind Explorer** view. Most actions are only available if the project is enabled.

Some actions open the default browser. If you find that the default browser cannot handle the content, change the default browser by navigating to **Window** > **Web Browser** and selecting a different browser from the list.

- **Open Application**: Opens the application in the default browser. This action is only available when the application is running or debugging.
- **Project Overview**: Opens the overview page for this project. You can use this to see information about the project or edit project settings.
- **Metrics Dashboard**: Opens the application monitor in the default browser. Use this to monitor the activity and health of your application. This action is only available when the application is running or debugging.
- **Performance Dashboard**: Opens the performance dashboard in the default browser. This action is available only when the application is running or debugging.
- **Tekton Dashboard**: This option is available to you if you are using remote connections, and only if you installed pipelines. Use this option to open the dashboard.
- **Open Container Shell**: Opens a shell into your application container. This action is only available when the container is active.

- **Import Project**: Imports your project into the current workspace.
- **Show Log Files**: If log files are available, this action displays a list of log files. Click a log file to open it, or click **Show All** to open all available log files. The individual log files are toggle actions. Click the log file again to remove the log file, or click **Hide All** to remove all log files from the **Console** view.

- **Restart in Run Mode**: Restarts the application in run mode. This action is only available on projects that support restart in run mode. 
- **Restart in Debug Mode**: Restarts the application in debug mode and attaches the debugger. This action is only available on projects that support it. For MicroProfile and Spring projects, a debug session is started automatically. For Node.js projects you are guided in the set up of a debug session in a Chromium based browser. For all other project types that support debug you have to set up a debug session manually. 
- **Attach Debugger**:  If you accidentally detached the Java debugger or restarted your IDE, use this action to set up a new debug session. This menu item is only available for Java applications that support restart in debug mode. 
- **Launch Debug Session**: If you ended your Node.js debug session accidentally, use this to set up a new debug session. This menu item is only available for Node.js applications that support restart in debug mode.

- **Build**: Initiate a build of your project. This action is not available if a build is already running. 
- **Disable/Enable Auto Build**: Enable or disable the automatic building of projects. Use this to disable automatic builds if you are making a lot of changes and don't want builds to be triggered until you are done. This option is enabled by default. 
- **Enable/Disable Inject Metrics**: Enable or disable the injection of open metrics into your application at build time. This option provides monitoring capabilities that are then used by the performance dashboard. This option is disabled by default. 

- **Disable/Enable Project**: Disables or enables the project.
- **Remove**: This action removes a project from Codewind. You can also optionally delete the project from your workspace and the file system. When you click **Remove**, a confirmation dialog is displayed which has a checkbox for removing the project from the workspace and the file system. The checkbox is unchecked by default.
- **Refresh**: If the project gets out of sync, use this option to refresh it. To refresh all projects for a connection, right click on the connection and select **Refresh**.
