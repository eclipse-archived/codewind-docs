---
layout: news
title: New for Codewind 0.14.0
description: New for Codewind 0.14.0
keywords: news, new, updates, update, version
duration: 1 minute
permalink: news14
---

## Codewind 0.14.0
Thursday 9, July 2020

#### ✨ New Features and Highlights for 0.14.0 ✨

##### Eclipse, IntelliJ, and VS Code
- With [secure template sources](https://github.com/eclipse/codewind/issues/2647), add template sources that require authentication.
  - When you add a template source repository, provide authentication with a username and password or use an access token.
  - You can also edit template sources to update credentials.

##### Eclipse and VS Code
- Link Codewind projects with [project linking](https://github.com/eclipse/codewind/issues/2852).
  - When you link a project to another project, the project that is the link target has the other project's hostname exposed in an environment variable that you define.
  - For more information, see [Linking your projects](./linking-your-projects.html).

##### IntelliJ
- [Manage template sources in IntelliJ](https://github.com/eclipse/codewind/issues/985).

##### VS Code
- The [changelog](https://github.com/eclipse/codewind-vscode/wiki/Changelog#0140-july-2020) file is updated for Codewind 0.14.0. 
- The Project Overview page underwent [another visual update](https://github.com/eclipse/codewind-vscode/pull/620).
- You can [right-click many fields](https://github.com/eclipse/codewind/issues/1153) in the Project Overview and Template Sources pages to copy the values.

#### List of Fixes
- In Codewind for VS Code:
    - [After you manually edit the template sources in the Template Source Manager, you won't be prompted to select one in the Command Palette](https://github.com/eclipse/codewind/issues/3165).
    - [The error no longer occurs if you create a remote Node.js Express application in Codewind 0.13.0](https://github.com/eclipse/codewind/issues/3158).