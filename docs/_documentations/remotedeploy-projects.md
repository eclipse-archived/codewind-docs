---
layout: docs
title: Projects in the cloud
description: Projects in the cloud
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection, remote deployment of Codewind
duration: 5 minutes
permalink: remotedeploy-projects
type: document
---

# Objectives
Now that you have configured Codewind to be used remotely, you are now ready to:

1. Create a new project
2. Import a project from your local Codewind instance to your remote Codewind instance on the cloud

## Create a new project

Go to the Codewind panel and click the Plus (+) icon on the new cloud deployment:

![Adding new remote project](./images/remotevs/newProject.png)

Select the template type and enter a project name. Your new project is built and after a few seconds begins running in the cloud.

## Importing an existing local project to the cloud

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

# Congratulations! In this tutorial you:

1. Deployed a new Codewind install into OpenShift.
2. Configured your IDE to use this new deployment.
3. Registered all the necessary security parameters.
4. Created a new project that builds and runs in the cloud.
5. Copied an existing local project to build and run in the cloud.

# Next Steps

To understand more about how you can use project templates in Codewind, including using pre-supplied templates and creating your own, see [Working with Templates](./workingwithtemplates.html)

