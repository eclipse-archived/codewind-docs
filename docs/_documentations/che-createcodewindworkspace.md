---
layout: docs
title: Creating a Codewind workspace in Che
description: Creating a Codewind workspace in Che
keywords: build, deploy, install, installing, installation, chart, Helm, develop, cloud, public cloud, services, command line, cli, command, start, stop, update, open, delete, options, operation, devops
duration: 1 minute
permalink: che-createcodewindworkspace
type: document
---

# Creating a Codewind workspace in Che
Use Codewind with Che workspaces to develop your application in a single location.

### Creating the Codewind workspace with a devfile
Codewind includes a ready-to-use devfile with its plug-ins. Complete the following steps to create a Codewind workspace: 
1. Log in to Che. Che loads.
2. Go to **Workspaces** and click **Add Workspace**.
3. Click **Import Devfile**.
4. From **Source**, click **YAML**.
5. Go to the link [codewind-che-plugin/0.13.0/devfile.yaml](https://raw.githubusercontent.com/eclipse/codewind-che-plugin/0.13.0/devfiles/0.13.0/devfile.yaml) and copy and paste the contents into the YAML text box in your Che workspace.
6. Click **Create & Open**.

For more sample devfiles, see [`codewind-templates/devfiles/`](https://github.com/kabanero-io/codewind-templates/tree/master/devfiles).

Next step: [Creating your first project with Codewind for Eclipse Che](che-createfirstproject.html)
