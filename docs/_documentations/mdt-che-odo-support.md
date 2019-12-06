---
layout: docs
title: OpenShift Do (odo) support in Codewind
description: OpenShift Do (odo) support in Codewind
keywords: build, develop, deploy, install, installing, installation, Codewind for Eclipse Che, cloud, public cloud, services, command line, cli, command, devops, OpenShift, OKD, odo
duration: 1 minute
permalink: mdt-che-odo-support
type: document
order: 1
parent: mdt-che-installinfo
---

# OpenShift Do (odo) support in Codewind
An extension to Codewind providing support for [OpenShift Do (odo)](https://github.com/openshift/odo). You can use the extension to write, build, and deploy components on OpenShift/OKD cluster efficiently.

1. [Extension overview](#overview)
2. [Setting up extension](#setting-up-extension)
3. [Current limitation](#current-limitation)

## Extension overview
- Currently supports Java, Node.js, Python and Perl components. We will be supporting other languages in the future releases.
- Provide OpenShift templates to help you create components with different supported languages.
- You can import your existing components and continue to develop the components.

## Setting up extension

### Adding rules to support the extension
The extension needs additional rules for accessing OpenShift resources. Use the following commands to clone the [codewind-odo-extension](https://github.com/eclipse/codewind-odo-extension) repository, create the ClusterRole with the required permissions, and bind that ClusterRole to the Che workspace service account

### Importing Java image stream
In order to create or import Java compoent, you need to import java image stream to your OpenShift/OKD cluster so that odo can build component image

### Steps to add rules and import java image stream
1. Log in to your OpenShift or Origin Community Distribution (OKD) cluster.
2. Enter the following commands to go to the correct location, add the rules and import java image stream, and perform cleanup:
```
git clone https://github.com/eclipse/codewind-odo-extension &&\
   cd ./codewind-odo-extension/setup &&\
   kubectl apply -f codewind-odoclusterrole.yaml &&\
   kubectl apply -f codewind-odoclusterrolebinding.yaml &&\
   ./odo-addbuilder.sh &&\
   cd - &&\
   rm -rf codewind-odo-extension
```

## Current limitation
- Only support on Codewind for Eclipse Che with OKD/OpenShift cluster
- Does not support debug mode