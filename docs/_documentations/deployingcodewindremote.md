---
layout: docs
title: Deploying Codewind remote
description: Deploying Codewind remote
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing Cloud connection
duration: 5 minutes
permalink: deployingcodewindremote
type: document
parent: installoncloud
order: 1
---

# Deploying Codewind remote

Codewind remote is where you develop your code locally and build and run it remotely and securely in the Cloud. This option is incredibly useful because it frees up your local machine to focus purely on developing code and you use the Cloud's resources to build and run your apps. 

Codewind enables you to develop your apps securely by securing the connection between your local editor and your remote Cloud deployment. To do this Codewind uses Keycloak, an open source identity and access management solution for modern applications and services, which is highly configurable to your environment. 

You install your preferred IDE on your local machine, and then use the Codewind `cwctl` utility commands to configure the secure connection between your local IDE and your chosen Cloud. For more information, see [Configuring Codewind remote](configuringcodewindremote.html).
