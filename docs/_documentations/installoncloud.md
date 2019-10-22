---
layout: docs
title: Installing Codewind on the Cloud
description: Installing Codewind on the Cloud
keywords: build, deploy, IBM Cloud Private, install, installing, installation, chart, Helm, develop, cloud, public cloud, services, command line, cli, command, start, stop, update, open, delete, options, operation, devops, OpenShift, OKD
duration: 1 minute
permalink: installoncloud
type: document
order: 20
parent: root
---

# Codewind for Eclipse Che

You can use [Codewind for Eclipse Che](https://marketplace.eclipse.org/content/codewind) to develop and debug your containerized projects from within Eclipse.

Use the Eclipse IDE to create and make modifications to your application, see the application and build status, view the logs, and run your application.  Codewind for Eclipse supports development of Microprofile/Java EE, Java Lagom, Spring, Node.js, Go, Python and Swift containerized projects. In addition, Microprofile/Java EE, Spring, and Node.js applications can be debugged.

The Eclipse tools are [open source](https://github.com/eclipse/codewind-eclipse). You are encouraged to browse the code, open issues, and contribute.

To get started, see [Getting started with Codewind](mdteclipsegettingstarted.html).

To uninstall Codewind, see [Uninstalling Codewind for Eclipse](mdteclipseuninstall.html).

## Codewind OpenShift (odo) extension 
See the [`codewind-odo-extension` repository](https://github.com/eclipse/codewind-odo-extension) for the extension to Codewind providing support for odo projects.

### Add additional rules to support the Codewind odo extension
The odo extension needs additional rules for accessing OpenShift resources. Use the following commands to clone the `codewind-che-plugin` repository, create the ClusterRole with the required permissions, and bind that ClusterRole to the Che workspace service account:
```
git clone https://github.com/eclipse/codewind-che-plugin.git && \
    kubectl apply -f codewind-che-plugin/setup/install_che/codewind-clusterrole.yaml && \
    kubectl apply -f codewind-che-plugin/setup/install_che/codewind-rolebinding.yaml
```
