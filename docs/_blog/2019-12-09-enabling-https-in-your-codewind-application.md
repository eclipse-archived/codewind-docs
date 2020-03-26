---
layout: post
title: "Enabling HTTPS in your Codewind Application"
categories: blog
author_picture: images/blog/author_icon_becca_bau.jpeg
author_url: 
author: Becca Bau
blog_description: "HTTPS is becoming increasingly common as the internet shifts to an HTTPS-only environment. In an unencrypted HTTP session, data is transferred in clear text, meaning anyone can eavesdrop on your..."
permalink: enabling-https-in-your-codewind-application
duration: 2 minutes
tags: [Https, Python, Microprofile]
---

### Why HTTPS?
HTTPS is becoming increasingly common as the internet shifts to an HTTPS-only environment. In an unencrypted HTTP session, data is transferred in clear text, meaning anyone can eavesdrop on your actions over the web. Also, you don’t have any additional verification to ensure you’ve connected to the correct website. You might be on a compromised network that could mine your information by directing you to imposter services. HTTPS, on the other hand, verifies that you have established a secure connection to your intended service by encrypting your sessions and checking certificates.

If you have ever used Codewind (if not, check out codewind.dev!), then you’ll know that our templates generate web services that use HTTP. We want to help you protect the integrity of the applications and services you create with Codewind. To help you keep your applications and services secure, check out these examples to see how you can convert your Codewind applications from HTTP to HTTPS.

### Converting an application from HTTP to HTTPS
You can convert Codewind applications from HTTP to HTTPS. These examples feature a Python and a MicroProfile application.

**Caution:** Use these examples for development but not for production applications. The self-signed certificate and steps in these examples might not comply with the security policy and usage policy of your project.

#### Converting a Python application from HTTP to HTTPS
- Generate a private key.
```bash
openssl genrsa -des3 -out server.key 1024
```
- Generate a certificate signing request.
```bash
openssl req -new -key server.key -out server.csr`
```
- Remove the passphrase from the key
```bash
cp server.key server.key.org
openssl rsa -in server.key.org -out server.key
```
- Generate a self-signed certificate.
```bash
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
```
- In your Python application app.py file, use the certificate and the key.
```bash
app.run(host="0.0.0.0", port=5000, ssl_context=('/tmp/server.crt', '/tmp/server.key'))
```
- Update your Python application Dockerfile to include the certificate and the key.
```bash
# Copy the Certificate and the Key
ADD server.crt /tmp/server.crt
ADD server.key /tmp/server.key`
```

### Converting a MicroProfile application from HTTP to HTTPS
- Generate a keystore with the Java `keytool` command.
```bash
keytool -genkey -alias <alias>
    -keystore <path to save keystore.pfx>
    -storetype PKCS12
    -keyalg RSA
    -storepass <password>
    -validity 730
    -keysize 2048
```
- Install the Liberty SSL feature in the application `server.xml` file.

<div class="language-xml highlighter-rouge post-indent"><div class="highlight"><pre class="highlight language-xml"><code class=" language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>featureManager</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feature</span><span class="token punctuation">&gt;</span></span>ssl-1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>feature</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>featureManager</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></div>

- Use the keystore in the Liberty server.xml file by entering the same path and password from when you generated a keystore with the Java `keytool` command.

<div class="language-xml highlighter-rouge post-indent"><div class="highlight"><pre class="highlight language-xml"><code class=" language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keyStore</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>defaultKeyStore<span class="token punctuation">"</span></span> <span class="token attr-name">location</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/home/default/keystore.pfx<span class="token punctuation">"</span></span> <span class="token attr-name">password</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>&lt;password&gt;<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>PKCS12<span class="token punctuation">"</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div>    </div>

- Update your MicroProfile application Dockerfile to include the keystore.
```bash
# Copy the Keystore
COPY keystore.pfx /home/default/keystore.pfx
```
For more information, see [Configuring SSL for Liberty profile](https://www.ibm.com/support/knowledgecenter/SSHSCD_6.3.0/com.ibm.worklight.installconfig.doc/appcenter/t_ac_ssl_lib.html){:target="_blank"}.

Note: To run the Python and MicroProfile HTTPS application on Kubernetes, update the chart `deployment.yaml` file to include the `scheme: HTTPS` value for the `livenessProbe` and `readinessProbe` probes.
```bash
livenessProbe:
    httpGet:
        path: /
        port: {{ .Values.service.servicePort }}
        scheme: HTTPS 
readinessProbe:
    httpGet:
        path: /
        port: {{ .Values.service.servicePort }}
        scheme: HTTPS
```