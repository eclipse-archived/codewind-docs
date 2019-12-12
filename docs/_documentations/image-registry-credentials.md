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
When you run Codewind on Kubernetes, Codewind uses [`buildah`](https://github.com/containers/buildah) to build container images from Dockerfiles and to push the images to an image registry that you specify. You can use the `Image Registry Manager` in your Codewind IDE to configure the registry to use. 

Codewind is flexible with the registry that can be used as long as `buildah` and the node that Codewind is running on can resolve the registry hostname. If `buildah` is unable to resolve the registry hostname,`buildah` is unable to push your projects to the registry, and deployment on Kubernetes is prevented.

Before you proceed, see the [examples](#examples) section on recommended values for common registries:

## Examples:
The following deployment registries have been tested and verified with Codewind:
- Dockerhub:
    - Host: `docker.io`
    - Codewind deployment registry: `docker.io/<username>`
    - Credentials: Dockerhub user name and password
- Quay.io:
    - Host: `https://quay.io`
    - Codewind deployment registry: `https://quay.io/<username>`
    - Credentials: Quay.io user name and encrpyted password
- Artifactory
    - Host: `<artifactory-hostname>`
    - Codewind deployment registry: `<artifactory-hostname>/<username>`
    - Credentials: Artifactory user name and token
- OpenShift Registry
    - Host: `docker-registry.default.svc:5000`
    - Codewind deployment registry: `docker-registry.default.svc:5000/<project>`
    - Credentials: OpenShift user name and token
    
### Specifying Image Registries for Codewind 
There are three scenarios in Codewind where you need to specify what image registry to use:

1. If you run Codewind on a remote Kubernetes cluster to develop an Appsody style project, and the image registry for the Appsody stack requires credentials, you need to configure Codewind to use the credentials for that specific image registry.
2. If you develop an Appsody style project, you need to specify an image registry, so Appsody can pull stack images from that specific image registry. 
3. If you run Codewind locally to develop an Appsody style project, and the the image registry for the Appsody stack requires credentials, you need to `docker login` to the registry from the command line before you create the Appsody project. 

If you do not develop any Codewind style projects,and you use an image registry that does not require credentials, then you do not need to specify an image registry. 

### Instructions specific to IBM Cloud Private
- The internal Docker registry on IBM Cloud Private is **not** supported. Instead, you need to use either an external registry or an image registry that you installed yourself.
    - If a registry that you installed is using self-signed certificates, the registry must be whitelisted in both Kubernetes and Docker on **all** nodes.
- The `docker.io`, `quay.io`, and `artifactory` image registry hosts have been tested with IBM Cloud Private.

### Instructions specific to OKD and OpenShift
To use the OpenShift internal Docker registry with Codewind, see [Using the OpenShift Internal Registry with Codewind](https://www.eclipse.org/codewind/openshiftregistry.html).