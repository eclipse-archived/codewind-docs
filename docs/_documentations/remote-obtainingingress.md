---
layout: docs
title: Obtaining an ingress
description: Obtaining an ingress
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing Cloud connection
duration: 5 minutes
permalink: remoteobtainingingress
type: document
parent: installoncloud
order: 1
---

## Obtaining an ingress

To resolve the address of the cluster network and to enable the `cwctl` browsers and client side software to communicate with your installation, map the cluster network to `lo0` using the following command:

`export INGRESS_DOMAIN=$(kubectl get services --namespace ingress-nginx -o jsonpath='{.items[*].spec.clusterIP}') sudo ifconfig lo0 alias ${INGRESS_DOMAIN}`
