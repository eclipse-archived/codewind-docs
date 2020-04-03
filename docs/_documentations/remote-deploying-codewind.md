---
layout: docs
title: Deploying Codewind remotely
description: Deploying Codewind remotely
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection, remote deployment of Codewind
duration: 5 minutes
permalink: remote-deploying-codewind
type: document
---

# Deploying Codewind remotely

Codewind can be used in one of three ways - locally, [hosted](./che-installinfo.html) as an application on a cloud, or remotely. By deploying Codewind remotely, you can develop your code locally, but build and run your application in the cloud. Remote use of Codewind frees up desktop resources, using the cloud's resources to build and run applications. 

To learn how to use Codewind once it has been deployed remotely, see [Using Codewind remotely](remote-codewind-overview.html).

## What you will learn

You will learn how to deploy Codewind to be used remotely. 

After you install your local IDE and configure Codewind for local use, you will:

1. Install the Codewind operator in your cloud.
2. Deploy your Codewind instances. 

Finally, you will learn how to remove a remote deployment of Codewind.

## Prerequisites

Before deploying Codewind to the cloud, you must:

1. **Install your preferred IDE on your local machine.** For more information about installing Eclipse, see [Getting started with Codewind for Eclipse](eclipse-getting-started.html), or for more information about installing VS Code, see [Getting started with Codewind for VS Code](vsc-getting-started.html).

2. **Have an active Kubernetes context that points to your cluster.** Codewind can run in OpenShift 3.11, OpenShift 4.3, OpenShift in IBM Public Cloud, standalone Kubernetes, and Kubernetes in Docker.

3. **Have access to a keyring** A keyring is a software application designed to store security credentials, such as usernames, passwords, and keys, together with a small amount of relevant metadata. Examples of a keyring are Keychain on macOS, Credential Manager on Windows, and Secret Service on Linux.

## 1. Install the Codewind operator in your cloud

The Codewind operator helps with the deployment of Codewind instances in an Openshift or Kubernetes cluster. Installing the Codewind operator is usually performed by your system administrator. 

To install the Codewind operator in your cloud, follow the instructions in the [codewind-operator readme](https://github.com/eclipse/codewind-operator/blob/master/README.md).

## 2. Deploy your Codewind instances

After your system administrator has installed the operator, you can deploy a Codewind instance. 

To deploy a Codewind instance, see [Deploy a Codewind instance](https://github.com/eclipse/codewind-operator/blob/master/README.md#deploy-a-codewind-instance) in the codewind-operator readme.

## 3. Removing a Codewind instance

To remove a Codewind instance, enter the following command where `<name>` is the name of the deployment: 

`$ kubectl delete codewinds <name> -n codewind`

## Next steps

You have now finished installing the Codewind operator, and you have deployed a Codewind instance.

In the next topic, you will learn how to [use Codewind remotely](./remote-codewind-overview.html).
