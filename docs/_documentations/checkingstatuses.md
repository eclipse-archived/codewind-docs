---
layout: docs
title: Understanding application and build statuses
description: Understanding application and build statuses
keywords: using, run, monitor, getting started,  builds, changes, status, state, help, troubleshooting, stopped, starting, unknown, failed, logs, app, error, message, messages, application, build
duration: 1 minute
permalink: checkingstatuses
type: document
parent: usingcodewind
order: 7
---

# Understanding application and build statuses

Builds automatically begin when Codewind detects changes or when a build is initiated by clicking the **Build** button on a project.

## Application status

The application status shows the current state of your application.

* Starting the application
  * When you start Codewind, it starts all the applications unless you have disabled them.
  * To enable a project that has been disabled, visit the *Project Overview* page by using the context menu in the Codewind view and click the **Enable project** button to build containers and start the application.
* Stopping an application
  * When you stop Codewind, its applications also stop.
  * To disable a project, navigate to the **Project Overview** page and click the **Disable project** button to stop the application and containers to save system resources.

## Build status

The build status shows the current stage of your application in the build lifecycle.
* When you create or import your application, the state is **Unknown**.
* The project is then subsequently put in a build queue. When a project is in the build queue its build state is **Queued**.
  * The default maximum number of builds that can be run concurrently is three.
  * If you must adjust the maximum number of concurrent builds, you can set the `MC_MAX_BUILDS` environmental variable in the `codewind-pfe` container. It is not recommended to alter this value because there can be a significant impact on performance.
* If your build fails, inspect the build logs. The build logs can be opened from the project's context menu. In the build logs, you can view error messages that describe the type and cause of failure.

## Need help?
Check the Application and Build Statuses section on the [Troubleshooting page](troubleshooting.html#troubleshooting-project-application-and-build-statuses).
