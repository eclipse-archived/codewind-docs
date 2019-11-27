---
layout: docs
title: Configuring Codewind remote
description: Configuring your environment to use Codewind remote
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing Cloud connection
duration: 5 minutes
permalink: configuringcodewindremote
type: document
parent: installoncloud
order: 1
---

## Configuring Codewind remote

To securely configure Codewind remote:

1. Create a namespace to install into by running the following command: `kubectl create namespace <your_namespace>`
2. If you are developing on macOS, you must install an ingress load balancer into your Kube environment. For example: 
   - `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml`
   - `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/cloud-generic.yaml`
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
	 d. It then populates all of the database entries inside Keycloak with the values necessary that you added on the command line. 
	 e. Fetches the client secrets.
	 f. Sets up the performance pods.
	 g. Creates the gatekeeper certificates that it needs to expose over TLS, plus other necessary certificates.
	 h. Waits for Codewind to start. When Codewind has started, in Kubernetes, you see new two new pods including keycloak plus the services and the deployment configurations for those pods. If you are deploying on to OpenShift, you can use routes instead of ingress. 
	 i. On successful completion of the command, the command returns a URL which is the one and only secure remote access entry point for the service. 

   You see the following example output: 

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

4. Add a new connection to the remote deployment. Entering the following example command reaches out to the API and builds a connection record inside your desktop, returning a unique ID:
   `cwctl --insecure connections add --label MyTestKubeCluster --url https://codewind-gatekeeper-k2brrr7a-10.20.30.40.nip.io`
   You see the following success message:
   ```
   {"status":"OK","status_message":"Connection added","id":"K2BPWS07"}
   ```
5. Update the keyring with the credentials returned from the previous command:
   `cwctl seckeyring update --username developer --password  {my password} --conid K2BPWS07`
   You see the following success message:
   ```
   {"status":"OK"}
   ```
6. Obtain an access token for use with PFE. The following example command connects to Keycloak and returns the access and refresh tokens all securely keyed under the one unique connection ID:
   `cwctl --insecure sectoken get --username developer --conid K2BPWS07`

Your Codewind installation can now securely communicate with any exposed PFE APIs. For example, you can send a secure request in the Postman UI using the access and refresh tokens keyed under the one unique connection ID.
