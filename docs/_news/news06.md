---
layout: news
title: New for Codewind 0.6.0
description: New for Codewind 0.6.0
keywords: news, new, updates, update, version
duration: 1 minute
permalink: news06
---

## Codewind 0.6.0
Thursday 21 November 2019

#### Codewind workspace updates

**VS Code**
- You no longer need to place projects in the `codewind-workspace`.
- Do not create projects in the `~/codewind-data/` or `C:\codewind-data` directories. User configuration files are now kept in `~/.codewind/` or `C:\Users\<user>\.codewind\`.
- If you want to move an existing project, remove it from Codewind without deleting the files. Then, run the `Add Existing Project` command to reintroduce it to its new location.
- In VS Code, to skip the **Select a parent directory** step when you create a project, use the `codewind.alwaysCreateProjectsInWorkspace` setting.
- Project information is now kept in the `codewind_cw-workspace` Docker volume. If this volume is deleted, your projects are deleted from Codewind. However, they still exist on your disk.
- Project files are synchronized whenever a file changes in this Docker volume. Previously, Codewind did a Docker mount of the entire `codewind-workspace`.

**Eclipse**
The information in the **VS Code** section also applies to Eclipse but with these exceptions:
- When you move a project, to add an existing project to Eclipse, right-click **Local** in the Codewind explorer view and select **Add Existing Project**.
- When you create projects, create the project in the Eclipse workspace. Then, enter a different location if you want.

#### Che
- The file, **Setting up OpenShift on IKS for Codewind**, is removed because these steps are no longer needed. The instructions to set up Codewind on OpenShift on IKS are the same as a regular OpenShift installation.
