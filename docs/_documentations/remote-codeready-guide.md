---
:layout: doc
:title: Installing Codewind in CodeReady Workspaces
:description: Instructions to install Codewind in CodeReady Workspaces 
:keywords: CodeReady Workspaces, ReadWriteOnce, Codewind, install
:duration: 5 minutes 
:permalink: remote-codeready-guide
:type: guide 
:parent: Using Codewind remotely 
:order: 3 
---

# Installing Codewind in CodeReady Workspaces 

## Prerequisites

CodeReady Workspaces requires at least two 1Gi ReadWriteOnce (RWO) persistent volumes on the cluster to install and a 1Gi RWO volume for each created workspace.

Each Codewind workspace also requires at least on 1Gi ReadWriteMany (RWX) persistent volume.

## Installing CodeReady Workspaces
To install CodeReady Workspaces, set `Spec.codeReadyWorkspaces.enable: true` in the Kabanero custom resource (Kabanero CR) instance and apply it.

A sample Kabanero CR instance might look like:
```yaml
apiVersion: kabanero.io/v1alpha2
kind: Kabanero
metadata:
  name: kabanero
spec:
  version: "0.6.0"
  codeReadyWorkspaces:
    enable: true
    operator:
      customResourceInstance:
        tlsSupport: true
        selfSignedCert: true
  stacks: 
    repositories: 
    - name: central
      https:
        url: https://github.com/kabanero-io/collections/releases/download/0.6.0/kabanero-index.yaml
```

## Configuring CodeReady Workspaces
The Kabanero CR instance provides additional fields allowing you to configure your install of CodeReady Workspaces. 

* Set `Spec.codeReadyWorkspaces.operator.customResourceInstance.tlsSupport` to `true` if you wish to install CodeReady Workspaces with TLS Support. 
  **Note:** If your OpenShift cluster's router is set up with self-signed certificates, `Spec.codeReadyWorkspaces.operator.instance.selfSignedCert` must also be set to `true`. 
* Set `Spec.codeReadyWorkspaces.operator.customResourceInstance.openShiftOAuth` to `true` if you wish to use your OpenShift accounts with CodeReady Workspaces.  Requires permanent users (accounts other than kube:admin) set up first.

Consult link:[Configuring a Kabanero CR Instance](kabanero-cr-config.html) for the full list of configurable fields

## Using CodeReady Workspaces with Self-Signed certificates
If CodeReady Workspaces is set up to use the self-signed certificates provided by the OpenShift cluster's router, then you must do the following:

**Google Chrome**

* Access the CodeReady Workspaces route in your browser.
* Download the route's certificate to your system.
* Go to `Settings` -> `Privacy and Security` -> `Manage certificates`.
* Import the certificate into your system and set its trust to `Always trust`.

**Firefox (version 71 or newer):**

* Access the CodeReady Workspaces route in your browser.
* View the route's certificate in your browser.
* Download the certificate titled `ingress-operator`.
* Go to `Preferences` -> `Privacy and Security` -> `View certificates`.
* Import the `ingress-operator` certificate as an authority into Firefox.

## Installing Codewind
Ensure CodeReady Workspaces is installed on your OpenShift cluster.

* Log in to CodeReady Workspaces with your desired account.
* Click `Create Workspace`.
* Under `Name`, give your workspace some meaningful name.
* Under `Select Stack`, select `Codewind`.
* Click `Create & Open` to create and start Codewind in CodeReady Workspaces.

CodeReady Workspaces then proceeds to bring up Codewind and install` the Codewind plugins. This process may take a couple of minutes for all of the necessary components to get pulled and started.

Consult the [Codewind on Che documentation, window="_blank"](https://www.eclipse.org/codewind/mdt-che-overview.html) for additional information and next steps.

## Stopping or Uninstalling Codewind
If at any point, you need to stop the Codewind workspace, you can:

* Log in to your CodeReady workspaces account and access the dashboard.
* Click on `Workspaces` in the sidebar.
* To pause the Codewind workspace: Select the Codewind workspace and under `Actions` click the `Stop workspace` button.
* To delete the Codewind workspace: Select the Codewind workspace and click the `Delete` button.

## Troubleshooting
To troubleshoot Codewind, see the [Codewind Troubleshooting page, window="_blank"](https://www.eclipse.org/codewind/troubleshooting.html).