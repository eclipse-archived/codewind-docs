---
layout: docs
title: Creating a new project
description: Creating a new project
keywords: create, build, start, Go, Java, Node.js, Python, Swift, workspace, post-import
duration: 1 minute
permalink: creatingaproject
type: document
order: 2
parent: usingmicroclimate
---

# Creating a new project

To create, build, and start a new project in your Microclimate workspace:

1. Click the **New project** button on the Welcome page. If you already created or imported a project, click **Projects** in the Microclimate header and then click **New project**.
2. Select your language. Options available are Java, Node.js, Go, Python, and Swift.
3. Name your project in lowercase letters and numbers.
   - **Optional:** Click **Create project in Git** to commit the new project to Git. For more information, see [Committing a new project to GitHub](committingaprojecttogithub).
4. Depending on your choice of language, you see additional project creation options:
   - Click **Go** to create a Go project based on the Go sample template.
   - Click **Java** to create a Java project based on available frameworks, including:
     - [Lagom](https://developer.ibm.com/code/partners/reactive-platform/)
     - [Microprofile](https://microprofile.io/)
     - [Spring](https://spring.io/)
   - Click **Node.js** to create a Node.js project with optional services, or a Node.js project based on a sample template.
   - Click **Python** to create a Python project based on the Python Hello World template.
   - Click **Swift** to create a Swift project (not supported on Linux® on Power® (ppc64le)).
5. Click **Create**. This step creates, builds, and starts your project in your Microclimate workspace. Microclimate downloads everything it needs to build the project, and this might take some time depending on the speed of your internet connection.
6. Check the build status and application status of your new project. For more information, see [Checking the application and build statuses](checkingstatuses).
7. If your project requires additional configuration files or instructions for build, you might need to modify them. For more information, see [Post-import instructions](importedprojects#post-import-instructions).

## Need help?
If you encounter problems with creating a project, check the [Troubleshooting page](troubleshooting#creating-a-new-project).
