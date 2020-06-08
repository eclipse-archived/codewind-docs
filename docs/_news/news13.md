---
layout: news
title: New for Codewind 0.13.0
description: New for Codewind 0.13.0
keywords: news, new, updates, update, version
duration: 1 minute
permalink: news13
---

## Codewind 0.13.0
Thursday 11, June 2020

#### ✨ New Features and Highlights for 0.13.0 ✨

**Codewind Quick Guides**

**IDEs**
##### Eclipse
- **Important:** Codewind 0.13.0 drops support for Eclipse 2019-03 (4.11). The earliest version of Eclipse that is compatible with Codewind 0.13.0 is Eclipse 2019-06 (4.12).
- Codewind for Eclipse includes support for [debugging remote projects](https://github.com/eclipse/codewind/issues/1990).
- Open and view [project log files in the project overview page](https://github.com/eclipse/codewind/issues/3020).
- In Eclipse 2020-03 (4.15) and later, you can [debug Node.js projects directly in Eclipse](https://github.com/eclipse/codewind/issues/2975). If preferred, use the Codewind preferences to go back to using a Chrome-based browser for debugging.
- To learn more about why a push registry is required for remote Codewind style projects, [a link to the documentation is included in related dialogs](https://github.com/eclipse/codewind/issues/2992).
- The Codewind Explorer view displays an indication of project errors and warnings. [Hover over the project to get the details](https://github.com/eclipse/codewind/issues/655).

#### IntelliJ
- The Codewind plug-in requires IntelliJ IDEA 2020.1.1 as the minimum version.

##### VS Code
- A [changelog](https://github.com/eclipse/codewind-vscode/wiki/Changelog) file is linked to the VS Code tools `README` file and is updated for Codewind 0.13.0.

#### List of Fixes
- In Codewind for Eclipse:
  - [A progress monitor appears when certain actions are selected](https://github.com/eclipse/codewind/issues/2997). For example, a progress monitor appears while Manage Template Sources retrieves data from a connection.
  - The local connection [no longer shows a disconnected error when Eclipse is restarted](https://github.com/eclipse/codewind/issues/2963).
  - The [dialog is improved](https://github.com/eclipse/codewind/issues/2924) in the window that appears if you try to add a project that is already deployed on another connection.
  - The `Widget is disposed` exception [no longer appears](https://github.com/eclipse/codewind/issues/2917) when you update the project overview page.
  - When you use the IDE to upgrade Codewind, the IDE [removes the old version of the Codewind CLI](https://github.com/eclipse/codewind/issues/2869).
  - Codewind remembers the state of remote connections, whether connected or disconnected, [when you restart Eclipse](https://github.com/eclipse/codewind/issues/2823).
  - The refresh action on the root element in the Codewind Explorer view [checks for new connections](https://github.com/eclipse/codewind/issues/2832).
  - **Restore defaults** on the Codewind preferences page [resets the fields to their defaults](https://github.com/eclipse/codewind/issues/2836).
- The Performance Dashboard includes new capabilities paneling.
- Run load concurrently against multiple projects.
- Diagnostics collection is included with `cwctl`.
- [Appsody projects can be added to more Docker networks that are specified with a `CW_NETWORKS` environment variable with space-delimited names](https://github.com/eclipse/codewind-appsody-extension/pull/104).
- The [`appsody-extension` is updated from 0.6.1 to 0.6.2](https://github.com/eclipse/codewind-appsody-extension/pull/107).
- The [`codewind-openapi-eclipse` version is updated](https://github.com/eclipse/codewind-openapi-eclipse/pull/152).
- The [`codewind-openapi-vscode` version is updated](https://github.com/eclipse/codewind-openapi-vscode/pull/102).


