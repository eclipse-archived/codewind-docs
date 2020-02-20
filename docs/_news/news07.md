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

Curious? [Learn more](remote-overview.html)!

#### New Features and Highlights for 0.7.0

**Monitoring Updates**
- You can now [inject metrics](https://github.com/codewind-resources/design-documentation/blob/master/codewindServer/metricsInjection.md) into your Node.js, Spring, and WebSphere Liberty MicroProfile projects. You can [enable or disable](https://github.com/eclipse/codewind/issues/1290) this feature with just a click.
- Effortlessly [visualize data](https://github.com/eclipse/codewind/issues/977) like CPU usage, memory footprint, and web traffic on the included application monitoring dashboard at the click of a button. Codewind hosts the dashboard, so displaying the graphs won't eat into your project's resources. 

**OpenShift Do (odo)**
- You can now easily import existing projects into Codewind and [use odo](https://github.com/eclipse/codewind/issues/1115) to build and deploy projects to your OpenShift or OKD cluster.
- Codewind now [supports Java templates](https://github.com/eclipse/codewind/issues/450), and Java projects can build and deploy after they have been [configured](mdt-che-odo-support.html).

**Docker**
- You can now specify any [Docker registry secret](https://github.com/eclipse/codewind/issues/1178) required by Codewind within the Codewind extension for the editor.

#### List of Fixes
- Changes to the Eclipse plug-in for Spring server [post-code generation stability for OpenAPI](https://github.com/eclipse/codewind/issues/1116)
   - The OpenAPI Wizard generator will not override the implicitly or explicitly defined main class in the Spring project.
   - The compilation errors related to unimplemented methods in the OpenAPI2SpringBoot class are fixed.
- Appsody [binary updated](https://github.com/eclipse/codewind-docs/pull/267) from 0.5.0 to 0.5.2 in the `codewind-appsody-extension`
- Other security fixes