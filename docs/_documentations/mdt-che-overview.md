---
layout: docs
title: Codewind for Eclipse Che
description: Codewind for Eclipse Che
keywords: introducing, introduction, overview, what is, tools, eclipse, Codewind for Eclipse Che, Eclipse tools, Eclipse IDE, local installation
duration: 1 minute
permalink: mdt-che-overview
type: document
order: 1
parent: settingownide
---

# Codewind for Eclipse Che

You can use [Codewind for Eclipse Che](https://marketplace.eclipse.org/content/codewind) to develop and debug your containerized projects from within Eclipse.

Use the Eclipse IDE to create and make modifications to your application, see the application and build status, view the logs, and run your application.  Codewind for Eclipse supports development of Microprofile/Java EE, Java Lagom, Spring, Node.js, Go, Python and Swift containerized projects. In addition, Microprofile/Java EE, Spring, and Node.js applications can be debugged.

The Eclipse tools are [open source](https://github.com/eclipse/codewind-eclipse). You are encouraged to browse the code, open issues, and contribute.

To get started, see [Getting started with Codewind](mdteclipsegettingstarted.html).

To uninstall Codewind, see [Uninstalling Codewind for Eclipse](mdteclipseuninstall.html)

## Codewind OpenShift (ODO) extension  
Extension to Codewind providing support for ODO projects: https://codewind.dev

### Add additional rules to support Codewind ODO extension
The ODO extension needs to add additional rules for accessing OpenShift resources:
1. In your home directory, run the following command to clone the ODO extension repository:
`git clone https://github.com/eclipse/codewind-odo-extension`
2. Login to your OpenShift/OKD cluster
3. Go into `~/codewind-odo-extension/odo-RBAC` then run the following commands to add additional rules:
`kubectl apply -f codewind-odoclusterrole.yaml`
`kubectl apply -f codewind-odoclusterrolebinding.yaml`