---
layout: docs
title: Docker registry guidance for Eclipse Codewind
description: Docker registry guidance for Eclipse Codewind
keywords: users, projects, Kubernetes, docker, containers, registry, deployment, push
duration: 5 minutes
permalink: dockerregistry
type: document
parent: installoncloud
order: 1
---
# Codewind Docker registry guidance

When you run Codewind on Kubernetes, Codewind uses [`buildah`](https://github.com/containers/buildah) to build container images from Dockerfiles and then push the images to a container registry that you specify.

Codewind is flexible with the registry that can be used as long as `buildah` and the node that Codewind is running on can resolve the registry hostname. If `buildah` is unable to resolve the registry hostname, `buildah` will be unable to push your projects to the registry and will prevent deployment on Kubernetes.

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
    
## Step 1: Authenticating registry credentials
To push to the container registry, first add the registry credentials with Che.
1. On the Che dashboard, click the **Administration** tab in the sidebar.
2. Click **Add Registry**.
3. Enter the container registry host, such as `quay.io` or `http://index.docker.io/v1/`.
4. Enter your user credentials for the registry.
These credentials are passed into each Codewind workspace that is deployed in your user account in Che.
5. If a Codewind workspace is already running, restart the workspace to make the changes take effect.

## Step 2: Specifying the deployment registry for the Codewind workspace
Before you deploy your project with Codewind, first specify a deployment registry to push the images to.
1. When you first deploy a project in Codewind, Codewind prompts you to set a deployment registry.
    - If Codewind detects the registry is unset, Codewind prompts before deploying a project.
2. Enter a path with which to push your container.
    - **Important:** Before attempting this step, ensure that you have entered the registry credentials with the Che dashboard.
3. Codewind asks if you want to verify push permissions. If you select **yes**, Codewind pushes a small `hello-world` image to the registry to verify permissions.

### Instructions specific to IBM Cloud Private
- The internal Docker registry on IBM Cloud Private is **not** supported. Instead, you need to use either an external registry or a container registry that you installed yourself.
    - If a registry that you installed is using self-signed certificates, the registry must be whitelisted in both Kubernetes and Docker on **all** nodes.
- The `docker.io`, `quay.io`, and `artifactory` container registry hosts have been tested with IBM Cloud Private.

### Instructions specific to OKD and OpenShift
- The internal container registry on OKD and OpenShift is supported.
- To use the internal container registry with Codewind, specify the internal hostname for the registry instead of the publicly exposed container registry.
    - If you enter credentials with Che, use `docker-registry.default.svc:5000` as the host and your cluser user name and account key as the credentials.
    - If you enter the tag to push with Codewind, use `docker-registry.default.svc:5000/<project>`, where `<project>` is a project on your cluster, such as `eclipse-che`.
- For more information, see [Remotely Push and Pull Container Images to OpenShift](https://blog.openshift.com/remotely-push-pull-container-images-openshift/). 

   
