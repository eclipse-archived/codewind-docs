---
layout: docs
title: Installing Codewind on the Cloud
description: Installing Codewind on the Cloud
keywords: build, deploy, IBM Cloud Private, install, installing, installation, chart, Helm, develop, cloud, public cloud, services, command line, cli, command, start, stop, update, open, delete, options, operation, devops, OpenShift, OKD
duration: 1 minute
permalink: mdt-che-dockerregistries
type: document
order: 20
parent: root
---

# Setting the Docker registry

After creating a Codewind workspace, you must set the container registry to deploy your projects. When you go to create or add an existing project to Codewind, Codewind will prompt you for the registry. See [Docker registry docs](https://www.eclipse.org/codewind/dockerregistry.html) for guidance on using proper container registries.

If you would like to change the registry that's used at any time, run the `Codewind: Set Deployment Registry` command in Theia to dynamically set a new registry for your workspace. <br>

![Set deployment registry](dist/images/che-docs/SetDockerRegistry-1.png){:height="90px" width="623px"}. <br>

![Set deployment registry location](dist/images/che-docs/SetDockerRegistry-2.png){:height="85px" width="633px"}. <br>

![Test deployment](dist/images/che-docs/SetDockerRegistry-3.png){:height="208px" width="801px"}. <br>

**Note:** To proceed, you need to have added the registry credentials with Che.
- Codewind restarts with the changes added.
  
Next step: [Using Codewind in Theia](mdt-che-usingtheia.html)




