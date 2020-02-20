---
layout: docs
title: Connecting VSCode to Remote Codewind
description: Connecting a VSCode IDE to a Remote Codewind deployment
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection, remote deployment of Codewind
duration: 5 minutes
permalink: remotedeploy-eclipse
type: document
parent: installoncloud
order: 2
---

# Connecting Eclipse to Remote Codewind

1\. Locate the Codewind view in Eclipse and click the cloud icon to launch the new connection wizard:

![New Connection](./images/remoteeclipse/newConnection.png)

2\. Add a connection name, the connection URL of your deployment, user name, and password:

![Required Fields](./images/remoteeclipse/connectionCreds.png)

The IDE validates the connection and adds it to the Codewind panel:

![Validate settings](./images/remoteeclipse/connectionAdded.png)

The IDE and Codewind are connected.

## Adding a deployment registry

Before projects can be deployed on Kubernetes, you must specify a Docker registry. This example uses Docker Hub. 

1\. If it's not already open, navigate to the connection details page, right-click the deployment, and select `Manage Image Registries`:

![Docker Registry](./images/remoteeclipse/connectionSettings.png)

2\. Locate and click `Click Add to create a new registry`:

![Open Registry Manager](./images/remoteeclipse/registryManager.png)

3\. Complete the Docker registry connection details:

![New Registry](./images/remoteeclipse/newReg1.png)

1. Add your Docker Hub username
2. Add your Docker Hub password
3. Click the checkbox to desigate this registry as push registry
4. Your Docker Hub namespace (which is usually the same as your username)

The connection is tested to validate your credentials, and these are then stored in a Kubernetes secret within the Codewind service.

## Create a new project

1\. Navigate to the Codewind panel, right-click the deployment, and then click `create new project`:

![Adding new remote project](./images/remoteeclipse/newProject.png)

2\. Select the template type and name your project. Your new project is built and after a few seconds begins running in the cloud.

![Adding new remote project](./images/remoteeclipse/runningProject.png)

## Copying an existing local project to the cloud

The following procedure copies an existing local project `myFirstNodeProject` over to the remote Codewind deployment:

1\. Right-click the remote deployment and click the `Add existing project button`:

![Add existing project](./images/remoteeclipse/addExistingProject.png)

2\. Navigate to the folder containing your local project files, or choose the previously created `myFirstNodeProject` from the workspace. Click `Next` to proceed:

![Add to Codewind](./images/remoteeclipse/existingProject.png)

3\. Codewind prompts you to confirm the project type identified as `NodeJS`:

![Confirm Project Type](./images/remoteeclipse/confirmProjectType.png)

4\. Click `Next`.

The project files are copied over to the Codewind server and the new `myFirstNodeProject` appears in the Codewind panel. Codewind builds your application code and Docker image, and moments later, the project image is uploaded to Docker Hub and used by your cloud deployment to provision a new pod:

![Build Success](./images/remoteeclipse/buildSuccess.png)

`myFirstNodeProject` on `CloudName1` cluster is now running and ready.

Congratulations! In this topic you:

1. Deployed a new Codewind install into OpenShift.
2. Configured your IDE to use this new deployment.
3. Registered all the necessary security parameters.
4. Created a new project that builds and runs in the cloud.
5. Copied an existing local project to build and run in the cloud.

In the next step you learn how to remove an existing Codewind deployment: [Remove a remote deployment of Codewind](./remote-removing.html)
