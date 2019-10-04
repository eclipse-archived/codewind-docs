---
layout: docs
title: Understanding Application Metrics
description: Understanding Application Metrics
keywords: import, help, metrics, Swift, Node.js, Java, performance monitoring, app monitor, dashboard, CPU, HTTP incoming requests, memory, HTTP throughput, Heap, HTTP outbound requests, loop times, other requests, run load, HTTP Requests, environment, resource usage, profiling, enabling, graph
duration: 1 minute
permalink: appmetrics
type: document
parent: usingmicroclimate
order: 6
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
