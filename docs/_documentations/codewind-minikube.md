---
layout: docs
title: Codewind on Minikube 
description: End-to-end instructions on how to deploy Codewind and projects on local Kube, specifically, Minikube. 
keywords: Kubernetes, Kube, Minikube, Codewind, deploy, 
duration: 5 minutes
permalink: codewind-minikube
type: document
parent: Developing projects  
---

# Codewind on Minikube 

## Objectives 
* Start Minikube on your local machine 
* Install Codewind 

## Overview
Local Kubernetes, like Minikube, Docker Desktop Kube, and CodeReadyContainers, is an effective way to explore and learn to develop with Codewind. This tutorial assists and instructs you to deploy Codewind and projects on local Kube, specifically, Minikube. 

* [Prerequisistes](##prerequisites)
* [Preparing Minikube](##preparing-minikube)
* [Installing Codewind](##installing-codewind)

## Prerequisites
* A Mac, Windows, or Linux host.
* Install [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/).
* At least 8Gb RAM. Minikube needs at least 4Gb of RAM for this tutorial. 

## Preparing Minikube
1. To run the needed commands, open your terminal. 
2. To start Minikube on your machine, run, `minikube start --memory=4096`.
    * Minikube creates a single-node Kubernetes cluster with 4GB of RAM available to it.
    * If this command fails, refer to [Minikube installation docs](https://kubernetes.io/docs/tasks/tools/install-minikube) and ensure you have enough memory on your system. 
3. To install [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/) on Minikube, run, `minikube addons enable ingress`. 
    * Codewind makes use of Ingress to expose its endpoints.
4. To determine your Ingress IP, run `minikube ip`. 
    * Example:
     ```
     johns-mbp-3:~ johncollier$ minikube ip
     192.168.64.46
     ```
     * Save this value for later.
 
## Installing Codewind
1. Choose your IDE and install the Codewind extension. 
    * Follow the install instructions for [Eclipse](https://www.eclipse.org/codewind/mdt-eclipse-getting-started.html) or [VS Code](https://www.eclipse.org/codewind/mdt-vsc-getting-started.html). 
2. Locate the `cwctl` command line interface (CLI). 
    * On Mac and Linux, the cwctl is `~/.codewind/<version>/cwctl`. 
    * On Windows, the cwctl is located: ??? 
3. To install cwctl, run the following command:
        ```
        ./cwctl --insecure install remote \
        --namespace codewind \
        --kadminuser admin \
        --kadminpass admin \
        --krealm codewind \
        --kclient codewind \
        --kdevuser developer \
        --kdevpass developer \
        --ingress <ingress-ip>.nip.io
        ```   
    * **Note:** The `ingress-ip` value is the value you found in Step 4 of `Preparing Minikube`.
    * This command installs Codewind into the `Codewind` namespace with the default credentials.
4. Open the Codewind view in your editor -> select `New Codewind Connection` -> enter the following details:   
    * **Codewind Gatekeeper URL:** In step 3, cwctl gives you the Gatekeeper URL. 
    * **Username:** In step 3, developer username is given to cwctl in the value of `kdevuser`. 
    * **Password:** In step 3, developer password given to cwctl in the value of `kdevpass`.
5. To save and create the connection to the Codewind instance on Minikube, click `Save`. 