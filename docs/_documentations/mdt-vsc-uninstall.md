---
layout: docs
title: Uninstalling Codewind for VS Code
description: How to uninstall Codewind from VS Code
keywords: uninstall, remove, delete, tools, eclipse, uninstalling Codewind for VS Code
duration: 1 minute
permalink: mdt-vsc-uninstall
type: document
order: 70
parent: mdt-vsc-overview
---

# Uninstalling Codewind from VS Code

Remove the Codewind containers and images

1. Ensure any running containers are stopped.  In the **Codewind view**, bring up the context menu on the **Codewind** item and click **Stop Codewind**
2. Remove the Docker images
    - On Windows, enter
    ```bash
    %USERPROFILE%\.vscode\extensions\ibm.codewind-0.2.0\bin\installer\windows\codewind-installer.exe remove
    ```
    - On macOS or Linux, enter
    ```bash
    $HOME/.vscode/extensions/ibm.codewind-0.2.0/bin/installer/macos/codewind-installer remove
    ```

Use the VS Code uninstall support to uninstall Codewind for VS Code:

1. Bring up the **Extensions view** by clicking on the Extensions icon in the **Activity Bar** on the side of VS Code
2. Type *codewind* in the search field
3. Click on the **Codewind** item to display the extension's detail page
4. Click on the **Uninstall** button
5. When the uninstall is complete, restart VS Code.
