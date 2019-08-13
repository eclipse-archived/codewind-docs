---
layout: docs
title: Debugging Codewind projects
description: How to debug a Codewind project
keywords: restart, run, debug, attach, tools, eclipse, debugging MicroProfile, debugging Java EE, debugging Spring, debugging Node.js, import project into Eclipse, restarting a project in debug mode, Chromium based web browser, launching a debug session, modifying Node.js debug launch preferences
duration: 1 minute
permalink: mdt-che-debugproject
type: document
order: 50
parent: mdteclipseoverview
---

# Debugging Codewind projects

Codewind for Eclipse supports debugging Microprofile/Java EE and Spring projects. The tools also help you set up a debug session for Node.js projects in a Chromium based browser.

* [Debugging Microprofile/Java EE and Spring projects](#debugging-microprofile/java-ee-and-spring-projects)
* [Debugging Node.js projects](#debugging-nodejs-projects)

## Debugging Microprofile/Java EE and Spring projects

### Prerequisites
1. If you have not done so already, import your project into Eclipse to make the source available to debug.
- Right-click your project in the **Codewind Explorer** view.
- Select **Import Project**.
2. If you need to debug any initialization code, set breakpoints in this code now. You can also set breakpoints in your application code at this time.

### Debugging
1. To restart your Microprofile/Java EE or Spring application in debug mode, right-click on the project in the **Codewind Explorer** view and select **Restart in Debug Mode**.
2. If you did not import your project into Eclipse you are prompted to do so now. Select one of the following:
- **Yes**: To import your project into Eclipse and make the source available for debugging.
- **No**: To continue restarting in debug mode without importing your project. There might be no source available for debugging if you choose this option.
- **Cancel**: To cancel restarting your application in debug mode.
3. Wait for the project state to change to **Debugging** or for the debugger to stop at a breakpoint if you are debugging initialization code. If you have hit a breakpoint in initialization code, skip to step 6.
4. If you have not done so already, set up any breakpoints that you need in your application.
5. Reload your application in the browser or, if you have not already opened it, right-click on the project in the **Codewind Explorer** view and select **Open Application**.
6. Eclipse prompts you to switch to the **Debug** perspective when a breakpoint is hit or you can switch manually by clicking **Window** > **Perspective** > **Open Perspective** > **Debug**. All of the Java debug capabilities provided by Eclipse including various breakpoint types, the **Variables** and **Expression** views, and hot code replace are available to you.
7. You can reload your application multiple times to isolate the problem. However, if you are debugging initialization code, you must restart your project in debug mode to stop in this code again.
8. When you have finished debugging, you can switch back to run mode. Right-click on your project in the **Codewind Explorer** view and select **Restart in Run Mode**.

### Attaching to a project in debug mode

If you detached from the debugger, or you restarted Eclipse, you can attach the debugger without restarting again:

1. Make sure to do any of the setup you need such as importing your project into Eclipse and setting breakpoints. For more information, see [Prerequisites](#prerequisites).
2. Right click on your project in the **Codewind Explorer** view and select **Attach Debugger**. The **Attach Debugger** menu item is only available for Codewind/Java EE or Spring applications in debug mode if a debugger is not already attached.

## Debugging Node.js projects

You can restart your Node.js application in debug mode and the tools help you launch a debug session in a Chromium based web browser:

1. To restart your Node.js application in debug mode, right-click on the project in the **Codewind Explorer** view and select **Restart in Debug Mode**.
2. If you are prompted to select a Chromium based web browser for launching the debug session:
    - Select a Chromium based browser from the list of browsers or use the **Manage** link to add one.
    - Optionally, select to always use this browser for Node.js debugging.
	- Click **OK** to continue.
3. Launch a debug session using the information on the **Node.js Debug Inspector URL** dialog:
    - Click the **Copy URL to Clipboard** button to copy the debug URL.
	- Click the **Open Browser** button to open the browser you selected in the previous dialog.
	- Paste the URL into the address bar of the browser to start the debug session.

### Launching a debug session for a Node.js project in debug mode

You can launch a debug session for a Node.js project that is already in debug mode.

1. Right-click on your project in the **Codewind Explorer** view and select **Launch Debug Session**. This menu item is only available for Node.js projects in debug mode if a debug session is not already started.
2. Follow the steps in [Debugging Node.js projects](#debugging-nodejs-projects) to launch a Node.js debug session, starting with step 2.

### Modifying the Node.js debug launch preferences

To change the browser to use when launching a Node.js debug session, edit the Codewind preferences:

1. Open the Eclipse preferences and select **Codewind** from the list.
2. In the **Select a Chromium based web browser for launching the Node.js debugger** group, choose a Chromium based web browser from the list of browsers or add one using the **Manage** link. You can also clear the selected browser by selecting **No web browser selected** in the list.
3. Click **Apply and Close**.
