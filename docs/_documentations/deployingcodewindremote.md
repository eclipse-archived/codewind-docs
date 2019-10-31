---
layout: docs
title: Deploying Codewind remote
description: Deploying Codewind remote
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing Cloud connection
duration: 5 minutes
permalink: deployingcodewindremote
type: document
parent: installoncloud
order: 1
---

# Deploying Codewind remote

Codewind remote is where you develop your code locally and build and run it remotely and securely in the Cloud. This option is incredibly useful because it frees up your local machine to focus purely on developing code and you use the Cloud's resources to build and run your apps. 

Codewind enables you to develop your apps securely by securing the connection between your local editor and your remote Cloud deployment. To do this Codewind uses Keycloak, an open source identity and access management solution for modern applications and services, which is highly configurable to your environment. 

You install your preferred IDE on your local machine, and then use the Codewind `cwctl` utility commands to configure the secure connection between your local IDE and your chosen Cloud. For more information, see 

## What happens when you deploy Codewind remote

Here's what happens when you deploy Codewind remote. The configuration process:

1. Checks that your Cloud is valid.
2. Deploys the necesary pods.
3. Configures the pods in your namespace, creating secrets, and setting passwords.
4. Completes the installation with self signed certificates. At this point you have set up Codewind, but you cannot use it yet.
5. In your IDE, you enter CLI commands to drive the creation of the remote targets.  
6. You store your username and password for Codewind in your platform keychain. This requires Kubernetes privileges. If your sysadmin sets this up for you, they'll have to let you know the username and password combination they've configured. 
(needs CLI commands)
7. Create the connections: 
        <Screen to create the connections from Slack discussion, #devex-internal, 09/10 from Guy look for screenshot>
8. The URL to remote and the password, gets stored in the keychain.
9. Codewind now shows remote deployments:
        <screenshot would be nice here>
        Eg. Local 
            MyAWSCloud
            MyIBMCLoud
        <check with design...>
