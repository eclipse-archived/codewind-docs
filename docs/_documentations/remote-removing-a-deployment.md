---
layout: docs
title: Removing a remote deployment
description: Removing a remote deployment
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection, removing a remote deployment, removing
duration: 1 minutes
permalink: remote-removing-a-deployment
type: document
parent: installoncloud
order: 2
---

# Removing a remote Codewind deployment

To remove a Codewind deployment, type the following command where `<name>` is the name of the deployment:

`$ kubectl delete codewinds <name> -n codewind`
