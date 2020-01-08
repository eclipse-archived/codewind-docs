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

## Connecting Eclipse to Remote Codewind

Locate the Codewind view in Eclipse and click the cloud icon to launch the new connection wizard:

![New Connection](./images/remoteeclipse/newConnection.png)

Add a connection name, connection URL of your deployment, username and password

![Required Fields](./images/remoteeclipse/connectionCreds.png)

The IDE will then validate the connection and add it to the Codewind panel:

![Validate settings](./images/remoteeclipse/connectionAdded.png)

At this the IDE and Codewind are connected

## Adding a deployment registry

Before projects can be deployed on Kubernetes you need to specify a docker registry. In this example we will use DockerHub.  If its not already open navigate to the connection details page by right clicking the Deployment and selecting Manage Deployment Registries:

![Docker Registry](./images/remoteeclipse/connectionSettings.png)

Locate and click 'Click Add to create a new registry':

![Open Registry Manager](./images/remoteeclipse/registryManager.png)

Then complete the docker registryconnection details:

![New Registry](./images/remoteeclipse/newReg1.png)

1. Add your dockerhub username
2. Add your dockerhub password
3. Click the checkbox to desigate this registry as push registry
4. Your dockerhub namespace (which is usually the same as your username)

The connection will be tested to validate your credentials and are stored in a Kubernetes secret within the Codewind service.

## Create a new project

Navigate to the Codewind panel and right click the deployment, then choose `create new project`:

![Adding new remote project](./images/remoteeclipse/newProject.png)

Select the template type, project name and your new project should be built and after a few seconds begin running in the cloud.

![Adding new remote project](./images/remoteeclipse/runningProject.png)

## Copying an existing local project to the cloud

Copying an existing local project "myFirstNodeProject" over to the remote Codewind deployment.

To begin :

Right-click the remote deployment and click the "Add existing project button"

![Add existing project](./images/remoteeclipse/addExistingProject.png)

Navigate to the folder containing your local project files, or choose the previously created "myFirstNodeProject" from the workspace. Click next to proceed :

![Add to Codewind](./images/remoteeclipse/existingProject.png)

Codewind will ask you to confirm the project type identified as NodeJS:

![Confirm Project Type](./images/remoteeclipse/confirmProjectType.png)

click Next

The project files are copied over to the Codewind server and the new "myFirstNodeProject" appears in the Codewind panel. Codewind will begin building your application code and Docker image, moments later the Project Image will be uploaded to DockerHub and used by your cloud deployment to provision a new pod:

![Build Success](./images/remoteeclipse/buildSuccess.png)

`myFirstNodeProject` on `MyIBMCloud` is now running and ready.

Congratulations, In this topic you:

1. Deployed a new Codewind install into Openshift
2. Configured your IDE to use this new deployment
3. Registered all the necessary security parameters
4. Created a new project built that builds and runs in the cloud
5. Copied an existing local project to build and run in the cloud

In the next step you will learn how to remove an existing Codewind deployment

[Remove a remote deployment of Codewind](./remote-removing.html)