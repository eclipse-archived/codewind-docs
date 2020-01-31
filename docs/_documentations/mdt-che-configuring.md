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
2. From a command line window, install the `chectl` command line tool and set up the ingress conroller with the `bash <(curl -sL https://eclipse.org/che/chectl)` command. Enter your password when prompted.
3. Enter `$echo CHE_DOMAIN` to download and configure the Che and Codewind plug-in operator, ready to install into your cluster. 
4. Use the `chectl` command line and operator to finish the installation. The installation might take a few minutes to complete. After installation, you're ready to create the Codewind workspace.

## Creating the Codewind workspace
1. Open a browser with a URL made of the Che ingress domain shown in the previous `chectl` output and a URL parameter that references the Codewind plug-in dev file.
2. When prompted, log in to the Che environment and wait for the Codewind workspace to be created. Depending on your network connection speed, this process might take a few minutes.
3. To configure the Che Codewind workspace, click **Administration** to go to the administration settings. Then, click **Add Registry** to add a new registry. An **Add registry** window appears.
4. Enter the **Address** and supply your user credenials in the **Username** and **Password** fields. As an example, you can use Docker as your registry.
5. After you enter your information, restart your Che Codewind workspace to pick up the changes. Click **Workspaces**. Then, click **Stop workspace** followed by **Run workspace**. After the workspace restarts, notice that a Codewind icon now appears in the toolbar.
6. Click the project list. Codewind asks you to confirm which deployment registry to use before creating your first project. For example, if you used Docker as your registry, you can enter your Docker user ID. A **Theia** window appears and asks if you want to test deploying.
7. Click **Yes**. Codewind confirms that it can interact with the given registry.

## Creating your Codewind microservice with the Che IDE
1. From **Projects**, click **Click here to create a project**. Codewind prompts you to select the project type you want to use. Select the project type, for example, **Appsody Node.js Express simple template**.
2. Next, Codewind prompts you to enter a name for your project. Enter the name. In this example, Codewind uses Appsody to create the skeleton of an express microservice.
3. Download any dependencies and build the application within its own container. This operation might take a few minutes to complete.
4. After the application status changes to **Running**, you can see the microservice endpoint address in the Kubernetes cluster.
5. Click the application icon. Codewind opens a new browser window and makes a call to the microservices endpoint.

## Developing your microservice
1. From the Eclipse Che project explorer panel, open the `app.js` file, which Appsody creates.
2. As an example, modify the microservice response text and save.
3. Codewind automatically recognizes the code changes and rebuilds the microservice within the running container. The application status momentarily changes to **Stopped** before returning to **Running**.
4. Open the microservice again to see that the code changes are applied in the form of new response text.
5. Go back to the command line window. Query your Kubernetes cluster with the `get pods -n che` command and see that your express microservice is running within its own pod.
6. Back in the browser, see that all the Codewind features found in the local IDEs are also available in Eclipse Che. Right-click your project and click **Show all logs** from the menu. See that the application logs are running in the container.
7. Right-click your project and click **Open Application Monitor** to bring up the application monitor and view your microservice metrics.
8. Use Codewind to generate traffic with the performance dashboard tool. Right-click your project and click **Open Performance Dashboard**.
   - From the performance dashboard, click **Run Load Test**. The **Run a new load test** window appears.
   - Enter a description for the test and click **Run** to generate a simple run and see the results in the application monitor view.
   - Click the **Profiling** tab to see the call stack information.
   - Click the **Summary** tab to see the endpoint activity information.
   - The performance dashboard stores this information for comparison against future performance runs.

To view this information as a video, see [Codewind Eclipse Che plug-in and creating an Appsody Express Node.js based microservice](https://www.youtube.com/watch?v=yMynpzZF6V8).