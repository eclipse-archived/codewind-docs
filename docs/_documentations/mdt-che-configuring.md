---
layout: docs
title: Configuring Codewind for Eclipse Che
description: Configuring Codewind for Eclipse Che
keywords: build, deploy, install, installing, installation, chart, Helm, develop, cloud, public cloud, services, command line, cli, command, start, stop, update, open, delete, options, operation, devops, OpenShift, OKD
duration: 1 minute
permalink: mdt-che-configuring
type: document
---

# Configuring Codewind for Eclipse Che
Use Che to develop microservices in a containerized environment.

## Installing Che
1. Install Che.
2. From a command line window, install the `chectl` command line tool and set up the ingress conroller.
3. Download and configure the Che and Codewind plug-in operator, ready to install into your cluster.
4. Use the `chectl` command line and operator to finish the installation.

## Creating the Codewind workspace
1. Open a browser with a URL made of the Che ingress domain shown in the previous `chectl` output and a URL parameter that references the Codewind plug-in dev file.
2. When prompted, log in to the Che environment and wait for the Codewind workspace to be created. Depending on your network connection speed, this process might take a few minutess.
3. To configure the Che Codewind workspace, go to the administration settings and add a new registry. For example, you can use Docker as your registry. Supply your user credenials.
4. After you enter your information, restart your Che Codewind workspace to pick up the changes. After the workspace restarts, notice that a Codewind icon now appears in the toolbar.
5. Click on the project list. Codewind asks to confirm which deployment registry to use before creating your first project. For example, if you used Docker as your registry, enter your Docker user ID. Then, Codewind confirms that it can interact with the given registry.

## Creating your Codewind microservice with the Che IDE
1. Under **Projects**, click **Click here to create a project**. Codewind prompts you to select the project type you want to use. Select the project type.
2. Next, enter a name for your project. Codewind uses Appsody to create the skeleton of an express microservice.
3. Download any dependencies and build the application within its own container. This operation might take a few minutes to complete.
4. After the application status changes to **Running**, you can see the microservice endpoint address in the Kubernetes cluster.
5. Click the application icon. Codewind opens a new browser window and makes a call to the microservices endpoint.

## Developing your microservice
1. From the project explorer panel, open the `app.js` file, which Appsody creates.
2. As an example, modify the microservice response text and save.
3. Codewind automatically recognizes the code changes and rebuilds the microservice within the running container.
4. Open the microservice again to see the code changes are applied in the form of new response text.
5. Go back to the command line window. Query your Kubernetes cluster and see that your express microservice is running within its own pod.
6. Back in the browser, see that all the Codewind features found in the local IDEs are also available in Eclipse Che. The application logs are running in the container.
7. Bring up the application monitor to view your microservices metrics.
8. Use Codewind to generate traffic with the performance dashboard tool. Generate a simple run and see the results in the application monitor view as well as call stack and endpoint activity information.

To view this information as a video, see [Codewind Eclipse Che plugin and creating an Appsody Express Node.js based microservice](https://www.youtube.com/watch?v=yMynpzZF6V8).