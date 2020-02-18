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

The Codewind Odo extension provides support for [OpenShift Do (odo)](https://github.com/openshift/odo). You can use the extension to efficiently write, build, and deploy components on an OpenShift or OKD cluster.

1. [Extension overview](#overview)
2. [Setting up extension](#setting-up-extension)
3. [Current limitation](#current-limitation)

## Extension overview

- Supports Java, Node.js, Python, and Perl components.
- Provides OpenShift templates to help you create components with different supported languages.
- Imports and enables continued development of your existing components.

## Setting up the extension

### Prerequisites

- [Install](mdt-che-installinfo.html) Codewind on Che on an OpenShift cluster.

### Adding roles to support the extension

The extension needs additional roles for accessing OpenShift resources. Use the following commands to clone the [codewind-odo-extension](https://github.com/eclipse/codewind-odo-extension) repository, create the `ClusterRole` with the required permissions, and bind that `ClusterRole` to the corresponding Codewind service account.

### Importing the Java image stream to your OpenShift or OKD cluster

To create or import a Java component, you must import the Java image stream to your OpenShift or OKD cluster so that Odo can build the component image.

### Adding the roles and importing the Java image stream

1. Log in to your OpenShift or Origin Community Distribution (OKD) cluster and ensure that the Codewind workspace is created.
2. Enter the following commands to go to the correct location, add the roles and import the Java image stream, and perform cleanup:
```
git clone https://github.com/eclipse/codewind-odo-extension &&\
   cd ./codewind-odo-extension/setup &&\
   ./setup.sh
   cd - &&\
   rm -rf codewind-odo-extension
```

## Current limitations

- Only supports Codewind for Eclipse Che on an OpenShift or OKD cluster.
- Does not support project configuration.
- Does not support debug mode.
- Does not have HTTPS protocol support for accessing applications.