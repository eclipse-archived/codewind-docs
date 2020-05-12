---
layout: docs
title: Adding an image registry in remote Codewind
description: Adding an image registry in remote Codewind
keywords: container, registry, IDE, guidance, image registry, Appsody, Docker, name, push registry, Kubernetes
duration: 1 minute
permalink: remote-setupregistries
type: document
---

# Adding an image registry in remote Codewind

## Determining if you need to set an image registry 
You need to set credentials for an image registry if you:
* Build a project with a dockerfile that pulls from a non-public image registry. 
* Work with Appsody projects that pull stack images from a non-public image registry. 
* Use Codewind remotely. Set at least one image registry that Codewind can push built project images to. If you have multiple registries configured, you can select one of them to be the push registry. 


When you add an image registry, Codewind logs you into the image registry on your local machine as if you had locally run `docker login`. 

## Adding an image registry in Codewind
After your IDE is started and running, add the image registry to be used with Codewind.
1. From your IDE, open the window for adding your image registry.
  - **In Eclipse:** Right-click a remote connection in the Codewind Explorer view and select **Manage Image Registries**.
  - **In VS Code:** Right-click a remote connection and select **Image Registry Manager** or use the **Image Registry Manager** command on the command palette.
2. Then, follow the prompts and fill out the required information to add your image registry. For recommended values for common registries, see the [examples](#examples).
  - Registry server name, domain name, or address: `<registry-to-push-or-pull-images-to>`
  - User name: `<Your user name>`
  - Password or API key: `<Your password or API key>`
  - Also enter a namespace if you want to use the registry as the push registry.

## Codewind container registry guidance
When you run Codewind on Kubernetes for Codewind style projects, Codewind uses [`buildah`](https://github.com/containers/buildah) to build container images from Dockerfiles and to push the images to an image registry that you specify. Use the **Image Registry Manager** in your Codewind IDE to configure the registry to use. 

Use any registry as long as `buildah` and the node that Codewind is running on can resolve the registry hostname. If `buildah` cannot resolve the registry hostname, `buildah` cannot push your projects to the registry, and deployment on Kubernetes is prevented.

## Examples:
These examples show recommended values for common registries. The following image registries are tested and verified with Codewind:
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
To use the OpenShift internal container registry with Codewind, see [Adding the OpenShift internal registry with Codewind](openshiftregistry.html).

Next step: [Creating and importing projects](remotedeploy-projects-vscode.html)
