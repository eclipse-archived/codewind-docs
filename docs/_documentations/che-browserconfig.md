---
layout: docs
title: Configuring Codewind on Eclipse Che with your browser and cluster
description: Configuring Codewind on Eclipse Che with your browser and cluster
keywords: build, deploy, install, installing, installation, chart, Helm, develop, cloud, public cloud, services, command line, cli, command, start, stop, update, open, delete, options, operation, devops, OpenShift, OKD
duration: 1 minute
permalink: che-browserconfig
type: document
---
# Configuring Codewind on Eclipse Che with your browser and cluster

Ensure you have completed the [prerequisites to installing Codewind on Eclipse Che](./che-installinfo.html#prerequisites).

If you:
- installed Eclipse Che with **self-signed certificates**

or

- if self-signed certificates are being used for communication between your browser and your cluster

or

- you are using an **Openshift** cluster

follow instructions to [add certificates for Che to your browser](./che-browserconfig.html#adding-certificates-for-che-to-your-browser). 



**You may skip this step** to [add certificates for Che to your browser](./che-browserconfig.html#adding-certificates-for-che-to-your-browser) and instead proceed to [adding an image registry in Codewind on Che](./che-setupregistries.html) if:

- you installed Eclipse Che with certificates signed by a certificate authority. For more information about how to install Eclipse Che with a certificate signed by a certificate authority, see [ADD LINK](./). 
- your cluster uses publicly-signed certificates, for example, Openshit on IBM Cloud
- you are not using certificates **Caution:** this is not advised.

## Adding certificates for Che to your browser

**If you are running on Openshift** first follow [instructions to download certificates from your Openshift cluster](./che-openshift-certs.html).

### Adding the ca.crt to Google Chrome

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


### Next steps

**Getting started with Codewind for Eclipse Che**
Continue to instructions for [adding registries in Che](./che-setupregistries.html).
