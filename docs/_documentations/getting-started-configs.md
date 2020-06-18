---
layout: docs
title: Getting Started - Codewind Configurations
description: Codewind can be used in three different configurations, depending on where you want to develop build and run your containers. 
keywords: Codewind, remote, local, hosted, cloud, local machine, deploy, configurations, config, connect, IDE
duration: 5 minutes
permalink: getting-started-configs
type: document
---


# The three configurations of Codewind


### Where do I develop my code? Where can I build and run my containers?
Codewind supports different configurations for developing your containerized applications, so you can use Codewind with whichever development flow you choose. You can develop containerized applications on your desktop, directly in the cloud, or a combination of both. 



By using Codewind locally, you can get up and running immediately. 

Or you can use the cloud's resources to build and run applications by using Codewind either as a hosted application on your cloud, or in the remote configuration. Using either of these configurations, Codewind can build and run your Docker-containerized applications on [Kubernetes](https://kubernetes.io/) container orchestration applications, including [OpenShift](https://www.openshift.com/).

### **1. Using Codewind locally** 
If you use Codewind locally, all you need to build and run containerized applications on your desktop is:
* An installation of Docker Desktop
* The Codewind extension installed on your IDE

*Note:* if you're using Linux<sup>TM</sup>, you need to install Docker engine and Docker compose.

Choose from one of the following IDEs to use Codewind locally: 

* [VS Code](./vsc-getting-started.html)
* [IntelliJ](./intellij-getting-started.html)
* [Eclipse](./eclipse-getting-started.html)

### **2. Using Codewind as a hosted application on your cloud** 
Codewind is supported on Eclipse Che, removing the need to install an IDE on your local machine to develop your microservices.

By using Codewind as a hosted application on the cloud, you can develop, build, and run your code all by accessing Codewind from a browser window from your local desktop. Your IDE, with the Codewind extension installed, and your containerized applications, are both located in your cloud environment. Specifically, you deploy [Codewind for Eclipse Che](./che-installinfo.html) to your cloud, and use a browser window on your local machine to connect to the [Codewind for Eclipse Che](./che-installinfo.html) development environment.


### **3. Using Codewind remotely** 
Deploy and use Codewind remotely to develop your code locally, but build and run your application in the cloud. Use the cloud’s resources to build and run applications and free desktop resources.

Using secure HTTPS connections, you connect to your multiple cloud-hosted microservices from the Codewind panel in your desktop-hosted IDE.

You can use any of the following IDEs for the remote configuration:

* [VS Code](./vsc-getting-started.html)
* [IntelliJ](./intellij-getting-started.html)
* [Eclipse](./eclipse-getting-started.html)


### Next Steps

To get started with using Codewind, choose from one of the following tutorials:

* [Using Codewind Locally](./local-codewind-overview.html). 

* [Using Codewind as a Hosted Application in your Cloud](./eclipseche-codewind-overview.html)

* To use Codewind [remotely](./remote-codewind-overview.html), you must first install Codewind locally by selecting from:

- [Installing Codewind for VS Code](./vsc-getting-started.html)
- [Installing Codewind for Eclipse](./eclipse-getting-started.html)
- [Installing Codewind for intellij](./intellij-getting-started.html)

Then, proceed to one of the following options:
  1. Deploy Codewind to your cloud if not already done so by you or a sysadmin or a DevOps engineer by following instructions to [Deploy Codewind Remotely](./remote-deploying-codewind.html).
  2. Connect your Codewind extension of your local desktop IDE to Codewind in your cloud by following instructions for [Using Codewind Remotely](./remote-codewind-overview.html). 

