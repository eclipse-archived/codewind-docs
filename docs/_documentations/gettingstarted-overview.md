---
layout: docs
title: Getting Started Overview
description: Get started with Codewind by selecting the configuration of Codewind you want to install. Understand the different configurations available - local, remote or browser-based - and select the most appropriate instructions.
keywords: install, Codewind, remote, hosted, cloud, standalone, get started, getting started, IDE, VS Code, Eclipse, Eclipse Che, IntelliJ, configuration, browser-based, browser
duration: 10 minutes
permalink: gettingstarted-overview.html
type: document
---
# Overview: Getting Started

**Getting started quickly with Codewind** You can try out Codewind by using the local configuration. For local use of Codewind, and also the pre-requisite steps for remote use of Codewind, select from:

* [VS Code](./vsc-getting-started.html)
* [Eclipse](./eclipse-getting-started.html)
* [IntelliJ](./intellij-getting-started.html)

**Codewind as a hosted application in the cloud** If you want to go straight to using codewind as a hosted application in the cloud, select the [Eclipse Che instructions](./eclipseche-codewind-overview.html)

**The different configurations of Codewind** To find out about the different ways of using Codewind - locally, remotely, or as an application hosted on the cloud - see [Codewind Architecture](./overview.html#architecture).

## Which configuration do I need?

Codewind supports different configurations for developing your containerized applications, so you can use Codewind with whichever development flow you choose.

You can do your development work in an IDE on your desktop, or in an IDE hosted on the cloud.

You can choose to build and run your application locally, or use the cloud's resources by using Codewind remotely or as an application hosted on the cloud. Codewind uses [Kubernetes](https://kubernetes.io/) container orchestration applications, including [OpenShift](https://www.openshift.com/) when building and run your Docker-containerised applications.

Continue to learn about each of these configurations by selecting the relevant section:

1. [Using Codewind locally](./gettingstarted-overview.html#usingcodewindlocally)
2. [Using Codewind remotely](./gettingstarted-overview.html#usingcodewindremotely) 
3. [Using Codewind as a hosted application in the cloud (browser-based Codewind)](./gettingstarted-overview.html#usingcodewindasahostedapplicationonyourcloud)

## Using Codewind locally

By using Codewind locally, you can get up and running immediately. To build and run containerized applications on your desktop, all you need is:
* An installation of Docker Desktop
* The Codewind extension installed on your IDE

**Note** if you're using Linux<sup>TM</sup>, you need to install Docker engine and Docker compose.

![Using Codewind Locally](./images/configs/LocalConfiguration.png)

To use Codewind locally, choose from one of the following IDEs:

* [VS Code](./vsc-getting-started.html)
* [IntelliJ](./intellij-getting-started.html)
* [Eclipse](./eclipse-getting-started.html)

## Using Codewind remotely
Deploy and use Codewind remotely to develop your code locally, but build and run your application in the cloud. Use the cloud’s resources to build and run applications and free desktop resources.

Using secure HTTPS connections, you connect to your multiple cloud-hosted microservices from the Codewind panel in your desktop-hosted IDE.

You can use VS Code, Intellij or Eclipse for the [remote configuration](./remote-codewind-overview.html). 

 ![Using Codewind remotely](./images/configs/RemoteConfiguration.png)

## Using Codewind as a hosted application on your cloud
Codewind is supported on Eclipse Che, removing the need to install an IDE on your local machine to develop your microservices.

![Browser-based Codewind](./images/configs/BrowserBasedConfiguration.png)

By using Codewind as a hosted application on the cloud, you can develop, build, and run your code all by accessing Codewind from a browser window from your local desktop. Your IDE, with the Codewind extension installed, and your containerized applications, are both located in your cloud environment. 

Specifically, you [deploy Codewind for Eclipse Che](./che-installinfo.html) to your cloud, and use a browser window on your local machine to [connect to the Codewind for Eclipse Che development environment](./che-setupregistries.html).





### Next Steps

To get started with using Codewind, choose from one of the following configurations:

**To use Codewind locally** select instructions for [Using Codewind Locally](./local-codewind-overview.html). 

**To use Codewind for Eclipse Che** select [Using Codewind as a Hosted Application in your Cloud](./eclipseche-codewind-overview.html)

**To use Codewind remotely** you must first install Codewind locally by selecting from:

- [Installing Codewind for VS Code](./vsc-getting-started.html)
- [Installing Codewind for Eclipse](./eclipse-getting-started.html)
- [Installing Codewind for intellij](./intellij-getting-started.html)

Then, choose from the following options:
  1. Deploy Codewind to your cloud if not already done so by you or a sysadmin or a DevOps engineer by following instructions to [Deploy Codewind Remotely](./remote-deploying-codewind.html).
  2. Connect your Codewind extension of your local desktop IDE to Codewind in your cloud by following instructions for [Using Codewind Remotely](./remote-codewind-overview.html). 

