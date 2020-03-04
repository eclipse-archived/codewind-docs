---
layout: docs
title: Adding a container registry in Codewind
description: Adding a container registry in Codewind
keywords: container, registry, IDE, guidance, image registry, Appsody, Docker, name, push registry, Kubernetes
duration: 1 minute
permalink: remote-setupregistries
type: document
---

# Adding a container registry in Codewind

## Prerequisite: Determining if you need a container registry 
1\. First, determine if you need to add a container registry. The following scenarios in Codewind require you to specify which image registry is in use:
- In the following scenario, configure Codewind with an image registry to push the application image to that specific image registry:
    - Run Codewind on a remote Kubernetes cluster to develop a Codewind style project.
- In the following scenario, configure Codewind to use the credentials for a specific image registry:
    - Run Codewind on a remote Kubernetes cluster to develop an Appsody style project.
    - The image registry for the Appsody stack requires credentials.
- In the following scenario, from the command line, enter the `docker login` command in the registry before you create the Appsody project:
    - Run Codewind locally to develop an Appsody style project.
    - The image registry for the Appsody stack requires credentials. 
If you do not develop any Codewind style projects, and you use an image registry that does not require credentials, you do not need to specify an image registry.
2\. If you do need to add a container registry, start and run your IDE.

## Adding a container registry in Codewind
After your IDE is started and running, add the container registry to be used with Codewind.
1. Select **Image Registry Manager**.
  - **In Eclipse:** Right-click a connection in the Codewind Explorer view.
  - **In VS Code:** From the Codewind Project Explorer view, right-click the remote connection or use the **Image Registry Manager** command on the command palette.
2. Add your container registry.
  - **In Eclipse:** From **Manage Image Registries**, click **Add...**.
  - **In VS Code:** From the **Image Registry Manager**, click **Add New**.
3. Enter the following information to add the registry:
  - Registry server name, domain name, or address: `<registry-to-push-images-to>`
  - User name: `<Your user name>`
  - Password or API key: `<Your password or API key>`
4. If you're using the newly added registry as a push registry, enter the namespace that you want to push your images to.
  - For recommended values for common registries, see the [examples](#examples).
5. Click **Designate as push registry** in Eclipse or **Select a Push Registry** in VS Code to determine which registry you use to push Codewind style projects to.

## Codewind Docker registry guidance
When you run Codewind on Kubernetes for Codewind style projects, Codewind uses [`buildah`](https://github.com/containers/buildah) to build container images from Dockerfiles and to push the images to an image registry that you specify. Use the **Image Registry Manager** in your Codewind IDE to configure the registry to use. 

Use any registry as long as `buildah` and the node that Codewind is running on can resolve the registry hostname. If `buildah` cannot resolve the registry hostname, `buildah` cannot push your projects to the registry, and deployment on Kubernetes is prevented.

## Examples:
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

## Adding registries to OKD and OpenShift
To use the OpenShift internal Docker registry with Codewind, see [Adding the OpenShift internal registry with Codewind](openshiftregistry.html).

Next step: [Creating and importing projects](remotedeploy-projects-vscode.html)
