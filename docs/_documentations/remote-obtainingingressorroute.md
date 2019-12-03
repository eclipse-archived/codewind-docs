---
layout: docs
title: Obtaining an ingress or route
description: Obtaining an ingress or route
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing Cloud connection
duration: 5 minutes
permalink: remoteobtainingingressorroute
type: document
parent: installoncloud
order: 1
---

## Obtaining an ingress or route

To obtain an ingress or route...

`export INGRESS_DOMAIN=$(kubectl get services --namespace ingress-nginx -o jsonpath='{.items[*].spec.clusterIP}') sudo ifconfig lo0 alias ${INGRESS_DOMAIN}`