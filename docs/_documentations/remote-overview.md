---
layout: docs
title: Deploying Codewind remotely
description: Deploying Codewind remotely
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection, remote deployment of Codewind
duration: 5 minutes
permalink: remoteoverview
type: document
parent: installoncloud
order: 1
---

# Deploying Codewind remotely

Deploying Codewind remotely enables you to develop your code locally and then build and run it remotely and securely in the cloud. This option is incredibly useful because it frees up local resource usage and you use the cloud's resources to build and run your apps. By using [Keycloak](https://www.keycloak.org/), the connection between your local editor and your remote cloud deployment is secure.

You install your preferred IDE on your local machine. For more information about installing Eclipse, see [Getting started with Codewind for Eclipse](mdteclipsegettingstarted.html), or for more information about installing VS Code, see [Getting started with Codewind for VS Code](mdt-vsc-getting-started.html).

You then use the Codewind features inside your preferred IDE to create a connection to the cloud. Once connected, connection details appear, and you are able to use Codewind as you would locally, for example, you can right-click to open a project, access performance details, and so on. 

![Project view](dist/images/remote/project_view.png)

Codewind enables you to choose which preferred IDE you want to use, however do not use two different IDEs at the same time. For the best user experience, choose which one you want to use, and disable the other. 

To configure your remote deployment of Codewind, see [Configuring your remote deployment of Codewind](remoteconfiguring.html).

## Codewind remote security overview

The following information provides an overview of the various components that comprise your secure Codewind remote installation. 

When running in remote mode, you can use your desktop installed IDE and the Codewind remote services to build and run your projects in a remote cloud. Cloud services are secured using a Gatekeeper container which exposes an ingress route that proxies the connection through to the Codewind PFE service.

![Remote overview](dist/images/remote/image4.png){:height="800px" width="1100px"}

### Codewind CLI

The Codewind CLI `cwctl` has an important role to play as part of a Codewind remote deployment. The CLI provides commands to:

- Deploy Keycloak service: `cwctl deploy keycloak`
- Deploy Codewind: `cwctl deploy remote`
- Manage client side connections to a remote deployment: `cwctl connections`
- Manage storage of user credentials to the platform keychains: `cwctl seckeyring`
- Handle authentication and access token requests: `cwctl sectoken`

### Socket encryption

When Codewind is configured to run in Remote mode, all connections to Gatekeeper, PFE, and Keycloak use HTTPs. This is essential in order to protect security tokens and passwords from being intercepted in transit.

### Codewind Gatekeeper

The role of the Gatekeeper container is to marshal the requests from the local environment through to the Codewind cloud service. By acting as a reverse proxy, Gatekeeper ensures Codewind PFE bound traffic is accompanied with a valid authentication bearer token.

At deployment time, Gatekeeper is configured with the necessary secrets and connectivity details of the Codewind Keycloak service.

### Codewind Keycloak

User authentication services and identity management are provided by Keycloak. Gatekeeper and Keycloak go hand in hand with a single installation of Codewind containing Codewind PFE and Codewind Gatekeeper and Codewind Keycloak. Beyond its simplest form of installation, Keycloak can be installed in its own namespace and shared between multiple Codewind remote deployments. Obvious advantages to this approach include:

- Fewer deployments or pods to manage.
- A single security realm (a collection of users and clients) for all Codewind deployments.
- Role based access control that link users to Codewind deployments.
- If you already have Keycloak in your organisation, for example, you might be using CHE, you can configure Codewind to use that service.

The main concepts of Keycloak are:

- Realms: A top level grouping.
- Clients: A service that is allowed to make use of Keycloak authentication services.
- Users: User records, user names, and user passwords.
- Roles: Access roles that allow users with a specific role to access a Codewind service filtering users by role name.