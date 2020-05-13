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

Codewind can be used in one of three ways - [locally](./gettingstarted.html), [hosted](./che-installinfo.html) as an application on the cloud, or remotely. 

By **deploying and using Codewind remotely**, you can **develop your code locally** using your local Codewind installation, but **build and run your application in the cloud**. Remote use of Codewind frees up desktop resources, using the cloud's resources to build and run applications. 

Follow the instructions to deploy Codewind remotely. After you install your local IDE and configure Codewind for local use, you will:

1. Install the Codewind operator in your cloud.
2. Deploy your Codewind instances. 

**Note: To learn how to connect your local IDE to your remote deployment of Codewind once it has been deployed remotely** see [Using Codewind remotely](remote-codewind-overview.html).

**Note: To remove a remote deployment of Codewind** See [Removing a Codewind instance](https://github.com/eclipse/codewind-operator/blob/master/README.md#removing-a-codewind-instance) in the codewind-operator readme.

## Prerequisites

Before deploying Codewind to the cloud, you must:

1. **Install Codewind into your preferred IDE on your local machine.** 
For more information, select from the following IDEs:
- [Getting started with Codewind for Eclipse](./eclipse-getting-started.html)
- [Getting started with Codewind for VS Code](./vsc-getting-started.html)
- [Getting started with Codewind for IntelliJ](./intellij-getting-started.html)

2. **Have an active Kubernetes context and log in to the cluster.** Codewind can run in OpenShift 3.11, OpenShift 4.3, OpenShift in IBM Public Cloud, standalone Kubernetes, and Kubernetes in Docker.

3. **For Linux desktop, ensure your workstation is set up to use a Keyring.** An example of a Keyring on Linux is Secret Service. 

4. **Have a Git command line client installed.** To download the latest Git command line client, see [https://git-scm.com/download](https://git-scm.com/download).

## 1. Clone the Codewind operator repository

The Codewind operator helps with the deployment of Codewind instances in an Openshift or Kubernetes cluster. Installing the Codewind operator is usually performed by your system administrator. 

Clone the Codewind operator repository, for example: 

`$ git clone https://github.com/eclipse/codewind-operator -b 0.12.0`

For more detailed information about the Codewind operator and the install process, see the [Codewind operator readme](https://github.com/eclipse/codewind-operator/blob/master/README.md).

## 2. Install the operator into your cluster and deploy Keycloak

Use the `install.sh` script located in your cloned Codewind operator repository `deploy` folder to install the operator into your cluster and deploy Keycloak, for example:

`$ install.sh operator -i <ingress_domain>`

Add the option `-o` flag if you are installing into an OpenShift 3.11 cluster, for example: 

`$ install.sh operator -i -o <ingress_domain>`

The script installs the operator into your cluster, deploys Keycloak, and returns the Keycloak **Access URL**.

**Note:** When installing on Windows, the script executes and then closes the Git Bash popup. To retrieve the Access URL for Keycloak, enter the following command:

`$ kubectl get keycloak -n codewind`

The command returns the following example output:

```
NAME       NAMESPACE   AGE    ACCESS
devex001   codewind    122m   https://codewind-keycloak-devex001.<ingress-domain>
```

## 3. Add a new user to Keycloak

1. Copy the **Access URL** and paste it into a browser.

2. Click **Administration Console** and log in to Keycloak with `admin` as the default login user name and `admin` as the default password.

3. Change the administrator password and return to the **Administration Console**.
- Click the **Admin** link and choose **Manage Account/Password**.
- Set a new administrator password.
- To return to the admin console, click **Back to Security Admin Console** or log out and log back in to Keycloak as the admin user with your new admin password.

4. Ensure that the Realm is set to **Codewind** by clicking on the dropdown arrow on the page. Select **Codewind** if necessary and complete these steps:
- Click **Users**.
- Click **Add user**.
- Complete the **username** field.
- Complete the **email**, **Firstname**, and **Lastname** fields as required.
- Ensure **user enabled** is **On**.
- Click **Save**.

5. Assign an initial password to the user account by clicking **Credentials**. Then, add the initial password.

6. The field **Temporary = On** requires you to change your password during first connection. Set **Temporary = Off** to make this password valid for continuous use and to prevent the need to change it on first connection.

7. Click **Set Password** to save the changes. Log out of the Keycloak admin page.

## 4. Deploy a Codewind instance

Use the `install.sh` script in the Codewind operator repository to deploy a Codewind instance. Enter:

`$ install.sh codewind -n <instanceName> -u <registeredUsername>`

Where:
- `instanceName` is the unique name you specify for this Codewind instance.
- `registeredUsername` is the name of the user added in [Step 3](#3-add-a-new-user-to-keycloak).

Your Codewind instance is deployed. Access it by copying and pasting the **Access URL** returned by the script into a browser. 

**Note:** When installing on Windows, the script executes and then closes the Git Bash popup. To retrieve the Access URLs for Codewind, enter the following command:

`$ kubectl get codewind -n codewind`

This command returns, for example:

```
NAME       USERNAME   NAMESPACE   AGE    KEYCLOAK   REGISTRATION   ACCESSURL
devex001   jane       codewind    119m   devex001   Complete       https://codewind-gatekeeper-devex001.<ingress-domain>
```

## 5. Removing a Codewind instance

To remove a Codewind instance, see [Removing a Codewind instance](https://github.com/eclipse/codewind-operator/blob/master/README.md#removing-a-codewind-instance) in the codewind-operator readme.

## Next steps

You have now finished installing the Codewind operator, and you have deployed a Codewind instance.

In the next topic, you will learn how to [use Codewind remotely](./remote-codewind-overview.html).
