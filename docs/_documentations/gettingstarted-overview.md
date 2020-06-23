---
layout: docs
title: Getting Started Overview
description: Get started with Codewind by selecting the configuration of Codewind you want to install. Understand the different configurations available - local, remote or browser-based - and select the most appropriate instructions.
keywords: install, Codewind, remote, hosted, cloud, standalone, get started, getting started, IDE, VS Code, Eclipse, Eclipse Che, IntelliJ, configuration, browser-based, browser
duration: 10 minutes
permalink: gettingstarted-overview.html
type: document
---
# Getting Started - Overview

<div class="callout">
	<b>Getting started quickly with Codewind</b> You can try out Codewind by using the local configuration. For local use of Codewind, and also the prerequisite steps for remote use of Codewind, select from <a href="./vsc-getting-started.html">VS Code,</a> <a href="./eclipse-getting-started.html">Eclipse,</a> or <a href="./intellij-getting-started.html">Intellij</a>.
</div>

<div class="callout">
	<b>Browser-based Codewind</b> If you want to go straight to using codewind as a hosted application in the cloud, select the <a href="./eclipseche-codewind-overview.html">Eclipse Che instructions</a>.
</div>

## Which configuration do I need?

Codewind supports different configurations for developing your containerized applications, so you can use Codewind with whichever development flow you choose.

You can do your development work in an IDE on your desktop, or in an IDE hosted on the cloud.

You can choose to build and run your application locally, or build and run your application using the cloud's resources. 

Both the remote configuration and browser-based configuration of Codewind use the cloud's resources to build and run your application. Codewind uses [Kubernetes](https://kubernetes.io/) container orchestration applications, including [OpenShift](https://www.openshift.com/), to build and run your Docker-containerised applications on the cloud.

Continue to learn about each of these configurations by clicking one of the following options:

* [Using Codewind locally](./gettingstarted-overview.html#using-codewind-locally)
* [Using Codewind remotely](./gettingstarted-overview.html#using-codewind-remotely)
* [Using Codewind as a hosted application in the cloud (browser-based Codewind)](./gettingstarted-overview.html#using-codewind-as-a-hosted-application-on-your-cloud)

## Using Codewind locally

By using Codewind locally, you can get up and running immediately. To develop, build and run containerized applications on your desktop, all you need is:
* An installation of Docker Desktop
* The Codewind extension installed on your IDE

**Note:** If you're using Linux<sup>TM</sup>, you need to install Docker engine and Docker Compose.

![Using Codewind Locally](./images/configs/LocalConfiguration.png)

To use Codewind locally, choose from one of the following IDEs:

* [VS Code](./vsc-getting-started.html)
* [IntelliJ](./intellij-getting-started.html)
* [Eclipse](./eclipse-getting-started.html)

## Using Codewind remotely
Deploy and use Codewind remotely to develop your code locally, but build and run your application in the cloud. Use the cloud’s resources to build and run applications and free desktop resources.

Using secure HTTPS connections, you connect to your multiple cloud-hosted microservices from the Codewind panel in your desktop-hosted IDE.

You can use VS Code, Intellij, or Eclipse for the [remote configuration](./remote-codewind-overview.html). 

 ![Using Codewind remotely](./images/configs/RemoteConfiguration.png)

## Using Codewind as a hosted application on your cloud
Codewind is supported on Eclipse Che, removing the need to install an IDE on your local desktop to develop your microservices.

You access Codewind from a Browser window from your local desktop to develop, build, and run your code. Your IDE, with the Codewind extension installed, and your containerized applications, are both located in your cloud environment. 

Specifically, you [deploy Codewind for Eclipse Che](./che-installinfo.html) to your cloud, and use a browser window on your local desktop to [connect to the Codewind for Eclipse Che development environment](./che-setupregistries.html).

![Browser-based Codewind](./images/configs/BrowserBasedConfiguration.png)

### Next Steps

To get started with using Codewind, choose from one of the following configurations:

**To use Codewind locally** select instructions for getting started with [VS Code](./vsc-getting-started.html), [Eclipse](./eclipse-getting-started.html), or [IntelliJ](./intellij-getting-started.html).

**To use Codewind for Eclipse Che** select [Using Codewind as a Hosted Application in your Cloud](./eclipseche-codewind-overview.html).

<div class="callout">
	<b>Note:</b> To use Codewind remotely, you must first install Codewind locally. For more information, see instructions for <a href="./remote-deploying-codewind.html">deploying Codewind Remotely</a>. After Codewind is deployed remotely, you can connect your Codewind extension of your local desktop IDE to Codewind in your cloud by following instructions for <a href="./remote-codewind-overview.html">using Codewind remotely</a>.
</div>
