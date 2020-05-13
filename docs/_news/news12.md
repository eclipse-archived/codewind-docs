---
layout: news
title: New for Codewind 0.12.0
description: New for Codewind 0.12.0
keywords: news, new, updates, update, version, IntelliJ
duration: 1 minute
permalink: news12
---

## Codewind 0.12.0
Thursday 14, May 2020

#### ✨ New Features and Highlights for 0.12.0 ✨
**IntelliJ Tech Preview Updates**
We're working to bring you a true Codewind experience with IntelliJ and are pleased to present:

- Codewind for IntelliJ [supports the application metrics dashboard and the **Inject metrics** function](https://github.com/eclipse/codewind/issues/2386).
- You can [open a shell into the running application container](https://github.com/eclipse/codewind/issues/2030).
- You will be [notified of log changes, even when the log is not currently selected](https://github.com/eclipse/codewind/issues/2269).
- If you open a project in a new window with certain actions, [the project is pre-selected in the Codewind view](https://github.com/eclipse/codewind/issues/2037).

**Codewind Quick Guides**

Introducing quick guides! Now that we have [this framework in place](https://github.com/eclipse/codewind-docs/pull/553), we hope to make it easier for you to get started. Check out our first two available [guides](https://www.eclipse.org/codewind/guides.html) today!

Need a quick guide to help you with a particular project? Let us know or help write one by contributing in [GitHub](https://github.com/eclipse/codewind). 

**IDEs**
##### VS Code and Eclipse
- [The **Open Container Shell** action is available for Remote/Kubernetes projects](https://github.com/eclipse/codewind/issues/822).
    - You must have `kubectl` or `oc` installed locally.
    - The current kubectl context must point to the cluster with the Codewind instance. 
    - You must be logged in and have permissions on the cluster to run ```kubectl exec``` into the Codewind application pods. 

##### VS Code
- Codewind projects that are also VS Code workspace folders are [removed from the workspace when the project is deleted](https://github.com/eclipse/codewind/issues/2662).


##### Eclipse
- When adding a template source, you can [use the **Auto Fill from URL** button to fill in the name and description if they are available from the URL](https://github.com/eclipse/codewind/issues/2697). 

#### List of Fixes
- In Codewind for Eclipse:
    - A timeout error was shown when canceling the debug attach job. This is fixed, and it [no longer clears out the launch when a debug session is terminated, so you can still view the console output for the launch](https://github.com/eclipse/codewind/issues/2790). 
    - In the **Add Existing Project** wizard, [if you use the **Browse** button to select a project from the file system, the radio button no longer switches back to selecting a project from the workspace](https://github.com/eclipse/codewind/issues/2704).
    - [The **New Connection** wizard is visually enhanced to fit with the dark mode setting in Linux](https://github.com/eclipse/codewind/issues/2645).
- In Codewind for VS Code:
    - [A warning appears when no template sources are enabled](https://github.com/eclipse/codewind-vscode/pull/563). 
    - [Accidentally inputting the wrong credentials no longer sends the remote connection into an authentication loop](https://github.com/eclipse/codewind-vscode/pull/566).
    - [An improved error message appears when trying to restart a project in an invalid state](https://github.com/eclipse/codewind-vscode/pull/568).
    - [An error message appears if a problem is encountered when fetching the build properties](https://github.com/eclipse/codewind/issues/2610).
    - [The two broken links in the VS Code Welcome Page are fixed](https://github.com/eclipse/codewind/issues/2843).
    - [If Docker is not running, Codewind goes into stopped state](https://github.com/eclipse/codewind/issues/2840).
- The [`Appsody-extension` is updated from 0.6.0 to 0.6.1](https://github.com/eclipse/codewind-appsody-extension/pull/103).
- The [`codewind-openapi-eclipse` version is updated](https://github.com/eclipse/codewind-openapi-eclipse/pull/149).
- The [`codewind-openapi-vscode` version is updated](https://github.com/eclipse/codewind-openapi-vscode/pull/96).


