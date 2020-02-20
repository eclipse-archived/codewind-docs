---
layout: docs
title: Configuring project settings
description: Project settings
keywords: project, settings, project specifications, debug port, internal debug port, application port, internal application port, context root, health check endpoint, maven profiles, maven profile settings, maven properties, ignore file change, monitor file change
duration: 1 minute
permalink: projectsettings
type: document
order: 0
parent: managingprojects
---

# Configuring project settings

## Project settings

Project settings tell Codewind more about the specifics of your project and can affect the status and/or behaviour of your application. Project settings can be configured from the Project Overview page that is accessible from a project's context menu.

The list of supported project settings are:
* [Internal debug port](#internal-debug-port)
* [Internal application port](#internal-application-port)
* [Context root](#context-root)
* [Health check endpoint](#health-check-endpoint)
* [Maven profiles](#maven-profiles)
* [Paths to ignore for file changes](#paths-to-ignore-for-file-changes)

### Internal debug port
`internalDebugPort: <string>`
- Only applicable to Microprofile, Spring and Node.js projects
- Only applicable to a local installation of Codewind
- Can be assigned to a non-exposed port, and Codewind will help expose the port for you
- If the project is already in debug mode, the project will need to be restarted in debug mode again in order to pick up the new debug port
- If the project is in run mode, the new debug port will be picked up and used the next time a restart in debug mode is done

### Internal application port
`internalPort: <string>`
- Expected to be exposed, Codewind will not expose the port automatically
- This value is used by Codewind in conjunction with the context root to determine the project state
- If an incorrect port is set, the project will be stuck in starting state

### Context root
`contextRoot: <string>`
- The value is used by Codewind to determine the project state
- The value is also used as the initial endpoint when the Open Application action is used
- If an incorrect context root is set, the project will be stuck in starting state
- If the health check endpoint is set, the context root will not be used to determine the project state
- If the value is not set, the default value is `/`

### Health check endpoint
`healthCheck: <string>`
- The value is used by Codewind to determine the project state
- Expected to be used for the application health check endpoint
- If a wrong health check endpoint is set, the project will be stuck in starting state
- If the health check endpoint is set, the context root will not be used to determine the project state

### Paths to ignore for file changes
`ignoredPaths: <string[]>`
- A list of file paths that indicate a build should be triggered on file change events in relation to the paths
- Each item is expected to be a regex (`"*/node_modules*"` ) or a path relative to the project's root directory (`"/README.md"`)

### Maven profiles
`mavenProfiles: <string[]>`
- Only applicable to Microprofile and Spring projects
- A list of profiles can be set if a project requires additional Maven profiles to be used when Codewind issues Maven commands
- It is not advised to overwrite or remove the microclimate profile
- Maven profiles can be used in conjunction with Maven properties

### Maven properties
`mavenProperties: <string[]>`
- Only for Microprofile and Spring projects
- Maven properties can be entered in the form `key=value`
- It is not advised to overwrite the microclimate property
- Maven properties can be used in conjunction with Maven profiles
