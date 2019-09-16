---
layout: docs
title: Converting an application from HTTP to HTTPS
description: Converting an application from HTTP to HTTPS
keywords: https, http, python, microprofile, application, applications, codewind
duration: 1 minute
permalink: convertingtohttps
type: document
---

# Converting an application from HTTP to HTTPS

You can convert Codewind applications from HTTP to HTTPS. These examples feature a Python and a MicroProfile application.

**Caution:** Use these examples for development but not for production applications. The self-signed certificate and steps in these examples might not comply with the security policy and usage policy of your project.

## Converting a Python application from HTTP to HTTPS
1. Generate a private key.
 ```
 openssl genrsa -des3 -out server.key 1024
 ```
2. Generate a certificate signing request.
 ```
 openssl req -new -key server.key -out server.csr
 ```
3. Remove the passphrase from the key.
 ```
 cp server.key server.key.org
 openssl rsa -in server.key.org -out server.key
 ```
4. Generate a self-signed certificate.
 ```
 openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
 ```
5. In your Python application `app.py` file, use the certificate and the key.
 ```
 app.run(host="0.0.0.0", port=5000, ssl_context=('/tmp/server.crt', '/tmp/server.key'))
 ```
6. Update your Python application Dockerfile to include the certificate and the key.
 ```
 # Copy the Certificate and the Key
 ADD server.crt /tmp/server.crt
 ADD server.key /tmp/server.key
 ```

## Converting a MicroProfile application from HTTP to HTTPS
1. Generate a keystore with the Java `keytool` command.
 ```
 keytool -genkey -alias <alias>
     -keystore <path to save keystore.pfx>
     -storetype PKCS12
     -keyalg RSA
     -storepass <password>
     -validity 730
     -keysize 2048
 ```
2. Install the Liberty SSL feature in the application `server.xml` file.
 ```
 <featureManager>
   <feature>ssl-1.0</feature>
 </featureManager>
 ```
3. Use the keystore in the Liberty `server.xml` file by entering the same path and password from when you generated a keystore with the Java `keytool` command.
 ```
 <keyStore id="defaultKeyStore" location="/home/default/keystore.pfx" password="<password>" type="PKCS12"/>
 ```
4. Update your MicroProfile application Dockerfile to include the keystore.
 ```
 # Copy the Keystore
 COPY keystore.pfx /home/default/keystore.pfx
 ```

For more information, see [Configuring SSL for Liberty profile](https://www.ibm.com/support/knowledgecenter/SSHSCD_6.3.0/com.ibm.worklight.installconfig.doc/appcenter/t_ac_ssl_lib.html).

**Note:** To run the Python and MicroProfile HTTPS application on Kubernetes, update the chart `deployment.yaml` file to include the `scheme: HTTPS` value for the `livenessProbe` and `readinessProbe` probes.
```
livenessProbe:
    httpGet:
        path: /
        port: {{ .Values.service.servicePort }}
        scheme: HTTPS

```
```
readinessProbe:
    httpGet:
        path: /
        port: {{ .Values.service.servicePort }}
        scheme: HTTPS
```