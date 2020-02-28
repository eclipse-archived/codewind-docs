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

Ensure you have [satisfied all prequisites](./remote-codewind-overview.html). 

# Objectives

In this topic you will:

1. Connect Codewind on Eclipse to the remote instance of Codewind in the cloud. 

2. Add a deployment registry.

# 1. Connect your IDE's Codewind extension to your remote instance of Codewind

1\. Locate the Codewind view in Eclipse and click the cloud icon to launch the new connection wizard:

![New Connection](./images/remoteeclipse/newConnection.png)

2\. Add a connection name, the connection URL of your deployment, user name, and password:

![Required Fields](./images/remoteeclipse/connectionCreds.png)

The IDE validates the connection and adds it to the Codewind panel:

![Validate settings](./images/remoteeclipse/connectionAdded.png)

The IDE and Codewind are connected.

# 2. Add a deployment registry

Before projects can be deployed on Kubernetes, you must specify a Docker registry. This example uses Docker Hub. 

1\. If it's not already open, navigate to the connection details page, right-click the deployment, and select `Manage Image Registries`:

![Docker Registry](./images/remoteeclipse/connectionSettings.png)

2\. Locate and click **Add...** to create a new image registry:

![Open Registry Manager](./images/remoteeclipse/registryManager.png)

3\. Complete the Docker registry connection details:

![New Registry](./images/remoteeclipse/newReg1.png)

1. Add your Docker Hub username.
2. Add your Docker Hub password.
3. Click the checkbox to desigate this registry as push registry.
4. Your Docker Hub namespace (which is usually the same as your user name).

The connection is tested to validate your credentials, and these are then stored in a Kubernetes secret within the Codewind service.

## Create a new project

1\. Go to the Codewind panel, right-click the deployment, and then click **Create New Project...**:

![Adding new remote project](./images/remoteeclipse/newProject.png)

2\. Select the template type and name your project. Your new project is built and after a few seconds begins running in the cloud.

![Adding new remote project](./images/remoteeclipse/runningProject.png)

## Copying an existing local project to the cloud

The following procedure copies an existing local project `myFirstNodeProject` to the remote Codewind deployment:

1\. Right-click the remote deployment and click the **Add Existing Project...** button:

![Add existing project](./images/remoteeclipse/addExistingProject.png)

2\. Navigate to the folder containing your local project files, or choose the previously created `myFirstNodeProject` from the workspace. Click **Next** to proceed:

![Add to Codewind](./images/remoteeclipse/existingProject.png)

3\. Codewind prompts you to confirm the project type identified as Node.js:

![Confirm Project Type](./images/remoteeclipse/confirmProjectType.png)

4\. Click **Next**.

The project files are copied over to the Codewind server and the new `myFirstNodeProject` appears in the Codewind panel. Codewind builds your application code and Docker image, and moments later, the project image is uploaded to Docker Hub and used by your cloud deployment to provision a new pod:

![Build Success](./images/remoteeclipse/buildSuccess.png)

`myFirstNodeProject` on `CloudName1` cluster is now running and ready.

# Next Steps

You have now finshed configuring Codewind to be used remotely. 

In the next topic, you will learn how to [use Codewind remotely to build and run projects in your cloud](./remotedeploy-projects.html).
