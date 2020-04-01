---
layout: docs
title: Deploying a Codewind instance
description: Deploying a Codewind instance
keywords: users, projects, access management, login, deployment, pod, security, securing cloud connection, remote deployment of Codewind, remote, remote operator, remote codewind instance
duration: 5 minutes
permalink: remote-deploy-instance
type: document
---

# Overview: Deploying a Codewind instance

Ensure your system administrator has [installed the remote operator](./remote-install-operator.html), and has notified you of the Keycloak deployment name, and your log on details. 

In this topic you will deploy a Codewind instance.

## Deploy a Codewind instance

1\. To deploy a new Codewind instance, apply the `./deploy/crds/codewind.eclipse.org_v1alpha1_codewind_cr.yaml` yaml file.

2\. Modify the file changing the following fields:
- `name`: Change this to a unique name for this deployment.
- `keycloakDeployment`: Specify the Keycloak service used for authentication.
- `username`: Change this to a user name already registered in the specified Keycloak service.

An example of valid yaml is:

```yaml
apiVersion: codewind.eclipse.org/v1alpha1
kind: Codewind
metadata:
  name: jane1
  namespace: codewind
spec:
  keycloakDeployment: devex001
  username: jane
  logLevel: info
  storageSize: 10Gi
```

Where:
- The `name` field is the name of the deployment and must be unique within the cluster. It must contain numbers and letters only, no spaces or punctuation.
- The `keycloakDeployment` field is the name of the Keycloak instance that will provide authentication services. Keycloak must be provisioned and running.
- The `username` field is the Keycloak registered user who will own this Codewind instance. Enter alphanumeric characters only. 
- The `loglevel` can be used to increase the log levels of the Codewind pods. You can set this to: `error`, `warn`, `info`, `debug`, or `trace`. 
- The `storageSize` field sets the PVC size to 10GB.

3\. Apply this yaml file and have the Codewind operator create and configure both Codewind and Keycloak by issuing the following command: 

`$ kubectl apply -f ./deploy/crds/codewind.eclipse.org_v1alpha1_codewind_cr.yaml`

The operator creates and configures both Codewind and Keycloak. You see the following message:

`codewind.codewind.eclipse.org/codewind-k81235kj created`

4\. To list all running Codewind deployments together with the username of the developer to which each deployment is assigned, enter:

`$ kubectl get codewinds -n codewind`

You see the following example output:

```
NAME                USERNAME   NAMESPACE   AGE   KEYCLOAK   AUTHSTATUS   ACCESSURL
jane1               jane       codewind    23m   devex001   Completed    https://codewind-gatekeeper-jane1.10.98.117.7.nip.io
```

The `kubectl get codewinds` command lists all the running Codewind deployments in the specified namespace. Each line represents a deployment and includes the username of the developer to which it is assigned, together with the Keycloak service name and authorization configuration status. 

Use the Access URL in your IDE to create a connection. 

Use the `-n` flag to target a specific namespace, for example: 

`$ kubectl get codewinds -n codewind`

5\. If you were assigned a temporary password, you must log in to Codewind from a browser and complete the steps necessary to set a new password and to activate your account:
    1. Open the gatekeeper ACCESS URL from the previous step for the Codewind deployment.
    2. Log in using the provided username and initial password.
    3. Follow the prompts to change the password.
    4. Set up the IDE connection with the newly changed password.


## Next Steps

You have now finished deploying a Codewind instance. 

In the next topic, you will learn how to [use Codewind remotely](./remote-codewind-overview.html).