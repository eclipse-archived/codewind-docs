---
layout: docs
title: Removing a remote deployment
description: Removing a remote deployment
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection
duration: 1 minute
permalink: remote-removing
type: document
parent: installoncloud
order: 2
---

# Removing a remote Codewind deployment

To remove a Codewind instance, type the following command where `<name>` is the name of the deployment:

`$ kubectl delete codewinds <name> -n codewind`

For example:

`$ kubectl delete codewinds jane1 -n codewind`
