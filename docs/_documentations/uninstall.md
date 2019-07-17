---
layout: docs
title: Uninstalling Codewind
description: How to uninstall Codewind
keywords: uninstall, remove, delete, macos, windows, linux, IBM Cloud Private, uninstall on Linux or MacOS, uninstall on Windows, uninstall Codewind in Kubernetes, Kubernetes
duration: 1 minute
permalink: uninstall
type: document
order: 80
parent: root
---

# Uninstalling Codewind locally

- [Uninstalling Codewind from VS Code](mdt-vsc-uninstall.html)
- [Uninstalling Codewind from Eclipse](mdteclipseuninstall.html)

# Uninstalling Codewind on Kubernetes

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
