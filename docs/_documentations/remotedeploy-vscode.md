---
layout: docs
title: Connecting VS Code to remote Codewind
description: Connecting VS Code to remote Codewind
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection, remote deployment of Codewind
duration: 5 minutes
permalink: remotedeploy-vscode
type: document
parent: installoncloud
order: 2
---

# Connecting VS Code to remote Codewind

Ensure you have [satisfied all prequisites](./remote-codewind-overview.html). 

# Objectives

In this topic you will:

1. Connect Codewind on VS Code to the remote instance of Codewind in the cloud. 

2. Add a deployment registry.

# 1. Connect your IDE's Codewind extension to your remote instance of Codewind

1\. Locate the Codewind view in VS Code and click the cloud icon to launch the new connection wizard:

![New Connection](./images/remotevs/newConnection.png)

2\. Add a connection name and press **Enter**.

![Name Connection](./images/remotevs/connectionName.png)

3\. Complete the three required fields: Gatekeeper URL, user name, and password. Then **Save**.

![Required Fields](./images/remotevs/connectionCreds.png)

The IDE validates the connection and adds it to the Codewind panel:

![Validate settings](./images/remotevs/connectionAdded.png)

The IDE and Codewind are connected.

# 2. Add a deployment registry

Before projects can be deployed on Kubernetes, you need to specify a Docker Registry. Docker Hub is used in this example: 

1\. If it's not already open, go to the connection details page with the link:

![Docker Registry](./images/remotevs/connectionSettings.png)

2\. Locate and click **Open Container Registry Manager**:

![Open Registry Manager](./images/remotevs/registryManager.png)

3\. In the image registry screen, click **+ Add New**:

![Adding Registry](./images/remotevs/ImageRegistries.png)

4\. Complete the Docker connection details. For example, if you are using Docker Hub, enter `docker.io` and press **Enter**:

![New Registry](./images/remotevs/newReg1.png)

Enter:

1. Your Docker Hub user name.
2. Your Docker Hub password.
3. Your namespace, which is usually the same as your user name.

The connection is tested to validate your credentials and stored in a Kubernetes secret within the Codewind service.

# Next Steps

You have now finshed configuring Codewind to be used remotely. 

In the next topic, you will learn how to [use Codewind remotely to create and import projects](./remotedeploy-projects-vscode.html).