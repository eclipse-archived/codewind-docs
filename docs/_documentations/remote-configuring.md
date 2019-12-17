---
layout: docs
title: Configuring your remote deployment of Codewind
description: Configuring your environment to use your remote deployment of Codewind
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection
duration: 5 minutes
permalink: remoteconfiguring
type: document
parent: installoncloud
order: 1
---

# Configuring your remote deployment of Codewind

Configure your remote deployment of Codewind by following these steps. 

## Prerequisites
- Install your preferred IDE on your local machine. For more information about installing Eclipse, see [Getting started with Codewind for Eclipse](mdteclipsegettingstarted.html), or for more information about installing VS Code, see [Getting started with Codewind for VS Code](mdt-vsc-getting-started.html).
- Ensure that you have access to the Codewind CLI `cwctl`. To access the Codewind CLI, open a terminal window, and navigate to the following hidden folder: `~/.codewind/<version>` On Windows, navigate to the following folder: `%SystemDrive%\Users\<username>\.codewind\<version>`.
- The installer can install Keycloak on its own, Keycloak and Codewind together, or Codewind pointing at an existing Keycloak. If you decide you want to deploy Keycloak on its own first, install using the `cwctl install remote \` commands described in the following installation procedures, and add the `--konly` flag. Then install a Codewind instance that uses Keycloak by adding the `--kurl` flag, which is the ingress of the Keycloak service. Best practice is to deploy Keycloak first, and then deploy your Codewind instances.
- Log in to your cluster with `oc login`.

## Procedure

To securely configure your remote deployment of Codewind, there are two options, configuring Kubernetes for Docker Desktop, or configuring a cloud deployment that does not have an Ingress NGINX controller, for example, OpenShift. 

### Configuring Kubernetes for Docker Desktop

1. Validate you have an ingress controller installed on your cluster by typing the following command:

   `kubectl get service -n ingress-nginx`

   If you do not have an ingress controller, install one using the following commands:

   - `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml`
   - `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/cloud-generic.yaml`

2. To resolve the address of the cluster network and to enable the `cwctl` browsers and client side software to communicate with your installation, map the cluster network to `lo0` using the following commands:

   - `export INGRESS_DOMAIN=$(kubectl get services --namespace ingress-nginx -o jsonpath='<.items[*].spec.clusterIP>')`
   - `sudo ifconfig lo0 alias $<INGRESS_DOMAIN>`

3. Create the remote deployment of Codewind by entering the following `cwctl` command: 

   `cwctl install remote \`
     `--namespace <your_namespace>  \`
     `--kadminuser <keycloakAdminUser> \`
     `--kadminpass <keycloakAdminPassword> \`
     `--krealm codewind \`
     `--kclient codewind  \`
     `--kdevuser <keycloakDevUser> \`
     `--kdevpass <keycloakDevUserPassword>`

  Where `keycloakAdminUser` and `keycloakAdminPassword` are the Keycloak Administrator's user credentials, and `keycloakDevUser` and `keycloakDevUserPassword` are the credentials of the first user to use the service.  

### Configuring other cloud deployments

1. If you are deploying to a cloud that does not have an Ingress NGINX controller, for example, OpenShift, you must provide the ingress value in the `cwctl install remote \` command during installation. You can derive the `ingress` value from the cluster URL. To do this, go to the OpenShift console, for example, `https://<mycluster>|<myaddress>.nip.io:7443/console`, and then derive the `ingress` value, for example, from the previous address, this would be `apps.<mycluster>.<myaddress>.nip.io`. OpenShift also refer to this as the `routing-suffix`. 

2. Create the remote deployment of Codewind by issuing the following example `cwctl` command: 

   `cwctl install remote \`
     `--namespace <your_namespace>  \`
     `--kadminuser <keycloakAdminUser> \`
     `--kadminpass <keycloakAdminPassword> \`
     `--krealm codewind \`
     `--kclient codewind  \`
     `--kdevuser <keycloakDevUser> \`
     `--kdevpass <keycloakDevUserPassword>`
     `--ingress "apps.myopenshiftserver.10.20.30.40.nip.io`

   Where `keycloakAdminUser` and `keycloakAdminPassword` are the Keycloak Administrator's user credentials, and `keycloakDevUser` and `keycloakDevUserPassword` are the credentials of the first user to use the service. 

3. Codewind is required to run as privileged and as root because it builds container images. If your cluster is running OpenShift, run the following commands where `<namespace>` is the namespace into which you plan to install Codewind:
- To enable privileged containers, enter `oc adm policy add-scc-to-group privileged system:serviceaccounts:<namespace>`.
- To enable containers to run as root, enter `oc adm policy add-scc-to-group anyuid system:serviceaccounts:<namespace>`.

### Codewind CLI command explanation and sample output

The `cwctl install remote` command:

1. Checks your cloud is valid.
2. Determines the ingress domain based on NGINX ingress that you added earlier, or using the supplied value from the `--ingress` flag. 
3. Creates the SSL certificates for the keycloak server and adds these to the ingress endpoint, and then starts Keycloak. 
4. It then populates all of the database entries inside Keycloak with the values that you added to the command. 
5. Sets up the performance pods.
6. Waits for Codewind to start. When Codewind has started, in Kubernetes, you see new four new pods including keycloak plus the services and the deployment configurations for those pods. If you are deploying on to OpenShift, you can use routes instead of ingress. 
7. On successful completion of the command, the command returns a Gatekeeper URL which is the one and only secure remote access entry point for the service. 

You see example output similar to the following, this for a Linux/macOS deployment on Kubernetes:

```sh
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
