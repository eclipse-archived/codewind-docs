---
layout: docs
title: Using Codewind remotely
description: Using Codewind remotely
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection, remote deployment of Codewind
duration: 5 minutes
permalink: remote-jane-overview
type: document
---

# Using Codewind remotely

Codewind can be used in one of 3 ways - [locally], [hosted] as an application on a cloud, or remotely. By using Codewind remotely, you can develop your code locally, but build and run your application in the cloud. Remote use of Codewind frees up your desktop resources, using the cloud's resources to build and run applications. 

# What you will learn

You will learn how to configure your local Codewind to connect to an instance of Codewind in the cloud and then build and run a project in the cloud. 

After you install your local IDE and configure Codewind for local use, you will follow these steps to deploy Codewind to the cloud:

1. Configure your IDE to connect to Codewind in the cloud
2. Register all necessary security parameters

Once you have connected your local Codewind to Codewind in the cloud, you will learn how to:

1. create a new project that builds and runs in the cloud
2. build and run an existing project in the cloud

## Prerequisites

Before deploying Codewind to the cloud, you must:


1. **Install your preferred IDE on your local machine.** 
For more information about installing Eclipse, see [Getting started with Codewind for Eclipse](mdteclipsegettingstarted.html), or for more information about installing VS Code, see [Getting started with Codewind for VS Code](mdt-vsc-getting-started.html).

2. **Have access to a keyring** A keyring is a software application designed to store security credentials, such as usernames, passwords, and keys, together with a small amount of relevant metadata. Examples of a keyring are Keychain on macOS, Credential Manager on Windows, and Secret Service on Linux.


### Next Steps

Select [Connecting your VS Code to remote Codewind](remotedeploy-vscode.html) or [Connecting your Eclipse to remote codewind](./remotedeploy-eclipse.html) to configure your IDE to connect to Codewind in the cloud 
