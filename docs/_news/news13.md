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
##### Eclipse and VS Code
- Codewind includes support for [debugging remote projects](https://github.com/eclipse/codewind/issues/1990).

##### Eclipse
- **Important:** Codewind 0.13.0 drops support for Eclipse 2019-03 (4.11). The earliest version of Eclipse that is compatible with Codewind 0.13.0 is Eclipse 2019-06 (4.12).
- Open and view [project log files in the project overview page](https://github.com/eclipse/codewind/issues/3020).
- In Eclipse 2020-03 (4.15) and later, you can [debug Node.js projects directly in Eclipse](https://github.com/eclipse/codewind/issues/2975). If preferred, use the Codewind preferences to go back to using a Chrome-based browser for debugging.
- To learn more about why a push registry is required for remote Codewind style projects, [a link to the documentation is included in related dialogs](https://github.com/eclipse/codewind/issues/2992).
- The Codewind Explorer view displays an indication of project errors and warnings. [Hover over the project to get the details](https://github.com/eclipse/codewind/issues/655).

#### IntelliJ
- The Codewind plug-in requires IntelliJ IDEA 2020.1.1 as the minimum version.

##### VS Code
- A [changelog](https://github.com/eclipse/codewind-vscode/wiki/Changelog) file is linked to the VS Code tools `README` file and is updated for Codewind 0.13.0.
- The [`Codewind: Capture Diagnostics` command](https://github.com/eclipse/codewind/issues/2851) executes `cwctl diagnostics` to capture VS Code and Codewind logs. The `.zip` file that this command creates is uploaded with bug reports.
- If you run a load test through the Performance Dashboard, [the load runner status appears in a VS Code notification](https://github.com/eclipse/codewind/issues/2739).
- After you create a project, [the project logs appear as they become available](https://github.com/eclipse/codewind/issues/2755). If you want, you can also disable the log appearance by setting your preferences.
- [Manage and view project logs that are currently available in the project overview page](https://github.com/eclipse/codewind/issues/2755).
- A modified version of the [`Codewind: Manage Logs` command is available in Che](https://github.com/eclipse/codewind/issues/2755).
- In the background, Codewind tries to [reconnect to a remote connection](https://github.com/eclipse/codewind/issues/2640#issuecomment-632896965) that it lost the connection to. If your network connection or a proxy connection is lost briefly but then restored, the connection reconnects after a short delay.
- [If you delete an active project from the disk](https://github.com/eclipse/codewind/issues/2278), Codewind [deletes it automatically](https://github.com/eclipse/codewind/issues/2772).
- Template source addition and removal is [reported immediately](https://github.com/eclipse/codewind/issues/2776).
- [A warning appears if a project directory is added to multiple connections](https://github.com/eclipse/codewind/issues/2922). Adding a project directory to multiple connections is still allowed.
- If you disable remote connections, they [remain disabled after you restart VS Code](https://github.com/eclipse/codewind/issues/2823).
- The location of the Codewind extension logs is [reported at the beginning of the Codewind output stream](https://github.com/eclipse/codewind-vscode/pull/600).
- The Codewind output stream [logs timestamps and time elapsed for each command](https://github.com/eclipse/codewind-vscode/pull/607/commits/bb55fe7f2c5ea5fc5e92962f5a83ce960d768e0e).

#### List of Fixes
- In Codewind for Eclipse and VS Code:
  - When you use the IDE to upgrade Codewind, the IDE [removes the old version of the Codewind CLI](https://github.com/eclipse/codewind/issues/2869) from the disk to save space.
- In Codewind for Eclipse:
  - [A progress monitor appears when certain actions are selected](https://github.com/eclipse/codewind/issues/2997). For example, a progress monitor appears while Manage Template Sources retrieves data from a connection.
  - The local connection [no longer shows a disconnected error when Eclipse is restarted](https://github.com/eclipse/codewind/issues/2963).
  - The [dialog is improved](https://github.com/eclipse/codewind/issues/2924) in the window that appears if you try to add a project that is already deployed on another connection.
  - The `Widget is disposed` exception [no longer appears](https://github.com/eclipse/codewind/issues/2917) when you update the project overview page.
  - Codewind remembers the state of remote connections, whether connected or disconnected, [when you restart Eclipse](https://github.com/eclipse/codewind/issues/2823).
  - The refresh action on the root element in the Codewind Explorer view [checks for new connections](https://github.com/eclipse/codewind/issues/2832).
  - **Restore defaults** on the Codewind preferences page [resets the fields to their defaults](https://github.com/eclipse/codewind/issues/2836).
- In Codewind for VS Code:
  - [Project files can be deleted on Windows](https://github.com/eclipse/codewind/issues/2456). Also, a warning message appears if the extension is going to reload because the workspace folders are changed.
  - [Some of the colors in the webviews are updated because they changed in VS Code 1.45](https://github.com/eclipse/codewind-vscode/pull/596). Also, the table header in the Template Sources and Image Registry pages is fixed.
  - [Cancel a connection that connects after restarting VS Code](https://github.com/eclipse/codewind/issues/2824).
  - [Webviews close when the extension is deactivated](https://github.com/eclipse/codewind/issues/2878).
- The Performance Dashboard includes new capabilities paneling.
- Run load concurrently against multiple projects.
- Diagnostics collection is included with `cwctl`.
- [Appsody projects can be added to more Docker networks that are specified with a `CW_NETWORKS` environment variable with space-delimited names](https://github.com/eclipse/codewind-appsody-extension/pull/104).
- The [`appsody-extension` is updated from 0.6.1 to 0.6.2](https://github.com/eclipse/codewind-appsody-extension/pull/107).
- The [`codewind-openapi-eclipse` version is updated](https://github.com/eclipse/codewind-openapi-eclipse/pull/152).
- The [`codewind-openapi-vscode` version is updated](https://github.com/eclipse/codewind-openapi-vscode/pull/102).


