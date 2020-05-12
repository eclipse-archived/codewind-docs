---
layout: news
title: New for Codewind 0.11.0
description: New for Codewind 0.11.0
keywords: news, new, updates, update, version, IntelliJ
duration: 1 minute
permalink: news11
---

## Codewind 0.11.0
Friday, 17 April 2020

You might have noticed we skipped 0.10.0, but it's because we are committed to making the best tooling available to you. Our last development cycle just needed a little more love. 💕

#### ✨ New Features and Highlights for 0.11.0 ✨
**IntelliJ Tech Preview Updates**

We've continued to work hard on getting the IntelliJ experience up and consistent with our other IDEs. Here are the latest IntelliJ updates:

- [IntelliJ supports debugging projects](https://github.com/eclipse/codewind/issues/990).
- [View project log files in IntelliJ](https://github.com/eclipse/codewind/issues/989).
- Open and [view the performance dashboard](https://github.com/eclipse/codewind/issues/2038) for select project types.
- [Enable and disable projects](https://github.com/eclipse/codewind/issues/987).
- [Simultaneously select and remove multiple projects](https://github.com/eclipse/codewind/issues/2225).
- Create a new project with the [**New Project** menu action](https://github.com/eclipse/codewind-intellij/pull/64).

![video of new feature, creating a new project with IntelliJ](images/imagesfornews/newprojintellij.gif){:width="800"}

**Codewind Website**
- We are pleased to announce that our blogs now have a [home](https://www.eclipse.org/codewind/blog.html) on our website! 🏡

**IDEs**
##### VS Code, Eclipse, and IntelliJ
- [Appsody projects no longer show build status since these projects do not have a build phase](https://github.com/eclipse/codewind/issues/2052). 

##### VS Code and Eclipse Che
- The Codewind extension downloads and activates significantly faster. [The extension size is reduced by 98% to 1.6 MB](https://github.com/eclipse/codewind/issues/1060). 
- The cwctl and appsody binaries are automatically downloaded from the internet when the [extension is activated for the first time](https://github.com/eclipse/codewind-vscode/pull/506). 
- The [Codewind extension starts up faster](https://github.com/eclipse/codewind/issues/2280) now that [the extension is bundled through Webpack](https://github.com/eclipse/codewind-vscode/pull/536).

##### VS Code and Eclipse
- Image registries can be managed on the local connection.
    - [Projects that pull from private image registries can be created locally](https://github.com/eclipse/codewind/issues/1306). 
    - There is no push registry for the local connection because [images are managed by Docker Desktop and never leave the user's machine](https://github.com/eclipse/codewind/issues/2588).
- The [Performance Dashboard is always enabled](https://github.com/eclipse/codewind/issues/2299) even if the project does not have metrics available. 
    - Note that for [projects without metrics, running loads fail](https://github.com/eclipse/codewind/issues/2384).

##### VS Code
- You can use the profiling extension for [remote connections](https://github.com/eclipse/codewind/pull/2123) and in [Che](https://github.com/eclipse/codewind-vscode/pull/457).
- [The **Add to Workspace** project command is reworked for multi-root workspaces](https://github.com/eclipse/codewind-vscode/pull/484). It no longer appears on projects that are already in the root workspace folder and gives an overrideable warning if run on a project that is in a subfolder of the workspace.
- The homepage is updated so that [the **Create** and **Add** project creation steps are greyed out and unclickable until the actions are allowed](https://github.com/eclipse/codewind/issues/2255). On the **Local** tab, local Codewind must be started. On the **Remote** tab, a remote connection must exist.
- The **Remote Connection** settings page layout is [improved and more responsive](https://github.com/eclipse/codewind-vscode/pull/476).
- [Corrections were made to webview links and buttons](https://github.com/eclipse/codewind-vscode/pull/473).

##### Eclipse
- After you install Codewind for Eclipse and restart the Eclipse IDE, the Eclipse welcome page shows the Codewind for Eclipse link. Clicking this link closes the Eclipse welcome page and opens the Codewind Explorer view and shows the Codewind welcome page in the editor view. See the Quick Start section of the Codewind welcome page to get started with Codewind. The Learn section has useful links for learning more about interacting with Codewind through the IDE.
- When you add an existing project to Codewind, [the project type is selected automatically if there is only one project available in the **Project Type Selection** page](https://github.com/eclipse/codewind-eclipse/issues/319).
- You can **Restart in Debug Mode** for projects that support this feature, even if Codewind does not support attaching a debugger for that project type. The debug port is exposed so you can [set up your own debug session](https://github.com/eclipse/codewind/issues/1252).
- You can [view the pod name and namspace for remote projects in the **Project Overview** page](https://github.com/eclipse/codewind/issues/1525).
- You can [select multiple entries in the table of template sources in the **Manage Template Sources** wizard](https://github.com/eclipse/codewind/issues/2353).

#### List of Fixes
- [The VS Code webview font is fixed and loads properly](https://github.com/eclipse/codewind-vscode/pull/507).
- In VS Code, the [**Create Project** wizard remembers the last used directory](https://github.com/eclipse/codewind/issues/2413) from the previous project added or created. 
- The [input boxes for Project Name and Registry namespace grab keyboard focus in VS Code](https://github.com/eclipse/codewind/issues/2330).
- In Eclipse, [if the **project create** or **add project** function times out or is cancelled, any project files created so far are cleaned up. The project create timeout is also increased](https://github.com/eclipse/codewind/issues/2601).
- The Codewind Appsody extension binary is updated from [0.5.8 to 0.5.9](https://github.com/eclipse/codewind-appsody-extension/pull/91) to [0.6.0](https://github.com/eclipse/codewind-appsody-extension/pull/89/). At 0.6.0, Appsody is able to do multiple volume binding. 
- [General improvements](https://github.com/eclipse/codewind-docs/pull/462) were made to the [Codewind website](https://www.eclipse.org/codewind/).
- [General improvements were made to the remote connections page](https://github.com/eclipse/codewind/issues/2279).