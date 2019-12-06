---
layout: docs
title: Configuring Codewind remote
description: Configuring your environment to use Codewind remote
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing Cloud connection
duration: 5 minutes
permalink: remoteconfiguring
type: document
parent: installoncloud
order: 1
---

# Configuring Codewind remote

To use Codewind remote, configure your system by following these steps. 

## Prerequisites
- Install your preferred IDE on your local machine. For more information about installing Eclipse, see [Getting started with Codewind for Eclipse](mdteclipsegettingstarted.html), or for more information about installing VS Code, see [Getting started with Codewind for VS Code](mdt-vsc-getting-started.html).
- Ensure you have access to the Codewind CLI `cwctl`. To access the Codewind CLI... (**where???**)

## Procedure

To securely configure Codewind remote there are two options, configuring Kubernetes for Docker Desktop, or configuring a Cloud deployment that does not have an Ingress NGINX controller, for example, OpenShift. 

### Configuring Kubernetes for Docker Desktop

1. Validate you have an ingress controller installed on your cluster by typing the following command: [Mark to supply] 

   If you are developing on Windows [get map local address from Mark]

   If you do not have an ingress controller, install one using the following commands:
   - `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml`
   - `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/cloud-generic.yaml`

2. Create the remote deployment by entering the following `cwctl` command: 
   `cwctl install remote \`
     `--namespace {your_namespace}  \`
     `--kadminuser admin \`
     `--kadminpass <keycloakPassword>  \`
     `--krealm codewind \`
     `--kclient codewind  \`
     `--kdevuser developer \`
     `--kdevpass <userPassword>`

### Configuring Cloud deployments that do not have an Ingress NGINX controller

1. If you are deploying to a Cloud that does not have an Ingress NGINX controller, for example, OpenShift, you must provide the ingress value in the `cwctl install remote \` command during installation. Derive the `ingress` value from the cluster URL. [Needs more from Mark]
2. Create the remote deployment by issuing the following example `cwctl` command: 

  `cwctl install remote \`
     `--namespace {your_namespace}  \`
     `--kadminuser admin \`
     `--kadminpass <keycloakPassword>  \`
     `--krealm codewind \`
     `--kclient codewind  \`
     `--kdevuser developer \`
     `--kdevpass <userPassword>`
     `--ingress "apps.myopenshiftserver.10.20.30.40.nip.io`
    
### Codewind CLI command explanation and sample output

The `cwctl install remote` command:
1. Checks your Cloud is valid.
2. Determines the ingress domain based on NGINX ingress that you added earlier. 
3. Creates the SSL certificates for the keycloak server and adds these to the ingress endpoint, and then starts Keycloak. 
4. It then populates all of the database entries inside Keycloak with the values that you added to the command. 
5. Sets up the performance pods.
6. Waits for Codewind to start. When Codewind has started, in Kubernetes, you see new four new pods including keycloak plus the services and the deployment configurations for those pods. If you are deploying on to OpenShift, you can use routes instead of ingress. 
7. On successful completion of the command, the command returns a Gatekeeper URL which is the one and only secure remote access entry point for the service. 

You see example output similar to the following, this for a deployment on Kubernetes:

