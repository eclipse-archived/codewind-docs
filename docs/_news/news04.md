---
layout: docs
title: New for Codewind 0.4
description: New for Codewind 0.4
keywords: news, new, updates, update, version
duration: 1 minute
permalink: news04
---

## Codewind 0.4.0

#### Appsody
- Appsody is updated to use the Appsody Codewind Version 0.4.0 extension.
- When you create an Appsody project, the Codewind installer calls the Appsody extension that is installed as part of the IDE. The Codewind installer does not call the Appsody extension that is installed on the operating system (OS) or the Appsody extension in the Docker container.
- The Appsody init is no longer called in the Docker container. Instead, the Appsody binary is installed as part of the IDE. With this update, a Docker bind is no longer needed for Appsody creation. After you update to Codewind 0.4.0, retest all Appsody scenarios because the Appsody init is now performed on the local OS instead of in the Docker container.

#### Che
- Red Hat OpenStack (RHOS) IBM Cloud Kubernetes Service (IKS) support is available.

#### Eclipse
- [IDE support is available for configuring template repositories.](https://github.com/eclipse/codewind/issues/32)
- [HTTPS is supported in the IDEs.](https://github.com/eclipse/codewind/issues/408)

#### VS Code
- [IDE support is available for configuring template repositories.](https://github.com/eclipse/codewind/issues/32)
- [HTTPS is supported in the IDEs.](https://github.com/eclipse/codewind/issues/408)
- The following user experience improvements are also included:
  - [The Codewind state is shown in the tree view except when Codewind is starting.](https://github.com/eclipse/codewind/issues/156)
  - [The open workspace dialog is modal and hideable.](https://github.com/eclipse/codewind/issues/152)
  - [The **Open Workspace** button is shown when you create a project.](https://github.com/eclipse/codewind/issues/151)
  - [When you create a new project, the **Open Project Overview** page appears.](https://github.com/eclipse/codewind/issues/160)


