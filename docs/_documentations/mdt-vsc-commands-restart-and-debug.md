---
layout: docs
title: "Restart and debug: Tools for VS Code"
description: "Restart and debug: Tools for VS Code"
keywords: tools, vscode, visual, studio, code, commands, project, restart, debug, attach, debugger, Codewind for VS Code restart and debug, commands overview, connection commands, project commands
duration: 1 minute
permalink: mdt-vsc-commands-restart-and-debug
type: document
order: 3
parent: mdt-vsc-commands-overview
---

# Restart and debug: Codewind for VS Code

### **See also:**
- [Commands overview](mdt-vsc-commands-overview)
- [Project commands](mdt-vsc-commands-project)

***

Restart and debug commands are available in the Command Palette and by right-clicking a project in the Codewind view.
You must restart a project in **Debug** mode before you can debug that project.
For a walkthrough of the debug functionality, see the [tutorial](mdt-vsc-tutorial).

## **Restart**
Stop and start your application server. Restart is supported for Microprofile, Spring, and Node.js projects.
Start projects in either **Run** or **Debug** mode. The **Run** mode is the normal mode. This command is the equivalent to clicking the **Restart** button in the Codewind **Overview** page.
The **Attach debugger** command automatically runs when projects restart in the **Debug** mode and reach the **Starting - Debug** state.

You can restart projects only if they are in the **Running**, **Starting**, **Debugging**, or **Starting - Debug** states.

## **Attach debugger**
Run this command on projects that are starting or that have started in **Debug** mode and are in the **Starting - Debug** or **Debugging** states.
This command creates a launch configuration in *.vscode/launch.json* in your workspace for debugging this project. You can edit this configuration. The tools automatically update the port when the server is restarted, but the tools do not modify the other options.
Next, the launch configuration runs, and the VS Code debugger attaches to your application in its Docker container. You can hit breakpoints, see your variables, and use the **Debug Console** to evaluate expressions.

## See also:
- [VS Code debug documentation for Node.js](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
- [VS Code debug documentation for Java](https://code.visualstudio.com/blogs/2017/09/28/java-debug)
- [Debug troubleshooting](mdt-vsc-troubleshooting#debug)

***

[Back to the commands overview](mdt-vsc-commands-overview)

[Back to the VS Code tools overview](mdt-vsc-overview)

[Troubleshooting](mdt-vsc-troubleshooting)
