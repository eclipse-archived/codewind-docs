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

Complete the [prerequisites](./remote-codewind-overview.html). 

## Objectives

In this topic you will:
1. Connect Codewind on VS Code to the remote instance of Codewind in the cloud. 
2. Add an image registry.

## 1. Connect your IDE's Codewind extension to your remote instance of Codewind.

1\. Locate the Codewind view in VS Code and click the cloud icon to start the new connection wizard:

![New Connection](./images/remotevs/newConnection.png)

2\. Add a connection name and press **Enter**.

![Name Connection](./images/remotevs/connectionName.png)

3\. Complete the three required fields: Gatekeeper URL, username, and password. Then, click **Save**.

![Required Fields](./images/remotevs/connectionCreds.png){:width="600"}

If you do not know these values, ask your system administrator or see [Deploying Codewind remotely](./remote-deploying-codewind.html).

The IDE validates the connection and adds it to the Codewind pane:

![Validate settings](./images/remotevs/connectionAdded.png)

The IDE and Codewind are connected.

## 2. Add an image registry.

Before Codewind style projects can be deployed on Kubernetes, specify an image push registry.
For more information about registries, see [Codewind container registry guidance](remote-setupregistries.html#codewind-container-registry-guidance).
This example uses Docker Hub:

1\. If it's not already open, go to the connection details page with the link:

![Image Registry](./images/remotevs/connectionSettings.png)

2\. Locate and click **Open Container Registry Manager**:

![Open Registry Manager](./images/remotevs/registryManager.png)

3\. In the image registry screen, click **+ Add New**:

![Adding Registry](./images/remotevs/ImageRegistries.png){:width="600"}

4\. Complete the container registry connection details. For example, if you are using Docker Hub, enter `docker.io` and press **Enter**:

![New Registry](./images/remotevs/newReg1.png)

Enter:

- Your container registry username.
- Your container registry password.
- Your container registry namespace, which is usually the same as your username.

The connection is tested to validate your credentials and stored in a Kubernetes secret within the Codewind service.

## Next Steps

You have now finished configuring Codewind to be used remotely. 

In the next topic, you will learn how to [use Codewind remotely to create and import projects](./remotedeploy-projects-vscode.html).
