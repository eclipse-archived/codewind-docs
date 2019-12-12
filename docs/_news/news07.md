---
layout: news
title: New for Codewind 0.7.0
description: New for Codewind 0.7.0
keywords: news, new, updates, update, version, hybrid
duration: 1 minute
permalink: news07
---

## Codewind 0.7.0
Monday 16 December 2019

#### ✨ Remote Deploy with Codewind: Tech Preview ✨

You can now develop your code locally and securely build and deploy your apps in the cloud! Why is this cool?
- Free up local resources. 👏
- It's secure! 🔐 We use [Keycloak](https://keycloak.org/) to secure the connection between your local editor and remote cloud deployment.

// Curious? [Try it out!](link to docs) and keep an eye out for more information!

#### New Features and Highlights for 0.7.0

**OpenShift Do (odo)**
- You can now easily import existing projects into Codewind and [use odo](https://github.com/eclipse/codewind/issues/1115) to build and deploy projects to your OpenShift or OKD cluster.
- Introducing [support for Java template](https://github.com/eclipse/codewind/issues/450) and Java projects can build and deploy [once configured](//permalink to landing page).
- You no longer have to create your [docker registry secret](https://github.com/eclipse/codewind/issues/665) in Codewind.


#### List of Fixes
- Changes to the Eclipse plugin for Spring Server [post-code generation stability for OpenAPI](https://github.com/eclipse/codewind/issues/1116)
- Appsody binary updated from 0.5.0 to 0.5.2 in the codewind-appsody-extension
- Other security fixes