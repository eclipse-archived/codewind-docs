---
layout: docs
title: Codewind limitations
description: Codewind limiitations
keywords: Codewind, limitations
duration: 1 minute
permalink: limitations
type: document
parent: abc
order: abc
---

# Codewind limitations

## Open Performance dashboard is not available in Che
The open performance dashboard is currently unavailable in Che. To access the open performance dashboard, instead use the local installation of Codewind, where you can use the run load feature to see the performance metrics.  

## Multiple Codewind Che workspaces not supported in Docker Desktop Kubernetes
Multiple Codewind Che workspaces are not currently supported if deploying Codewind & Che on a Docker Desktop Kubernetes cluster. Due to how Docker Desktop configures its networking, if multiple Codewind workspaces are deployed, there will be a port collision, preventing the second Codewind Che workspace from coming up.
