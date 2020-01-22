---
layout: docs
title: Creating a Codewind workspace in Che
description: Creating a Codewind workspace in Che
keywords: build, deploy, install, installing, installation, chart, Helm, develop, cloud, public cloud, services, command line, cli, command, start, stop, update, open, delete, options, operation, devops, OpenShift, OKD
duration: 1 minute
permalink: mdt-che-createcodewindworkspace
type: document
---

# Creating a Codewind workspace in Che
Use Codewind with Che workspaces to develop your application in a single location.

### Creating the Codewind workspace with a devfile
Follow this format to create a Che workspace with a factory:
```
http://<che ingress domain>/f?url=<hosted devfile URL>
```

Codewind includes a ready-to-use devfile with its plug-ins. Enter the following URL to create a workspace from the devfile:
```
http://<che ingress domain>/f?url=https://raw.githubusercontent.com/eclipse/codewind-che-plugin/0.8.0/devfiles/0.8.0/devfile.yaml
```

For more sample devfiles, see [`codewind-templates/devfiles/`](https://github.com/kabanero-io/codewind-templates/tree/master/devfiles).

### Adding more configurations
Insert a paragraph here that tells the user that there are optional, additional configurations that they might be interested in. Then, link to the topic "Optional additional configurations for Eclipse Che" after it is created. The whole "Configuration tutorial" navigation tree still needs to be added to the documentation.

Next step: [Setup Tekton Pipelines](mdt-che-tektonpipelines.html)


