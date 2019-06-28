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

# Setting up a Codewind-ready install of Che

To setup a Codewind-ready install of Che, follow these instructions. Alternatively, the install script at https://github.com/eclipse/codewind-che-plugin/tree/master/setup/install_che can be used instead.


# Table of Contents
1. [Prerequisites](#prerequisites)
2. [Setting up OKD and OpenShift](#setting-up-okd-and-openshift)
3. [Setting up other Kubernetes](#setting-up-other-kubernetes)
4. [After installing Che](#after-installing-che)
5. [Creating the Codewind workspace](#creating-the-codewind-workspace)

## Prerequisites
- Set up the PersistentVolume (PV) with either Network File System (NFS) or GlusterFS.
  - For NFS, if running on IBM Cloud Private, follow these instructions:[NFS Storage Install Instructions](https://www.ibm.com/developerworks/community/blogs/fe25b4ef-ea6a-4d86-a629-6f87ccf4649e/entry/Working_with_storage?lang=en) and use 777 permissions for the folders.
  - You do not need to set up the PV for local Kube, such as Minikube, Minishift, Docker Desktop, and others.
- Set up the ClusterRole.
  - **Important:** If you are running on OKD or OpenShift, install Che first and then set up the ClusterRole.
  1. Clone the [Codewind Che plug-in repository](https://github.com/eclipse/codewind-che-plugin)
  2. Enter the `cd` command to go to the `codewind-che-plugin` repository.
  3. Log in to the IBM Cloud Private cluster and target cluster to the namespace that you are planning to install.
  4. Run the `kubectl apply -f setup/install_che/codewind-clusterrole.yaml` command to create a cluster role with the required permission.
  5. Next, run `kubectl apply -f setup/install_che/codewind-rolebinding.yaml` command.

## Setting up OKD and OpenShift

### Installing Che with deployment scripts
1. Git clone the [Eclipse Che repository](https://github.com/eclipse/che).
2. Enter the `cd` command to go to the `deploy/openshift` directory.
3. Deploy Che with `./deploy_che.sh`.
4. From the [Codewind Che plug-in repository](https://github.com/eclipse/codewind-che-plugin) run the `kubectl apply -f setup/install_che/codewind-clusterrole.yaml` command to create a cluster role with the required permission.
5. From the [Codewind Che plug-in repository](https://github.com/eclipse/codewind-che-plugin) run the `kubectl apply -f setup/install_che/codewind-rolebinding.yaml` command.


### Enable privileged and root containers to run
Codewind is currently required to run as privileged (as it builds container images) and as root. Run the following commands to enable that functionality:
1. Enter `oc adm policy add-scc-to-group privileged system:serviceaccounts:eclipse-che` to enable privileged containers
2. Enter `oc adm policy add-scc-to-group anyuid system:serviceaccounts:eclipse-che` to enable containers to run as root.

## Setting up other Kubernetes

### IBM Cloud Private: Set the ClusterImagePolicy
If you're running on IBM Cloud Private, you must add the images that Che uses to the ClusterImagePolicy before deploying Che:
1. Log in to the IBM Cloud Private cluster.
2. Run the `kubectl edit clusterimagepolicy` command. Then, add the following lines:
  ```
  - name: gcr.io/*
  - name: docker.io/*
  ```

### Step 1: Setting up the Che Helm chart
1. Clone the [Che repository](https://github.com/eclipse/che).
2. Enter the `cd` command to go to the `deploy/kubernetes/helm/che` directory. Then, edit the `values.yaml` file.
   - Set up multiuser if you need the multiple users feature: `multiuser: true`


### Step 2: Installing Che with the Helm chart
Clone the [Che repository](https://github.com/eclipse/che).
1. Enter the `cd` command to go to the `deploy/kubernetes/helm/che` directory.
2. Run the `helm dependency update` command.
3. Run the following command:
    ```
    helm upgrade --install che --namespace <ns> \
        --set cheImage=eclipse/che-server:7.0.0-RC-2.0 \
        --set global.ingressDomain=<cluster proxy ip>.nip.io \
        --set global.cheWorkspaceClusterRole=eclipse-codewind \
        --set global.cheWorkspacesNamespace=<ns> \
        --set che.workspace.devfileRegistryUrl="https://che-devfile-registry.openshift.io/" \
        --set che.workspace.pluginRegistryUrl="https://che-plugin-registry.openshift.io/v3" ./
    ```
               
Append the `--tls` flag if the tiller is configured with SSL in your Kubernetes cluster.

## After installing Che

### Adding registries in Che
After Che is started and running, add the container registry that will be used with Codewind.
- On IBM Cloud Private, push your 
to any Docker registry *except* the internal Docker registry
- On OpenShift or other Kube platforms, you can push your images to any Docker registry, such as Dockerhub, Quay.io, Google Cloud Registry (GCR), and more.

Complete the following instructions to add the registries:
  - Server: `<registry-to-push-images-to>`

For further information on adding deployment registries to Che, consult https://www.eclipse.org/codewind/dockerregistry.html

### Optional: Hosting a Devfile for creating the Che workspace with Codewind

Skip this step if you are using the devfiles that Codewind provides by default. If you wish to host your own devfile, follow these instructions:

1. Clone the [Codewind Che plug-in repositoryhttps://github.com/eclipse/codewind-che-plugin).
2. Make your modifications as you see fit.
3. The `devfile.yaml` and `meta.yaml` files need to be hosted in a location that Che can access, such as Github.
4. In `devfile.yaml`, modify the `codewind-sidecar` and `codewind-theia` components so that their ID formats match.
For example, `https://raw.githubusercontent.com/eclipse/codewind-che-plugin/master/plugins/codewind/codewind-sidecar/0.2.0/meta.yaml
` and `https://raw.githubusercontent.com/eclipse/codewind-che-plugin/master/plugins/codewind/codewind-theia/0.2.0/meta.yaml
` host the `meta.yaml` files.

## Creating the Codewind workspace

### Confirm the Docker registry secrets.
Confirm that you added the docker registry secrets in the Che dashboard. Go to **Administration**>**Add Registry** to check for the secrets.

### Creating the Codewind workspace with a Devfile
The general format for creating a Che workspace via a factory is:
```
http://<che ingress domain>/f?url=<hosted devfile URL>
```

We provide a ready to use devfile with some sample projects and the Codewind plugins. To create a workspace from it:
```
http://<che ingress domain>/f?url=https://raw.githubusercontent.com/eclipse/codewind-che-plugin/master/devfiles/0.2.0/devfile.yaml
```

For other sample devfiles, see https://github.com/kabanero-io/codewind-templates/tree/master/devfiles

### Checking for the Codewind pod
1. If you are using the Terminal, switch to use the workspace namespace. You can check for the namespace with `kubectl get ns`.
2. Ensure the projects are cloned into the workspace. You might need to refresh the browser to trigger the clone.


## After installing Codewind

### Setting the Docker registry
Upon creating a Codewind workspace. The container registry to deploy your projects to must be set. When you go to create or add an existing project to Codewind, Codewind will prompt you for the registry. See (Docker registry docs) for guidance on using proper container registries

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
