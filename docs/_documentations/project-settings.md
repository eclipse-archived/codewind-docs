---
layout: docs
title: Project settings 
description: Project settings tell Codewind the specifics of your project and application 
keywords: project, settings, Codewind, application, configuring, workspace
duration: 1 minute
permalink: project-settings.html
type: document
---

# Project settings

Project settings tell Codewind more about the specifics of your project and can affect the status or behavior of your application. Project settings can be configured from the `Project Overview` page that is accessible from a project's context menu. You can also find the project settings in the `.cw-settings` file of the project, which you can edit from the IDE. The workspace automatically picks up changes to these fields.

Supported project settings include:
* [Context root](#context-root)
* [Health check endpoint](#health-check-endpoint)
* [HTTPS application](#https-application)
* [Internal application port](#internal-application-port)
* [Internal debug port](#internal-debug-port)
* [Maven profiles](#maven-profiles)
* [Maven properties](#maven-properties)
* [Paths to ignore for file changes](#paths-to-ignore-for-file-changes)
* [Project status ping timeout](#project-status-ping-timeout)

## Context root
`contextRoot: <string>`
- Codewind uses the value to determine the project state.
- When the Open Application action is used, it uses the value as the initial endpoint. 
- If an incorrect context root is set, the project continuously pings the wrong endpoint, keeping the project stuck in the starting state. 
- If the health check endpoint is set, the context root is not used to determine the project state.
- If the value is not set, the default value is `/`.

## Health check endpoint
`healthCheck: <string>`
- Codewind uses the value to determine the project state.
- Codewind expects to use this value for the application health check endpoint.
- If a wrong health check endpoint is set, the project continuously pings the wrong endpoint, keeping the project stuck in the starting state. 
- If the health check endpoint is set, the context root is not used to determine the project state. 
- If the value is not set, the default value is `/`.

## HTTPS application
`isHttps: <boolean>`
- This value tells Codewind to use the HTTPS protocol when Codewind detects the application status, and also when Codewind launches the application in a browser.
- If your application supports HTTPS, set `isHttps` to `true`, and Codewind uses HTTPS instead of HTTP to detect the application status and to open browser URLs.
- The default value of this setting is `false`.

## Internal application port
`internalPort: <string>`
- Codewind gets the port from the container information, so by default, the port is the same as the one exposed in Dockerfile. 
- Codewind uses the value in conjunction with the context root to determine the project state.
- If an incorrect port is set, the project continuously pings the wrong endpoint, keeping the project stuck in the starting state.

## Internal debug port
`internalDebugPort: <string>`
- Only applicable to MicroProfile, Spring, and Node.js projects.
- Only applicable to a local installation of Codewind.
- Can be assigned to a non-exposed port, then Codewind helps expose the port for you.
- If the project is already in debug mode, restart the project in debug mode in order to pick up the new debug port.
- If the project is in run mode, the next restart picks up and uses the new debug port and completes a debug mode.

## Maven profiles
`mavenProfiles: <string[]>`
- Only applicable to MicroProfile and Spring projects.
- Set a list of profiles if your project requires to use additional Maven profiles when Codewind issues Maven commands.
- Do not overwrite nor remove the profile.
- Maven profiles can be used in conjunction with Maven properties.

## Maven properties
`mavenProperties: <string[]>`
- Only for MicroProfile and Spring projects.
- Use the form `key=value` to enter Maven properties.
- Do not overwrite the property.
- Maven properties can be used in conjunction with Maven profiles.

## Paths to ignore for file changes
`ignoredPaths: <string[]>`
- A list of file paths that indicate a build must be triggered on file change events in relation to the paths.
- Each item is expected to be a regex (`"*/node_modules*"` ) or a path relative to the project's root directory (`"/README.md"`).

## Project status ping timeout
`statusPingTimeout: <string>`
- This value is the total number of pings used by Codewind to determine if the project has timeout issues during the starting state.
- Each ping takes 2 seconds. For example, if the value is set to 30 seconds, the timeout is 60 seconds.
- If the value is not set, the default value is set to `90` (3 minutes) for Appsody projects and `30` (1 minute) for all other project types.