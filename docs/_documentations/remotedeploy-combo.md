---
layout: docs
title: Deploying Codewind components combined
description: Deploying all Codewind components
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection, remote deployment of Codewind
duration: 5 minutes
permalink: remotedeploy-combo
type: document
parent: installoncloud
order: 2
---

# Installing a Codewind remote deployment all-in-one

Codewind includes a CLI to simplify the installation process. Find the `cwctl` CLI in your HOME directory under the `~/.codewind/{version}` path.

Use this command to install an all-in-one deployment with a new Keycloak and a new Codewind service:

`cwctl --insecure install remote` 

This command requires various flags to specify where and what to install.

## Deploying Codewind with CWCTL

1.  Open a new terminal window on your local workstation.
2.  Go to your home directory and then to the Codewind CLI:

```
cd ~/.codewind/0.8.0
```

Ensure that you are logged into your Kubernetes or Openshift cluster:

```
$ kubectl get namespaces
```

If the command is successful, you see a list of current namespaces. If not, ensure that you are logged into your Kubernetes or Openshift cluster.

## Determine your Cloud ingress domain

The CLI command requires an ingress domain. You can find your ingress domain based on any of the existing routes:

```
oc get routes -n default
NAME               HOST/PORT                                                                                                          PATH      SERVICES           PORT               TERMINATION   WILDCARD
registry-console   registry-console-default.mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud             registry-console   registry-console   passthrough   None
```

In the above example the ingress domain is:

```
mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud
```

## Running the CLI command

Determine the following for your cloud deployment:

- {namespace}: The `cwctl` command creates the namespace if it does not yet exist.
- {kadminuser} & {kadminpass}: Initial Keycloak administrator username and password.
- {kdevuser} & {kdevpass}: A developer username and password that will be granted access to this deployment of Codewind. The `cwctl` command creates the user and adds it to the realm if it does not exist.
- {ingress}: The ingress domain for your cloud environment.

Codewind is required to run as privileged and as root because it builds container images. If your cluster is running OpenShift, run the following commands where <namespace> is the namespace into which you plan to install Codewind:

- To enable privileged containers, enter `oc adm policy add-scc-to-group privileged system:serviceaccounts:<namespace>`.
- To enable containers to run as root, enter `oc adm policy add-scc-to-group anyuid system:serviceaccounts:<namespace>`.

To install Codewind, enter the following example command:

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

Which:

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
INFO[0000] Running on openshift: true
...
INFO[0156] Waiting for Codewind Gatekeeper to start on https://codewind-gatekeeper-k55333j0.mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud
INFO[0159] Waiting for Codewind PFE to start
INFO[0159] Codewind is available at: https://codewind-gatekeeper-k55333j0.mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud
```

Codewind is successfully deployed and is available.

Make a note of the address provided because you need it for configuring your IDE in the next step, for example: `https://codewind-gatekeeper-k55333j0.mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud`   

Next step: Connect your [VSCode](remotedeploy-vscode.html) or [Eclipse](remotedeploy-eclipse.html) IDE to the new Codewind deployment.
