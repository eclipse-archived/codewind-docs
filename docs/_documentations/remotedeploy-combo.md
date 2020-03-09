---
layout: docs
title: Installing a Codewind remote deployment all-in-one
description: Installing a Codewind remote deployment all-in-one
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection, remote deployment of Codewind
duration: 5 minutes
permalink: remotedeploy-combo
type: document
parent: installoncloud
order: 2
---

# Deploying remote Codewind all-in-one

Complete the prerequisites in the [overview](remote-overview.html).

Keycloak and the remote instance of Codewind can be installed all-in-one simultaneously, or separately. If you are unsure which procedure suits your use case, see [Planning your Deployment](remote-overview.html).

If you are using an IBM Public Cloud, you must install Codewind and Keycloak separately. For more information, see [Deploying Codewind components individually](remotedeploy-single.html). 

# Objectives

In this topic you will learn how to:

- Deploy a Keycloak and remote Codewind instance simultaneously, using Codewind's CLI.

Codewind includes a CLI to simplify the installation process. You can find the `cwctl` CLI in your HOME directory under the `~/.codewind/{version}` path.

You will use the following command to install both the keycloak and remote instance of Codewind at the same time: 

`cwctl --insecure install remote` 

This command requires various flags to specify where and what to install which will be explained below.

# Prerequisites

- Ensure you are in the correct directory for accessing the Codewind CLI:

  1.  Open a new terminal window on your local workstation.
  2.  Go to your home directory and then to the Codewind CLI:

      ```
      cd ~/.codewind/<version>
      ```

- Ensure that you are logged in to your Kubernetes or OpenShift cluster by running this command and observing the result:

  ```
  $ kubectl get namespaces
  ```

If the command is successful, you see a list of current namespaces. If not, ensure that you are logged into your Kubernetes or OpenShift cluster.

# Deploy a remote Codewind service and keycloak using the Codewind CLI

## Determine your Cloud ingress domain

The CLI command requires an ingress domain. Enter the `oc get routes -n default` command and find your ingress domain based on any of the existing routes:

```
NAME               HOST/PORT                                                                                                          PATH      SERVICES           PORT               TERMINATION   WILDCARD
registry-console   registry-console-default.mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud             registry-console   registry-console   passthrough   None
```

In the example the ingress domain is:

```
mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud
```

Determine the following values for your cloud deployment:

- `namespace`: The `cwctl` command creates the namespace if it does not yet exist.
- `kadminuser` and `kadminpass`: Initial Keycloak administrator user name and password.
- `kdevuser` and `kdevpass`: A developer username and password that will be granted access to this deployment of Codewind. The `cwctl` command creates the user and adds it to the realm if it does not exist.
- `ingress`: The ingress domain for your cloud environment.

## Run the Codewind CLI command

To install Codewind and an associated Keycloak, enter the following example command:  

```
./cwctl --insecure install remote \
--namespace codewind-0001 \
--krealm codewind  \
--kclient codewind \
--kadminuser admin \
--kadminpass passw0rd \
--kdevuser developer \
--kdevpass passw0rd  \
--ingress mycluster-12345-7674b4bd9abbdeea0be228236d5275c9-0001.eu-gb.containers.appdomain.cloud
```

This command performs the following actions:

- Deploys Codewind into the `codewind-0001 `namespace.
- Configures Keycloak with a realm called `codewind`.
- Configures a client prefix of `codewind`.
- Creates an initial Keycloak administrator user called `admin` with password `passw0rd`.
- Creates an initial Codewind user called `developer` with password `passw0rd`.
- Uses the ingress appropriate to the deployment environment.

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

Make a note of the address provided because you need it for configuring your IDE in the next step, for example: `https://codewind-gatekeeper-k55333j0.mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud`   

# Next Steps

Connect your local Codewind on your [VSCode](remotedeploy-vscode.html) or [Eclipse](remotedeploy-eclipse.html) IDE to the new Codewind deployment.
