---
layout: docs
title: Downloading Openshift certificates
description: 
keywords: build, deploy, install, installing, installation, chart, Helm, develop, cloud, public cloud, services, command line, cli, command, start, stop, update, open, delete, options, operation, devops, OpenShift, OKD, root, privileged
duration: 1 minute
permalink: che-openshift-certs
type: document
---
# Downloading Openshift certificates

Ensure you have completed the [prerequisites to installing Codewind on Eclipse Che](./che-installinfo.html#prerequisites).

Follow these instructions to download the Openshift router certificate: 

1. Authenticate against your OpenShift cluster, or ask your cluster administrator to do so.
2. Run the following command to download the router's `ca.crt`:

**For Openshift 3.11**
```
$ oc get secret router-certs -o jsonpath="{.data.tls\.crt}" | base64 -d > rootCa.crt
```
**For all other versions of Openshift**
```
$ oc get secret router-ca -n openshift-ingress-operator -o jsonpath="{.data.tls\.crt}" | base64 -d > rootCa.crt
```

### Next steps
**Getting started with Codewind for Eclipse Che** Continue to instructions for [adding certificates for Eclise Che to your browser](./che-browserconfig.html#adding-certificates-for-che-to-your-browser).
