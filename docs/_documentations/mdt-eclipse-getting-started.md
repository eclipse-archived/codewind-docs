---
layout: docs
title: "Installing Codewind for Eclipse"
description: "Installing Codewind for Eclipse"
keywords: introducing, introduction, overview, what is, tools, eclipse, getting started, Codewind for Eclipse, work within Eclipse
duration: 1 minute
permalink: mdt-eclipse-getting-started
type: document
order: 5
parent: mdteclipseoverview
---

# Installing Codewind for Eclipse
<br/>
Install Codewind for Eclipse to develop your containerized projects from within Eclipse.  

To install Codewind for Eclipse, complete the following steps:

1. Download and install the latest [Eclipse IDE for Java EE Developers](https://www.eclipse.org/downloads/packages/release/) or use an existing installation.
    - Install Eclipse IDE Version 2019-09 R (4.13.0) or later to avoid [Bug 541220](https://bugs.eclipse.org/bugs/show_bug.cgi?id=541220).
    - **Note:** the earliest supported version of the Eclipse IDE is Version 2019-03 (4.11).
2. Install [Docker](https://docs.docker.com/install/) 17.06 or later. If you use Linux, you must also install `Docker Compose`.
3. Install [Codewind from Eclipse Marketplace](https://marketplace.eclipse.org/content/codewind).
    - [![Drag to your running Eclipse workspace. ](https://marketplace.eclipse.org/sites/all/themes/solstice/public/images/marketplace/btn-install.png)](http://marketplace.eclipse.org/marketplace-client-intro?mpc_install=4638524 "Drag to your running Eclipse* workspace. *Requires Eclipse Marketplace Client") Drag this install button to your running Eclipse workspace. **Note:** you must have the `Eclipse Marketplace Client`.
    - To install from the Eclipse IDE, complete the following steps:
        1. Open the Eclipse IDE and navigate to **Help** > **Eclipse Marketplace**.
        2. Search for **Codewind**.
        3. Click the **Install** button.
        4. Finish the wizard and accept licenses as needed.
        5. When the installation is complete, restart Eclipse.
4. Open the Codewind view. 
    - Navigate to **Window** > **Show View** > **Other...** > **Codewind** > **Codewind Explorer**
5. Codewind requires the installation of additional Docker images to run.  Double-click the **Codewind** item in the `Codewind Explorer` view to complete the installation. The installation might take a few minutes to complete.
   
![image of Codewind once installed](dist/images/eclipseinstall1.png){:width="800px"}

6. Once complete, you have a CODEWIND section in the IDE. 

![image of Codewind once installed](dist/images/eclipseinstall2.png){:width="800px"}

Next step: [Create your first project](mdt-eclipse-firstproject.html)