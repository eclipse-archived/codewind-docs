---
layout: docs
title: Adding registries in Che
description: Adding registries in Che
keywords: build, deploy, install, installing, installation, chart, Helm, develop, cloud, public cloud, services, command line, cli, command, start, stop, update, open, delete, options, operation, devops
duration: 1 minute
permalink: mdt-che-setupregistries
type: document
---

# Adding registries in Che
After Che is started and running, add the container registry to be used with Codewind.
1. From the Codewind project explorer view, right-click **Projects** and select **Image Registry Manager**.
2. From the **Image Registry Manager**, click **Add New**.
3. On OpenShift and other Kube platforms, push your images to a container registry, such as Docker Hub, Quay.io, Google Cloud Registry (GCR), and more. Enter the following information to add the registries:
  - Registry server name or domain name: `<registry-to-push-images-to>`
  - User name: `<Your username>`
  - Password or API key: `<Your password or API key>`
4. Next, enter the namespace that you want to use to push your registry to. After you enter all the information, from the **Image Registry Manager**, you can see values for the **Address**, **Username**, and **Namespace** of your latest registry.
5. Click **Select a Push Registry** to determine which registry you use to push Codewind style projects to.

# Setting the Docker registry
After creating a Codewind workspace, set the container registry to deploy your projects. When you create or add an existing project to Codewind, Codewind prompts you for the registry.

To change the registry in use, run the `Codewind: Set Deployment Registry` command in Theia to dynamically set a new registry for your workspace. <br>

![Set deployment registry](dist/images/che-docs/SetDockerRegistry-1.png){:height="90px" width="623px"}. <br>

![Set deployment registry location](dist/images/che-docs/SetDockerRegistry-2.png){:height="85px" width="633px"}. <br>

![Test deployment](dist/images/che-docs/SetDockerRegistry-3.png){:height="208px" width="801px"}. <br>

To proceed, ensure that the registry credentials were added with Che. Codewind restarts with the changes added.

# Codewind Docker registry guidance
When you run Codewind on Kubernetes for Codewind style projects, Codewind uses [`buildah`](https://github.com/containers/buildah) to build container images from Dockerfiles and to push the images to an image registry that you specify. Use the **Image Registry Manager** in your Codewind IDE to configure the registry to use. 

Use any registry as long as `buildah` and the node that Codewind is running on can resolve the registry hostname. If `buildah` cannot resolve the registry hostname, `buildah` cannot push your projects to the registry, and deployment on Kubernetes is prevented.

### Examples:
These examples show recommended values for common registries. The following deployment registries are tested and verified with Codewind:
- Docker Hub:
    - Address: `docker.io`
    - Namespace: `<namespace>`
    - Credentials: Docker Hub user name and password or access token
    - **Note:** For Docker Hub, the `Namespace` value is likely to be your user name. 
- Quay.io:
    - Address: `https://quay.io`
    - Namespace: `<namespace>`
    - Credentials: Quay.io user name and encrypted password
- Artifactory
    - Address: `<artifactory-hostname>`
    - Namespace: `<namespace>`
    - Credentials: Artifactory user name and access token
- OpenShift Registry
    - Address: `docker-registry.default.svc:5000`
    - Namespace: `<project>`
    - Credentials: OpenShift user name and access token

### Specifying image registries for Codewind 
The following scenarios in Codewind require you to specify which image registry is in use:

- In the following scenario, configure Codewind with an image registry to push the application image to that specific image registry:
    - Run Codewind on a remote Kubernetes cluster, including Che, to develop a Codewind style project.
- In the following scenario, configure Codewind to use the credentials for a specific image registry:
    - Run Codewind on a remote Kubernetes cluster, including Che, to develop an Appsody style project.
    - The image registry for the Appsody stack requires credentials.
- In the following scenario, from the command line, enter the `docker login` command in the registry before you create the Appsody project:
    - Run Codewind locally to develop an Appsody style project.
    - The image registry for the Appsody stack requires credentials. 

If you do not develop any Codewind style projects, and you use an image registry that does not require credentials, you do not need to specify an image registry.

### Adding registries to OKD and OpenShift
To use the OpenShift internal Docker registry with Codewind, see [Adding the OpenShift internal registry with Codewind](openshiftregistry.html).
