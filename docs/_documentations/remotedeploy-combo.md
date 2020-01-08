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


## Installing a Codewind remote deployment

Codewind includes a CLI to simplify the installation process. You will find `cwctl` in your HOME directory under the path ~/.codewind/{version}

The command for installing an "all-in" deployment with a new Keycloak and new Codewind service is :

```
./cwctl --insecure install remote \
--namespace mycodewind-ns \
--kadminuser {yourKeycloakAdminName} \
--kadminpass {yourKeycloakAdminPassword} \
--krealm {installationRealm}  \
--kclient {clientPrefix} \
--kdevuser {userName}  \
--kdevpass {userPassword}  \
--ingress {yourCloudIngressInternetDomain}
```

### Deploying Codewind with CWCTL

1.  Open a new terminal window on your local workstation
2.  Navigate to your home directory and to the Codewind cli:

```
cd ~/.codewind/0.8.0
```

3. Determine your cloud ingress domain

Ensure you are logged into your openshift cluster

```
$ oc get namespaces
NAME                                STATUS    AGE
default                             Active    103d
ibm-cert-store                      Active    103d
ibm-system                          Active    103d
kube-proxy-and-dns                  Active    103d
kube-public                         Active    103d
kube-service-catalog                Active    103d
kube-system                         Active    103d
openshift                           Active    103d
openshift-ansible-service-broker    Active    103d
openshift-console                   Active    103d
openshift-infra                     Active    103d
openshift-monitoring                Active    103d
openshift-node                      Active    103d
openshift-template-service-broker   Active    103d
openshift-web-console               Active    103d
```

4. Determine your ingress domain

The cli command requires an ingress domain,  you can find yours based on existing routes:

```
oc get routes -n default
NAME               HOST/PORT                                                                                                          PATH      SERVICES           PORT               TERMINATION   WILDCARD
registry-console   registry-console-default.mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud             registry-console   registry-console   passthrough   None
```

In the above example the ingress domain needed is:

```
mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud
```

since default is a namespace, registry-console is an existing application both of which the CLI will not be used by CLI.

5. Run the cli command

Modify the command to include :

* namespace: cwctl will create the namespace if it does not yet exist
* kadminuser & kadminpass:  Initial Keycloak administrator username and password
* kdevuser & kdevpass: A developer username and password that will be granted access to this deployment of Codewind. cwctl will create the user and add it to the realm if it does not exist.
* ingress: the ingress domain for your cloud environment

eg :

```
./cwctl --insecure install remote \
--namespace codewind-0001 \
--kadminuser admin \
--kadminpass passw0rd \
--krealm codewind  \
--kclient codewind \
--kdevuser developer \
--kdevpass passw0rd  \
--ingress mycluster-12345-7674b4bd9abbdeea0be228236d5275c9-0001.eu-gb.containers.appdomain.cloud
INFO[0000] Checking namespace codewind-0001 exists
INFO[0000] Creating codewind-0001 namespace
INFO[0000] Using namespace : codewind-0001
INFO[0000] Container images :
INFO[0000] eclipse/codewind-pfe-amd64:latest
INFO[0000] eclipse/codewind-performance-amd64:latest
INFO[0000] eclipse/codewind-keycloak-amd64:latest
INFO[0000] eclipse/codewind-gatekeeper-amd64:latest
INFO[0000] Running on openshift: true
....
....
INFO[0156] Waiting for Codewind Gatekeeper to start on https://codewind-gatekeeper-k55333j0.mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud
.
INFO[0159] Waiting for Codewind PFE to start
.
INFO[0159] Codewind is available at: https://codewind-gatekeeper-k55333j0.mycluster-12345-7674b4bd9abbdeea5be228236d5275c9-0001.eu-gb.containers.appdomain.cloud
```

Codewind has been sucessfull deployed and available for use.

Next step,

Connecting your <a class="cw-gettingstarted-card-link" href="remotedeploy-vscode.md">VSCode</a> or <a class="cw-gettingstarted-card-link" href="remotedeploy-eclipse.md">Eclipse</a> IDE to the new deployment



