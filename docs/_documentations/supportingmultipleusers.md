---
layout: docs
title: Support for multiple users
description: Support for multiple users
keywords: users, projects, Kubernetes, LDAP, supporting multiple users, user management, access management, login, deployment, pod
duration: 5 minutes
permalink: supportingmultipleusers
type: document
parent: installoncloud
order: 1
---

# Support for multiple users

Codewind provides support for multiple users via Eclipse Che on Kubernetes. If Eclipse Che was installed via its [Operator](https://operatorhub.io/operator/eclipse-che) or with `--multiuser=true` on OpenShift, a Keycloak OIDC server will be installed alongside Che. When you log in to Che, you will be provided with your own dashboards, where you can create workspaces separate from other users. Che configurations and workspace settings are also per-user. Since Che workspaces are per-user, Codewind workspaces in Che are also per-user.


## Lightweight Directory Access Protocol (LDAP) configuration

The Eclipse Che Keycloak OIDC server supports connection of Lightweight Directory Access Protocol (LDAP) directory services to provide user ID administration. User IDs defined in the connected directory service are then available to the Eclipse Che installation running on the cluster. For detailed information on connecting an LDAP directory service to your Eclipse Che Keycloak instance, see [Configuring LDAP connection](https://www.keycloak.org/docs/latest/server_admin/index.html#_ldap).

**Note**: The Eclipse Che keycloak server comes with its own LDAP provider, allowing you to register/manage users through Keycloak itself.
