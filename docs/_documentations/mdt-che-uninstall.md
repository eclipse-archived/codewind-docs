---
layout: docs
title: Uninstalling Codewind for Eclipse Che
description: How to uninstall Codewind from Eclipse Che
keywords: uninstall, remove, delete, tools, eclipse, uninstalling Codewind for Eclipse Che, restart Eclipse
duration: 1 minute
permalink: mdt-che-uninstall
type: document
order: 70
parent: mdteclipseoverview
---

# Uninstalling Codewind for Eclipse Che

To uninstall Codewind on Kubernetes, follow these instructions:

## Step 1: Stop Che workspaces
1. Access the Che dashboard.
2. Select workspaces in the sidebar on the dashboard.
3. Stop all of the running workspaces and delete them.

## Step 2: Uninstall Che

### OpenShift or OKD
If Che is installed on OpenShift or OKD, follow these instructions:
1. Open the OpenShift dashboard in your browser.
2. Select the project that Eclipse Che was installed into. (The `eclipse-che` project is used by default.)
3. Delete the project to remove Eclispe Che.

### Helm Chart
If Che was installed via its Helm chart, follow these instructions:
1. Open a terminal session.
2. Configure the Kubernetes client API to point to your Kubernetes cluster.
3. Run the following command:
```bash
helm delete <che-release-name> --purge
```
