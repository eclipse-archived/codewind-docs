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

## Configuring Codewind remote

To securely configure Codewind remote, do the following steps.

1. Optional: Create a namespace to install into by running the following command: `kubectl create namespace <your_namespace>`. If you do not create a new namespace, Codewind uses the current one.
2. If you are developing on macOS, you must install an ingress load balancer into your Kube environment. For example: 
   - `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml`
   - `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/cloud-generic.yaml`
   If you are developing on Windows [get map local address from Mark]
3. Create the remote deployment by entering the following `cwctl` command: 
   `cwctl install remote \`
     `--namespace {your_namespace}  \`
     `--kadminuser admin \`
     `--kadminpass <keycloakPassword>  \`
     `--krealm codewind \`
     `--kclient codewind  \`
     `--kdevuser developer \`
     `--kdevpass  <userPassword>`

   For OpenShift, use:
   `cwctl install remote \`
     `--namespace {your_namespace}  \`
     `--kadminuser admin \`
     `--kadminpass <keycloakPassword>  \`
     `--krealm codewind \`
     `--kclient codewind  \`
     `--kdevuser developer \`
     `--kdevpass  <userPassword>`
     `--ingress "apps.myopenshiftserver.10.20.30.40.nip.io`

   This command:
   a. Checks your Cloud is valid.
	 b. Determines the ingress domain based on NGINX ingress that you added earlier. 
	 c. Creates the SSL certificates for the keycloak server and adds these to the ingress endpoint, and then starts Keycloak. 
	 d. It then populates all of the database entries inside Keycloak with the values that you added to the command. 
	 e. Sets up the performance pods.
	 f. Waits for Codewind to start. When Codewind has started, in Kubernetes, you see new four new pods including keycloak plus the services and the deployment configurations for those pods. If you are deploying on to OpenShift, you can use routes instead of ingress. 
	 g. On successful completion of the command, the command returns a Gatekeeper URL which is the one and only secure remote access entry point for the service. 

   You see the following example output: 
   [Get new sample output from Mark]

   ```
   INFO[0000] Using namespace : {your_namespace}
   INFO[0000] Container images :
   INFO[0000] eclipse/codewind-pfe-amd64:latest
   INFO[0000] eclipse/codewind-performance-amd64:latest
   INFO[0000] marko11/codewind-keycloak-amd64:latest         <----
   INFO[0000] marko11/codewind-gatekeeper-amd64:latest       <----
   INFO[0000] Running on openshift: false
   INFO[0000] Using ingress domain: 10.20.30.40.nip.io
   INFO[0000] Creating codewind-keycloak-k2brrr7a-10.20.30.40.nip.io server Key
   INFO[0000] Creating codewind-keycloak-k2brrr7a-10.20.30.40.nip.io server certificate
   INFO[0000] Deploying Codewind Keycloak Secrets
   INFO[0000] Deploying Codewind Keycloak TLS Secrets r password
   INFO[0032] Fetching client secret
   INFO[0032] Deploying Codewind Service
   INFO[0032] Deploying Codewind Performance Dashboard...
   INFO[0032] Preparing Codewind Gatekeeper resources
   INFO[0032] Creating codewind-gatekeeper-k2brrr7a-10.20.30.40.nip.io server Key
   INFO[0032] Creating codewind-gatekeeper-k2brrr7a-10.20.30.40.nip.io server certificate
   INFO[0032] Deploying Codewind Gatekeeper Secrets
   INFO[0032] Deploying Codewind Gatekeeper Session Secrets
   INFO[0032] Deploying Codewind Gatekeeper TLS Secrets
   INFO[0032] Deploying Codewind Gatekeeper Deployment
   INFO[0032] Deploying Codewind Gatekeeper Service
   INFO[0032] Deploying Codewind Gatekeeper Ingress
   INFO[0032] Waiting for Codewind Gatekeeper to start on https://codewind-gatekeeper-k2brrr7a-10.20.30.40.nip.io
   ........
   INFO[0039] Waiting for Codewind PFE to start
   .
   INFO[0039] Codewind is available at: https://codewind-gatekeeper-k2brrr7a-10.20.30.40.nip.io
   ```
