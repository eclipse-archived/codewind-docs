---
layout: docs
title: Installing Codewind on the Cloud
description: Installing Codewind on the Cloud
keywords: build, deploy, IBM Cloud Private, install, installing, installation, chart, Helm, develop, cloud, public cloud, services, command line, cli, command, start, stop, update, open, delete, options, operation, devops, OpenShift, OKD
duration: 1 minute
permalink: mdt-che-tektonpipelines
type: document
order: 20
parent: root
---

# Configuring Codewind for Tekton pipelines

If you want to use existing Tekton installations with Codewind, from your command line, enter the following commands:

```
oc apply -f setup/install_che/codewind-tektonrole.yaml
oc apply -f setup/install_che/codewind-tektonbinding.yaml
```

For more information about Tekton, see [Getting started with the Tekton Dashboard Webhooks Extension](https://github.com/tektoncd/experimental/blob/master/webhooks-extension/docs/GettingStarted.md).

Next step: [Adding a container registry in Codewind](mdt-che-setupregistries.html)

