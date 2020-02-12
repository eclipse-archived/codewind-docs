---
layout: docs
title: Installing Codewind on the Cloud
description: Installing Codewind on the Cloud
keywords: build, deploy, IBM Cloud Private, install, installing, installation, chart, Helm, develop, cloud, public cloud, services, command line, cli, command, start, stop, update, open, delete, options, operation, devops, OpenShift, OKD
duration: 1 minute
permalink: mdt-che-createcodewindworkspace
type: document
order: 20
parent: root
---

# Creating the Codewind workspace with a Devfile

The general format for creating a Che workspace via a factory is:

```
http://<che ingress domain>/f?url=<hosted devfile URL>
```

Codewind includes a ready-to-use devfile with its plug-ins. Enter the following URL to create a workspace from the devfile:

```
http://<che ingress domain>/f?url=https://raw.githubusercontent.com/eclipse/codewind-che-plugin/0.9.0/devfiles/0.9.0/devfile.yaml
```

For other sample devfiles, see https://github.com/kabanero-io/codewind-templates/tree/master/devfiles.

Next step: [Setup Tekton Pipelines](mdt-che-tektonpipelines.html)
