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

When you configure Codewind to be used remotely, you are ready to create a project that you can build and run remotely. 

If you have projects that currently exist on your local computer that you would like to continue to develop remotely, follow [Import an existing local project to the cloud](##import-an-existing-local-project-to-the-cloud).

## Create a new project

Go to the Codewind pane and click the Plus (+) icon on the new cloud deployment:

![Creating new remote project](./images/remotedeploy-projects-eclipse/eclipse_create-new-project.png){:width="380"}

Select the template type and enter a project name. Your new project is built and after a few seconds begins running in the cloud.

## Import an existing local project to the cloud

Copy an existing local project, for example `myFirstNodeProject`, over to the remote Codewind deployment:

1\. Select the remote deployment and click `Add Existing Project`:

![Add existing project](./images/remotedeploy-projects-eclipse/eclipse_add-project.png){:width="366"}

2\. Go to the folder that contains the local project files, click `Select a project from the workspace`, and select your project: 

![Add to Codewind](./images/remotedeploy-projects-eclipse/eclipse_select-project.png){:width="654"}

Codewind prompts you to confirm the project type, in this case, identified as `NodeJS`:

![Confirm Project Type](./images/remotedeploy-projects-eclipse/eclipse_confirm-project.png){:width="654"}

If you add a project to the remote connection that is already deployed on the local connection, the **Project Already Deployed** page appears: 

![Project Already Deployed](./images/remotedeploy-projects-eclipse/eclipse_project-deployed.png){:width="524"}

3\. Click `Finish`. Project files are copied over to the Codewind server, and the new `myFirstNodeProject` appears in the Codewind pane:

![Project Added](./images/remotedeploy-projects-eclipse/eclipse_build-project.png){:width="175"}

4\. Codewind begins building the code and the Docker image. Moments later the project image is uploaded to Docker Hub and used by your cloud deployment to provision a new pod:

![Build Success](./images/remotedeploy-projects-eclipse/eclipse_build-project-successful.png){:width="180"}

`myFirstNodeProject` on `CloudName1` cluster is now running and ready.

## Move a project from one connection to another 

With the Eclipse IDE, you can drag and drop projects from one connection to another. 

Select the project in one connection and drag it into another connection: 

![Drag NODEJS Project](./images/remotedeploy-projects-eclipse/eclipse_move-node-project.png){:width="177"}

This action removes the project from the first connection and adds it to the second connection:

![Drop NODEJS Project](./images/remotedeploy-projects-eclipse/eclipse_place-node-project.png){:width="175"}

# Next Steps

You have now:

1. Deployed a new Codewind installation into OpenShift.
2. Configured your IDE to use this new deployment.
3. Registered all the necessary security parameters.
4. Created a new project that builds and runs in the cloud.
5. Copied an existing local project to build and run in the cloud.

To understand more about how you can use project templates in Codewind, including using pre-supplied templates and creating your own, see [Working with Templates](./workingwithtemplates.html)