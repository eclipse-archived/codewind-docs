---
layout: docs
title: Checking the application and build statuses
description: Checking the application and build statuses
keywords: using, run, monitor, getting started,  builds, changes, status, state, help, troubleshooting, stopped, starting, unknown, failed, logs, app, error, message, messages, application, build
duration: 1 minute
permalink: checkingstatuses
type: document
parent: usingcodewind
order: 7
---

# Checking the application and build statuses

Builds automatically begin when Codewind detects changes or when a build is initiated by pressing the Build button on a project.

## Application status

The application status shows the current state of your application.

* Starting the application
  * When you start Codewind, it starts all the applications unless you have disabled them.
  * To enable a project that has been disabled, visit the *Project Overview* page by using the context menu in the Codewind view and click the *Enable project* button to start the application and build containers.
* Stopping an application
  * When you stop Codewind, its applications also stop.
  * To disable a project, navigate to the *Project Overview* page and click the *Disable project* button to stop the application and build containers to save resources.

Troubleshooting the application status
* If your application goes into the **Stopped** state unexpectedly or stays in the **Starting** state longer than expected, check the application logs to see whether something went wrong. Problems with the application build or server configuration can make the application fail to start and create errors in the **Build logs** or **App logs**.
* Even without errors, the **Stopped** state can occur if the context root of the application is unreachable.

## Build status

The build status shows the current stage of your application in the build lifecycle.

* When you create or import your application, the state is **Unknown**.
* The application is then subsequently put on a waiting queue for its build to begin. The state when the application is on the waiting queue is **Queued**.
  * The default maximum number of builds that can be run concurrently is three.
  * You can adjust the maximum number of concurrent builds by setting the `MC_MAX_BUILDS` environmental variable.
* If your build fails, view the build logs. The build logs can be opened from the project's context menu. In the build logs, you can view error messages that describe the type and cause of failure.

## Need help?
If you encounter problems with checking the application and build statuses, check the [Troubleshooting page](troubleshooting#checking-the-application-and-build-statuses).
