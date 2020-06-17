---
layout: docs
title: Uninstalling Codewind for Eclipse Che
description: How to uninstall Codewind from Eclipse Che. Uninstalling Codewind comprises two steps. First, uninstall Codewind. Then, proceed to uninstall Che.
keywords: uninstall, remove, delete, tools, eclipse, uninstalling Codewind for Eclipse Che, restart Eclipse
duration: 1 minute
permalink: che-uninstall
type: document
order: 70
parent: eclipseoverview
---

# Uninstalling Codewind for Eclipse Che

To uninstall Codewind for Eclipse Che, follow these instructions:

## 1. Uninstall Codewind
1. Navigate to the `Che` dashboard, and select the workspace where Che is running. 
3. Click the **Stop** button to stop the workspace. 
3. Click the **Delete** button to delete it. 

## 2. Uninstall Che
1. Ensure that you have an active Kube context to the cluster where Che is running.
2. Run the following command: `chectl server:delete`
