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

In this topic, you will:
1. Change your password if you have been assigned a temporary one. 
2. Deploy a Codewind instance

## 1. Change your password

If you have been assigned a temporary password, log in to Codewind from a browser and complete the steps necessary to set a new password and activate your account:
1. Open the gatekeeper URL for the Codewind deployment.
2. Log in using the provided username and initial password.
3. Follow the prompts to change the password.
4. Set up the IDE connection using the newly changed password.

## 2. Deploy a Codewind instance

1\. To deploy a new Codewind instance, you must apply a yaml file, an example of which can be found here: [./deploy/crds/codewind.eclipseorg_v1alpha1_codewind_cr.yaml](./deploy/crds/codewind.eclipseorg_v1alpha1_codewind_cr.yaml). Save this file to your system. 

2\. Modify the file changing the following fields:
- `name`: Change this to a unique name for this deployment.
- `keycloakDeployment`: Specify the Keycloak service used for authentication.
- `username`: Change this to a user name already registered in the specified keycloak service.

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
- The `name` field is the name of the deployment and must be unique within the cluster.
- The `keycloakDeployment` field is the name of the Keycloak instance that will provide authentication services. It must have already been provisioned and running.
- The `username` field is the Keycloak registered user who will own this Codewind instance.
- The `loglevel` can be used to increase log levels of the codewind pods.
- The `storageSize` field sets the PVC size to 10GB.

3\. Apply this yaml file by issuing the following command: 

`$ kubectl apply -f ./deploy/crds/codewind.eclipse.org_v1alpha1_codewind_cr.yaml`

The operator creates and configures both Codewind and Keycloak. You see the following message:

`codewind.codewind.eclipse.org/codewind-k81235kj created`

4\. To list all running Codewind deployments together with the username of the developer to which each deployment is assigned, enter `kubectl get codewinds`.

You see the following example output:

```
NAME                USERNAME   NAMESPACE   AGE   KEYCLOAK   AUTHSTATUS   ACCESSURL
jane1               jane       codewind    23m   devex001   Completed    https://codewind-gatekeeper-jane1.10.98.117.7.nip.io
```

The Access URL is what you use in your IDE to create a connection. 

## Next Steps

You have now finished deploying a Codewind instance. 

In the next topic, you will learn how to [use Codewind remotely](./remote-codewind-overview.html).