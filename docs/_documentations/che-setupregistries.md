---
layout: docs
title: Adding image registries in Codewind for Che
description: Adding image registries in Codewind for Che
keywords: container, registry, Che, guidance, image registry, Appsody, Docker, name, push registry, Kubernetes
duration: 1 minute
permalink: che-setupregistries.html
type: document
---

# About image registries

An image registry is an online service that stores Docker images. Docker images are either images that you build yourself, or images from third parties that you want to consume, for example, a base image of Node.js or a base image of Java. The image registry is also the place where Kubernetes and OpenShift download from when they deploy the application for ongoing development or testing within each of those environments.

Some registries are protected and limit access to authenticated users only. You might use one or multiple image registries each having different credentials. In the following section we'll discuss when you'll need a registry configured within Codewind, and how to store your credentials for use when the registry has been secured. 

## When you need to define an image registry
You need to enter configuration details for the image registry for any of the following conditions:
- Building a project with a Dockerfile that pulls from a protected image registry that requires authentication.
- Working with Appsody projects that pull stack images from a protected image registry that requires authentication.
- When you are using Codewind remotely
- When you are using Che to build Codewind style projects

### Determining whether you need an image registry for Che
You need an image registry for Che if:
- In the following scenario, you want to configure Codewind with an image registry to push the application image to that specific image registry:
    - Run Codewind on a remote Kubernetes cluster, including Che, to develop a Codewind style project.
- In the following scenario, you want to configure Codewind to use the credentials for a specific image registry:
    - Run Codewind on a remote Kubernetes cluster, including Che, to develop an Appsody style project.
    - The image registry for the Appsody stack requires credentials.

If you do not develop any Codewind style projects, and you use an image registry that does not require credentials, you do not need to specify an image registry.

## Adding your first image registry entry to Codewind
Adding an image registry and connection details is done using your IDE (local/remote) or by way of the Che IDE when running in Che. 

Ensure you have completed the [prerequisites to installing Codewind on Eclipse Che](./che-installinfo.html#prerequisites).

**Note:** If you completed the [Codewind for Eclipse Che prerequisites and installation steps](./che-installinfo.html#installing-che-to-use-with-codewind) for Kubernetes, then you have installed Eclipse Che with self-signed certificates. To proceed, you must either select 'accept the certificates' in your browser or add the certificates to your browser. Ask your cluster administrator for further information. **Caution:** do not use self-signed certificates in production

## Adding image registries in Codewind in Che
After Che is started and running, add the image registry to be used with Codewind.
1. From the Codewind Project Explorer view, right-click **Projects** and select **Image Registry Manager**.
2. From the **Image Registry Manager**, click **Add New**.
3. Enter the following information to add the registry:
  - Registry server name or domain name: `<registry-to-push-images-to>`
  - Username: `<Your username>`
  - Password or API key: `<Your password or API key>`
4. If you're using the newly added registry as a push registry, enter the namespace that you want to push your images to.
  - For recommended values for common registries, see the [examples](#examples).
5. Click **Select a Push Registry** to determine which registry you use to push Codewind style projects to.

**If you are using Codewind with OKD or OpenShift** You can use the OpenShift internal container registry with Codewind. For instructions, see [Adding the OpenShift internal registry with Codewind](openshiftregistry.html).

## Codewind image registry guidance
When you run Codewind on Kubernetes for Codewind style projects, Codewind uses [`buildah`](https://github.com/containers/buildah) to build container images from Dockerfiles and to push the images to an image registry that you specify. Use the **Image Registry Manager** in your Codewind IDE to configure the registry to use. 

Use any registry as long as `buildah` and the node that Codewind is running on can resolve the registry hostname. If `buildah` cannot resolve the registry hostname, `buildah` cannot push your projects to the registry, and deployment on Kubernetes is prevented.

## Examples:
These examples show recommended values for common registries. The following deployment registries are tested and verified with Codewind:
- Docker Hub:
    - Address: `docker.io`
    - Namespace: `<namespace>`
    - Credentials: Docker Hub username and password or access token
    - **Note:** For Docker Hub, the `Namespace` value is likely to be your username. 
- Quay.io:
    - Address: `https://quay.io`
    - Namespace: `<namespace>`
    - Credentials: Quay.io username and encrypted password
- Artifactory
    - Address: `<artifactory-hostname>`
    - Namespace: `<namespace>`
    - Credentials: Artifactory username and access token
- OpenShift Registry
    - Address: `docker-registry.default.svc:5000`
    - Namespace: `<project>`
    - Credentials: OpenShift username and access token

## Next step: 

**Getting started with Codewind for Eclipse Che** Continue to instructions for [creating a Codewind workspace in Che](che-createcodewindworkspace.html).
