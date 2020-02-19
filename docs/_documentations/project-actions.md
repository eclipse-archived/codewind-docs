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
- **Project Overview**: Opens the overview page for this project. You can use this to see information about the project, enable or disable the project, turn auto build on and off, or edit project settings.
- **Open Container Shell**: Opens a shell into your application container. This action is only available when the container is active.
- **Application Monitor**: Opens the application monitor in the default browser. Use this to monitor the activity and health of your application. This action is only available when the application is running or debugging.
- **Performance Dashboard**: Opens the performance dashboard in the default browser. This action is available only when the application is running or debugging.
- **Open Tekton Dashboard**: This option is available to you only if you installed pipelines. Use this option to open the dashboard.
- **Import Project**: Imports your project into the current workspace.
- **Disable/Enable Project**: Disables or enables the project.
- **Show Log Files**: If log files are available, this action displays a list of log files. Click a log file to open it, or click **Show All** to open all available log files. The individual log files are toggle actions. Click the log file again to remove the log file, or click **Hide All** to remove all log files from the **Console** view.
- **Restart in Run Mode**: Restarts the application in run mode.
- **Restart in Debug Mode**: Restarts the application in debug mode and attaches the debugger. Only Microprofile/Java EE, Spring, and Node.js projects can be debugged. For more information, see [Debugging Codewind projects](mdteclipsedebugproject.html). <=CHECK THIS SENTENCE/TOPIC>
- **Attach Debugger**: If you detached the debugger accidentally or restarted your IDE, use this to re-attach the debugger to an application in debug mode. For more information, see [Debugging Codewind projects](mdteclipsedebugproject.html). <=CHECK THIS SENTENCE/TOPIC>
- **Build**: Initiate a build of your project. This action is not available if a build is already running. For more information, see [Building Codewind projects](mdteclipsebuildproject.html). <=CHECK THIS SENTENCE/TOPIC>
- **Disable Auto Build**: Use this to disable automatic builds if you are making a lot of changes and don't want builds to be triggered until you are done. This action is only available when auto build is enabled.
- **Enable Auto Build**: Use this to re-enable automatic builds whenever a change is made. This action is only available when auto build is disabled.
- **Auto inject metrics**: Enable or disable the injection of open metrics into your application at build time. This option provides monitoring capabilities that are then used by the performance dashboard. This option is disabled by default. 
- **Remove**: Removes a project. This action removes the project from Codewind.  You can then use your IDE to delete the project from your workspace and the file system.
- **Refresh**: If the project gets out of sync, use this option to refresh it. To refresh all projects, right click on the **Local Projects** item in the **Codewind Explorer** view and select **Refresh**.
