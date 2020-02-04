---
layout: docs
title: Installing Codewind for Eclipse Che
description: Installing Codewind for Eclipse Che
keywords: build, deploy, install, installing, installation, chart, Helm, develop, cloud, public cloud, services, command line, cli, command, start, stop, update, open, delete, options, operation, devops, OpenShift, OKD
duration: 1 minute
permalink: mdt-che-installinfo
type: document
---

# Installing Codewind for Eclipse Che
Install Che to use with Codewind or use Codewind with an existing Che installation.

### Prerequisites
1. Set up PersistentVolumes (PVs) that support both `ReadWriteOnce` (RWO) and `ReadWriteMany` (RWX) access modes and have a minimum of 1 Gi storage.
   - One volume is required for Che, and two volumes are required for each Codewind workspace.
   - For Network File System (NFS) shares, set 777 permissions for the exported folders and ownership of `nobody:nogroup`.
   - Because Codewind uses `ReadWriteMany` (RWX) volumes to provide persistent storage, use NFS for storage on OpenShift 4.
2. Ensure that the cluster can pull images from the `docker.io/eclipse` and `quay.io/eclipse` registries.
   - Both Eclipse Che and Eclipse Codewind host Docker images at these locations.
   - Many clusters have image policies that control which registries you can use to pull images. Check your cluster documentation and ensure that the cluster image pull policies permit both of these registries.
3. Set up the ClusterRole for Codewind:
`kubectl apply -f https://raw.githubusercontent.com/eclipse/codewind-che-plugin/0.8.0/setup/install_che/codewind-clusterrole.yaml`

### Installing Che with chectl
The fastest way to install Eclipse Che for Codewind is to use the `chectl` CLI. To install the `chectl` CLI tool, see [Installing the chectl management tool](https://www.eclipse.org/che/docs/che-7/installing-the-chectl-management-tool/).

After you install `chectl`, complete the following steps:
1. Download the [codewind-checluster.yaml](https://github.com/eclipse/codewind-che-plugin/blob/0.8.0/setup/install_che/che-operator/codewind-checluster.yaml) file.
    - You can modify this file, but leave the `spec.server.cheWorkspaceClusterRole` field set to `eclipse-codewind` and the `spec.storage.preCreateSubPaths` field set to `true`.
2. If you're installing Che on a Kubernetes platform other than OpenShift, determine your Ingress domain.
    - Set the `spec.server.ingressDomain` field in the Che `.yaml` file to the Ingress domain.
    - If you're unsure of your Ingress domain, ask your cluster administrator.
3. Install Che:
    - On OpenShift, run the following command: `chectl server:start --platform=openshift --installer=operator --che-operator-cr-yaml=codewind-checluster.yaml --che-operator-image=quay.io/eclipse/che-operator:7.5.1`
    - On Kubernetes, run the following command: `chectl server:start --platform=k8s --installer=operator --domain=<ingress-domain> --che-operator-cr-yaml=codewind-checluster.yaml --che-operator-image=quay.io/eclipse/che-operator:7.5.1`

### Updating an existing Che installation
If you already have a Che installation, you can update it for Codewind.

After creating the Codewind ClusterRole from the [Prerequisites](#prerequisites), run the following command, where `$NAMESPACE` is the namespace that your Che workspaces run in. By default, this namespace is `che`.
```
kubectl apply -f https://raw.githubusercontent.com/eclipse/codewind-che-plugin/0.8.0/setup/install_che/codewind-rolebinding.yaml -n $NAMESPACE
```

### Enabling privileged and root containers to run
Codewind needs to run as privileged and as root because it builds container images. If your cluster is running OpenShift, run the following commands, where `<che namespace>` is the namespace into which you installed Che.
1. To enable privileged containers, enter `oc adm policy add-scc-to-user privileged system:serviceaccount:<che namespace>:che-workspace`.
2. To enable containers to run as root, enter `oc adm policy add-scc-to-user anyuid system:serviceaccount:<che namespace>:che-workspace`.

Next step: [Adding registries in Che](mdt-che-setupregistries.html)