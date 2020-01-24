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

Deploy Codewind remotely to develop your code locally and build and run it remotely and securely in the cloud. This option is useful because it frees up resource on your laptop and uses the cloud's resources to build and run your apps.

After you install your IDE and configure Codewind for local use, follow these steps to deploy to the cloud:

1. Use the Codewind CLI to deploy Codewind remote services.
2. Use your IDE to create a connection link.
3. Move over any projects to the alternative remote service.

## Planning your deployment

Codewind remote services contain many different components. Use the Codewind CLI `cwctl` to install all the required components at once, or each component separately. 

If you are running a pilot, you can install everything into a single namespace and have one authentication server per Codewind instance. However, for production use, the recommended approach is to install a single Keycloak service that is shared by many Codewind services.

## Prerequisites

- Install your preferred IDE on your local machine. For more information about installing Eclipse, see [Getting started with Codewind for Eclipse](mdteclipsegettingstarted.html), or for more information about installing VS Code, see [Getting started with Codewind for VS Code](mdt-vsc-getting-started.html).
- Ensure that you have access to the Codewind CLI `cwctl`. To access the Codewind CLI, open a terminal window and navigate to the following hidden folder: `~/.codewind/<version>`. On Windows, navigate to the following folder: `%SystemDrive%\Users\<username>\.codewind\<version>`.
- The installer can install Keycloak on its own, Keycloak and Codewind together, or Codewind pointing at an existing Keycloak. If you decide you want to deploy Keycloak on its own first, install it using the `cwctl install remote \` commands described in the following installation procedures and add the `--konly` flag. Then install a Codewind instance that uses Keycloak by adding the `--kurl` flag, which is the ingress of the Keycloak service. Best practice is to deploy Keycloak first, and then deploy your Codewind instances.
- Have an active Kubernetes context that points to your cluster.
- Have access to a keyring, a software application designed to store security credentials, such as usernames, passwords, and keys, together with a small amount of relevant metadata. Examples of a keyring are Keychain on macOS, Credential Manager on Windows, and Secret Service on Linux.

## Install Codewind and the authentication services

Next step, either:

- [Install both Codewind and authentication services together](./remotedeploy-combo.html)

Or:

- [Install Codewind components and authentication services individually](./remotedeploy-single.html)
