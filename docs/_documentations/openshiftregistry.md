# Using the OpenShift Internal Registry with Codewind


## Prerequisites
1. OKD or OpenShift cluster with the internal Docker registry installed
2. Ability to create service accounts on the cluster
3. Ability to assign the `system:image-builder` role to service accounts

## Instructions

### Set up a Service Account
Some of these instructions were adapted from https://blog.openshift.com/remotely-push-pull-container-images-openshift/

1. Determine which project to push images to. 
    - If creating a new project, run `oc new-project <project>`
    
2. Create a service account in the project.
    - Run `oc create serviceaccount <serviceaccount>`
    - For example: `oc create serviceaccount pusher`

3. Grant push access to the registry to the new service account:
    - Run `oc policy add-role-to-user system:image-builder system:serviceaccount:<project>:<serviceaccount>`
    
    For example: `oc policy add-role-to-user system:image-builder system:serviceaccount:pushed:pusher`

4. Retrieve the secret containing the service account's token
     - Run `oc describe sa <serviceaccount>`
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

       In this case, `pusher-token-hhd2g` and `pusher-token-zfqbv` are the secrets containing the Service Account token.

5. Select one of the token secrets found in the previous step and retrieve the token from it
    - Run `oc describe secret <secret>`
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
      Copy the value from the Token field.

### Add the OpenShift Registry in Che

1. Open the Che dashboard and select the `Administration` tab in the sidebar
   ![Screen Shot 2019-08-22 at 12 18 51 PM](https://user-images.githubusercontent.com/6880023/63531743-2d633580-c4d7-11e9-9960-ae5470398a3f.png)

2. Click the `Add Registry` button. 

3. Enter the following:
   - `docker-registry.default.svc:5000` as the address
   - The service account name as the username
   - The token retrieved from the service account's token secret as the password
   ![Screen Shot 2019-08-22 at 12 19 38 PM](https://user-images.githubusercontent.com/6880023/63531755-32c08000-c4d7-11e9-8fae-74799b50d549.png)

4. Hit the `Add` button
   ![Screen Shot 2019-08-22 at 12 19 41 PM](https://user-images.githubusercontent.com/6880023/63531760-348a4380-c4d7-11e9-8fa8-5cef7fbdcac0.png)

### Use the OpenShift Registry in Codewind

Once the internal Docker registry's credentials has been added to Che as a docker registry, you can use it in Codewind.

1. Create or open a Codewind workspace
   - **Note:** If you are opening an existing workspace, you must stop and start the workspace before the registry credentials take effect

2. Run the `Codewind: Set Deployment Registry` command. 
   ![Screen Shot 2019-08-22 at 12 53 19 PM](https://user-images.githubusercontent.com/6880023/63533949-e592dd00-c4db-11e9-99d6-906a8c5edf21.png)

3. Enter `docker-registry.default.svc:5000/<project>` as the deployment registry, where `<project>` is the OpenShift project you created the service account in.
   - For example: `docker-registry.default.svc:5000/pushed`
   ![Screen Shot 2019-08-22 at 12 53 24 PM](https://user-images.githubusercontent.com/6880023/63534021-1c68f300-c4dc-11e9-937f-a3903e12456d.png)

4. Hit enter.