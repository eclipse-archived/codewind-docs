---
layout: news
title: New for Codewind 0.7.0
description: New for Codewind 0.7.0
keywords: news, new, updates, update, version, hybrid
duration: 1 minute
permalink: news07
---

## Codewind 0.7.0
Wednesday 18 December 2019

#### ✨ Remote Deploy with Codewind: Tech Preview ✨

You can now develop your code locally and securely build and deploy your apps in the cloud! Why is this cool?
- Free up local resources. 👏
- It's secure! 🔐 We use [Keycloak](https://keycloak.org/) to secure the connection between your local editor and remote cloud deployment.

Curious? [Learn more](remoteoverview.html)!

#### New Features and Highlights for 0.7.0

**Monitoring Updates**
- You can now [inject metrics](https://github.com/codewind-resources/design-documentation/blob/master/codewindServer/metricsInjection.md) into your Node.js, Liberty, and Spring projects. 
- Effortlessly [visualize data](https://github.com/eclipse/codewind/issues/977) like CPU usage, memory footprint, and web traffic on the included application monitoring dashboard at the click of a button. If you don't want it or need it, simply [disable it](https://github.com/eclipse/codewind/issues/1290). Codewind hosts the dashboard, so displaying the graphs won't eat into your project's resources.

**OpenShift Do (odo)**
- You can now easily import existing projects into Codewind and [use odo](https://github.com/eclipse/codewind/issues/1115) to build and deploy projects to your OpenShift or OKD cluster.
- Introducing [support for Java template](https://github.com/eclipse/codewind/issues/450) and Java projects can build and deploy [once configured](mdt-che-odo-support.html).
- You no longer have to create your [docker registry secret](https://github.com/eclipse/codewind/issues/665) in Codewind.

#### List of Fixes
- Changes to the Eclipse plug-in for Spring Server [post-code generation stability for OpenAPI](https://github.com/eclipse/codewind/issues/1116)
- Appsody [binary updated](https://github.com/eclipse/codewind-docs/pull/267) from 0.5.0 to 0.5.2 in the `codewind-appsody-extension`
- Other security fixes