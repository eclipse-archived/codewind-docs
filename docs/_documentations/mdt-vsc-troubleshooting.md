---
layout: docs
title: "Troubleshooting: Tools for VS Code"
description: "Troubleshooting: Tools for VS Code"
keywords: tools, vscode, visual, studio, code, faq, trouble, troubleshoot, problem, bug, Codewind for VS Code troubleshooting, extension logs, stuck, project status, No ESLint warnings or errors for Node.js projects, debug
duration: 1 minute
permalink: mdt-vsc-troubleshooting
type: document
order: 9
parent: mdt-vsc-overview
---

# Troubleshooting: Codewind for VS Code

If you experience a problem that is not addressed on this page or on the [Codewind troubleshooting page](troubleshooting), open an issue on the [GitHub repository](https://github.com/eclipse/codewind-vscode/issues).

You can also post questions on our [Mattermost channel](https://mattermost.eclipse.org/eclipse/channels/eclipse-codewind).

***

### **Finding the extension logs**

If you report an issue, you will be asked to upload your logs.

1. In VS Code, open **Help** > **Toggle Developer Tools**.
2. Go to the **Console** tab.
3. Enter *codewind.log* in the **Filter** box:
<br>![Log location](dist/images/cdt-vsc/logs-location.png)
4. Upload the contents of the log file with your issue report.

***

### **Build succeeded, but project is stuck in the Stopped state**
If your project fails to start, check the application logs for anything that might indicate the failure.
If your application does not have problems, you can [check the Codewind logs](troubleshooting#check-the-logs).
If the error persists, you can reset the project by [disabling and re-enabling](mdt-vsc-commands-project#enable-or-disable-project) the project.

### **No ESLint warnings or errors for Node.js projects**
Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and follow the instructions to activate the extension.

***

## **Debug**
### **Liberty project remains in the Starting - Debug state**
Liberty servers started in **Debug** mode do not start until the debugger attaches. Run the [attach debugger command](mdt-vsc-commands-restart-and-debug#attach-debugger), and the server starts. You can check the application logs to see if the server is starting.
### **Debugger attach fails with the message "Configured debug type "java" is not supported"**
Install and enable the [Java Extension Pack](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack).
### **Debugger fails to attach after restarting project into Debug mode**
Run the [attach debugger command](mdt-vsc-commands-restart-and-debug#attach-debugger) again. If the issue persists after a few attempts, restart the project in **Debug** mode a second time.
