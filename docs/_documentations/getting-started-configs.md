---
layout: docs
title: Getting Started - Codewind Configurations
description: Getting Started - Codewind Configurations
keywords: Codewind, remote, local, hosted, cloud, local machine, deploy, configurations, config, connect, IDE
duration: 5 minutes
permalink: getting-started-configs
type: document
---

# The 3 configurations of Codewind


### Where do I develop my code? Where can I build and run my containers? How does Codewind support my development flow?
Codewind supports different configurations for developing your containerized applications, so you can use Codewind with whichever development flow you choose. You can develop containerized applications on your desktop, directly in the cloud, or a combination of both. 

By using Codewind locally, you can get up and running immediately. 

Or you can use the cloud's resources to build and run applications by using Codewind either as a hosted application on your cloud, or in the remote configuration. Using either of these configurations, Codewind can build and run your Docker-containerized applications on [Kubernetes](https://kubernetes.io/) container orchestration applications, including [OpenShift](https://www.openshift.com/).

### **1. Using Codewind locally:** 
If you use Codewind locally, your IDE, with the Codewind extension installed, and Docker Desktop (or your local Docker Engine and Docker Compose installations if you're using Linux), is all you need to build and run containerized applications on your desktop.

Choose from one of the following IDEs to use Codewind locally: 

* [VS Code](./vsc-getting-started.html)
* [IntelliJ](./intellij-getting-started.html)
* [Eclipse](./eclipse-getting-started.html)

### **2. Using Codewind as a hosted application on your cloud:** 
If you use Codewind as a hosted application on your cloud, both your IDE, with the Codewind extension installed, and your containerized applications are located in your cloud environment. Specifically, you deploy [Codewind for Eclipse Che](./che-installinfo.html) to your cloud, and use a browser window on your local machine to connect to the [Codewind for Eclipse Che](./che-installinfo.html) development environment.


### **3. Using Codewind remotely:** 
If you use Codewind remotely, your IDE with the Codewind extension installed is hosted on your desktop, *but* the building and running of your microservice take place in your cloud environment. Using secure HTTPS connections, you connect to your multiple cloud-hosted microservices from the Codewind panel in your desktop-hosted IDE.

You can use any of the following IDEs for the remote configuration:

* [VS Code](./vsc-getting-started.html)
* [IntelliJ](./intellij-getting-started.html)
* [Eclipse](./eclipse-getting-started.html)


### Next Steps

To get started with using Codewind, choose from one of the following tutorials:

* [Using Codewind Locally](./local-codewind-overview.html). 

* [Using Codewind as a Hosted Application in your Cloud](./eclipseche-codewind-overview.html)

* To use Codewind [remotely](./remote-codewind-overview.html), you must first install Codewind locally. Follow the Installing Codewind step of the tutorial [Using Codewind Locally](./local-codewind-overview.html) for your chosen IDE to set up Codewind on your local machine, and then proceed to either:
  1. Deploy Codewind to your cloud if not already done so by you or a sysadmin/DevOps engineer. See tutorial [Deploying Codewind Remotely](./remote-deploying-codewind.html).
  2. Connect your Codewind extension of your local desktop IDE to Codewind in your cloud by following the tutorial [Using Codewind Remotely](./remote-codewind-overview.html). 

