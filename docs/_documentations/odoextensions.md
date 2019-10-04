---
layout: docs
title: Accessing OpenShift to support ODO extensions
description: Accessing OpenShift to support ODO extensions
keywords: ODO
duration: 1 minute
permalink: odoextensions
type: document
parent: 
order: 
---
# Accessing OpenShift to support ODO extensions

1. In your home directory, run the following command to clone the ODO extension repository.
```
git clone https://github.com/eclipse/codewind-odo-extension
```
2. Log in to your `OpenShift/OKD cluster`.
3. Go into `~/codewind-odo-extension/odo-RBAC` then run the following commands to add additional rules for ODO extension.
```
kubectl apply -f codewind-odoclusterrole.yaml
kubectl apply -f codewind-odoclusterrolebinding.yaml
```
