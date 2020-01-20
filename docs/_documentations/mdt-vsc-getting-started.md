---
layout: docs
title: "Installing Codewind for VS Code"
description: "Installing Codewind for VS Code"
keywords: introducing, introduction, overview, tools, get, getting, start, started, install, vscode, visual, studio, code, Codewind for VS Code getting started, VS Code Marketplace, VS Code Extensions view, VS Code workspace,installing Codewind for VS Code
duration: 1 minute
permalink: mdt-vsc-getting-started
type: document
order: 1
parent: mdt-vsc-overview
---

# Installing Codewind for VS Code
<br/>
 Install Codewind for Visual Studio Code (VS Code) to develop your containerized projects from within VS Code. 

 To install Codewind for VS Code, complete the following steps:

1. Install [VS Code version 1.38 or later](https://code.visualstudio.com/download).
2. Install [Docker](https://docs.docker.com/install/) 17.06 or later. If you use Linux, you must also install Docker Compose.
3. Install Codewind by clicking [this link](vscode:extension/IBM.codewind) to install from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=IBM.codewind) or by searching for *Codewind* in the [VS Code Extensions view](https://code.visualstudio.com/docs/editor/extension-gallery#_browse-for-extensions).
    - If you're going to work on Java projects, install the [Java Extension Pack](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack).
4. Open the Codewind view in the [Explorer view group](https://code.visualstudio.com/docs/getstarted/userinterface) or enter *Focus on Codewind View* into the [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette).
    - If you do not see the Codewind view in either the Explorer or the Command Palette, the extension did not install correctly.
5. Codewind requires the installation of additional Docker images to run. Choose **Install** when prompted to complete the installation. The installation might take a few minutes to complete.
6. Once complete, you have a CODEWIND section in the IDE. 
   
![image of Codewind once installed](dist/images/installed.png){:width="800px"}

Next step: [Create your first project](mdt-vsc-firstproject.html)



