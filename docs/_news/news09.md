---
layout: news
title: New for Codewind 0.9.0
description: New for Codewind 0.9.0
keywords: news, new, updates, update, version, hybrid
duration: 1 minute
permalink: news09
---

## Codewind 0.9.0
Tuesday, 18 February 2020

#### ✨ New Features and Highlights for 0.9.0 ✨
Introducing the tech preview of Codewind on the IntelliJ IDE! We want to make our tools available to as many developers as possible in their preferred IDEs. Many people have asked about IntelliJ, as it is a popular option among Java developers, so we are working hard to bring the effortless Codewind experience to IntelliJ. With this tech preview, you can now use Codewind on IntelliJ locally.
![](images/imagesfornews/intelliJ-techpreview.gif){:width="800"}

**IDEs (Both Eclipse and VS Code)**
- Detailed application status notifications provide a [link to documentation if a problem is encountered](https://github.com/eclipse/codewind/issues/1812).
- Depending on the level of support, you can [change the logging level in the IDE](https://github.com/eclipse/codewind/issues/1251). In Eclipse, you can enable support features and set the loggin level in Codewind preferences. In VS Code, you can access this configuration in the command palette - `Set Codewind Server Logging Level`.

**VS Code**
- If a remote connection disconnects due to network changes, such as the local machine going into sleep mode or switching networks, you can simply [refresh to reconnect](https://github.com/eclipse/codewind/issues/1776). 

**Eclipse**
- When using Codewind remotely in Eclipse, you can [create a new project and select the remote connection](https://github.com/eclipse/codewind/issues/2014). You can also [choose to add a project to a specific remote connection if there is more than one connection](https://github.com/eclipse/codewind/issues/1695). 
- The Add Image Registry dialog includes a [drop down of common registry addresses](https://github.com/eclipse/codewind/issues/1907). 

#### List of Fixes
- The build application queue [supports applications that are being updated](https://github.com/eclipse/codewind/issues/1563), not just project creation or restart.
- You can [define references to files that reside outside of a project](https://github.com/eclipse/codewind/issues/1399) by creating the .cw-refpaths.json file in your project to specify the path reference.
- [`Inject Metrics` is supported for Generic Docker Java projects](https://github.com/eclipse/codewind-vscode/pull/425). Previously, the action appeared on all of these projects, but [only worked on Open Liberty](https://github.com/eclipse/codewind/issues/1509).
- Creating an `Open Liberty` project [automatically configures the project with the generated API in Eclipse](https://github.com/eclipse/codewind-openapi-eclipse/pull/131).
- Support has been added to [disable application status tracking](https://github.com/eclipse/codewind/issues/1862). This is useful for projects that do not have an endpoint to indicate status. 
- [Stability fixes](https://github.com/eclipse/codewind-appsody-extension/pull/83) for [debugging Appsody projects](https://github.com/eclipse/codewind/issues/1708).
- Restructured the [`Application Overview page in Eclipse`](https://github.com/eclipse/codewind/issues/1698) to be more consistent with VS Code for extension familiarity across IDEs.
- Updated Appsody binary to 0.5.8
- Che extension startup behaviour has improved, and you should not see the “Codewind connected but was not ready after 90 seconds” anymore (unless the network is very slow).
- There were styling updates to all webviews, including a better reaction to the theme. Instead of using grey icons for all themes, black and white icons are used and adjust to the theme. There were also fixes to the remote connection settings page - it should react better when the window is resized horizontally. 