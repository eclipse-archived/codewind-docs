---
layout: docs
title: Installing Codewind on the Cloud
description: Installing Codewind on the Cloud
keywords: build, deploy, IBM Cloud Private, install, installing, installation, chart, Helm, develop, cloud, public cloud, services, command line, cli, command, start, stop, update, open, delete, options, operation, devops, OpenShift, OKD
duration: 1 minute
permalink: mdt-che-setupregistries
type: document
order: 20
parent: root
---

### Adding registries in Che
After Che is started and running, add the container registry that will be used with Codewind.
- On OpenShift or other Kube platforms, you can push your images to any Docker registry, such as Docker Hub, Quay.io, Google Cloud Registry (GCR), and more.
- On IBM Cloud Private, you can push your image to any Docker registry *except* the internal Docker registry.

You'll need the following information to complete the instructions to add the registries:
  - Server: `<registry-to-push-images-to>`
  - Username: `<Your username>`
  - Password: `<Your password>`

For information about adding deployment registries to Che, consult our [registry documentation](image-registry-credentials.html).

### Confirm the Docker registry secrets.
Confirm that you added the Docker registry secrets in the Che dashboard. To check for the secrets, go to **Administration**>**Add Registry**.

Next step: [Create Codewind workspace](mdt-che-createcodewindworkspace.html)
