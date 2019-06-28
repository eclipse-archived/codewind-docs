---
layout: docs
title: Troubleshooting Codewind
description: How to troubleshoot Codewind
keywords: troubleshooting, issues, workaround, common problems, help, tools, eclipse, check the logs, solving common problems, fail, stuck, not rebuild, not showing the correct
duration: 1 minute
permalink: mdteclipsetroubleshooting
type: document
order: 60
parent: mdteclipseoverview
---

# Troubleshooting Codewind

When troubleshooting, check the project in Codewind to make sure the status is what you expect.  If not, refer to [Codewind troubleshooting](troubleshooting).  For Codewind specific problem solving tips, see the following information.

* [Check the logs](#check-the-logs)
* [Solving common problems](#solving-common-problems)

---
## Check the logs
The logs are found in your Eclipse workspace under *.metadata/.log*.

---
# Solving common problems
The following list describes common problems that might affect Codewind.

- [Open application fails](#open-application-fails)
- [Debugger fails to connect](#debugger-fails-to-connect)
- [Application stuck in Starting state](#application-stuck-in-starting-state)
- [Application does not rebuild after making a change](#application-does-not-rebuild-after-making-a-change)
- [Correct project list is not being shown](#correct-project-list-is-not-being-shown)
- [Application is not showing the correct status](#application-is-not-showing-the-correct-status)

## Open application fails
The default browser in Eclipse might not be able to handle the content of your application.  Try using a different browser by clicking on **Window** > **Web Browser**.  Select a browser from the list and try to open the application again.

## Debugger fails to connect
If the debugger fails to connect, you might need to increase the connection timeout:
1. Open the Eclipse preferences and select **Codewind**.
2. Increase the debug connection timeout value and click **Apply and Close**.

## Application stuck in Starting state
The application might be waiting for the debugger to connect. You can resolve this by right-clicking on the project in the **Codewind Explorer** view and selecting **Attach Debugger**.  If the problem occurred because the debugger failed to connect when restarting in debug mode, make sure to increase the debug connection timeout in the Codewind preferences before trying to debug again. For more information see [Debugger fails to connect](#debugger-fails-to-connect).

If the debugger is connected but stopped on a ClassNotFoundException, click on the run button to get past the exception. You might need to click run several times as the exception occurs more than once. To avoid stopping on the exception in the future, open the Eclipse preferences and navigate to **Java** > **Debug**. Uncheck **Suspend execution on uncaught exceptions** and click **Apply and Close**.

If the application is not waiting for the debugger to connect, try restarting the application again. If this does not work, use Codewind to disable the application and then re-enable it.

## Application does not rebuild after making a change
To start a build manually, right click on the application in the **Codewind Explorer** view, and selecting **Build**.  For more information see [Building Codewind projects](mdteclipsebuildproject).

## Correct project list is not being shown
Try refreshing by right-clicking on the **Local Projects** item in the **Codewind Explorer** view and selecting **Refresh**. If this does not solve the problem, there could be an issue with Codewind itself, see [Codewind troubleshooting](troubleshooting).

## Application is not showing the correct status
Try refreshing the application by right-clicking on it in the **Codewind Explorer** view and selecting **Refresh**. If this does not solve the problem, there could be an issue with Codewind itself, see [Codewind troubleshooting](troubleshooting).
