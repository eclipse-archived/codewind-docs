---
layout: docs
title: Installing Eclipse Che for Codewind
description: Installing Eclipse Che for Codewind
keywords: build, deploy, install, installing, installation, chart, Helm, develop, cloud, public cloud, services, command line, cli, command, start, stop, update, open, delete, options, operation, devops, OpenShift, OKD
duration: 1 minute
permalink: che-browserconfig
type: document
---
# Configuring Codewind on Eclipse Che with your browser and cluster

Ensure you have completed the [prerequisites to installing Codewind on Eclipse Che](./che-installinfo.html#prerequisites).

If you installed Eclipse Che with **self-signed certificates**, or if self-signed certificates are being used for communication between your browser and your cluster, follow instructions to [add certificates for Che to your browser](./che-browserconfig.html#adding-certificates-for-che-to-your-browser). **Caution: do not use self-signed certificates in production**

**Note:** If you completed the [Codewind for Eclipse Che prerequisites and installation steps](./che-installinfo.html) for Kubernetes then you have installed Eclipse Che with self-signed certificates.

**You may skip this step and proceed to [adding an image registry in Codewind on Che](./che-setupregistries.html) if**:

- you installed Eclipse Che with certificates signed by a certificate authority For more information about how to *install Eclipse Che with a certificate signed by a certificate authority' see [ADD LINK](). 
- your cluster uses publicly-signed certificates for example, Openshit on IBM Cloud
- you are not using certificates **Caution: this is not advised**

**If you are running on Openshift** then you must also perform [additional steps](./che-browserconfig.html#additional-instructions-for-openshift) to:
- Download the Openshift router's Certificate Authority certificates and import into your browser
- Enable Codewind to run as privileged and as root

For more information about how to test whether your Eclipse Che installation is secure you can use [ADD LINK](hhtp://myserver.com)

### Adding certificates for Che to your browser


#### Adding the ca.crt to Google Chrome

On macOS, follow these steps:

1. Open **Keychain Access** and click **File**>**Import items**.
2. Locate the `rootCa.crt` that you downloaded and import it.
3. Find and click the certificate in Keychain.
4. In the window that opens, expand the **Trust section**. Under **When using this certificate**, select **Always trust**. Click **save**.
5. Reload Eclipse Che in your browser.

On Windows, follow these steps:

1. Open Google Chrome preferences, select **Privacy and Security**, and click **Manage Certificates**.
2. In the window that appears, click the **Trusted Root Certificate Authorities** tab.
3. Locate the `rootCa.crt` that you downloaded and import it.
4. Restart Google Chrome and access the Eclipse Che URL.

#### Adding the ca.crt to Firefox

1. Go to **Preferences**>**Privacy and Security**>**View certificates**.
2. Click **Authorities** and click **Import**.
3. Locate the `rootCa.crt` that you downloaded and import it.
4. Reload Eclipse Che in your browser.

### Additional instructions for Openshift

**Running on OpenShift with self-signed certificates** If you are running with self-signed certificates, follow these instructions to export the router certificate from your cluster and import it into your browser:

1. Authenticate against your OpenShift cluster, or ask your cluster administrator to do so.
2. Run the following command to download the router's `ca.crt`:
```
$ oc get secret router-ca -n openshift-ingress-operator -o jsonpath="{.data.tls\.crt}" | base64 -d > rootCa.crt
```

**Enabling Codewind to run as privileged and as root** Codewind needs to run as privileged and as root because it builds container images. If your cluster is running OpenShift, run the following commands, where `<che namespace>` is the namespace into which you installed Che.
1. To enable privileged containers, enter `oc adm policy add-scc-to-user privileged system:serviceaccount:<che namespace>:che-workspace`.
2. To enable containers to run as root, enter `oc adm policy add-scc-to-user anyuid system:serviceaccount:<che namespace>:che-workspace`.

### Next steps
**Getting started with Codewind for Eclipse Che** Continue to instructions for [adding registries in Che](./che-setupregistries.html)
