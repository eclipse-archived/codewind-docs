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

## Create a new project or work with an existing project

- To create a new project, right-click the *Projects (Local)* item and select **Create New Project**, or click on the *+* icon beside the *Projects (Local)* item. You can also create a new project using the **Command Palette**.
- To work with an existing project, right-click the *Projects (Local)* item and select **Add Existing Project**, or click on the *link* icon beside the *Projects (Local)* item. You can also add an existing project using the **Command Palette**. Note that the project must already exist within the *codewind-workspace* folder.

Right-click a project in the **Codewind view** to see most project commands. All commands are available in the **Command Palette**.

## Commands

- **Open app**: Open the project application root endpoint in the system browser. The project must be in the *Running* or *Debugging* state, or the application server won't be available.

- **Open application monitor**: Open the Codewind **Application Monitor** page for this project in the system browser.

- **Open folder as workspace**: Open the project as your VS Code workspace folder. This command is useful if you want to work on just one project at a time per window. If you want the folder to open in a new window, set *window.openFoldersInNewWindow* to **true**.

- **Show project overview**: Open an editor tab that displays all of the Codewind information for the project. From this page, you can build, disable, or delete the project, and you can change the project auto build setting. This page is the only place in the extension where you can delete a project. If you delete a project, you remove it from both Codewind and from your file system.

- **Build**: Manually request an application build for this project. If the project has auto build enabled, this command should not be necessary because builds are triggered automatically with a code change. This command is also available in the project info page.
This command is equivalent to clicking the **Build** button in the Codewind **Overview** page.

- **Toggle auto build**: Enable or disable auto build for the project. This command is also available in the project info page. This command is equivalent to clicking the **Auto Build** toggle in the Codewind **Overview** page.

- **Open container shell**: Open a shell, either *bash* or *sh*, in the project application container with *docker exec*. The project must have a container running. The VS Code integrated terminal needs access to your *PATH* environment variable so that it can run the *docker* command.

- **Enable or disable project**: Enable or disable the project. This command is also available in the project info page.<br>

## Logs

- **Show all logs**: Open a channel in the **Output** view for each of the project's logs. To remove the output channel, use the **Hide logs** command.

- **Hide all logs**: This command hides all the output channels that contain logs for this project.

- **Manage logs**: This command presents a list of all logs for this project, which you can toggle individually.

- **Project-specific settings**: Edit the internal app and debug ports as well as the **application endpoint**, sometimes known as the **context root**, from the **Project Overview** page.

## Configuring project settings

Project settings tell Codewind more about the specifics of your project and can affect the status and/or behaviour of your application. Project settings can be configured from the Project Overview page that is accessible from a project's context menu, or you can find the project settings in the `.cw-settings` file of the project which you can edit from the IDE. Changes to these fields are automatically picked up by the workspace.

The list of supported project settings are:
* [Context root](#context-root)
* [Health check endpoint](#health-check-endpoint)
* [HTTPS application](#https-application)
* [Internal application port](#internal-application-port)
* [Internal debug port](#internal-debug-port)
* [Maven profiles](#maven-profiles)
* [Paths to ignore for file changes](#paths-to-ignore-for-file-changes)

#### **Context root**
`contextRoot: <string>`
- The value is used by Codewind to determine the project state
- The value is also used as the initial endpoint when the Open Application action is used
- If an incorrect context root is set, the project will be stuck in starting state
- If the health check endpoint is set, the context root will not be used to determine the project state
- If the value is not set, the default value is `/`

#### **Health check endpoint**
`healthCheck: <string>`
- The value is used by Codewind to determine the project state
- Expected to be used for the application health check endpoint
- If a wrong health check endpoint is set, the project will be stuck in starting state
- If the health check endpoint is set, the context root will not be used to determine the project state

#### HTTPS application
`isHttps: <boolean>`
- This value tells Codewind to use the HTTPS protocol when Codewind detects the application status and also when Codewind launches the application in a browser.
- If your application supports HTTPS, set `isHttps` to `true`, and Codewind uses HTTPS instead of HTTP to detect application status and to open browser URLs.
- The default value of this setting is `false`.

#### **Internal application port**
`internalPort: <string>`
- Expected to be exposed, Codewind will not expose the port automatically
- This value is used by Codewind in conjunction with the context root to determine the project state
- If an incorrect port is set, the project will be stuck in starting state

#### **Internal debug port**
`internalDebugPort: <string>`
- Only applicable to Microprofile, Spring and Node.js projects
- Only applicable to a local installation of Codewind
- Can be assigned to a non-exposed port, and Codewind will help expose the port for you
- If the project is already in debug mode, the project will need to be restarted in debug mode again in order to pick up the new debug port
- If the project is in run mode, the new debug port will be picked up and used the next time a restart in debug mode is done

#### **Paths to ignore for file changes**
`ignoredPaths: <string[]>`
- A list of file paths that indicate a build should be triggered on file change events in relation to the paths
- Each item is expected to be a regex (`"*/node_modules*"` ) or a path relative to the project's root directory (`"/README.md"`)

#### **Maven profiles**
`mavenProfiles: <string[]>`
- Only applicable to Microprofile and Spring projects
- A list of profiles can be set if a project requires additional Maven profiles to be used when Codewind issues Maven commands
- It is not advised to overwrite or remove the microclimate profile
- Maven profiles can be used in conjunction with Maven properties

#### **Maven properties**
`mavenProperties: <string[]>`
- Only for Microprofile and Spring projects
- Maven properties can be entered in the form `key=value`
- It is not advised to overwrite the microclimate property
- Maven properties can be used in conjunction with Maven profiles

***

[Next: Restart and debug](mdt-vsc-commands-restart-and-debug.html)

[Back to the commands overview](mdt-vsc-commands-overview.html)

[Back to the VS Code tools overview](mdt-vsc-overview.html)

[Troubleshooting](mdt-vsc-troubleshooting.html)