```
~ cwctl --insecure install remote \
  --namespace codewind  \
  --kadminuser admin \
  --kadminpass passw0rd  \
  --krealm codewind \
  --kclient codewind  \
  --kdevuser developer \
  --kdevpass passw0rd
INFO[0000] Checking namespace codewind exists
INFO[0000] Creating codewind namespace
INFO[0000] Using namespace : codewind
INFO[0000] Container images :
INFO[0000] eclipse/codewind-pfe-amd64:latest
INFO[0000] eclipse/codewind-performance-amd64:latest
INFO[0000] eclipse/codewind-keycloak-amd64:latest
INFO[0000] eclipse/codewind-gatekeeper-amd64:latest
INFO[0000] Running on openshift: false
INFO[0000] Attempting to discover Ingress Domain
INFO[0000] Using ingress domain: 10.99.117.86.nip.io
INFO[0000] Creating service account definition 'codewind-k3rdhvxk'
INFO[0000] Creating service account definition 'keycloak-k3rdhvxk'
INFO[0000] Creating codewind-keycloak-k3rdhvxk.10.99.117.86.nip.io server Key
INFO[0000] Creating codewind-keycloak-k3rdhvxk.10.99.117.86.nip.io server certificate
INFO[0000] Creating Codewind Keycloak PVC
INFO[0000] Deploying Codewind Keycloak Secrets
INFO[0000] Deploying Codewind Keycloak TLS Secrets
INFO[0000] Deploying Codewind Keycloak Ingress
INFO[0000] Waiting for pod: codewind-keycloak-k3rdhvxk
INFO[0000] codewind-keycloak-k3rdhvxk, phase: Pending Unschedulable
INFO[0001] codewind-keycloak-k3rdhvxk, phase: Pending ContainersNotReady
INFO[0005] codewind-keycloak-k3rdhvxk, phase: Running
INFO[0005] Waiting for Keycloak to start
..........
INFO[0028] Configuring Keycloak...
INFO[0028] https://codewind-keycloak-k3rdhvxk.10.99.117.86.nip.io
INFO[0029] Creating Keycloak realm
INFO[0030] Checking for Keycloak client 'codewind-k3rdhvxk'
INFO[0030] Creating Keycloak client
INFO[0030] Creating access role 'codewind-k3rdhvxk' in realm 'codewind'
INFO[0030] Creating Keycloak initial user
INFO[0030] Updating Keycloak user password
INFO[0030] Grant 'developer' access to this deployment
INFO[0030] Adding role 'codewind-k3rdhvxk' to user : 'c00750c7-4b10-4317-b328-e21c4c930913'
INFO[0030] Fetching client secret
INFO[0030] Checking if 'eclipse-codewind-x.x.dev' cluster access roles are installed
INFO[0030] Cluster roles 'eclipse-codewind-x.x.dev' already installed
INFO[0030] Checking if 'codewind-rolebinding-k3rdhvxk' role bindings exist
INFO[0030] Adding 'codewind-rolebinding-k3rdhvxk' role binding
INFO[0030] Creating and setting Codewind PVC codewind-pfe-pvc-k3rdhvxk to 1Gi
INFO[0030] Deploying Codewind Service
INFO[0030] Waiting for pod: codewind-pfe-k3rdhvxk
INFO[0030] codewind-pfe-k3rdhvxk, phase: Pending Unschedulable
INFO[0041] codewind-pfe-k3rdhvxk, phase: Pending ContainersNotReady
INFO[0084] codewind-pfe-k3rdhvxk, phase: Running
INFO[0084] Deploying Codewind Performance Dashboard
INFO[0084] Waiting for pod: codewind-performance-k3rdhvxk
INFO[0084] codewind-performance-k3rdhvxk, phase: Pending
INFO[0084] codewind-performance-k3rdhvxk, phase: Pending ContainersNotReady
INFO[0091] codewind-performance-k3rdhvxk, phase: Running
INFO[0091] Preparing Codewind Gatekeeper resources
INFO[0091] Creating codewind-gatekeeper-k3rdhvxk.10.99.117.86.nip.io server Key
INFO[0091] Creating codewind-gatekeeper-k3rdhvxk.10.99.117.86.nip.io server certificate
INFO[0092] Deploying Codewind Gatekeeper Secrets
INFO[0092] Deploying Codewind Gatekeeper Session Secrets
INFO[0092] Deploying Codewind Gatekeeper TLS Secrets
INFO[0092] Deploying Codewind Gatekeeper Deployments
INFO[0092] Deploying Codewind Gatekeeper Service
INFO[0092] Deploying Codewind Gatekeeper Ingress
INFO[0092] Waiting for pod: codewind-gatekeeper-k3rdhvxk
INFO[0092] codewind-gatekeeper-k3rdhvxk, phase: Pending
INFO[0092] codewind-gatekeeper-k3rdhvxk, phase: Pending ContainersNotReady
INFO[0100] codewind-gatekeeper-k3rdhvxk, phase: Running
INFO[0100] Waiting for Codewind Gatekeeper to start on https://codewind-gatekeeper-k3rdhvxk.10.99.117.86.nip.io
..
INFO[0101] Waiting for Codewind PFE to start
.
INFO[0101] Codewind is available at: https://codewind-gatekeeper-k3rdhvxk.10.99.117.86.nip.io
```
