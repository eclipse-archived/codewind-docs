---
layout: docs
title: Removing your remote deployment of Codewind
description: Removing your remote deployment of Codewind
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection
duration: 5 minutes
permalink: remoteremoving
type: document
parent: installoncloud
order: 1
---

# Removing your remote deployment of Codewind

The Codewind CLI `cwctl` is designed to do almost all the steps required to remove a remote deployment of Codewind by chaining together a number of Kubernetes operations.

There are two modes of use. You can:
1. Remove Codewind.
2. Remove Keycloak. A Keycloak service can provide authentication services to many Codewind deployments in different namespaces, so only remove it when you are sure it is no longer used.

## Removing a remote deployment of Codewind

To remove a remote deployment of Codewind, enter the following `cwctl` command:

`cwctl remove remote --namespace <namespace> --workspace <workspaceID>`

Where the command parameters `<namespace>` and `<workspaceID>` are used to identify which Kubernetes resources to remove. If you are unsure of the `<workspaceID>`, you can find it as part of the ingress or route URL, for example:

`https://codewind-gatekeeper-k412oms7.apps.mycluster.X.X.X.X.nip.io`
`                            ^^^^^^^^`

## Removing Keycloak

WARNING: Removing Keycloak breaks all remote deployments of Codewind that are using it for authentication services. 

If you are ready to remove Keycloak, use the following `cwctl` command:

`cwctl remove keycloak  --namespace <namespace> --workspace <workspaceID>`

Where the command parameters `<namespace>` and `<workspaceID>` are used to identify which Kubernetes resources to remove.
