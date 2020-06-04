---
layout: docs
title: Eclipse
description: Creating and importing projects
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection, remote deployment of Codewind
duration: 5 minutes
permalink: remotedeploy-projects-eclipse
type: document
---

# Creating and importing projects

Now that you have configured Codewind to be used remotely, you are ready to create a project that you can develop locally but build and run remotely.  

**Note:** If you have projects that currently exist on your local computer that you would like to continue to develop remotely, follow [Import an existing local project to the cloud](#import-an-existing-local-project-to-the-cloud).

## Create a project

Go to the **Codewind Explorer** view, right-click your remote connection, and select **Create Project**. 

![Creating new remote project](./images/remotedeploy-projects-eclipse/Eclipse_Create-new-project.png){:width="380"}

Select the template type and enter a project name. Your new project is built and after a few seconds begins running in the cloud.

## Import an existing local project to the cloud

Copy an existing local project, for example `myFirstNodeProject`, over to the remote Codewind connection:

1\. Right-click your remote connection and select **Add Existing Project**:

![Add existing project](./images/remotedeploy-projects-eclipse/Eclipse_Add-project.png){:width="366"}

2\. Click **Select a project from the workspace** and select your project: 

![Add to Codewind](./images/remotedeploy-projects-eclipse/Eclipse_Select-project.png){:width="654"}

Codewind prompts you to confirm the project type, in this case, identified as `Node.js`. Confirm the project type and click **Finish**:

![Confirm project type](./images/remotedeploy-projects-eclipse/Eclipse_Confirm-project.png){:width="654"}

If you add a project to the remote connection that is already deployed on the local connection, the **Project Already Deployed** window appears: 

![Project already deployed](./images/remotedeploy-projects-eclipse/Eclipse_Project-deployed.png){:width="524"}

3\. Leave the **Remove** button selected to remove the project from the 
local connection and click **OK**: 

![Project added](./images/remotedeploy-projects-eclipse/Eclipse_Build-project.png){:width="175"}

4\. Codewind begins building the code and the Docker image. Moments later the project image is uploaded to Docker Hub and used by your cloud deployment to provision a new pod:

![Build success](./images/remotedeploy-projects-eclipse/Eclipse_Build-project-successful.png){:width="180"}

`myFirstNodeProject` on `CloudName1` cluster is now running and ready.

## Move a project from one connection to another 

With the Eclipse IDE, you can drag and drop projects from one connection to another. 

Select the project in one connection and drag it onto another connection: 

![Drag node.js project](./images/remotedeploy-projects-eclipse/Eclipse_Move-node-project.png){:width="177"}

This action removes the project from the first connection and adds it to the second connection:

![Drop node.js project](./images/remotedeploy-projects-eclipse/Eclipse_Place-node-project.png){:width="175"}

# Next Steps

You have now:

1. Deployed a new Codewind installation into OpenShift.
2. Configured your IDE to use this new deployment.
3. Registered all the necessary security parameters.
4. Created a project that builds and runs in the cloud.
5. Copied an existing local project to build and run in the cloud.

To understand more about how you can use project templates in Codewind, including using pre-supplied templates and creating your own, see [Working with templates](./workingwithtemplates.html).