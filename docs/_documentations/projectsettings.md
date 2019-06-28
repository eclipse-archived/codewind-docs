---
layout: docs
title: Reconfiguring project settings
description: Project settings
keywords: project, settings, project specifications, debug port, internal debug port, application port, internal application port, context root, health check endpoint, maven profiles, maven profile settings, maven properties, ignore file change, monitor file change
duration: 1 minute
permalink: projectsettings
type: document
order: 0
parent: managingprojects
---

# Reconfiguring project settings

## Project settings

After you create or import a project into Microclimate, you update the project settings.


The current supported project settings are: 
* [Internal debug port](#internal-debug-port)
* [Internal application port](#internal-application-port)
* [Context root](#context-root)
* [Health check endpoint](#health-check-endpoint)
* [Maven profiles](#maven-profiles)
* [Paths to ignore for file changes](#paths-to-ignore-for-file-changes)

### Internal debug port
`internalDebugPort: <string>`
- Only for Microprofile, Spring and Node.js projects
- Only for local Codewind
- Can be assigned to a non-exposed port, and Codewind will help expose the port for you
- If the project is already in debug mode, a project rebuild will need to be done to pick up the new debug port
- If the project is in run mode, the new debug port will be picked up and use in the next time it's switched to debug mode

### Internal application port
`internalPort: <string>`
- The value is used by Codewind to determine the project state
- Expected to be exposed and used for the application health check or contect root. Codewind is not going to expose the port for you.
- If a wrong port is used, project will stuck in starting state.
- The value should be a free port

### Context root
`contextRoot: <string>`
- The value is used by Codewind to determine the project state
- Expected to be used for the application context root.
- If a wrong context root is set, project will stuck in starting state.
- If the health check endpoint is set, the context root won't be used. 
- If the value is unset, default value is `/`

### Health check endpoint
`healthCheck: <string>`
- The value is used by Codewind to determine the project state
- Expected to be used for the application health check endpoint.
- If a wrong health check endpoint is set, project will stuck in starting state.
- If the health check endpoint is set, the context root won't be used. 

### Maven profiles
`mavenProfiles: <string[]>`
- Only for Microprofile and Spring projects
- Users should configure the pom.xml accordingly to add custom profiles
- Users are advised not to overwrite the Microclimate profile
- Users can use Maven profiles in conjunction with Maven properties

### Maven properties
`mavenProperties: <string[]>`
- Only for Microprofile and Spring projects
- Users should configure the pom.xml accordingly to add custom profiles
- Users can enter the Maven properties in the form `key=value`
- Users are advised not to overwrite the Microclimate property
- Users can use Maven properties in conjunction with Maven profiles


### Paths to ignore for file changes
`ignoredPaths: <string[]>`
- The value is used by Codewind to determine whether or not should triger a build on a particular file change event. 
- Each element of the array is expected to be a regex (`"*/node_modules*"` )or a relative path against the project directory (`"/README.md"`). 


