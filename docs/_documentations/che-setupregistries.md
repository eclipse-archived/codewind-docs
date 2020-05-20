---
layout: docs
title: Adding image registries in Codewind for Che
description: AAdding image registries in Codewind for Che
keywords: container, registry, Che, guidance, image registry, Appsody, Docker, name, push registry, Kubernetes
duration: 1 minute
permalink: che-setupregistries
type: document
---

# Adding image registries in Codewind in Che

 Codewind uses image registries for the following purposes:

 1. working with templates that are hosted on non-public image registries.
 2. building containers in the cloud.

 Determine whether you need to add any image registries to Codewind on Eclipse Che from the following information:

## Image registries containing your project templates
If the container image registry hosting the project templates you are working with requires credentials, you must [add the container image registry](#adding-an-image-registry-in-codewind).

**Appsody style projects** The image container registry containing the Appsody project templates/APPSODY STACKS? requires credentials. You must therefore add the image registry containing your Appsody-style projects / PROJECT TEMPLATES / STACKS to Codewind.

## Image registries for pushing images to the cloud

When building **Codewind-style projects** in the cloud, Codewind on Eclipse Che pushes an image of your built project to a container image registry located on your cluster. If you are working with Codewind-style projects, SET UP A REGISTRY? CHOOSE A REGISTRY? [add the container image registry](#adding-an-image-registry-in-codewind) located on you cluster.

## Adding an image registry in Codewind

**If you are using Codewind with OKD or Openshift** You can use the OpenShift internal container registry with Codewind. For instructions, see [Adding the OpenShift internal registry with Codewind](openshiftregistry.html).

To add a non-Openshift image registry to Codewind:

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
These examples show recommended values for common registries and have been tested and verified for use with Codewind:

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