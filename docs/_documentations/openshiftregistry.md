---
layout: docs
title: Adding the OpenShift internal registry with Codewind
description: Adding the OpenShift internal registry with Codewind
keywords: OpenShift, registry, Codewind, Che, Docker, OKD, cluster, project, push
duration: 5 minutes
permalink: openshiftregistry.html
type: document
parent:
order:
---
# Adding the OpenShift internal registry with Codewind

## Prerequisites
1. Install an OKD or OpenShift cluster with the internal Docker registry.
2. Be able to create service accounts on the cluster.
3. Be able to assign the `system:image-builder` role to service accounts.

### Setting up a service account
Some of the following instructions were adapted from [Remotely Push and Pull Container Images to OpenShift](https://blog.openshift.com/remotely-push-pull-container-images-openshift/).

1. Determine which project to push images to. 
    - If you're creating a new project, run the `oc new-project <project>` command.
2. Create a service account in the project.
    - Run: `oc create serviceaccount <serviceaccount>`
    - Example: `oc create serviceaccount pusher`
3. Grant push access to the registry to the new service account.
    - Run: `oc policy add-role-to-user system:image-builder system:serviceaccount:<project>:<serviceaccount>`
    - Example: `oc policy add-role-to-user system:image-builder system:serviceaccount:pushed:pusher`
4. Retrieve the secret containing the service account token.
    - Run: `oc describe sa <serviceaccount>`
    - Example output:
       ```
       Name:                pusher
       Namespace:           pushed
       Labels:              <none>
       Annotations:         <none>
       Image pull secrets:  pusher-dockercfg-6lkbp
       Mountable secrets:   pusher-token-zfqbv
                            pusher-dockercfg-6lkbp
       Tokens:              pusher-token-hhd2g
                            pusher-token-zfqbv
       Events:              <none>
       ```
    - In this example, `pusher-token-hhd2g` and `pusher-token-zfqbv` are the secrets containing the service account token.
5. Select one of the token secrets and retrieve the token from it.
    - Run: `oc describe secret <secret>`
    - Example output:
      ```
      Name:         pusher-token-hhd2g
      Namespace:    pushed
      Labels:       <none>
      Annotations:  kubernetes.io/created-by=openshift.io/create-dockercfg-secrets
                    kubernetes.io/service-account.name=pusher
                    kubernetes.io/service-account.uid=aaf3102c-c4f6-11e9-b12c-00000a1f0ade

      Type:  kubernetes.io/service-account-token

      Data
      ====
      token:           eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJwdXNoZWQiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlY3JldC5uYW1lIjoicHVzaGVyLXRva2VuLWhoZDJnIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6InB1c2hlciIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImFhZjMxMDJjLWM0ZjYtMTFlOS1iMTJjLTAwMDAwYTFmMGFkZSIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpwdXNoZWQ6cHVzaGVyIn0.nO1QMQixfCLNeJXJnn5O--7WFjaSJCUB2I3Exb4dSKuN93BKJOp14XlZk_w_zXrOk8CtUA-8J6t3FHtdLvoXxWgxeq7GRZLU89HRX8j-eNfQzQHxhhh1-uLgFiwySQu32vpSCdPQRZQVmHHk3I0qpebp4m8IVbDyrVd1jPNhznNdmKj5FGwBYxz1SySsoAcotvXjVdahe_3KsCxkYq5ZDeAmzdJWnZOBJpXKojowS_J6cd-2HzWu6aq1QSFmRi8b31Yh9mRBo5NHF6hNXsafQzXB094ZiGjbsNwKjD_lL4qugrDw5OXjRdP-IHYYQ-zRFyQKWuTji5JtyE4MK7B59w
      ca.crt:          1070 bytes
      namespace:       6 bytes
      service-ca.crt:  2186 bytes

      ```
6. Copy the value from the **token** field.

### Adding the OpenShift registry in Codewind
1. Create or open a Codewind workspace.
2. Run the command, `Codewind: Image Registry Manager`. 
3. Enter `docker-registry.default.svc:5000` as the `Address` (`image-registry.openshift-image-registry.svc:5000` for OCP version 4). 
4. Enter the service account name as the `username`.
5. Enter the token retrieved from the service account token secret as the `password`. 
6. Enter `<project>` as `namespace`, where `<project>` is the OpenShift project where you created the service account. 
7. Click **Enter**.
