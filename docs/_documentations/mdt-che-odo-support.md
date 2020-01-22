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
The extension to Codewind provides support for [OpenShift Do (odo)](https://github.com/openshift/odo). You can use the extension to efficiently write, build, and deploy components on an OpenShift or OKD cluster.

1. [Extension overview](#overview)
2. [Setting up extension](#setting-up-extension)
3. [Current limitation](#current-limitation)

## Extension overview
- Supports Java, Node.js, Python, and Perl components.
- Provides OpenShift templates to help you create components with different supported languages.
- Imports your existing components and continues to develop the components.

## Setting up extension

### Adding roles to support the extension
The extension needs additional roles for accessing OpenShift resources. Use the following commands to clone the [codewind-odo-extension](https://github.com/eclipse/codewind-odo-extension) repository, create the ClusterRole with the required permissions, and bind that ClusterRole to the corresponding Codewind service account.

### Importing Java image stream to your OpenShift or OKD cluster
In order to create or import Java compoent, you need to import Java image stream to your OpenShift or OKD cluster so that odo can build component image.

### Adding the roles and importing the Java image stream
1. Log in to your OpenShift or Origin Community Distribution (OKD) cluster, and ensure the Codewind workspace has been created.
2. Enter the following commands to go to the correct location, add the roles and import the Java image stream, and perform cleanup:
```
git clone https://github.com/eclipse/codewind-odo-extension &&\
   cd ./codewind-odo-extension/setup &&\
   ./setup.sh
   cd - &&\
   rm -rf codewind-odo-extension
```

## Current limitation
- Only supports on Codewind for Eclipse Che with OKD/OpenShift cluster.
- Does not support debug mode.