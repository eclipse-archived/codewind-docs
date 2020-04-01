---
layout: docs
title: Installing the remote operator
description: Installing the remote operator
keywords: users, projects, access management, login, deployment, pod, security, securing cloud connection, remote deployment of Codewind, remote, remote operator
duration: 5 minutes
permalink: remote-install-operator
type: document
---

# Installing the remote operator

Installing the remote operator is usually performed by your system administrator. 

Complete the [prequisites](./remote-overview.html#prerequisites). 

## Objectives
In this topic you will:
1. Install the remote Codewind operator.
2. Configure the default configuration map.
3. Create an initial Keycloak service.
4. Prepare Keycloak for Codewind.
5. Register your Codewind users.

## 1. Install the remote Codewind operator
The Codewind operator helps with the deployment of Codewind instances in an Openshift or Kubernetes cluster. There must only be one operator per cluster and it must be installed into the `codewind` namespace. 

To install the Codewind operator into your cluster, follow these steps:

1\. Clone the [https://github.com/eclipse/codewind-operator](https://github.com/eclipse/codewind-operator) repository. 

2\. Go to your cloned Codewind operator directory: 

`$ cd <path_to_cloned_codewind-operator_repository>`

3\. Log in to your Kubernetes or Openshift cluster. 

4\. Create the `codewind` namespace: 

`$ kubectl create namespace codewind`

5\. Create a service account for the operator: 

`$ kubectl create -f ./deploy/service_account.yaml`

6\. Create the access roles in the `codewind` namespace:

`$ kubectl create -f ./deploy/role.yaml`

7\. Connect the operator account to the access roles: 

`$ kubectl create -f ./deploy/role_binding.yaml`

8\. Create the cluster roles. The Codewind operator needs some cluster permissions when querying outside of the installed namespace, for example, when discovering Tekton or other services:

`$ kubectl create -f ./deploy/cluster_roles.yaml `

9\. Connect the operator service account to the cluster roles: 

`$ kubectl create -f ./deploy/cluster_role_binding.yaml`

10\. Depending which version of Kubernetes or Openshift you using, create the Custom Resource Definitions (CRD) for your environment:

For OpenShift 3.11.x clusters: 
```
$ kubectl create -f ./deploy/crds/codewind.eclipse.org_keycloaks_crd-oc311.yaml 
$ kubectl create -f ./deploy/crds/codewind.eclipse.org_codewinds_crd-oc311.yaml
```

For other versions of OpenShift and Kubernetes, including: 
- Openshift 4.x
- Code Ready Containers  1.16.2 BuildDate:2020-02-03T23:11:39Z
- Kubernetes 1.16+

```
$ kubectl create -f ./deploy/crds/codewind.eclipse.org_keycloaks_crd.yaml 
$ kubectl create -f ./deploy/crds/codewind.eclipse.org_codewinds_crd.yaml 
```

11\. Deploy the Codewind operator into the cluster: 

`$ kubectl create -f ./deploy/operator.yaml`

## 2. Configure the default configuration map
1\. The Codewind operator default settings can be found in the configuration map `./deploy/codewind-configmap.yaml` file.

2\. Modify the file setting the `ingressDomain` value to one specific to your cluster. The ingress domain is appended to any routes and URLs created by the operator. The ingress must already be registered in your DNS service and must resolve correctly from both inside and outside of the cluster.

**Tip:** If you are installing into a hosted cloud platform the ingress domain is usually displayed on your cloud service dashboard.

Here is an example configuration map file: 

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: codewind-operator
data:
  ingressDomain: 10.98.117.7.nip.io
  defaultRealm: codewind
  storageKeycloakSize: 1Gi
  storageCodewindSize: 10Gi
```

3\. After making the necessary changes, you can either import the configuration map file into your cluster: 

`$ kubectl apply -f ./deploy/codewind-configmap.yaml`

Or you can edit the configuration map which the operator has already installed in your cluster:

`$ kubectl edit configmap codewind-operator -n codewind`

4\. To check the status of the operator, enter:

`kubectl get pods -n codewind`

If successful, you see the `codewind-operator` pod running and ready for work.

## 3. Create an initial Keycloak service
Use the Codewind operator to deploy and set up Keycloak. 

To request a Keycloak service, import a yaml file as follows:

1\. The Keycloak default settings can be found in the `./deploy/crds/codewind.eclipse.org_v1alpha1_keycloak_cr.yaml` file. 

2\. Modify the file setting the `name` to the name you have chosen for your Keycloak service, `namespace` to the namespace into which you are installing Keycloak, and optionally adjust the `storageSize` which by default is set to 1Gi.  In the following example, the `.yaml` file, when applied, creates a new Keycloak service called `devex001` in the namespace `codewind` with a PVC claim of 1GB: 

```yaml
apiVersion: codewind.eclipse.org/v1alpha1
kind: Keycloak
metadata:
  name: devex001
  namespace: codewind
spec:
  storageSize: 1Gi
  ```

3\. Apply the `.yaml` file to deploy your default instance of Keycloak, for example: 

`$ kubectl apply -f ./deploy/crds/codewind.eclipse.org_v1alpha1_keycloak_cr.yaml`

You see the following message:

`keycloak.codewind.eclipse.org/devex001 created`

4\. To view the Keycloak after it has been created, enter `$ kubectl get keycloaks -n codewind`. You see the following example output: 

```
NAME       NAMESPACE   AGE   ACCESS
devex001   codewind    4s    https://codewind-keycloak-devex001.10.98.117.7.nip.io
```

5\. During deployment, the operator creates:
- A service account.
- A deployment.
- A pod.
- A service.
- An ingress or route.
- A self signed TLS certificate.
- A storage claim.
- Any secrets.

You can check these using standard Kubernetes commands, for example:

`$ kubectl get serviceaccount -n codewind`
`$ kubectl get deployments -n codewind`
`$ kubectl get pods -n codewind`
`$ kubectl get services -n codewind`

You see the following example output:

```
NAME                         SECRETS   AGE
codewind-keycloak-devex001   1         2m53s

NAME                                              READY   STATUS    RESTARTS   AGE
pod/codewind-keycloak-devex001-7454d4ff6c-fnrsr   1/1     Running   0          2m10s

NAME                                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
service/codewind-keycloak-devex001   ClusterIP   10.111.228.52   <none>        8080/TCP   2m10s

NAME                                         READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/codewind-keycloak-devex001   1/1     1            1           2m10s

NAME                                                    DESIRED   CURRENT   READY   AGE
replicaset.apps/codewind-keycloak-devex001-7454d4ff6c   1         1         1       2m10s
```

## 4. Prepare Keycloak for Codewind
During deployment of the Keycloak service, the operator configures the security realm as specified by the defaults in the configuration map. Before Codewind services can be installed, you must add users to Keycloak by way of the Keycloak Admin web page. Each Codewind deployment must be tied to a existing user account.

1\. To see the Keycloak deployment running in the codewind namespace and to capture its access URL, enter:

`$ kubectl get keycloaks -n codewind`

You see the following example output:

```
NAME       NAMESPACE   AGE     ACCESS
devex001   codewind    5m22s   https://codewind-keycloak-devex001.10.98.117.7.nip.io
```

The Keycloak Admin web page URL is listed under the `ACCESS` field. 

By default, Keycloak is installed with an admin account where:
- Keycloak administrator username = `admin`
- Keycloak password = `admin`

2\. Open the Keycloak Admin web page by pasting the `ACCESS` URL returned from step 1 in a browser and accept the self signed certificate warnings.

3\. Click **Administration Console** and log in to Keycloak using the following Keycloak Admin credentials:
- **Username**: `admin`
- **Password**: `admin`

4\. **Important:** When you have logged in, change the `admin` password immediately. To do this, click the **Admin** link, click **Manage Account**>**Password**, and set a new administrator password.

5\. Switch back to the **Administration Console** using the link, or alternatively log out and log back in to Keycloak as the `admin` user with your new password.

## 5. Register your Codewind users
1\. Ensure that the `Realm` is set to `Codewind` by clicking on the drop down arrow. Select `Codewind` if necessary. 

2\. To add a new user, click **Users**>**Add user**. 
- Complete the **Username** field specifying the name of your new user, for example, `jane`. 
- Complete the **Email:**, the **First name:**, and the **Last name:** fields as required. 
- Ensure the user is enabled by toggling the `User enabled:` value to `On`. 
- Click **Save**.

3\. Assign an initial password to the user account. To do this, click **Credentials** and then enter the initial password.

4\. The field **Temporary** = `On` requires Jane to change her password during first connection. Setting **Temporary** = `Off` makes the password valid for continuous use and means that the password does not require changing when they first connect. Set this field according to your preferences. 

5\. Click **Set Password** to save the changes, and then log out of the Keycloak Admin page.

6\. If you changed your `admin` password in a previous step, you must update the Keycloak password in the operator secret. 

When the Codewind operator needs to update Keycloak, it uses login credentials saved in a Kubernetes secret. By default during initial deployment, that secret has a user name and password of `admin`. If you changed your `admin` password in a previous step, you must update the Keycloak secret to match.

The secret is installed in the same namespace as the operator (`codewind`) and named `secret-keycloak-user-<keycloakname>`.

If you have an administration UI for you cluster, you can use it to locate the secret and then edit the `keycloak-admin-password` field.

Alternatively, you can use the command line and enter:

 `$ kubectl edit secret secret-keycloak-user-<keycloakname>` 
 
 or 

 `$ oc edit secret secret-keycloak-user-<keycloakname>`
 
 If you use the command line, you must encode your password string in base64 before saving it into the secret. To do this, enter: 

```
$ echo -n 'myNewPassword' | base64
bXlOZXdQYXNzd29yZA==
```

Save `bXlOZXdQYXNzd29yZA==` as the value for `keycloak-admin-password` rather than the clear text `myNewPassword`.

## Next Steps

You have now finished installing and configuring the remote operator, have created an initial Keycloak service, prepared it for Codewind, and registered your users. 

In the next topic, you will learn how to [deploy a Codewind instance](./remote-deploy-instance.html).
