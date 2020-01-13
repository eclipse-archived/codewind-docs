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
- [Installing Codewind for Eclipse Che](#installing-codewind-for-eclipse-che)
  - [Prerequisites](#prerequisites)
- [Setting up Che](#setting-up-che)
  - [Installing Che with chectl](#installing-che-with-chectl)
    - [Updating an existing Che install](#updating-an-existing-che-install)
    - [Enabling privileged and root containers to run](#enabling-privileged-and-root-containers-to-run)

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

Next step: [Setup registries](mdt-che-setupregistries.html)

