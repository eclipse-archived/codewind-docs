---
layout: docs
title: Adding an image registry in Codewind in Che
description: Adding an image registry in Codewind in Che
keywords: container, registry, Che, guidance, image registry, Appsody, Docker, name, push registry, Kubernetes
duration: 1 minute
permalink: che-setupregistries
type: document
---

# Adding an image registry in Codewind in Che

## Prerequisite: Determining if you need an image registry 

 The following scenarios in Codewind require you have an image specify which image registry is in use. Choose from the following:

- **Codewind for Eclipse Che running on a remote Kubernetes cluster to develop a Codewind style project** Configure Codewind with an image registry to push the application image to that specific image registry. When you run Codewind on Kubernetes for Codewind style projects, Codewind uses [`buildah`](https://github.com/containers/buildah) to build container images from Dockerfiles and to push the images to an image registry that you specify. 
 
 -- Use the **Image Registry Manager** in your Codewind IDE to configure the registry to use. 
 -- Use any registry as long as `buildah` and the node that Codewind is running on can resolve the registry hostname. If `buildah` cannot resolve the registry hostname, `buildah` cannot push your projects to the registry, and deployment on Kubernetes is prevented.

- **Codewind for Eclipse Che running on a remote Kubernetes cluster to develop an Appsody style project** Configure Codewind to use the credentials for a specific image registry. 

- **Codewind running locally to develop an Appsody-style project** From the command line, enter the `docker login` command in the registry before you create the Appsody project

## Image Registry Specifics

- **Using OKD Codewind with OKD or Openshift** To use the OpenShift internal container registry with Codewind, see [Adding the OpenShift internal registry with Codewind](openshiftregistry.html).

## Adding an image registry in Codewind

1. Start Codewind for Eclipse Che and ensure the project is running
2. From the Codewind Project Explorer view, right-click **Projects** and select **Image Registry Manager**.
3. From the **Image Registry Manager**, click **Add New**.
4. Enter the following information to add the registry:
  - Registry server name or domain name: `<registry-to-push-images-to>`
  - User name: `<Your username>`
  - Password or API key: `<Your password or API key>`
5. If you're using the newly added registry as a push registry, enter the namespace that you want to push your images to.
  - For recommended values for common registries, see the [examples](#examples).
6. Click **Select a Push Registry** to determine which registry you use to push Codewind style projects to.


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

## Next step: 

**Getting started with Codewind for Eclipse Che** Continue to instructions for [creating a Codewind workspace in Che](che-createcodewindworkspace.html)