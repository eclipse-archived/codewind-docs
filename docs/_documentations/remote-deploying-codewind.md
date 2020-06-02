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

Codewind can be used in one of three ways: [locally](./gettingstarted.html), [hosted](./che-installinfo.html) as an application on the cloud, or remotely. 

By deploying and using Codewind remotely, you can develop your code locally by using your local Codewind installation and then build and run your application in the cloud. Remote use of Codewind frees up desktop resources by using the cloud's resources to build and run applications. 

Follow the instructions to deploy Codewind remotely. After you install your local IDE and configure Codewind for local use, you will:

1. Install the Codewind operator in your cloud.
2. Deploy your Codewind instances. 

**To connect your local IDE to your remote deployment of Codewind after it is deployed remotely:** See [Using Codewind remotely](remote-codewind-overview.html).

**To remove a remote deployment of Codewind:** See [Removing a Codewind instance](https://github.com/eclipse/codewind-operator/blob/master/README.md#removing-a-codewind-instance).

## Prerequisites

Complete these steps before you deploy Codewind to the cloud:

1. **Install Codewind into your preferred IDE on your local computer.** 
For more information, select from the following IDEs:
- [Getting started with Codewind for Eclipse](./eclipse-getting-started.html)
- [Getting started with Codewind for VS Code](./vsc-getting-started.html)
- [Getting started with Codewind for IntelliJ](./intellij-getting-started.html)

2. **Have an active Kubernetes context and log in to the cluster.**
- Codewind is validated on the following Kubernetes distributions:
  - IBM Cloud Kubernetes Service
  - OpenShift 3.11
  - OpenShift 4.3
  - OpenShift in IBM Public Cloud
  - Stand-alone Kubernetes
  - Kubernetes in Docker
- However, Codewind can run on any Kubernetes distribution that meets the following requirements:
  - Kubernetes 1.11 or later is included.
  - ReadWriteMany (RWX) persistent volumes are supported.
  - The Nginx Ingress Controller is installed.
- If you want to test and document support for other clouds, you can [contribute in GitHub](https://github.com/eclipse/codewind).

3. **For Linux desktop, ensure that your workstation is set up to use a Keyring.** An example of a Keyring on Linux is Secret Service. 

4. **Optional:** Install a Git command line client. To download the Git command line client, see [https://git-scm.com/download](https://git-scm.com/download).

## 1. Clone or download the Codewind operator repository

The Codewind operator helps with the deployment of Codewind instances in an OpenShift or Kubernetes cluster. Your system administrator usually installs the Codewind operator. 

Download the Codewind operator from the [codewind-operator repository](https://github.com/eclipse/codewind-operator), or if you installed Git, clone the `codewind-operator` repository, for example: 

`$ git clone https://github.com/eclipse/codewind-operator -b 0.12.0`

For more information about the Codewind operator and the installation process, see the [Codewind operator readme file](https://github.com/eclipse/codewind-operator/blob/master/README.md).

## 2. Install the operator into your cluster and deploy Keycloak

1. [Install the operator](#2a-install-the-operator).
2. [Change the admin password for the admin user](#2b-change-the-admin-password-for-the-admin-user).
3. [Update the Keycloak password in the operator secret with the new password](#2c-update-the-keycloak-password-in-the-operator-secret-with-the-new-password).

### 2a. Install the operator
Use the `install.sh` script that is located in your cloned Codewind operator repository `deploy` folder to install the operator into your cluster and deploy Keycloak. If you use Windows, use a Unix-like shell such as Windows Subsystem for Linux, Git Bash, or MinGW to run the operator installer shell script. For example:

`$ cd deploy`
`$ ./install.sh operator -i <ingress_domain>`

Add the option `-o` flag if you are installing into an OpenShift 3.11 cluster, for example: 

`$ ./install.sh operator -i <ingress_domain> -o`

The script installs the operator into your cluster, deploys Keycloak, and returns the Keycloak **Access URL**. The command returns the following example output:

```
NAME       NAMESPACE   AGE    ACCESS
devex001   codewind    122m   https://codewind-keycloak-devex001.<ingress-domain>
```

### 2b. Change the admin password for the admin user

You must prepare Keycloak for Codewind by changing the admin password that is given to the `admin` user in the previous step. 

1. Access the Administration Console by clicking the **Access URL** link provided by Step 2a. To locate the **Access URL** link, enter the `$ kubectl get keycloaks -n codewind` command. 

2. Log in to Keycloak by using the Keycloak admin credentials.
        username: `admin`
        password: `admin`

3. **Important:** After you log in, change the admin password by clicking the **Admin** link on the page. Then, click **Manage Account**>**Password** and set a new replacement administrator password:

    ![Admin link](./images/remote/admin_link_manage_account.png)

4. Switch back to the admin console using the link or log out and log back in to Keycloak as the admin user with your new admin password.

You updated the Keycloak password. The next step updates the Keycloak password in the operator secret to match it. 

### 2c. Update the Keycloak password in the operator secret with the new password

When the Codewind operator needs to update Keycloak, it uses login credentials that are saved in a Kubernetes secret. By default during initial deployment, that secret has a username and password of **admin**. If you changed your admin password in a previous step, you need to update the Keycloak secret to match.

The secret is installed in the same namespace as the Codewind operator and is named `secret-keycloak-user-<keycloakname>`.

If you have an administration UI for your cluster, you can use it to locate the secret and edit the `keycloak-admin-password` field, or you can use the command line tools:

`$ kubectl edit secret secret-keycloak-user-<keycloakname> -n codewind`

or

`$ oc edit secret secret-keycloak-user-<keycloakname> -n codewind`

**Note:** Using the command line tools requires an extra step to base64 encode your password string before you save it into the secret. You can base64 encode your new password by using this command:

```bash
$ echo -n '<myNewPassword>' | base64
bXlOZXdQYXNzd29yZA==
```

Then, save `bXlOZXdQYXNzd29yZA==` as the value for `keycloak-admin-password` rather than the clear text `<myNewPassword>`.

## 3. Add a user to Keycloak

1. Access the Administration Console by clicking the **Access URL** link provided by Step 2a. To locate the **Access URL** link, enter the `$ kubectl get keycloaks -n codewind` command. 

2. Click **Administration Console** and log in to Keycloak with `admin` as the default login username and `password`, which is the new password that you set in Step 2b.

3. Ensure that the `Realm` is set to **Codewind** by clicking the Codewind arrow on the **Administration Console** page:

    ![Codewind arrow](./images/remote/codewind_dropdown.png)

    Select **Codewind** if necessary and complete these steps:
    - Click **Users**.
    - Click **Add user**.
    - Complete the **username** field.
    - Complete the **email**, **Firstname**, and **Lastname** fields as required.
    - Ensure **user enabled** is **On**.
    - Click **Save**.

4. Assign an initial password to the user account by clicking **Credentials**. Then, add the initial password.

5. The **Temporary = On** field requires you to change your password during first connection. Set **Temporary = Off** to make this password valid for continuous use and to prevent the need to change it on first connection.

6. Click **Set Password** to save the changes. Log out of the Keycloak admin page.

## 4. Deploy a Codewind instance

Use the `install.sh` script in the Codewind operator repository to deploy a Codewind instance:

`$ ./install.sh codewind -n <instanceName> -u <registeredUsername>`

- `instanceName` is the unique name that you specify for this Codewind instance.
- `registeredUsername` is the name of the user that you added in [Step 3](#3-add-a-new-user-to-keycloak).

Your Codewind instance is deployed. Access it by way of the **Access URL** returned by the script in a browser or by copying the URL into a new connection in your IDE.

**Note:** When you are installing on Windows, the script runs and then closes the Git Bash window. To retrieve the Access URLs for Codewind, enter the following command:

`$ kubectl get codewind -n codewind`

This command returns output in the format of the following example:

```
NAME       USERNAME   NAMESPACE   AGE    KEYCLOAK   REGISTRATION   ACCESSURL
devex001   jane       codewind    119m   devex001   Complete       https://codewind-gatekeeper-devex001.<ingress-domain>
```

## Next steps

You finished installing the Codewind operator and deployed a Codewind instance.

In the next topic, you learn how to [use Codewind remotely](./remote-codewind-overview.html). 

You can configure your IDE to connect to Codewind in the cloud. For more information, see [Connecting your VS Code to remote Codewind](remotedeploy-vscode.html) or [Connecting your Eclipse to remote Codewind](./remotedeploy-eclipse.html).

If you want to remove a Codewind instance, see [Removing a Codewind instance](https://github.com/eclipse/codewind-operator/blob/master/README.md#removing-a-codewind-instance).
