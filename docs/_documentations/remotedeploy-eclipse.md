---
layout: docs
title: Connecting Eclipse to remote Codewind
description: Connecting Eclipse to remote Codewind
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection, remote deployment of Codewind
duration: 5 minutes
permalink: remotedeploy-eclipse
type: document
parent: installoncloud
order: 2
---

# Connecting Eclipse to remote Codewind

Complete the [prequisites](./remote-codewind-overview.html). 

## Objectives

In this topic you will:
1. Connect Codewind on Eclipse to the remote instance of Codewind in the cloud.
2. Add an image registry.
3. Create a new project.
4. Copy an existing project to your remote connection.

## 1. Connect your IDE's Codewind extension to your remote instance of Codewind.

1\. Locate the Codewind Explorer view in Eclipse and click the cloud icon to launch the new connection wizard:

![New Connection](./images/remoteeclipse/newConnection.png)

2\. Add a connection name, the connection URL of your deployment, user name, and password:

![Required Fields](./images/remoteeclipse/connectionCreds.png)

The IDE validates the connection and adds it to the Codewind panel:

![Validate settings](./images/remoteeclipse/connectionAdded.png)

The IDE and Codewind are connected.

## 2. Add an image registry.

Before projects can be deployed on Kubernetes, specify an image push registry. This example uses Docker Hub.
For more information about registries, see [Adding an image registry in remote Codewind](remote-setupregistries.md).

1\. Right-click your remote connection in the Codewind Explorer view and select `Manage Image Registries`:

![Docker Registry](./images/remoteeclipse/connectionSettings.png)

2\. Locate and click **Add...** to create a new registry:

![Open Registry Manager](./images/remoteeclipse/registryManager.png)

3\. Complete the Docker registry connection details:

![New Registry](./images/remoteeclipse/newReg1.png)

- Add your Docker Hub user name.
- Add your Docker Hub password.
- Click the checkbox to desigate this registry as a push registry.
- Enter your Docker Hub namespace, which is usually the same as your user name.

The connection is tested to validate your credentials, which are then stored in a Kubernetes secret within the Codewind service.

## 3. Create a new project.

1\. In the Codewind Explorer view, right-click your remote connection and select **Create New Project...**:

![Adding new remote project](./images/remoteeclipse/newProject.png)

2\. Select the template type and name your project. Your new project is built and after a few seconds begins running in the cloud.

![Adding new remote project](./images/remoteeclipse/runningProject.png)

## 4. Copy an existing local project to the cloud.

The following procedure copies an existing local project `myFirstNodeProject` to the remote Codewind deployment:

1\. Right-click your remote connection in the Codewind Explorer view and select **Add Existing Project...**:

![Add existing project](./images/remoteeclipse/addExistingProject.png)

2\. Go to the folder that contains your local project files, or choose the previously created `myFirstNodeProject` from the workspace. Click **Next**:

![Add to Codewind](./images/remoteeclipse/existingProject.png)

3\. Codewind prompts you to confirm the project type identified as **Node.js**:

![Confirm Project Type](./images/remoteeclipse/confirmProjectType.png)

4\. Click **Finish**.

The project files are copied over to the Codewind server, and the new `myFirstNodeProject` appears under your remote connection. Codewind builds your application code and Docker image, and moments later, the project image is uploaded to Docker Hub and used by your cloud deployment to provision a new pod:

![Build Success](./images/remoteeclipse/buildSuccess.png)

The `myFirstNodeProject` project on the `CloudName1` cluster is now running and ready.

## Next Steps

You have now finished configuring Codewind to be used remotely. 

In the next topic, you will learn how to [use Codewind remotely to build and run projects in your cloud](./remotedeploy-projects.html).
