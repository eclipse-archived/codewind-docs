---
layout: docs
title: Installing Eclipse Che for Codewind
description: Installing Eclipse Che for Codewind
keywords: build, deploy, install, installing, installation, chart, Helm, develop, cloud, public cloud, services, command line, cli, command, start, stop, update, open, delete, options, operation, devops, OpenShift, OKD
duration: 1 minute
permalink: che-installinfo
type: document
---

# Installing Eclipse Che for Codewind

Install Che to use with Codewind or prepare to use Codewind with an existing Che installation.

## Prerequisites

1. Set up PersistentVolumes (PVs) that support both `ReadWriteOnce` (RWO) and `ReadWriteMany` (RWX) access modes and each have a minimum of 5 Gi storage.
   - One volume is required for Che, and two volumes are required for each Codewind workspace.
   - For Network File System (NFS) shares, set 777 permissions for the exported folders and ownership of `nobody:nogroup`.
   - Because Codewind uses `ReadWriteMany` (RWX) volumes to provide persistent storage, use NFS for storage on OpenShift 4.
2. Ensure that the cluster can pull images from the `docker.io/eclipse` and `quay.io/eclipse` registries.
   - Both Eclipse Che and Eclipse Codewind host Docker images at these locations.
   - Many clusters have image policies that control which registries you can use to pull images. Check your cluster documentation and ensure that the cluster image pull policies permit both of these registries.
3. Set up the ClusterRole for Codewind:
`kubectl apply -f https://raw.githubusercontent.com/eclipse/codewind-che-plugin/0.10.0/setup/install_che/codewind-clusterrole.yaml`

## Installing Che with chectl

Codewind requires Eclipse Che to be installed with HTTPS in order to function properly. The following section, `Installing Che` will cover setting up Eclipse Che with TLS certificates.

### Installing Che
The fastest way to install Eclipse Che for Codewind is to use the `chectl` CLI. To install the `chectl` CLI tool, see [Installing the chectl management tool](https://www.eclipse.org/che/docs/che-7/installing-the-chectl-management-tool/).

After you install `chectl`, download the [codewind-checluster.yaml](https://raw.githubusercontent.com/eclipse/codewind-che-plugin/0.10.0/setup/install_che/che-operator/codewind-checluster.yaml) file
 - You can modify this file, but leave the `spec.server.cheWorkspaceClusterRole` field set to `eclipse-codewind` and the `spec.storage.preCreateSubPaths` field set to `true`.

**Installing on OpenShift:**

Eclipse Che on OpenShift makes use of the router's existing certificates. 
Run the following command to install Che on OpenShift with Chectl: 
   ```
   $ chectl server:start --platform=openshift --installer=operator --che-operator-cr-yaml=codewind-checluster.yaml --che-operator-image=quay.io/eclipse/che-operator:7.9.0
   ```

**Installing on Kubernetes:**

1. Create the `che` namespace if it doesn't already exist: `kubectl create namespace che`
2. If you're installing Che on a Kubernetes platform other than OpenShift, determine your Ingress domain.
    - Set the `spec.server.ingressDomain` field in the Che `.yaml` file to the Ingress domain.
    - If you're unsure of your Ingress domain, ask your cluster administrator.
3. Generate TLS certificates and keys according to https://www.eclipse.org/che/docs/che-7/setup-che-in-tls-mode-with-self-signed-certificate/#generating-self-signed-certificates_setup-che-in-tls-mode-with-self-signed-certificate
4. Generate a Kubernetes secret containing the TLS secret and key you generated in the previous set:
   ```
   $ kubectl create secret tls che-tls --key=domain.key --cert=domain.crt -n che
   ```
5. Generate a Kubernetes secret containing the certificate you generated in step 2:
   ```
   $ cp rootCA.crt ca.crt
   $ kubectl create secret generic self-signed-certificate --from-file=ca.crt -n che
   ```
6. Run the following command to install Che: 
   ```
   $ chectl server:start --platform=k8s --installer=operator --domain=<ingress-domain> --che-operator-cr-yaml=codewind-checluster.yaml --che-operator-image=quay.io/eclipse/che-operator:7.9.0
   ```

## Updating an existing Che installation

If you already have a Che installation with TLS, you can update it for Codewind.

After creating the Codewind ClusterRole from the [Prerequisites](#prerequisites), run the following command, where `$NAMESPACE` is the namespace that your Che workspaces run in. By default, this namespace is `che`.
```
$ kubectl apply -f https://raw.githubusercontent.com/eclipse/codewind-che-plugin/0.10.0/setup/install_che/codewind-rolebinding.yaml -n $NAMESPACE
```

## Adding Certificates for Che to your browser

If Eclipse Che was configured with self-signed certificates (such as by following the previous steps for Kubernetes, or if you installed on an OpenShift cluster with self-signed-certificates), you need to add the `ca.crt` for Eclipse Che to your browser. These steps are **not** necessary if you installed Che with publicly signed certificates (such as on OpenShift on IBM Cloud).

### Download the OpenShift Router ca.crt
If running on OpenShift with self-signed certs, follow these instructions:

1. Authenticate against your OpenShift cluster, or ask your cluster administrator to do so.
2. Run the following command to download the router's ca.crt
```
$ oc get secret router-ca -n openshift-ingress-operator -o jsonpath="{.data.tls\.crt}" | base64 -d > rootCa.crt
```

### Adding the ca.crt to Google Chrome

On MacOS, follow these steps:

1. Open **Keychain Access** and click **File** -> **Import items**.
2. Locate rootCa.crt you got earlier and import it.
3. Find the certificate in Keychain and click on it.
4. In the window that opens, expand the **Trust section** and under **When using this certificate**, select **Always trust**. Hit **save**.
5. Reload Eclipse Che in your browser.

On Windows, follow these steps:

1. Open Google chrome preferences, select **Privacy and Security** and click on **Manage Certificates**.
2. In the Window that pops up, click on the **Trusted Root Certificate Authorities** tab.
3. Locate the rootCa.crt and import it.
4. Restart Google chrome and access the Console route.

### Adding the ca.crt to Firefox

1. Go to **Preferences -> Privacy and Security -> View certificates**.
2. Click on **Authorities** and click `Import`.
3. Locate the rootCa.crt file and import it.
4. Reload Eclipse Che in your browser.

## Enabling privileged and root containers to run

Codewind needs to run as privileged and as root because it builds container images. If your cluster is running OpenShift, run the following commands, where `<che namespace>` is the namespace into which you installed Che.
1. To enable privileged containers, enter `oc adm policy add-scc-to-user privileged system:serviceaccount:<che namespace>:che-workspace`.
2. To enable containers to run as root, enter `oc adm policy add-scc-to-user anyuid system:serviceaccount:<che namespace>:che-workspace`.

Next step: [Adding registries in Che](che-setupregistries.html)
