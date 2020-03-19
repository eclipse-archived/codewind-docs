---
layout: news
title: New for Codewind 0.10.0
description: New for Codewind 0.10.0
keywords: news, new, updates, update, version, hybrid
duration: 1 minute
permalink: news10
---

## Codewind 0.10.0
Friday, 20 March 2020

#### ✨ New Features and Highlights for 0.10.0 ✨
**IntelliJ Tech Preview Updates**

We've continued to work hard on getting the IntelliJ experience up and consistent with our other IDEs. Here are the latest IntelliJ updates:

- [View project log files in IntelliJ](https://github.com/eclipse/codewind/issues/989).
- Open and [view the performance dashboard](https://github.com/eclipse/codewind/issues/2038) for select project types.
- [Enable and disable projects](https://github.com/eclipse/codewind/issues/987).
- [Simultaneously select and remove multiple projects](https://github.com/eclipse/codewind/issues/2225).
- Create a new project with the [**New Project** menu action](https://github.com/eclipse/codewind-intellij/pull/64).
![](images/imagesfornews/newprojintellij.gif){:width="800"}

**IDEs (Both Eclipse and VS Code)**
- The [Performance Dashboard is always enabled](https://github.com/eclipse/codewind/issues/2299) even if the project does not have metrics available. 
    - Note that for [projects without metrics, running loads fail](https://github.com/eclipse/codewind/issues/2384).

**VS Code**
- You can use the profiling extension for [remote connections](https://github.com/eclipse/codewind/pull/2123) and in [Che](https://github.com/eclipse/codewind-vscode/pull/457).
- [The **add to workspace** project command is reworked for multi-root workspaces](https://github.com/eclipse/codewind-vscode/pull/484). It no longer appears on projects that are already in the root workspace folder and gives an overrideable warning if run on a project that is in a subfolder of the workspace.
- The homepage is updated so that [the **create** and **add** project creation steps are greyed out and unclickable until the actions are allowed](https://github.com/eclipse/codewind/issues/2255). On the **Local** tab, local codewind must be started. On the **Remote** tab, [a remote connection must exist](https://github.com/eclipse/codewind/issues/2279).
- The **Remote Connection** settings page layout is [improved and more responsive](https://github.com/eclipse/codewind-vscode/pull/476).
- [Miscellaneous corrections have been made to Webview links and buttons](https://github.com/eclipse/codewind-vscode/pull/473)

**Eclipse**
- When you add an existing project to Codewind, [the project type is selected automatically if there is only one project available in the `Project Type Selection` page](https://github.com/eclipse/codewind-eclipse/issues/319).
- You can **restart in debug mode** for projects that support this feature, even if Codewind does not support attaching a debugger for that project type. The debug port is exposed so you can [set up your own debug session](https://github.com/eclipse/codewind/issues/1252).
- You can [view the pod name and namspace for remote projects in the **Project Overview** page](https://github.com/eclipse/codewind/issues/1525).
- You can [select multiple entries in the table of template sources in the **Manage Template Sources** wizard](https://github.com/eclipse/codewind/issues/2353).


#### List of Fixes
- The `codewind appsody extension` binary is updated from [0.5.8 to 0.5.9](https://github.com/eclipse/codewind-appsody-extension/pull/91).
- [General improvements](https://github.com/eclipse/codewind-docs/pull/462) were made to the [Codewind website](https://www.eclipse.org/codewind/).
