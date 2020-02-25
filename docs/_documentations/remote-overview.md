---
layout: docs
title: Deploying Codewind remotely
description: Deploying Codewind remotely
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection, remote deployment of Codewind
duration: 5 minutes
permalink: remote-overview
type: document
---

# Deploying Codewind remotely

Codewind can be used in one of three ways - locally, [hosted](./mdt-che-installinfo.html) as an application on a cloud, or remotely. By deploying Codewind remotely, developers can develop their code locally, but build and run your application in the cloud. Remote use of Codewind frees up desktop resources, using the cloud's resources to build and run applications. 

To learn how to use Codewind once it has been deployed remotely, see [Using Codewind remotely](remote-jane-overview.html).

# What you will learn

You will learn how to deploy Codewind to be used remotely. 

After you install your local IDE and configure Codewind for local use, you will use the Codewind CLI to:

1. Deploy Codewind to your cloud
2. Create additional instances of Codewind on your cloud, as required

Finally, you will learn how to remove a remote deployment of Codewind.

## Prerequisites

Before deploying Codewind to the cloud, you must:

1. **Install your preferred IDE on your local machine.** 
For more information about installing Eclipse, see [Getting started with Codewind for Eclipse](mdteclipsegettingstarted.html), or for more information about installing VS Code, see [Getting started with Codewind for VS Code](mdt-vsc-getting-started.html).

2. **Ensure that you have access to the Codewind CLI `cwctl`.** To access the Codewind CLI, open a terminal window and navigate to the following hidden folder: `~/.codewind/<version>`. On Windows, navigate to the following folder: `%SystemDrive%\Users\<username>\.codewind\<version>`.

3. **Have an active Kubernetes context that points to your cluster.** Codewind can run in OpenShift 3.11, OpenShift 4.3, OpenShift in IBM Public Cloud, standalone Kubernetes, and Kubernetes in Docker.

4. **Have access to a keyring** A keyring is a software application designed to store security credentials, such as usernames, passwords, and keys, together with a small amount of relevant metadata. Examples of a keyring are Keychain on macOS, Credential Manager on Windows, and Secret Service on Linux.

## Planning your remote deployment - Codewind and Authentication Services

A Keycloak must be used as the authentication service when using Codewind remotely. To use Codewind with Keycloak, you can either
1. point Codewind to an existing Keycloak and then install Codewind remotely using this keycloak.
2. use the Codewind CWCTL command on your local Codewind instance to install both Codewind remotely and Keycloak simultaneously.
3. use the Codewind CWCTL command on your local Codewind instance to install Keycloak on it's own. Then, install a Codewind instance that uses your new Keycloak.

To determine the best way to configure Keycloak for your use case, consider the following:

- If you are running a pilot or a short lived demonstration environment with a single user, and are not using IBM Public Cloud, you can use the simplest deployment and removal process of deploying Keycloak and Codewind in a single namespace, by using the Codewind CWCTL command to install both Codewind remotely and Keycloak simultaneously. With this configuration, there is one authentication server per Codewind instance. 

- If you are running in production, the best approach to simplify user administration is to install a single Keycloak service that is shared by many Codewind services. For this case, you need to install the authentication services separately from installing Codewind remotely. You will use a single keycloak to install multiple codewinds remotely.

### Next Steps

Once you have decided how you will be administering Codewind remotely, you can choose which installation procedure you need to follow:

- To install both the remote Codewind instance and Keycloak simultaneously, see [deploying all-in-one](./remotedeploy-combo.html)

Or:

- To install the remote Codewind instance and Keycloak individually, see [deploying components individually](./remotedeploy-single.html)

Or:

- To install the remote Codewind instance only and pointing to an existing Keycloak, see [deploying with an existing keycloak](./remotedeploy-existingkeycloak.html)
