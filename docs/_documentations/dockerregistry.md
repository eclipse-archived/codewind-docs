---
layout: docs
title: Image registry guidance for Eclipse Codewind
description: Image registry guidance for Eclipse Codewind
keywords: users, projects, Kubernetes, image, registry, deployment, push
duration: 5 minutes
permalink: dockerregistry
type: document
parent: installoncloud
order: 1
---
# Codewind Docker registry guidance

When you run Codewind on Kubernetes for Codewind style projects, Codewind uses [`buildah`](https://github.com/containers/buildah) to build container images from Dockerfiles and to push the images to an image registry that you specify. You can use the `Image Registry Manager` in your Codewind IDE to configure the registry to use. 

Codewind is flexible with the registry that can be used as long as `buildah` and the node that Codewind is running on can resolve the registry hostname. If `buildah` is unable to resolve the registry hostname,`buildah` is unable to push your projects to the registry, and deployment on Kubernetes is prevented.

Before you proceed, see the [examples](#examples) section on recommended values for common registries:

## Examples:
The following deployment registries have been tested and verified with Codewind:
- Docker Hub:
    - Address: `docker.io`
    - Namespace: `<namespace>`
    - Credentials: Docker Hub username and password or token access
- Quay.io:
    - Address: `https://quay.io`
    - Namespace: `<namespace>`
    - Credentials: Quay.io user name and encrpyted password
- Artifactory
    - Address: `<artifactory-hostname>`
    - Namespace: `<namespace>`
    - Credentials: Artifactory user name and token
- OpenShift Registry
    - Address: `docker-registry.default.svc:5000`
    - Namespace: `<project>`
    - Credentials: OpenShift user name and token
**Note:** For Docker Hub, the `Namespace` value is likely to be your username. 

### Specifying image registries for Codewind 
There are three scenarios in Codewind where you need to specify what image registry to use:

1. If you run Codewind on a remote Kubernetes cluster (this includes Che) to develop an Appsody style project, and the image registry for the Appsody stack requires credentials, you need to configure Codewind to use the credentials for that specific image registry.
2. If you run Codewind locally to develop an Appsody style project, and the image registry for the Appsody stack requires credentials, you need to `docker login` to the registry from the command line before you create the Appsody project.
3. If you run Codewind on a remote Kubernetes cluster (this includes Che) to develop a Codewind style project, you need to configure Codewind with an image registry to push the application's image to that specific image registry.

If you do not develop any Codewind style projects,and you use an image registry that does not require credentials, then you do not need to specify an image registry. 

### Instructions specific to OKD and OpenShift
To use the OpenShift internal Docker registry with Codewind, see [Using the OpenShift Internal Registry with Codewind](https://www.eclipse.org/codewind/openshiftregistry.html).