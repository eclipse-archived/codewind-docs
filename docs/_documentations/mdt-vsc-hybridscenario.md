---
layout: docs
title: "Developing applications locally and building and running Kubernetes"
description: "Developing applications locally and building and running Kubernetes"
keywords: Kubernetes, hybrid, cloud, VSCode
duration: 1 minute
permalink: mdt-vsc-hybridscenario
type: document
order:
parent:
---
# Developing applications locally and building and running Kubernetes
Develop your applications on your local machine and then use Kubernetes to build and run them on the cloud.

1. Click the **Add remote connection** icon. The **Add remote connection** window appears.
2. Enter a name for your connection and click **Enter** to create the remote connection. The remote connection page appears.
3. Two peices are required to create a remote connection: where your project is being created and where you want to connect to the cloud.
   - **Deployment** is the location in which you are creating your project.
   - **Docker registry** is where you need a connection to Docker to build and run your project.
4. Fill in the following information in the **Deployment** area:  
   - Enter the **URL** that you need to log in to your cloud.
   - Enter your **Realm**. Your administrator provides this information.
   - Enter your **ClientID**. Your administrator provides this information.
   - Enter your user name and password.
5. Save your information. If your info is correct, the page refreshes, and your user name appears without your password.
6. Fill in the following information in the **Docker Registry** area:
   - Enter the **URL** of your cloud.
   - Enter your user name and password.
7. Save your information. If your info is correct, the page refreshes, your user name appears without the password, and a connection appears.

**Note:** If the info for either the **Deployment** or **Docker Registry** areas is incorrect, an error appears in the sidebar, and you can try again.
- Codewind cannot connect to a deployment or a server. Edit or open the remote connection.
- No projects exist. Create a project.

8. After you create a connection, if you need to suspend or remove it, you can disconnect or delete it.
    - Disconnect:
    - Delete:
