---
layout: docs
title: Creating your first project with Codewind for Eclipse Che
description: Creating your first project with Codewind for Eclipse Che
keywords: build, deploy, install, installing, installation, chart, develop, cloud, public cloud, services, command line, cli, command, start, stop, update, open, delete, options, operation, devops
duration: 1 minute
permalink: mdt-che-createfirstproject
type: document
---

# Creating your first project with Codewind for Eclipse Che
1. To create a Codewind project in Che, click **Create New Project** in the Codewind Project Explorer or go to **View**>**Find Command...** and click **Codewind: Create New Project**.
2. Click a template source to enable. Local Codewind bundles **Default templates**, **Kabanero Collections**, **OpenShift Templates**, and **Appsody Stacks**.
3. After you select a template, choose a project type and press **Enter** to create the project. Codewind starts to build and deploy the project. The project can take 30 seconds to a few minutes to begin to run. After the project is created, in the Projects view, your project appears, and the project overview page opens.
4. After you create a project, you can explore it with the following actions:
   - Right-click your project and click **Show all logs** to see the logs for the project.
   - To view the project code, go to the Explorer Projects view and click your project folder and the file you want to view.
   - Click **Open Application** to open your application in your browser.

## Checking the status of a project
The Codewind Project Explorer view shows two statuses.
- The first status is the application status, which tells you if the application is running, stopped, or starting.
- The second status is the build status, which tells you what the most recent status of the build was, such as if the build succeeded, failed, or produced a specific error. For example, the build status can tell you if the deployment failed.

1. After the project finishes building, its build status changes to **Build Succeeded**.
2. After the application is built and deployed, the appliction status changes to **Starting**.
3. When the application is running, the application status changes to **Running**.

Next step: [Making a code change with Codewind for Eclipse Che](mdt-che-codechange.html)
