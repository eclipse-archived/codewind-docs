---
layout: docs
title: Removing a remote deployment
description: Removing a remote deployment
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection
duration: 5 minutes
permalink: remote-removing
type: document
parent: installoncloud
order: 2
---

# Removing a remote Codewind deployment

The Codewind CLI `cwctl` is designed to do almost all the steps required to remove a remote deployment of Codewind by chaining together a number of Kubernetes operations.

There are two modes of use. You can:

1. Remove Codewind
2. Remove Keycloak

WARNING: Since it is possible to install multiple Codewind servers into a Kubernetes namespace, the `cwctl` command does not remove the namespace as part of the uninstall. You should only remove the namespace if you no longer need it and are sure there are no other applications installed inside it. 

## Removing a remote deployment of Codewind

You can find `cwctl` in your Home directory under the path `~/.codewind/<version>`.

1.  Open a new terminal window on your local workstation.
2.  Go to your Home directory and then to the Codewind CLI:

```
cd ~/.codewind/0.8.0
```

3. To remove the Codewind deployment, enter the following command, where parameters `<namespace>` and `<workspaceID>` identify which Kubernetes resources to remove:

`cwctl remove remote --namespace <namespace> --workspace <workspaceID>`

If you are unsure of the `<workspaceID>`, you can find it as part of the ingress or route URL used when you created the connection in your IDE, for example:

```
https://codewind-gatekeeper-k412oms7.apps.mycluster.X.X.X.X.nip.io
                            ^^^^^^^^
```

Enter the command and review the results:

```
cwctl remove remote --namespace mycodewind-ns --workspace k55333j0

INFO[0000] Running on openshift: true
INFO[0000] Checking namespace mycodewind-ns exists
INFO[0000] Found 'mycodewind-ns' namespace
INFO[0001] Removal summary:
INFO[0001] Codewind PFE Deployment: Removed
INFO[0001] Codewind PFE Service: Removed
INFO[0001] Codewind PFE PVC: Removed
INFO[0001] Codewind Performance Deployment: Removed
INFO[0001] Codewind Performance Service: Removed
INFO[0001] Codewind Gatekeeper Deployment: Removed
INFO[0001] Codewind Gatekeeper Service: Removed
INFO[0001] Codewind Gatekeeper Ingress: Removed
INFO[0001] Codewind Role Bindings: Removed
INFO[0001] Codewind Service Account: Removed
INFO[0001] Kubernetes namespace: CWCTL will not remove the namespace automatically, 
use 'kubectl delete namespace mycodewind-ns' if you would like to remove it
```

## Removing Keycloak service

Keycloak can be installed alongside a single Codewind deployment or shared by many other Codewind services.

WARNING: Removing Keycloak breaks all remote deployments of Codewind that are using it for authentication. Users will no longer be able to login and will require a full redeploy to recover. 

To remove Keycloak, use the following `cwctl` command:

`cwctl remove keycloak --namespace <namespace> --workspace <workspaceID>`

For example:

```
cwctl remove keycloak --namespace mycodewind-ns --workspace k55333j0

INFO[0000] Running on Openshift: true
INFO[0000] Checking namespace mycodewind-ns exist
INFO[0000] Found 'mycodewind-ns' namespace
INFO[0000] Removal summary:
INFO[0000] Keycloak Deployment: Removed
INFO[0000] Keycloak Service: Removed
INFO[0000] Keycloak PVC: Removed
INFO[0000] Keycloak Ingress: Removed
INFO[0000] Keycloak Secrets: Removed
INFO[0000] Keycloak Service Account: Removed
INFO[0000] Kubernetes namespace: CWCTL will not remove the namespace automatically, 
use 'kubectl delete namespace mycodewind-ns' if you would like to remove it
```

Any previously configured IDEs are now in a `Disconnected` state. In this example, the remote deployment called `CloudName1` is offline. Click the connection properties icon, and then click the `Remove Connection` button.

![](./images/remotevs/removeConnection.png)

In this procedure, you removed the Codewind and Keycloak services from your cloud platform, and you also removed the linkage to it from your IDE.
