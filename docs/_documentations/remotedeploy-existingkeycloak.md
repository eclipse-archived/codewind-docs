---
layout: docs
title: Deploying remote Codewind with an existing keycloak
description: Deploying remote Codewind with an existing keycloak
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection, remote deployment of Codewind
duration: 5 minutes
permalink: remotedeploy-existingkeycloak
type: document
parent: installoncloud
order: 2
---

# Deploying remote Codewind with an existing keycloak

Ensure that you have performed all prerequisites detailed [here](remote-overview.html).

An existing Keycloak can be used with a remote deployment of Codewind. If you do not have an existing keycloak, see [Planning your Deployment](remote-overview.html).

# Objectives

In this topic you will learn how to:
1. Deploy Codewind remotely, pointing to an existing keycloak
2. Use the same keycloak to install additional remote Codewind instances *WORKS?*

Codewind includes a CLI to simplify the installation process. You can find the `cwctl` CLI in your HOME directory under the `~/.codewind/{version}` path.

You will use the following command to install a new remote Codewind service:

`cwctl --insecure install remote` 

This command requires various flags to specify where and what to install which will be explained below.

# Pre-requisites 

- Ensure that you are logged in to your Kubernetes or OpenShift cluster by running this command and observing the result:

  ```
  $ kubectl get namespaces
  ```

  If the command is successful, you see a list of current namespaces. If not, ensure that you are logged into your Kubernetes or OpenShift cluster.

- Ensure you are in the correct directory for accessing the Codewind CLI:

  1.  Open a new terminal window on your local workstation.
  2.  Go to your home directory and then to the Codewind CLI:

      ```
      cd ~/.codewind/<version>
      ```

<!-- Add OpenShift/IBM Public Cloud tabs here -->
- For OpenShift, Codewind is required to run as privileged and as root because it builds container images. In addition, you must create the namsepace first. 
    Run the following commands where `<namespace>` is the namespace into which you plan to install Codewind:
    1. Create the namespace by entering: `oc create namespace <Codewind-namespace>`.
    2. Run the following commands on only the Codewind namspace: 
        - Switch to your Codewind-only namespace using: `oc project <Codewind-namespace>`.
        - To enable privileged containers, enter `oc adm policy add-scc-to-group privileged system:serviceaccounts:<namespace>`.
        - To enable containers to run as root, enter `oc adm policy add-scc-to-group anyuid system:serviceaccounts:<namespace>`.

- For IBM Public Cloud, you must install Keycloak and your remote Codewind in separate namespaces. 
    Run the following commands where `<namespace>` is the namespace into which you plan to install Codewind:
    1. Create the 2 separate namespaces, for example, `oc create namespace <keycloak-namespace>` and then `oc create namespace <Codewind-namespace>`.
    2. run the following commands on only the Codewind namespace:
        - Switch to your Codewind-only namespace using: `oc project <Codewind-namespace>`.
        - To enable privileged containers, enter `oc adm policy add-scc-to-group privileged system:serviceaccounts:<namespace>`.
        - To enable containers to run as root, enter `oc adm policy add-scc-to-group anyuid system:serviceaccounts:<namespace>`.

# 1. Deploy a remote Codewind service

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

Determine the following values for your cloud deployment:

- `namespace`: The `cwctl` command creates the namespace if it does not yet exist.
- `kdevuser` and `kdevpass`: A developer user name and password that will be granted access to this deployment of Codewind. The `cwctl` command creates the user and adds it to the realm if it does not exist.
- `ingress`: The ingress domain for your cloud environment.

## Run the Codewind CLI command

*alter this based on existing keycloak*
Deploy a new Codewind instance in Kubernetes/*the cloud* and configure security by pointing to your existing keycloak using the Codewind CLI `cwctl` command, for example:
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
- Specifies the Keycloak URL by using the optional `--kurl` parameter so your install picks up an existing keycloak deployment. 

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

### Save the address of the remote Codewind Service 
Make a note of the address provided because you need it for configuring your IDE in the next step, for example: `https://codewind-gatekeeper-k55333j0.mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud`

# 2. Deploy additional remote Codewind services

*WIP* You will now use the same keycloak to install multiple codewinds remotely.

Additional remote Codewind instances can be generated against the existing keycloak by re-runnning the `./cwctl --insecure install remote \` command detailed in the section [Deploy remote Codewind services].. Each time you re-run the command, a new remote Codewind service is generated against the existing Keycloak service. You must have your own remote Codewind instance in order to generate additional remote codewind services.

*SWAP THESE PARAGRAPHS AROUND?*
Each user can have several remote Codewind instances allocated to them. This can be achieved by either:
1. Re-running the `./cwctl --insecure install remote \` command
or
2. Assigning users through role-based acccess control. This is/can be? set up automatically using/by? the `cwctl` command - MORE DETAILS ARE WHERE?

# Next Steps

Connect your local Codewind on your [VSCode](remotedeploy-vscode.html) or [Eclipse](remotedeploy-eclipse.html) IDE to the new Codewind deployment.
