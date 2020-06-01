---
layout: news
title: New for Codewind 0.9.0
description: New for Codewind 0.9.0
keywords: news, new, updates, update, version, IntelliJ
duration: 1 minute
permalink: news09
---

## Codewind 0.9.0
Thursday, 20 February 2020

#### ✨ New Features and Highlights for 0.9.0 ✨
Introducing the tech preview of Codewind on the IntelliJ IDE! We want to make our tools available to as many developers as possible in their preferred IDEs. Many people have asked about IntelliJ, as it is a popular option among Java developers, so we are working hard to bring the effortless Codewind experience to IntelliJ. With this tech preview, you can now use Codewind on IntelliJ locally.

![video of new feature, creating a new project with IntelliJ](images/imagesfornews/intelliJ-techpreview.gif){:width="800"}

Try it out [here](intellij-getting-started.html).

**IDEs (Both Eclipse and VS Code)**
- Detailed application status notifications provide a [link to documentation if a problem is encountered](https://github.com/eclipse/codewind/issues/1812).
- Depending on the level of support, you can [change the logging level in the IDE](https://github.com/eclipse/codewind/issues/1251). In Eclipse, first enable support features in the Codewind preferences and then right-click on the connection in the Codewind Explorer view and select `Codewind Server Log Level`. In VS Code, you can access this configuration in the command palette, `Set Codewind Server Logging Level`.

**VS Code**
- If a remote connection disconnects due to network changes, such as the local machine going into sleep mode or switching networks, you can simply [refresh to reconnect](https://github.com/eclipse/codewind/issues/1776). 
- There were styling updates to all web views, including a better reaction to the theme. Instead of using grey icons for all themes, black and white icons are used and adjust to the theme. There were also fixes to the remote connection settings page. It reacts better when the window is resized horizontally. 
- A `Welcome Page` has been added to help new users get started!
    - From the welcome page, you can click the `Codewind View` link or the Codewind View screenshot to open the Codewind view.
    - Instructions and links are provided to make it easy to install Codewind on your local Docker Desktop, create connections to a remote Codewind instance, and create new and add existing projects.

**Eclipse**
- When working with more than one Codewind connection in Eclipse, you can now [select the connection to use when creating a new project](https://github.com/eclipse/codewind/issues/2014) or [select the connection use when adding an existing project](https://github.com/eclipse/codewind/issues/1695).
- The Add Image Registry dialog includes a [drop-down of common registry addresses](https://github.com/eclipse/codewind/issues/1907). 
- Restructured the [`Application Overview page in Eclipse`](https://github.com/eclipse/codewind/issues/1698) for an improved user experience.

#### List of Fixes
- The build application queue [supports applications that are being updated](https://github.com/eclipse/codewind/issues/1563), not just project creation or restart.
- You can [define references to files that reside outside of a project](https://github.com/eclipse/codewind/issues/1399) by creating the `.cw-refpaths.json` file in your project to specify the path reference.
- We [enable](https://github.com/eclipse/codewind-vscode/pull/425) and [support](https://github.com/eclipse/codewind/issues/1509) metrics injection for `Open Liberty` projects.
- Creating an `Open Liberty` project [automatically configures the project with the generated API in Eclipse](https://github.com/eclipse/codewind-openapi-eclipse/pull/131).
- Support has been added to [disable application status tracking](https://github.com/eclipse/codewind/issues/1862). This is useful for projects that do not have an endpoint to indicate status. 
- [Stability fixes](https://github.com/eclipse/codewind-appsody-extension/pull/83) for [debugging Appsody projects](https://github.com/eclipse/codewind/issues/1708).
- Updated Appsody binary to 0.5.8.
- Che extension startup behaviour has improved, and you should not see the “Codewind connected but was not ready after 90 seconds” anymore (unless the network is very slow).
