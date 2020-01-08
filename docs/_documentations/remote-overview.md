---
layout: docs
title: Deploying Codewind remotely
description: Deploying Codewind remotely
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection, remote deployment of Codewind
duration: 5 minutes
permalink: remoteoverview
type: document
parent: mdt-vsc-overview
order: 1
---

# Deploying Codewind remotely

Deploying Codewind remotely enables you to develop your code locally and then build and run it remotely and securely in the cloud. This option is incredibly useful because it frees up resource on your laptop and using the cloud's resources to build and run your apps.

After you've installed your IDE and configured Codewind for local use there are a few extra steps to deploy to the cloud:

1. Use the Codewind CLI to deploy Codewind remote services
2. Use your IDE to create a connection link
3. Move over any projects to the alternative remote service

## Planning your deployment

Codewind remote services contains may different components. the Codewind CLI `cwctl` can be used to install all the required components at once, or each component separately.

If you are running a pilot you can install everything into a single namespace and have one authentication server per codewind. However for production use we recommend installing a single Keycloak service that is shared by many Codewind services.

Next step either :

<a class="cw-gettingstarted-card-link" href="remotedeploy-combo.md">Install both Codewind and authentication services together</a>

or

<a class="cw-gettingstarted-card-link" href="remotedeploy-single.md">Install  Codewind components and authentication services individually</a>
