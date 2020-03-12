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

Complete the [prequisites](./remote-codewind-overview.html). 

# Objectives

In this topic you will:
1. Connect Codewind on VS Code to the remote instance of Codewind in the cloud. 
2. Add a deployment registry.

## 1. Connect your IDE's Codewind extension to your remote instance of Codewind.

1\. Locate the Codewind view in VS Code and click the cloud icon to launch the new connection wizard:

![New Connection](./images/remotevs/newConnection.png)

2\. Add a connection name and press **Enter**.

![Name Connection](./images/remotevs/connectionName.png)

3\. Complete the three required fields: Gatekeeper URL, user name, and password. Then **Save**.

![Required Fields](./images/remotevs/connectionCreds.png){:width="600"}

The IDE validates the connection and adds it to the Codewind panel:

![Validate settings](./images/remotevs/connectionAdded.png)

The IDE and Codewind are connected.

## 2. Add a deployment registry.

Before projects can be deployed on Kubernetes, specify a Docker Registry. Docker Hub is used in this example: 

1\. If it's not already open, go to the connection details page with the link:

![Docker Registry](./images/remotevs/connectionSettings.png)

2\. Locate and click **Open Container Registry Manager**:

![Open Registry Manager](./images/remotevs/registryManager.png)

3\. In the image registry screen, click **+ Add New**:

![Adding Registry](./images/remotevs/ImageRegistries.png){:width="600"}

4\. Complete the Docker connection details. For example, if you are using Docker Hub, enter `docker.io` and press **Enter**:

![New Registry](./images/remotevs/newReg1.png)

Fill in the information:
- Your Docker Hub user name
- Your Docker Hub password
- Your namespace, which is usually the same as your user name

The connection is tested to validate your credentials and stored in a Kubernetes secret within the Codewind service.

# Adding an image registry in remote Codewind

## Prerequisite: Determining if you need an image registry 
1\. First, determine if you need to add an image registry. The following scenarios in Codewind require you to specify which image registry is in use:
- In the following scenario, configure Codewind with an image registry to push the application image to that specific image registry:
    - Run Codewind on a remote Kubernetes cluster to develop a Codewind style project.
- In the following scenario, configure Codewind to use the credentials for a specific image registry:
    - Run Codewind on a remote Kubernetes cluster to develop an Appsody style project.
    - The image registry for the Appsody stack requires credentials.
- In the following scenario, from the command line, enter the `docker login` command in the registry before you create the Appsody project:
    - Run Codewind locally to develop an Appsody style project.
    - The container registry for the Appsody stack requires credentials. 
If you do not develop any Codewind style projects, and you use an image registry that does not require credentials, you do not need to specify an image registry.
2\. If you do need to add an image registry, start and run your IDE.

## Adding an image registry in Codewind
After your IDE is started and running, add the image registry to be used with Codewind.
1. From your IDE, open the window for adding your image registry. Right-click a remote connection and select **Image Registry Manager** or use the **Image Registry Manager** command on the command palette.
2. Then, follow the prompts and fill out the required information to add your image registry. For recommended values for common registries, see the [examples](#examples).
  - Registry server name, domain name, or address: `<registry-to-push-or-pull-images-to>`
  - User name: `<Your user name>`
  - Password or API key: `<Your password or API key>`
  - Also enter a namespace if you want to use the registry as the push registry.

## Codewind container registry guidance
When you run Codewind on Kubernetes for Codewind style projects, Codewind uses [`buildah`](https://github.com/containers/buildah) to build container images from Dockerfiles and to push the images to an image registry that you specify. Use the **Image Registry Manager** in your Codewind IDE to configure the registry to use. 

Use any registry as long as `buildah` and the node that Codewind is running on can resolve the registry hostname. If `buildah` cannot resolve the registry hostname, `buildah` cannot push your projects to the registry, and deployment on Kubernetes is prevented.

## Examples:
These examples show recommended values for common registries. The following image registries are tested and verified with Codewind:
- Docker Hub:
    - Address: `docker.io`
    - Namespace: `<namespace>`
    - Credentials: Docker Hub user name and password or access token
    - **Note:** For Docker Hub, the `Namespace` value is likely to be your user name. 
- Quay.io:
    - Address: `https://quay.io`
    - Namespace: `<namespace>`
    - Credentials: Quay.io user name and encrypted password
- Artifactory
    - Address: `<artifactory-hostname>`
    - Namespace: `<namespace>`
    - Credentials: Artifactory user name and access token
- OpenShift Registry
    - Address: `docker-registry.default.svc:5000`
    - Namespace: `<project>`
    - Credentials: OpenShift user name and access token

## Adding registries to OKD and OpenShift
To use the OpenShift internal container registry with Codewind, see [Adding the OpenShift internal registry with Codewind](openshiftregistry.html).

## Next Steps

You have configured Codewind to be used remotely. 

In the next topic, you will learn how to [use Codewind remotely to create and import projects](./remotedeploy-projects-vscode.html).