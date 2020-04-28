---
layout: docs
title: Debugging in Codewind
description: Debugging in Codewind
keywords: debug, mode, applications, application, project, menu, view, attaching, attach, actions, action, run, restart in debug mode, attach debugger, debug process, debugging process
duration: 1 minute
permalink: debugging
type: document
---

# Debugging in Codewind

Complete the following steps to debug in Codewind applications:

1. In the Codewind view, right-click a project and select **Restart in Debug Mode** from the menu.
2. Wait for the project state to switch to **Debugging**. After it switches to Debugging mode, the debugger is attached.
3. When in Debugging mode and when the debugger is attached, you can debug your application. Perform debug actions that are supported by the IDE that you are using.
4. While the project is still in Debugging mode, if the debug process is detached, right-click your project and select **Attach Debugger** from the menu. This action reattaches the debugger to the debug process, and you can continue with debugging your application.
5. To switch back to run mode, right-click your project and select **Restart in Run Mode** from the menu.

## Using Java hot code replace while debugging
If you want to use Java hot code replace and change your code while you debug, disable automatic builds.
1. To disable automatic builds, right-click your project in the Codewind Explorer view and select **Disable Auto Build**.
2. If you want to start a build while automatic builds are disabled, right-click your project and select **Build**.
3. Enable automatic builds again after you finish debugging. To enable automatic builds again, right-click your project and select **Enable Auto Build**.

## Debugging initialization code for Java projects
- If you want to debug initialization code, set breakpoints in the code. You can also set breakpoints in your application code.
- When you debug initialization code, wait for the project state to change to **Debugging** or for the debugger to stop at a breakpoint.
- Normally you can reload your application multiple times to isolate a problem. However, when you debug initialization code, restart your project in debug mode to stop in the code again.

## Debugging Node.js projects
To restart your Node.js application in debug mode, the tools help you launch a debug session in a Chromium based web browser.
1. Right-click the project in the Codewind Explorer view and select **Restart in Debug Mode**.
2. If you are prompted to select a Chromium based web browser for launching the debug session:
    - Select a Chromium based browser from the list of browsers or use the **Manage** link to add one.
    - Optionally, select to always use this browser for Node.js debugging.
	- Click **OK** to continue.
3. Launch a debug session using the information on the **Node.js Debug Inspector URL** dialog:
    - Click **Copy URL to Clipboard** to copy the debug URL.
	- Click **Open Browser** to open the browser you selected in the previous dialog.
	- Paste the URL into the address bar of the browser to start the debug session.