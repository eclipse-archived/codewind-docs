---
layout: docs
title: Deploying Codewind components individually
description: Deploying Codewind components individually
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection, remote deployment of Codewind
duration: 5 minutes
permalink: remotedeploy-single
type: document
parent: installoncloud
order: 2
---

# Installing components individually for a Codewind remote deployment

Codewind includes a CLI to simplify the installation process. Find the `cwctl` CLI in your HOME directory under the `~/.codewind/<version>` path.

Use the following command to install components individually for a remote deployment with a new Keycloak and a new Codewind service:

`cwctl --insecure install remote` 

This command requires various flags to specify where and what to install.

For OpenShift, Codewind is required to run as privileged and as root because it builds container images. Run the following commands where `<namespace>` is the namespace into which you plan to install Codewind:
- For Codewind on OpenShift, you must create the namespace first. To do this, enter: `oc create namespace <Codewind-namespace>`.
- If you are on IBM Public Cloud, you must install Keycloak and Codewind in separate namespaces, for example, `oc create namespace <keycloak-namespace>` and then `oc create namespace <Codewind-namespace>`.

For both IBM Public Cloud and OpenShift, run the following commands on only the Codewind namespace:
- Switch to your Codewind-only namespace using: `oc project <Codewind-namespace>`.
- To enable privileged containers, enter `oc adm policy add-scc-to-group privileged system:serviceaccounts:<Codewind-namespace>`.
- To enable containers to run as root, enter `oc adm policy add-scc-to-group anyuid system:serviceaccounts:<Codewind-namespace>`.

## Deploying Keycloak 

1.  Open a new terminal window on your local workstation.
2.  Go to your home directory and then to the Codewind CLI:

```
cd ~/.codewind/0.8.0
```

Ensure that you are logged in to your Kubernetes or OpenShift cluster:

```
$ kubectl get namespaces
```

If the command is successful, you see a list of current namespaces. If not, ensure that you are logged in to your Kubernetes or OpenShift cluster.

## Determine your Cloud ingress domain

The CLI command requires an ingress domain. Find yours based on any of the existing routes:

```
oc get routes -n default
NAME               HOST/PORT                                                                                                          PATH      SERVICES           PORT               TERMINATION   WILDCARD
registry-console   registry-console-default.mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud             registry-console   registry-console   passthrough   None
```

In the example the ingress domain is:

```
mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud
```

## Deploying Authentication services (Keycloak)

Determine the following values for your cloud deployment:

- `namespace`: The `cwctl` command creates the namespace if it does not yet exist.
- `kdevuser` and `kdevpass`: A developer user name and password that will be granted access to this deployment of Codewind. The `cwctl` command creates the user and adds it to the realm if it does not exist.
- `ingress`: The ingress domain for your cloud environment.

To install Codewind, enter the following example command:

```
./cwctl --insecure install remote \
--konly \
--namespace keycloak-0001 \
--kadminuser admin \
--kadminpass passw0rd \
--ingress mycluster-12345-7674b4bd9abbdeea0be228236d5275c9-0001.eu-gb.containers.appdomain.cloud
```

This command performs the following actions:

- Deploys just a Keycloak service into the `keycloak-0001 `namespace.
- Creates an initial Keycloak administrator user called `admin` with password `passw0rd`.
- Uses the ingress domain appropriate to the deployment environment.

Running the command, you see the following example output:

```
INFO[0000] Checking namespace codewind-0001 exists
INFO[0000] Creating codewind-0001 namespace
INFO[0000] Using namespace : codewind-0001
INFO[0000] Container images :
INFO[0000] eclipse/codewind-pfe-amd64:latest
INFO[0000] eclipse/codewind-performance-amd64:latest
INFO[0000] eclipse/codewind-keycloak-amd64:latest
INFO[0000] eclipse/codewind-gatekeeper-amd64:latest
INFO[0000] Running on OpenShift: true
...
INFO[0159] Keycloak is available at: https://codewind-keycloak-k55dxqhx.mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud
```

Keycloak has been sucessfully deployed and is available.

## Deploying a remote Codewind service

To deploy a new Codewind instance in Kubernetes, generate a user in Keycloak and configure security. You can use the CLI `cwctl` with additional options, for example: 

```
./cwctl --insecure install remote \
--namespace codewind-0001 \
--krealm codewind  \
--kclient codewind \
--kadminuser admin \
--kadminpass passw0rd \
--kdevuser developer \
--kdevpass passw0rd  \
--ingress mycluster-12345-7674b4bd9abbdeea0be228236d5275c9-0001.eu-gb.containers.appdomain.cloud \
--kurl https://codewind-keycloak-k55dxqhx.mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud
```

This command performs the following actions:

- Deploys Codewind into the `codewind-0001 `namespace.
- Configures the existing previously deployed Keycloak instance with a realm called `codewind`.
- Adds a client prefix of `codewind`.
- Creates an initial Codewind user called `developer` with password `passw0rd`.
- Uses the ingress appropriate to the deployment environment.
- Adds the Keycloak admin credentials of `admin` with password `passw0rd`.  

Running the command, you see the following example output:

```
INFO[0000] Checking namespace codewind-0001 exists
INFO[0000] Creating codewind-0001 namespace
INFO[0000] Using namespace : codewind-0001
INFO[0000] Container images :
INFO[0000] eclipse/codewind-pfe-amd64:latest
INFO[0000] eclipse/codewind-performance-amd64:latest
INFO[0000] eclipse/codewind-keycloak-amd64:latest
INFO[0000] eclipse/codewind-gatekeeper-amd64:latest
INFO[0000] Running on OpenShift: true
...
INFO[0156] Waiting for Codewind Gatekeeper to start on https://codewind-gatekeeper-k55333j0.mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud
INFO[0159] Waiting for Codewind PFE to start
INFO[0159] Codewind is available at: https://codewind-gatekeeper-k55333j0.mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud
```

Codewind is successfully deployed and is available.

You can re-run the command several times. Each time you re-run the command, a new Codewind deployment is generated against the existing Keycloak service. You must have your own Codewind instance. However, you might also have more that one instance assigned to you through role-based access control that `cwctl` sets up automatically. 

Make a note of the address provided because you need it for configuring your IDE in the next step, for example: `https://codewind-gatekeeper-k55333j0.mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud`

Next step: Connect your [VSCode](remotedeploy-vscode.html) or [Eclipse](remotedeploy-eclipse.html) IDE to the new Codewind deployment.
