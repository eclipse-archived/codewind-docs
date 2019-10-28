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

# Installing Codewind on Eclipse Che

# Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installing Che with chectl](#installing-che-with-chectl)
3. [Enabling privileged and root containers to run](#enabling-privileged-and-root-containers-to-run)
4. [After installing Che](#after-installing-che)
5. [Creating the Codewind workspace](#creating-the-codewind-workspace)
6. [Updating the version](#updating-the-version)
7. [Adding additional rules to support Codewind ODO extension](#adding-additional-rules-to-support-codewind-odo-extension)

## Prerequisites
- Set up the PersistentVolume (PV) with either Network File System (NFS) or GlusterFS.
  - For NFS, set 777 permissions for the exported folders and ownership of `nobody:nogroup`.
  - You do not need to set up the PV for local Kube, such as Minikube, Minishift, Docker Desktop, and others.
- Ensure the cluster can pull images from `docker.io/eclipse`.
  - Both Eclipse Che and Eclipse Codewind host their Docker images on `docker.io/eclipse`. Ensure that your cluster can pull from that registry and does not have `PodSecurityPolicies` blocking it from accessing Docker Hub.
- Set up the ClusterRole for Codewind.
  1. Clone the [Codewind Che plug-in repository](https://github.com/eclipse/codewind-che-plugin).
  2. Enter the `cd` command to go to the `codewind-che-plugin` repository.
  3. Run the `kubectl apply -f setup/install_che/codewind-clusterrole.yaml` command to create a cluster role with the required permission.
  4. Next, run the `kubectl apply -f setup/install_che/codewind-rolebinding.yaml` command.

## Installing Che with chectl

The fastest way to install Eclipse Che for use with Codewind is to use the `chectl` CLI. For instructions on installing the `chectl` CLI tool, see [Installing the chectl management tool](https://www.eclipse.org/che/docs/che-7/installing-the-chectl-management-tool/).

Complete the following steps after you install `chectl`:

1. Download the [codewind-che checluster yaml](https://github.com/eclipse/codewind-che-plugin/blob/master/setup/install_che/che-operator/codewind-checluster.yaml) file to your machine.
    - You can modify this file, but leave the `spec.server.cheWorkspaceClusterRole` field set to `eclipse-codewind` and the `spec.storage.preCreateSubPaths` field set to `true`.
2. If you're installing on a Kubernetes platform other than OpenShift, determine your Ingress domain. If you're unsure of your Ingress domain, ask your cluster administrator.
    - Set the `spec.server.ingressDomain` field in the Che `.yaml` to the Ingress domain.
3. Install Che:
    - On OpenShift 3.x run the following command: `chectl server:start --platform=openshift --installer=operator --che-operator-cr-yaml=<codewind-che.yaml file>`
    - On Kubernetes run the following command: `chectl server:start --platform=k8s --installer=operator --domain=<ingress-domain> --che-operator-cr-yaml=<codewind-che.yaml file>`

## Enabling privileged and root containers to run
Codewind is required to run as privileged and as root, because it builds container images. If your cluster is OpenShift 3.x, run the following commands, where `<che namespace>` is the namespace you installed Che in:
1. Enter `oc adm policy add-scc-to-group privileged system:serviceaccounts:<che namespace>` to enable privileged containers.
2. Enter `oc adm policy add-scc-to-group anyuid system:serviceaccounts:<che namespace>` to enable containers to run as root.

## After installing Che

### Adding registries in Che
After Che is started and running, add the container registry that will be used with Codewind.
- On OpenShift or other Kube platforms, you can push your images to any Docker registry, such as Docker Hub, Quay.io, Google Cloud Registry (GCR), and more.
- On IBM Cloud Private, you can push your image to any Docker registry *except* the internal Docker registry.

You'll need the following information to complete the instructions to add the registries:
  - Server: `<registry-to-push-images-to>`
  - Username: `<Your username>`
  - Password: `<Your password>`

For information on adding deployment registries to Che, consult our [registry documentation](https://www.eclipse.org/codewind/dockerregistry.html).

## Creating the Codewind workspace

### Confirm the Docker registry secrets.
Confirm that you added the Docker registry secrets in the Che dashboard. Go to **Administration**>**Add Registry** to check for the secrets.

### Creating the Codewind workspace with a Devfile
The general format for creating a Che workspace via a factory is:
```
http://<che ingress domain>/f?url=<hosted devfile URL>
```

Codewind includes a ready-to-use devfile with its plug-ins. Enter the following URL to create a workspace from the devfile:
```
http://<che ingress domain>/f?url=https://raw.githubusercontent.com/eclipse/codewind-che-plugin/master/devfiles/0.5.0/devfile.yaml
```

For other sample devfiles, see https://github.com/kabanero-io/codewind-templates/tree/master/devfiles

### Checking for the Codewind pod
1. If you are using the Terminal, switch to use the workspace namespace. You can check for the namespace with `kubectl get ns`.
2. Ensure the projects are cloned into the workspace. You might need to refresh the browser to trigger the clone.

### Configuring Codewind for Tekton pipelines
From your command line, enter the following commands if you want to use existing Tekton installations with Codewind:

```
oc apply -f setup/install_che/codewind-tektonrole.yaml
oc apply -f setup/install_che/codewind-tektonbinding.yaml
```

For more information about Tekton, see [Getting started with the Tekton Dashboard Webhooks Extension](https://github.com/tektoncd/experimental/blob/master/webhooks-extension/docs/GettingStarted.md).

## After installing Codewind

### Setting the Docker registry
After creating a Codewind workspace. The container registry to deploy your projects to must be set. When you go to create or add an existing project to Codewind, Codewind will prompt you for the registry. See [Docker registry docs](https://www.eclipse.org/codewind/dockerregistry.html) for guidance on using proper container registries.

If you would like to change the registry that's used at any time, run the `Codewind: Set Deployment Registry` command in Theia to dynamically set a new registry for your workspace. <br>

![Set deployment registry](dist/images/che-docs/SetDockerRegistry-1.png){:height="90px" width="623px"}. <br>

![Set deployment registry location](dist/images/che-docs/SetDockerRegistry-2.png){:height="85px" width="633px"}. <br>

![Test deployment](dist/images/che-docs/SetDockerRegistry-3.png){:height="208px" width="801px"}. <br>

**Note:** To proceed, you need to have added the registry credentials with Che.
- Codewind restarts with the changes added.

## Using Codewind from the Che Theia IDE

### Binding a project:
Go to **View**>**Find Command…**>**Codewind: Add Project**.

- Alternative instructions:
  - From the sidecar container, run the following command:
`curl -k -H "Content-Type: application/json" -X POST https://codewind-release:9191/api/v1/projects/bind -d '{"name": "microproj", "path": "/microclimate-workspace/microproj", "language": "java", "projectType": "liberty"}'`

### Checking the status of a project
Go to **View**>**Find Command…**>**Codewind: App status**.

- Alternative instructions:
  - From the sidecar container, run the following command: `curl -k -H "Content-Type: application/json" -X GET https://codewind-release:9191/api/v1/projects`

### Building a project 
Go to **View**>**Find Command…**>**Codewind: Build**.

- Alternative instructions:
  - Enter the following command: `curl -k -H "Content-Type: application/json" -X POST https://codewind-release:9191/api/v1/projects/8801a6d0-7805-11e9-b22f-19482c5ffbd6/build -d '{"action": "build"}'`

## Updating the version
Restart the Codewind workspace in Che. Che automatically pulls the newest version of Codewind and the Theia extension.

## Adding additional rules to support Codewind ODO extension
The Codewind ODO extension needs to add additional rules for accessing OpenShift resources:
1. In your home directory, run the following command to clone the Codewind ODO extension repository:
```
git clone https://github.com/eclipse/codewind-odo-extension
```
2. Login to your OpenShift/OKD cluster
3. Go into `~/codewind-odo-extension/odo-RBAC` then run the following commands to add additional rules:
```
kubectl apply -f codewind-odoclusterrole.yaml
kubectl apply -f codewind-odoclusterrolebinding.yaml
```

# Codewind OpenShift Do (ODO) extension 
Extension to Codewind providing support for OpenShift projects: https://github.com/eclipse/codewind-odo-extension