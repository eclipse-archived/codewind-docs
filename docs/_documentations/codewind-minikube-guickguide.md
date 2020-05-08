---
layout: docs
title: Codewind on Minikube 
description: End-to-end instructions on how to deploy Codewind and projects on local Kube, specifically, Minikube. 
keywords: users, projects, Kubernetes, Kube, Minikube, Codewind, deploy, hybrid
duration: 5 minutes
permalink: codewind-minikube
type: document
parent: Quick guides 
order: 3
---

# Codewind on Minikube 

## Objectives 
* Install Minikube 
* Install Codewind 
* Develop a microservice with Codewind on Minikube 

## Overview
Minikube is essentially Kubernetes but on your local computer. Minikube supports the latest Kubernetes release, so you can configure Minikube on any container runtime. With Minikube, you can start your computer then utilize all Kubernetes' capabilities. Use Minikube to explore and learn to develop with Codewind. This quick guide assists and instructs you to deploy Codewind and projects on Minikube. 

* [Prerequisistes](##prerequisites)
* [Installing Minikube](##installing-minikube)
* [Installing Codewind](##installing-codewind)
* [Developing a microservice](##developing-a-microservice)
* [What you have learned](##what-you-have-learned)
* [Next steps](##next-steps) 

## Prerequisites
* A Mac, Windows, or Linux host.
* Install [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/).
* At least 8Gb RAM. Minikube needs at least 4Gb of RAM for this quick guide. 

## Installing Minikube
1. To run the needed commands, open your terminal. 
2. To start Minikube on your machine, run, `minikube start --memory=4096`.
    * Minikube creates a single-node Kubernetes cluster with 4GB of RAM available to it.
    * If this command fails, refer to [Minikube installation docs](https://kubernetes.io/docs/tasks/tools/install-minikube) and ensure you have enough memory on your system. 
3. To install [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/) on Minikube, run, `minikube addons enable ingress`. 
    * Codewind makes use of Ingress to expose its endpoints.
4. To determine your Ingress IP, run `minikube ip`. 
    * Example:
     ```
    $ minikube ip
    192.168.64.46
     ```
     * Save this value for later.
 
## Installing Codewind
1. Choose your IDE and install the Codewind extension. 
    * Follow the install instructions for [Eclipse](https://www.eclipse.org/codewind/mdt-eclipse-getting-started.html) or [VS Code](https://www.eclipse.org/codewind/mdt-vsc-getting-started.html). 
2. Locate the `cwctl` command line interface (CLI). 
    * On Mac and Linux, the cwctl is `~/.codewind/<version>/cwctl`. 
    * On Windows, the cwctl is `C:\Users\(your user name)\.codewind\<version>\cwctl`. 
3. To install cwctl on Mac and Linux, run:
        ```
        ./cwctl --insecure install remote \
        --namespace codewind \
        --kadminuser admin \
        --kadminpass admin \
        --krealm codewind \
        --kclient codewind \
        --kdevuser developer \
        --kdevpass developer \
        --ingress <ingress-ip>.nip.io
        ```
4. To install cwctl on Windows, run: `cwctl.exe --insecure install remote --namespace codewind --kadminuser admin --kadminpass admin --krealm codewind --kclient codewind --kdevuser developer --kdevpass developer --ingress <ingress-ip>.nip.io`     
    * **Note:** The `ingress-ip` value is the value you found in Step 4 of `Preparing Minikube`.
    * This command installs Codewind into the `Codewind` namespace with the default credentials.
5. Open the Codewind view in your editor -> select `New Codewind Connection` -> enter the following details:   
    * **Codewind Gatekeeper URL:** In step 3, cwctl gives you the Gatekeeper URL. 
    * **Username:** In step 3, developer username is given to cwctl in the value of `kdevuser`. 
    * **Password:** In step 3, developer password given to cwctl in the value of `kdevpass`.
6. To save and create the remote connection to the Codewind instance on Minikube, click `Save`. 

## Developing a microservice
Now that you have installed Minikube and Codewind, develop a microservice so you learn to work with Codewind on Minikube. 

### Configuring Codewind to use application stacks 
Configure Codewind to use Appsody templates so you can focus exclusively on your code. These templates include stacks that you can use to follow this guide. Complete the following steps to select the Appsody templates:

1. Under the Explorer pane, select `Codewind`.
2. Right-click the remote connection you saved when you completed the `Installing Codewind` instructions.
3. Select `Template Source Manager`.
4. Enable `Appsody Stacks - incubator`.

You now have configured Codewind to Appsody templates and can proceed to develop your microservice with Codewind.

If your organization uses customized application stacks and has given you a URL that points to an index.json file, you can add it to Codewind:

1. Return to `Codewind` and right-click the remote connection.
2. Select `Template Source Manager`.
3. Click the `Add New +` button to add your URL.
4. Add your URL in the pop up window and save your changes.

### Creating an Appsody project 
1. Under the Explorer pane, select `Codewind`.
2. Find the name of the remote connection created earlier and expand it. 
3. Hover over the `Projects` entry underneath Codewind in the Explorer pane, and press the `+` icon to create a project.
4. Choose the `Appsody Open Liberty default template (Appsody Stacks- incubator)`.
5. Name your project `appsody-calculator`.
    * If you don’t see Appsody templates, find and select `Template Source Manager` and enable `Appsody Stacks - appsodyhub`. The templates are refreshed, and the Appsody templates are available.
6. Press Enter.
    * To monitor your project’s progress, right-click your project, and select `Show all logs`. Then an `Output` tab is displayed where you see your project’s build logs.

Your project is complete when you see your application status is running and your build status is successful.

### Accessing the application endpoint in a browser

1. Return to your project under the Explorer pane.
2. Select the Open App icon next to your project's name, or right-click your project and select `Open App`.

Your application is now opened in the browser, showing the welcome to your Appsody microservice page.

### Adding a REST service to your application

 1. Go to your project's workspace under the Explorer tab.
 2. Navigate to `src->main->java->dev->appsody->starter`.
 3. Right-click `starter` and select `New File`.
 4. Create a file, name it `Calculator.java`, and press `Enter`. This file is your JAX-RS resource.
 5. Populate the file with the following code then **save** the file:

```
package dev.appsody.starter;

import javax.ws.rs.core.Application;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import javax.ws.rs.PathParam;

@Path("/calculator")
public class Calculator extends Application {

    @GET
    @Path("/aboutme")
    @Produces(MediaType.TEXT_PLAIN)
    public String aboutme(){
        return "You can add (+), subtract (-), and multiply (*) with this simple calculator.";
    }

    @GET
    @Path("/{op}/{a}/{b}")
    @Produces(MediaType.TEXT_PLAIN)
    public Response calculate(@PathParam("op") String op, @PathParam("a") String a, @PathParam("b") String b)
    {
        int numA = Integer.parseInt(a);
        int numB = Integer.parseInt(b);

      switch(op)
      {
          case "+":
              return Response.ok(a + "+" + b + "=" + (Integer.toString((numA + numB)))).build();

          case "-":
              return Response.ok(a + "-" + b + "=" + (Integer.toString((numA - numB)))).build();

          case "*":
              return Response.ok(a + "*" + b + "=" + (Integer.toString((numA * numB)))).build();

          default:
              return Response.ok("Invalid operation. Please Try again").build();
      }
    }
}
```
Any changes you make to your code is automatically built and re-deployed by Codewind and viewable in your browser.

### Working with the microservice

You now can work with your calculator.

1. Use the URL you saw when you first opened the application. 
2. Make sure to remove the `< >` symbol in the URL.
3. `<url>/starter/calculator/aboutme`
4. You should see the following response:

```
You can add (+), subtract (-), and multiply (*) with this simple calculator.
```

You could also try a few of the sample calculator functions:

* `<url>/starter/calculator/aboutme`, where you can input one of the available operations `(+, _, *)`, and an integer a, and an integer b.
* So for `<url>/starter/calculator/aboutme/+/10/3`  you should see: `10+3=13`.

## What you have learned 
In this quick guide, you have learned to:
* Install Minikube and Codewind
* Develop a micorservice using Codewind on Minikube 

## Next steps 
See other quick guides to learn how to develop with Codewind. 