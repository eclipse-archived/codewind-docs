---
layout: docs
title: Installing Codewind on the Cloud
description: Installing Codewind on the Cloud
keywords: build, deploy, IBM Cloud Private, install, installing, installation, chart, Helm, develop, cloud, public cloud, services, command line, cli, command, start, stop, update, open, delete, options, operation, devops, OpenShift, OKD
duration: 1 minute
permalink: mdt-che-installinfo
type: document
order: 20
parent: root
---

# Installing Codewind for Eclipse Che

Installing Codewind for Eclipse Che comprises the following steps:
1. [Prerequisites](#prerequisites)
2. [Installing Che with chectl](#installing-che-with-chectl)
3. [Enabling privileged and root containers to run](#enabling-privileged-and-root-containers-to-run)
4. [After installing Che](#after-installing-che)
5. [Creating the Codewind workspace](#creating-the-codewind-workspace)
6. [Updating the version](#updating-the-version)
7. [Adding extension to support OpenShift Do (odo)](https://www.eclipse.org/codewind/mdt-che-odo-support.html)

## Prerequisites
1. Ensure PersistentVolumes (PV) are set up and support both `ReadWriteOnce` and `ReadWriteMany` and have minimum 1Gi storage.
   - One volume is required for Che, and two volumes are required for each Codewind workspace.
   - For NFS, set 777 permissions for the exported folders and ownership of `nobody:nogroup`.
   - Because Codewind uses RWX (ReadWriteMany) volumes to provide persistent storage, you need to use NFS for storage on OpenShift 4.
2. Ensure that the cluster can pull images from `docker.io/eclipse` and `quay.io/eclipse`.
   - Both Eclipse Che and Eclipse Codewind host their Docker images at those locations. Ensure that your cluster can pull from that registry and does not have `ImagePullPolicies` blocking it from accessing Docker Hub.
3. Set up the ClusterRole for Codewind. Run `kubectl apply -f https://raw.githubusercontent.com/eclipse/codewind-che-plugin/0.8.0/setup/install_che/codewind-clusterrole.yaml`

# Setting up Che

## Installing Che with chectl

The fastest way to install Eclipse Che for use with Codewind is to use the `chectl` CLI. For instructions on installing the `chectl` CLI tool, see [Installing the chectl management tool](https://www.eclipse.org/che/docs/che-7/installing-the-chectl-management-tool/).

Complete the following steps after you install `chectl`:

1. Download the [codewind-checluster.yaml](https://github.com/eclipse/codewind-che-plugin/blob/0.8.0/setup/install_che/che-operator/codewind-checluster.yaml) file to your machine.
    - You can modify this file, but leave the `spec.server.cheWorkspaceClusterRole` field set to `eclipse-codewind` and the `spec.storage.preCreateSubPaths` field set to `true`.
2. If you're installing on a Kubernetes platform other than OpenShift, determine your Ingress domain. If you're unsure of your Ingress domain, ask your cluster administrator.
    - Set the `spec.server.ingressDomain` field in the Che `.yaml` to the Ingress domain.
3. Install Che:
    - On OpenShift, run the following command: `chectl server:start --platform=openshift --installer=operator --che-operator-cr-yaml=codewind-checluster.yaml --che-operator-image=quay.io/eclipse/che-operator:7.3.1`
    - On Kubernetes, run the following command: `chectl server:start --platform=k8s --installer=operator --domain=<ingress-domain> --che-operator-cr-yaml=codewind-checluster.yaml --che-operator-image=quay.io/eclipse/che-operator:7.3.1`

### Updating an existing Che install

If you already have an existing Che install, it's relatively easy to update it for Codewind.

After creating the Codewind ClusterRole in the prerequisites step, run the following command, where `$NAMESPACE` is the namespace your Che workspaces run in (by default `che`):
`kubectl apply -f https://raw.githubusercontent.com/eclipse/codewind-che-plugin/0.8.0/setup/install_che/codewind-rolebinding.yaml -n $NAMESPACE`

### Enabling privileged and root containers to run

Codewind is required to run as privileged and as root because it builds container images. If your cluster is running OpenShift, run the following commands where `<che namespace>` is the namespace into which you installed Che:
1. To enable privileged containers, enter `oc adm policy add-scc-to-group privileged system:serviceaccounts:<che namespace>`.
2. To enable containers to run as root, enter `oc adm policy add-scc-to-group anyuid system:serviceaccounts:<che namespace>`.

## After installing Che

### Adding registries in Che
After Che is started and running, add the container registry that will be used with Codewind.
- On OpenShift or other Kube platforms, you can push your images to any Docker registry, such as Docker Hub, Quay.io, Google Cloud Registry (GCR), and more.
- On IBM Cloud Private, you can push your image to any Docker registry *except* the internal Docker registry.

You'll need the following information to complete the instructions to add the registries:
  - Server: `<registry-to-push-images-to>`
  - Username: `<Your username>`
  - Password: `<Your password>`

For information about adding deployment registries to Che, consult our [registry documentation](image-registry-credentials.html).

## Creating the Codewind workspace

### Confirm the Docker registry secrets.
Confirm that you added the Docker registry secrets in the Che dashboard. To check for the secrets, go to **Administration**>**Add Registry**.

### Creating the Codewind workspace with a Devfile
The general format for creating a Che workspace via a factory is:
```
http://<che ingress domain>/f?url=<hosted devfile URL>
```

Codewind includes a ready-to-use devfile with its plug-ins. Enter the following URL to create a workspace from the devfile:
```
http://<che ingress domain>/f?url=https://raw.githubusercontent.com/eclipse/codewind-che-plugin/0.8.0/devfiles/0.8.0/devfile.yaml
```

For other sample devfiles, see https://github.com/kabanero-io/codewind-templates/tree/master/devfiles.

### Configuring Codewind for Tekton pipelines
If you want to use existing Tekton installations with Codewind, from your command line, enter the following commands:

```
oc apply -f setup/install_che/codewind-tektonrole.yaml
oc apply -f setup/install_che/codewind-tektonbinding.yaml
```

For more information about Tekton, see [Getting started with the Tekton Dashboard Webhooks Extension](https://github.com/tektoncd/experimental/blob/master/webhooks-extension/docs/GettingStarted.md).

## After installing Codewind

### Setting the Docker registry
After creating a Codewind workspace, you must set the container registry to deploy your projects. When you go to create or add an existing project to Codewind, Codewind will prompt you for the registry. See [Docker registry docs](https://www.eclipse.org/codewind/dockerregistry.html) for guidance on using proper container registries.

If you would like to change the registry that's used at any time, run the `Codewind: Set Deployment Registry` command in Theia to dynamically set a new registry for your workspace. <br>

![Set deployment registry](dist/images/che-docs/SetDockerRegistry-1.png){:height="90px" width="623px"}. <br>

![Set deployment registry location](dist/images/che-docs/SetDockerRegistry-2.png){:height="85px" width="633px"}. <br>

![Test deployment](dist/images/che-docs/SetDockerRegistry-3.png){:height="208px" width="801px"}. <br>

**Note:** To proceed, you need to have added the registry credentials with Che.
- Codewind restarts with the changes added.

## Using Codewind from the Che Theia IDE

### Binding a project:
Go to **View**>**Find Command…**>**Codewind: Add Project**.

### Checking the status of a project
Go to **View**>**Find Command…**>**Codewind: App status**.

### Building a project 
Go to **View**>**Find Command…**>**Codewind: Build**.

## Updating the version
Restart the Codewind workspace in Che. Che automatically pulls the newest version of Codewind and the Theia extension.
