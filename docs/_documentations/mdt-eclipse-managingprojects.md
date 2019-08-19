---
layout: docs
title: Managing Codewind projects
description: How to work with your Codewind projects in Eclipse
keywords: run, open, import, show, restart, edit, build, logs, tools, eclipse, Codewind Explorer view in Eclipse, project actions, attach, build, disable, enable, validate, refresh
duration: 1 minute
permalink: mdteclipsemanagingprojects
type: document
order: 30
parent: mdteclipseoverview
---

# Managing Codewind projects

You can work with your Codewind projects from the **Codewind Explorer** view in Eclipse. If the view is not showing, open it as follows:

- From the **Window** menu select **Show View** > **Other**.
- Start typing **Codewind** in the filter field or locate and expand the **Codewind** entry in the list.
- Select **Codewind Explorer** and click **Open**.

To create a new project or import an existing one, use the context menu on the **Local Projects** item in the **Codewind Explorer** view.  Once you have a project, the first thing you might want to do is import your project into the Eclipse workspace so you can start editing files. This also makes your source available for debugging.

Each project shows the application status and the build status. A context menu on each project enables you to open your application in a browser, view application and build logs, restart in debug mode, and much more.

## Project actions

The following actions are available by right clicking on the project in the **Codewind Explorer** view. Most actions are only available if the project is enabled.

Some actions open the default Eclipse browser. If you find that the default Eclipse browser cannot handle the content, change the default browser by navigating to **Window** > **Web Browser** and selecting a different browser from the list.

- **Open Application**: Opens the application in the default Eclipse browser. This action is only available when the application is running or debugging.
- **Open Project Overview**: Opens the overview page for this project. You can use this to see information about the project, enable or disable the project, turn auto build on and off, or edit project settings.
- **Open Container Shell**: Opens a shell into your application container. This action is only available when the container is active.
- **Open Application Monitor**: Opens the application monitor in the default Eclipse browser. Use this to monitor the activity and health of your application. This action is only available when the application is running or debugging.
- **Import Project**: Imports your project into the Eclipse workspace.
- **Show Log Files**: If log files are available, this action displays a list of log files. In the Eclipse **Console** view, click a log file to open it, or click **Show All** to open all available log files. The individual log files are toggle actions. Click the log file again to remove the log file, or click **Hide All** to remove all log files from the **Console** view.
- **Restart in Run Mode**: Restarts the application in run mode.
- **Restart in Debug Mode**: Restarts the application in debug mode and attaches the debugger. Only Microprofile/Java EE, Spring, and Node.js projects can be debugged. For more information, see [Debugging Codewind projects](mdteclipsedebugproject.html).
- **Attach Debugger**: If you detached the debugger accidentally or restarted Eclipse, use this to re-attach the debugger to an application in debug mode. For more information, see [Debugging Codewind projects](mdteclipsedebugproject.html).
- **Build**: Initiate a build of your project. This action is not available if a build is already running. For more information, see [Building Codewind projects](mdteclipsebuildproject.html).
- **Disable Auto Build**: Use this to disable automatic builds if you are making a lot of changes and don't want builds to be triggered until you are done. This action is only available when auto build is enabled.
- **Enable Auto Build**: Use this to re-enable automatic builds whenever a change is made. This action is only available when auto build is disabled.
- **Remove**: Removes a project. This action removes the project from Codewind.  You can then use Eclipse to delete the project from the Eclipse workspace and the file system.
- **Refresh**: If the project gets out of sync, use this option to refresh it. To refresh all projects, right click on the **Local Projects** item in the **Codewind Explorer** view and select **Refresh**.

## Project settings

Project settings tell Codewind more about the specifics of your project and can affect the status and/or behaviour of your application. Project settings can be configured from the Project Overview page that is accessible from a project's context menu.

The list of supported project settings are:
* [Internal debug port](#internal-debug-port)
* [Internal application port](#internal-application-port)
* [Context root](#context-root)
* [Health check endpoint](#health-check-endpoint)
* [Maven profiles](#maven-profiles)
* [Paths to ignore for file changes](#paths-to-ignore-for-file-changes)

#### Internal debug port
`internalDebugPort: <string>`
- Only applicable to Microprofile, Spring and Node.js projects
- Only applicable to a local installation of Codewind
- Can be assigned to a non-exposed port, and Codewind will help expose the port for you
- If the project is already in debug mode, the project will need to be restarted in debug mode again in order to pick up the new debug port
- If the project is in run mode, the new debug port will be picked up and used the next time a restart in debug mode is done

#### Internal application port
`internalPort: <string>`
- Expected to be exposed, Codewind will not expose the port automatically
- This value is used by Codewind in conjunction with the context root to determine the project state
- If an incorrect port is set, the project will be stuck in starting state

#### Context root
`contextRoot: <string>`
- The value is used by Codewind to determine the project state
- The value is also used as the initial endpoint when the Open Application action is used
- If an incorrect context root is set, the project will be stuck in starting state
- If the health check endpoint is set, the context root will not be used to determine the project state
- If the value is not set, the default value is `/`

#### Health check endpoint
`healthCheck: <string>`
- The value is used by Codewind to determine the project state
- Expected to be used for the application health check endpoint
- If a wrong health check endpoint is set, the project will be stuck in starting state
- If the health check endpoint is set, the context root will not be used to determine the project state

#### Paths to ignore for file changes
`ignoredPaths: <string[]>`
- A list of file paths that indicate a build should be triggered on file change events in relation to the paths
- Each item is expected to be a regex (`"*/node_modules*"` ) or a path relative to the project's root directory (`"/README.md"`)

#### Maven profiles
`mavenProfiles: <string[]>`
- Only applicable to Microprofile and Spring projects
- A list of profiles can be set if a project requires additional Maven profiles to be used when Codewind issues Maven commands
- It is not advised to overwrite or remove the microclimate profile
- Maven profiles can be used in conjunction with Maven properties

#### Maven properties
`mavenProperties: <string[]>`
- Only for Microprofile and Spring projects
- Maven properties can be entered in the form `key=value`
- It is not advised to overwrite the microclimate property
- Maven properties can be used in conjunction with Maven profiles
