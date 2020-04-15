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

2. **Have an active Kubernetes context and log in to the cluster.** Codewind can run in OpenShift 3.11, OpenShift 4.3, OpenShift in IBM Public Cloud, standalone Kubernetes, and Kubernetes in Docker.

3. **For Linux desktop, ensure your workstation is set up to use a Keyring.** An example of a Keyring on Linux is Secret Service. 

## 1. Clone the Codewind operator repository

The Codewind operator helps with the deployment of Codewind instances in an Openshift or Kubernetes cluster. Installing the Codewind operator is usually performed by your system administrator. 

Clone the Codewind operator repository, for example: 

`$ git clone https://github.com/eclipse/codewind-operator`

For more detailed information about the Codewind operator and the install process, see the [Codewind operator readme](https://github.com/eclipse/codewind-operator/blob/master/README.md).

## 2. Install the operator into your cluster and deploy Keycloak

Use the `install.sh` script located in your cloned Codewind operator repository `deploy` folder to install the operator into your cluster and deploy Keycloak, for example:

`$ install.sh operator -i <ingress_domain>`

Add the option `-o` flag if you are installing into an OpenShift 3.11 cluster, for example: 

`$ install.sh operator -i -o <ingress_domain>`

The script installs the operator into your cluster, deploys Keycloak, and returns the Keycloak **Access URL**.

## 3. Add a new user to Keycloak

1\. Copy the **Access URL** returned in the previous step and paste it into a browser.  

2\. Ensure that the Realm is set to `Codewind` by clicking on the dropdown arrow on the page. Select **Codewind** if necessary, then:

- Click **Users**.
- Click **Add user**.
- Complete the **username** field.
- Complete the **email**, **Firstname**, and **Lastname** fields as required.
- Ensure **user enabled** is **On**.
- Click **Save**.

3\. Assign an initial password to the user account by clicking **Credentials** and then add the initial password.

4\. The field **Temporary = On** requires users to change their passwords during first connection. Set **Temporary = Off** makes this password valid for continuous use and not require changing on first connect.

5\. Click **Set Password** to save changes. Log out of the Keycloak admin page.

## 4. Deploy a Codewind instance

Use the `install.sh` script in the Codewind operator repository to deploy a Codewind instance. Enter:

`$ install.sh codewind -n <instanceName> -u <registeredUsername>`

Where:
- `instanceName` is the unique name you specify for this Codewind instance.
- `registeredUsername` is the name of the user added in [Step 3](#3-add-a-new-user-to-keycloak).

Your Codewind instance is deployed. Access it by copying and pasting the **Access URL** returned by the script into a browser. 

## 5. Removing a Codewind instance

To remove a Codewind instance, see [Removing a Codewind instance](https://github.com/eclipse/codewind-operator/blob/master/README.md#removing-a-codewind-instance) in the codewind-operator readme.

## Next steps

You have now finished installing the Codewind operator, and you have deployed a Codewind instance.

In the next topic, you will learn how to [use Codewind remotely](./remote-codewind-overview.html).
