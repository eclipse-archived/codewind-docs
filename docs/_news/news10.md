---
layout: news
title: New for Codewind 0.10.0
description: New for Codewind 0.10.0
keywords: news, new, updates, update, version, hybrid
duration: 1 minute
permalink: news10
---

## Codewind 0.10.0
Thursday, 19 March 2020

#### ✨ New Features and Highlights for 0.10.0 ✨
**IntelliJ Tech Preview Updates**

As promised, we've continue to work hard on getting the IntelliJ experience up and consistent with our other IDEs. Here are the latest IntelliJ updates:

- [View project log files in IntelliJ](https://github.com/eclipse/codewind/issues/989).
- Open and [view the performance dashboard](https://github.com/eclipse/codewind/issues/2038) for select project types.
- [Enable and disable projects](https://github.com/eclipse/codewind/issues/987).
- You can [simulatneously select and remove multiple projects](https://github.com/eclipse/codewind/issues/2225).
- Create a new project with the [`New Project` menu action](https://github.com/eclipse/codewind-intellij/pull/64)
![](images/imagesfornews/newprojintellij.gif){:width="800"}


**IDEs (Both Eclipse and VS Code)**
- The [Performance Dashboard will always be enabled](https://github.com/eclipse/codewind/issues/2299), even if the project does not have metrics available. 
    - Note that for [projects without metrics, running loads will fail](https://github.com/eclipse/codewind/issues/2384)

**VS Code**
- You can use the profiling extension for [remote connections](https://github.com/eclipse/codewind/pull/2123) and in [Che](https://github.com/eclipse/codewind-vscode/pull/457).
- [The “add to workspace” Project command has been reworked for multi-root workspaces](https://github.com/eclipse/codewind-vscode/pull/484). It will no longer appear on projects that is already a root workspace folder, and will give an overrideable warning if run on a project that is in a subfolder of the workspace.
- The homepage has been updated such that [Project Creation steps (create/add) will be greyed out and unclickable until the actions are allowed](https://github.com/eclipse/codewind/issues/2255). On the Local tab, this means Local Codewind must be started. On the Remote tab, a remote connection must exist.
- The `Remote Connection` settings page layout has been [improved](https://github.com/eclipse/codewind-vscode/pull/476) and is [more responsive](https://github.com/eclipse/codewind/issues/2279).
- [General corrections to Webview links and buttons in Theia](https://github.com/eclipse/codewind-vscode/pull/473)

**Eclipse**
- When adding an existing project to Codewind, [the project type will be selected automatically if there is only one project type to choose from in the `ProjectTypeSelectionPage`](https://github.com/eclipse/codewind-eclipse/issues/319).
- You can use the feature `restart in debug mode` on projects that support it, even if Codewind does not support attaching a debugger for that project type. The debug port will be exposed so you can [set up your own debug session](https://github.com/eclipse/codewind/issues/1252).
- You can [view the pod name and namspace for remote projects in the `Project Overview` page](https://github.com/eclipse/codewind/issues/1525).
- You can [select multiple options in the table of template sources in the `Manage Template Sources` wizard](https://github.com/eclipse/codewind/issues/2353).


#### List of Fixes
- The `codewind appsody extension` binary has been updated from [0.5.8 to 0.5.9](https://github.com/eclipse/codewind-appsody-extension/pull/91)
- [General improvements](https://github.com/eclipse/codewind-docs/pull/462) were made to the `codewind` website.
