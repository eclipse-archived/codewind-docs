---
layout: docs
title: Container registry credentials for Codewind
description: Specifying container registries for Codewind
keywords: docker, containers, registry, Codewind, Appsody
duration: 5 minutes
permalink: containerregistry
type: document
parent: installoncloud
order: 1
---
# Specifying Container Registries for Codewind 

When you run Codewind on Kubernetes, Codewind uses [`buildah`](https://github.com/containers/buildah) to build container images from Dockerfiles and then push the images to a container registry that you specify.

There are two scenarios in Codewind where you need to specify what container registry to use:

1. If you are running in Che and creating a Codewind style project, you need to specify zero or one container registry so Codewind can push images to that specific registry. 
2. If you are developing an Appsody style project, you need to specify zero or more container registries for Appsody to pull stack images from that specific registry. 

If you are not developing any Codewind style projects, then you are using a public registry with images; in which case, you do not need to specify a container registry. 
