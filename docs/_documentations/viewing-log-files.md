---
layout: docs
title: Viewing log files
description: Viewing log files
keywords: troubleshooting, issues, workaround, logs, common problems, Mac, Windows, Linux, Theia, Docker, help, open a new issue, contact us, help, check the logs, mustgather
duration: 1 minute
permalink: viewing-log-files
type: document
order: 60
parent: root
---

# Viewing log files

Log files can help you to diagnose the issue when something goes wrong. Right-click the project in the **Codewind Explorer** view, and select **Show Log Files**. If log files are available, this action displays a list of log files. Click a log file to open it, or click **Show All** to open all available log files. The individual log files are toggle actions. Click the log file again to remove the log file, or click **Hide All** to remove all log files from the **Console** view.

## Gathering all available log files

Log files are available to help determine the health or to diagnose isses with your environment. Use the `cwctl mustgather` CLI command to collect all available log files and environment information from your installation for diagnostic purposes. You can find the `cwctl` CLI in your HOME directory under the `~/.codewind/<version>` path.  

The format of the command is: 
`cwctl mustgather [command options] [arguments...]`

Command options are:
* --`eclipseWorkspaceDir/-e <value>` - The location of your Eclipse workspace directory if using the Eclipse IDE (default: "")
* --`quiet/-q` - Turn off console messages
* --`projects/-p` - Collect project containers information
* --`nozip/-n` - Does not create collection zip and leaves individual collected files in place
* --`clean` - Removes the mustgather directory and all its contents from the Codewind home directory

For more information about the `cwctl mustgather` command, type `cwctl help mustgather`, or see the [mustgatherCli documentation](https://github.com/eclipse/codewind-installer/blob/master/README.md#mustgathermg).
