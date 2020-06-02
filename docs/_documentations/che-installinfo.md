---
layout: docs
title: Installing Codewind for Eclipse Che
description: Installing Codewind for Eclipse Che
keywords: build, deploy, install, installing, installation, chart, Helm, develop, cloud, public cloud, services, command line, cli, command, start, stop, update, open, delete, options, operation, devops, OpenShift, OKD
duration: 1 minute
permalink: che-installinfo
type: document
---
# Installing Codewind for Eclipse Che

Codewind is supported on Eclipse Che, removing the need to install an IDE on your local machine to develop your microservices. 

By using Codewind hosted as an application on the cloud, you can develop, build and run your code all by accessing Codewind from a browser window from your local desktop. 

Follow the instructions to get started with using Codewind as an application hosted on the cloud, which guides you through:

1. Installing Eclipse Che to use with Codewind or installing Codewind onto an existing Eclipse Che cluster
2. Adding an image registry in Eclipse Che (optional)
3. Creating a Codewind workspace in Eclipse Che
4. Creating your first Codewind project with Codewind for Eclipse Che
5. Making a code change to try out the inner loop experience 

### Other Codewind configurations

Codewind can be used in one of three ways - [hosted as an IDE extension on the cloud](./che-installinfo.html), [locally](./vsc-getting-started.html) or [remotely](./remote-codewind-overview.html).

**A quick way to try out Codewind before installing Codewind on Eclipse Che is to use Codewind locally** In this fully local configuration, you create, develop, build and run your containerized applications on your local machine using your local IDE. See [Getting Started with Codewind](./gettingstarted.html) for local IDE options and step-by-step instructions.

**Using Codewind Remotely** Rather than using an IDE hosted in the cloud to make code changes, Codewind can also be configured for making code changes on your **local IDE** before building and running on your cloud. To [configure Codewind to be used remotely](./remote-codewind-overview.html), **you must first follow the steps to [install codewind locally](./gettingstarted.html)**. 

# Installing Codewind for Eclipse Che

### Prerequisites

1. Set up PersistentVolumes (PVs) that support both `ReadWriteOnce` (RWO) and `ReadWriteMany` (RWX) access modes and each have a minimum of five Gi storage.
   - One volume is required for Che, and two volumes are required for each Codewind workspace.
   - For Network File System (NFS) shares, set 777 permissions for the exported folders and ownership of `nobody:nogroup`.
   - Because Codewind uses `ReadWriteMany` (RWX) volumes to provide persistent storage, use NFS for storage on OpenShift 4.
2. Ensure that the cluster can pull images from the `docker.io/eclipse` and `quay.io/eclipse` registries.
   - Both Eclipse Che and Eclipse Codewind host Docker images at these locations.
   - Many clusters have image policies that control which registries you can use to pull images. Check your cluster documentation and ensure that the cluster image pull policies permit both of these registries.
3. Set up the ClusterRole for Codewind:
`kubectl apply -f https://raw.githubusercontent.com/eclipse/codewind-che-plugin/0.11.0/setup/install_che/codewind-clusterrole.yaml`

### Choose from the following instructions:

- [Install Eclipse Che to use with Codewind](./che-installinfo.html#installing-che-to-use-with-codewind)

or

- [Install Codewind onto an existing Eclipse Che cluster](./che-installinfo.html#installing-codewind-onto-an-existing-eclipse-che-cluster)

#### Installing Eclipse Che to use with Codewind 

Follow these instructions to install Eclipse Che with HTTPS so that Codewind functions properly. 

The fastest way to install Eclipse Che for Codewind is to use the `chectl` CLI. Perform the following:

1. Install the `chectl` CLI tool. See [Installing the chectl management tool](https://www.eclipse.org/che/docs/che-7/installing-the-chectl-management-tool/).

2. Download the [codewind-checluster.yaml](https://raw.githubusercontent.com/eclipse/codewind-che-plugin/0.11.0/setup/install_che/che-operator/codewind-checluster.yaml) file.

3. Use the following instructions to install Codewind on your Openshift or Kubernetes cluster:

**Installing on OpenShift:**

Eclipse Che on OpenShift makes use of the Openshift router's existing certificates. 
Run the following command to install Che on OpenShift with `chectl`: 
   ```
   $ chectl server:start --platform=openshift --installer=operator --che-operator-cr-yaml=codewind-checluster.yaml --che-operator-image=quay.io/eclipse/che-operator:7.9.2
   ```

**Installing on Kubernetes:**

Set up Eclipse Che with TLS certificates.

1. Create the `che` namespace if it doesn't already exist: `kubectl create namespace che`.
2. Set the `spec.server.ingressDomain` field in the Che `.yaml` file to the Ingress domain. If you're unsure of your Ingress domain, ask your cluster administrator.
   - **Note:** You can modify this file, but leave the `spec.server.cheWorkspaceClusterRole` field set to `eclipse-codewind` and the `spec.storage.preCreateSubPaths` field set to `true`.
3. Generate TLS certificates and keys. To use self-signed certificates for your cluster setup, see [Installing Che in TLS mode with self-signed certificates](https://www.eclipse.org/che/docs/che-7/installing-che-in-tls-mode-with-self-signed-certificates/#generating-self-signed-certificates_installing-che-in-tls-mode-with-self-signed-certificates) **Important:** do not use self-signed certificates in production
4. Generate a Kubernetes secret containing the TLS secret and key you generated in the previous set:
   ```
   $ kubectl create secret tls che-tls --key=domain.key --cert=domain.crt -n che
   ```
5. Generate a Kubernetes secret containing the certificate you generated in step 2:
   ```
   $ cp rootCA.crt ca.crt
   $ kubectl create secret generic self-signed-certificate --from-file=ca.crt -n che
   ```
6. In the `codewind-checluster.yaml` file, set `tlsSecretName: 'che-tls'`
7. Run the following command to install Che: 
   ```
   $ chectl server:start --platform=k8s --installer=operator --domain=<ingress-domain> --che-operator-cr-yaml=codewind-checluster.yaml --che-operator-image=quay.io/eclipse/che-operator:7.9.2
   ```

#### Installing Codewind onto an existing Eclipse Che cluster

If you already have an Eclipse Che installation with TLS, you can update it for Codewind.

Run the following command, where `$NAMESPACE` is the namespace that your Che workspaces run in. By default, this namespace is `che`.
```
$ kubectl apply -f https://raw.githubusercontent.com/eclipse/codewind-che-plugin/0.11.0/setup/install_che/codewind-clusterrole.yaml -n $NAMESPACE
```
### Next steps

**Getting started with Codewind for Eclipse Che - next steps** Continue to instructions for [adding an image registry in Codewind](./che-setupregistries.html).
