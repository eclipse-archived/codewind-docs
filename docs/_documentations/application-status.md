---
layout: docs
title: Application Status
description: Understanding projects' statuses and working with tools to resolve issues 
keywords: project, status, pinging, stopped state, starting state, internalPort
duration: 1 minute
permalink: applicationstatus
type: document
order: 5
parent: Developing projects 
---

# Application Status 
When starting with Codewind, you might encounter issues with your project. Thus, you need to understand project statuses and know what tools to use to resolve issues. See the following sections for help with: 

* [Projects stuck in starting or stopped state](##projects-stuck-in-starting-or-stopped-state)
* [How to stop the app from continuously pinging](##how-to-stop-the-app-from-continuously-pinging)
* [How to create a .cw-settings file if it does not exist](how-to-create-a-.cw-settings-file-if-it=does-not-exist)

## Projects stuck in starting or stopped state
You might occasionally see projects stuck in the `Starting` or `Stopped` state even though the container logs say the projects are up and running. This can happen when you create a number of projects, for example, using the default and Appsody templates with Codewind 0.5.0. 

**Workaround** Manually rebuild the projects that are stuck in `Starting` or `Stopped` state. To do this: 
1. In the **Codewind Explorer** view, right-click your project and select **Build**.
2. Wait for the project state to return to **Running** or **Debugging** in the **Codewind Explorer** view.

## How to stop the app from continuously pinging 
With all the stacks and templates Codewind offers, some template applications come with no server, like Appsody Node.js. The backend in PFE expects all applications to have a server. Thus, the backend continuously pings the port of the application retrieved from the application's container information. Since no server is available to ping on that port, the application times out and is stuck on `Starting`. 

**Workaround** Disable the pinging of your application stuck on the `Starting` state:
1. Edit the `.cw-settings` file under the application, and set the key `internalPort` to `-1`. 
    - This key forces the application to stop, stops pinging the application, and bypasses the timeout error. 
2. Once you implement the server into the application, resume the application ping and run it by setting `internalPort` to `""` for the default port of the container. Or you can choose a specific port you want to ping. 

## How to create a .cw-settings file if it does not exist
Prior to the 0.9.0 release, non-Codewind stacks, like Appsody and OpenShift Do (odo), did not come with a .cw-settings. If you have a project from those stacks from a previous release, you need to create the .cw-settings file. The file must reside under the project root directory. 

**Workaround** Create a template .cw-settings file with the following contents: 

```
{
"contextRoot": "",
"internalPort": "",
"healthCheck": "",
"isHttps": false,
"ignoredPaths": [
""
]
}
```
