---
layout: docs
title: Connecting VS Code to a remote deployment
description: Connecting VS Code to a remote deployment
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection, remote deployment of Codewind
duration: 5 minutes
permalink: remotedeploy-vscode
type: document
parent: installoncloud
order: 2
---

# Connecting VS Code to a remote deployment

1\. Locate the Codewind view in VS Code and click the cloud icon to launch the new connection wizard:

![New Connection](./images/remotevs/newConnection.png)

2\. Add a connection name and press `Enter`.

![Name Connection](./images/remotevs/connectionName.png)

3\. Complete the three required fields: Gatekeeper URL, developer username, and developer password, and then save.

![Required Fields](./images/remotevs/connectionCreds.png)

The IDE validates the connection and adds it to the Codewind panel:

![Validate settings](./images/remotevs/connectionAdded.png)

The IDE and Codewind are connected.

## Adding a deployment registry

Before projects can be deployed on Kubernetes, you need to specify a Docker Registry. Docker Hub is used in this example: 

1\. If it's not already open, navigate to the connection details page with the link:

![Docker Registry](./images/remotevs/connectionSettings.png)

2\. Locate and click `Open Container Registry Manager`:

![Open Registry Manager](./images/remotevs/registryManager.png)

3\. In the image registry screen, click `+ Add New`:

![Adding Registry](./images/remotevs/ImageRegistries.png)

4\. Complete the Docker connection details. For example, if you are using Docker Hub, enter `docker.io` and press `Enter`:

![New Registry](./images/remotevs/newReg1.png)

Enter:

1. Your Docker Hub user name.
2. Your Docker Hub password.
3. Your repo name, which is usually the same as your username.

The connection is tested to validate your credentials and stored in a Kubernetes secret within the Codewind service.

## Create a new project

Go to the Codewind panel and click the Plus (+) icon on the new cloud deployment:

![Adding new remote project](./images/remotevs/newProject.png)

Select the template type and enter a project name. Your new project is built and after a few seconds begins running in the cloud.

## Copying an existing local project to the cloud

Copy an existing local project, for example `myFirstNodeProject`, over to the remote Codewind deployment:

1\. Select the remote deployment and click the `Add existing project` button:

![Add existing project](./images/remotevs/addExistingProject.png)

2\. Go to the folder containing the local project files and click `Add to Codewind`:

![Add to Codewind](./images/remotevs/existingProject.png)

Codewind prompts you to confirm the project type, in this case, identified as `NodeJS`:

![Confirm Project Type](./images/remotevs/confirmProjectType.png)

3\. Click `Yes`. Project files are copied over to the Codewind server, and the new `myFirstNodeProject` appears in the Codewind panel:

![Project Added](./images/remotevs/projectAdded.png)

4\. Codewind begins building the code and the Docker image. Moments later the project image is uploaded to Docker Hub and used by your cloud deployment to provision a new pod:

![Build Success](./images/remotevs/buildSuccess.png)

`myFirstNodeProject` on `CloudName1` cluster is now running and ready.

Congratulations! In this topic you:

1. Deployed a new Codewind install into OpenShift.
2. Configured your IDE to use this new deployment.
3. Registered all the necessary security parameters.
4. Created a new project that builds and runs in the cloud.
5. Copied an existing local project to build and run in the cloud.

In the next step you learn how to remove an existing Codewind deployment: [Remove a remote deployment of Codewind](./remote-removing.html)