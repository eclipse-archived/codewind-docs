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

The following actions are available by right-clicking the project in the **Codewind Explorer** view. Most actions function only if the project is enabled.

Some actions open the default browser. If the default browser cannot handle the content, change the default browser.

- **Open Application**: Opens the application in the default browser. This action functions only when the application is running or debugging. If you try to access it before running the application, a warning message appears.
- **Project Overview**: Opens the overview page for the project. Use this action to see information about the project or edit project settings.
- **Metrics Dashboard**: In Java, Node.js, and Swift applications, this action opens the Metrics Dashboard in the default browser. Use this action to monitor the activity and health of your application. This action is available only when the application is running or debugging.
- **Performance Dashboard**: In Java, Node.js, and Swift applications, this action opens the Performance Dashboard in the default browser, where you can then monitor and improve application performance. This action functions only when the application is running or debugging. If you try to access it before running the application, a warning message appears.
- **Open Container Shell**: Opens a shell into your application container. This action is available only when the container is active.
- Log file actions display or hide available log files.
  - **Show Log Files**: In Eclipse, this action displays a list of available log files. Click a log file to open it, or click **Show All** to open all available log files. The individual log files are toggle actions. Click the log file again to remove the log file, or click **Hide All** to remove all log files from the **Console** view.
  - **Show all logs** and **Hide all logs**: In Eclipse Che and VS Code, these actions open or close available log files from the **Output** view. Show or hide all of the log files, or use the drop-down menu to choose individual logs.
  - **Log Files**: In IntelliJ, this action displays or conceals available log files from the **Log Files** view. Click **Show All** to open all available log files, **Hide All** to remove all log files from view, or use the drop-down menu to choose individual logs.
  - **Manage logs**: In VS Code, this action opens the Command Palette, where you can select which logs you want to see.
- **Restart in Run Mode**: Restarts the application in run mode. This action is available only on projects that support restart in run mode. 
- **Restart in Debug Mode**: Restarts the application in debug mode and attaches the debugger. This action is available only on projects that support it. For MicroProfile and Spring projects, a debug session is started automatically. For Node.js projects, you are guided in the setup of a debug session in a Chromium-based browser. For all other project types that support debug, set up a debug session manually. 
- **Attach Debugger**:  If you accidentally detached the Java debugger or restarted your IDE, use this action to set up a new debug session. This action is available only for Java applications that support restart in debug mode.
- **Launch Debug Session**: If you ended your Node.js debug session accidentally, use this action to set up a new debug session. This menu item is available only for Node.js applications that support restart in debug mode.
- **Build**: Initiates a build of your project. This action doesn't function if a build is already running. If you try to use it when a build is running, it doesn't work, or a warning message appears.
- **Disable Auto Build** and **Enable Auto Build**: Enables or disables the automatic building of projects. Use this action to disable automated builds if you are making a lot of changes and don't want builds to be triggered until you are done. This action is enabled by default.
- **Enable Inject Appmetrics** and **Disable Inject Appmetrics**: Enables or disables the injection of application metrics at build time. **Enable Inject Appmetrics** provides monitoring capabilities that the Performance Dashboard uses. It is disabled by default and is supported on Codewind-style Java, Node.js, and Swift projects, except Java Lagom.
- **Move Project**: In VS Code, this action moves a project to a different Codewind connection. After you select this action, you are prompted to remove your project from the previous connection, disable the project to keep it disabled on the previous connection, or leave it alone to keep your project running on both the previous and the desired connection.
- **Disable Project** or **Enable Project**: Disables or enables the project.
- **Remove Project**: This action removes a project from Codewind. Optionally, delete the project from your workspace and the file system. When you click **Remove**, a confirmation dialog is displayed. 
  - In Eclipse, select the checkbox for removing the project from the workspace and the file system. The checkbox is cleared by default.
  - Other IDEs ask for project removal from the disk. Use the button to confirm.
- **Refresh**: If the project gets out of sync, use this action to refresh it. To refresh all projects for a connection, right-click the connection and select **Refresh**.
