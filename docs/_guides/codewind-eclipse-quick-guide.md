---
layout: guide
summary_title: "Codewind in Eclipse"
title: "Getting Started with Codewind in Eclipse"
categories: guides
description: "Take advantage of Codewind's tools to help build high quality cloud native applications regardless of which IDE or language you use."
permalink: codewind-eclipse-quick-guide.html
duration: 5 minutes
tags: Codewind, Eclipse, microservice
image: "https://cdn.freebiesupply.com/logos/large/2x/eclipse-11-logo-png-transparent.png"
objectives: ["Install Eclipse and Codewind", "Develop a simple microservice, using Eclipse Codewind in Eclipse"]
---

# Getting Started with Codewind in Eclipse

## Objectives
* Install Eclipse and Codewind
* Develop a simple microservice, using Eclipse Codewind in Eclipse


## Overview
Eclipse Codewind provides the ability to create application projects from `Application Stacks` that your company has built, enabling developers to focus on their code and not infrastructure and Kubernetes.  Application deployments to Kubernetes occur via pipelines when developers commit their local code to the correct Git repos Kabanero is managing via webhooks.

Eclipse Codewind provides the ability to create projects based on a variety of different template types.  These include IBM Cloud starters, OpenShift Do (odo), and Appsody templates. Today, there are templates for: IBM Cloud Starters, odo, Eclipse MicroProfile/Java EE, Springboot, Node.js, Node.js with Express, and Node.js with Loopback.

## Developing with Eclipse
You can use Codewind for Eclipse to develop and debug your containerized projects from within a local Eclipse IDE.

### Prerequisite
Before you can develop a microservice with Eclipse, you need to:

* [Install Docker](https://docs.docker.com/install/)
    * **Note:** Make sure to install or upgrade to minimum Docker version 19.03.
* [Install Eclipse](https://www.eclipse.org/downloads/packages/release/)
    * **Note:** Make sure to install or upgrade to mimimum Eclipse version 2019-09 R (4.13.0).

### Installing Codewind for Eclipse
The Codewind installation pulls the following images that form the Codewind backend:

1. `eclipse/codewind-performance-amd64`
2. `eclipse/codewind-pfe-amd64`

The Codewind installation includes two parts:

1. The Eclipse plug-in installs when you install Codewind from the [Eclipse Marketplace](https://marketplace.eclipse.org/content/codewind) or when you install by searching in the `Eclipse Extensions` view.
2. The Codewind backend containers install after you click `Install`. Clicking `Install` downloads the Codewind backend containers, ~1GB.

### Configuring Codewind to use application stacks
Configure Codewind to use Appsody templates so you can focus exclusively on your code. These templates include an Eclipse MicroProfile stack that you can use to follow this guide. Complete the following steps to select the Appsody templates:

1. Click the `Codewind` tab.
2. Expand `Codewind` by clicking the drop-down arrow.
3. Right-click `Local [Running]`.
4. Select `Manage Template Sources...`.
5. Select `Appsody Stacks - incubator`.
6. Click the `OK` button.

You have now configured Codewind to use Appsody templates and can proceed to develop your microservice within Codewind.

If your organization uses customized application stacks and has given you a URL that points to an `index.json` file, you can add it to Codewind:

1. Return to  `Codewind` and right-click `Local [Running]`.
2. Select `Manage Template Sources...`.
3. Click the `Add...` button to add your URL.
4. Add your URL in the `URL:` box in the pop up window and save your changes.

### Creating an Appsody project
Appsody helps you develop containerized applications and removes the burden of managing the full software development stack. If you want more context about Appsody, visit the [Appsody welcome page](https://appsody.dev/docs).

1. Right-click `Local [Running]` under `Codewind` in the `Codewind` tab.
2. Select `+ Create New Project...`
    * **Note:** Make sure Docker is running. Otherwise, you get an error.
3. Name your project `appsody-calculator`.
4. Under `Template`, select `Appsody Open Liberty template`. 
    * If you don't see an Appsody template, select the `Manage Template Sources...` link at the end of the window.
    * Select the `Appsody Stacks - appsodyhub` checkbox.
    * Click `OK`.
    * The templates are refreshed, and the Appsody templates are available.
5. Click `Finish`.
    * To monitor your project's progress, right-click on your project, and select `Show Log Files`.
    * Select `Show All`. Then a `Console` tab is displayed where you see your project's build logs.

Your project is displayed in the `Local [Running]` section. The progress for creating your project is tracked next to the project's name.

Your project is complete when you see your project is running and its build is successful.

### Accessing the application endpoint in a browser

1. Return to your project under the Codewind tab.
2. Right-click your project and select `Open Application`.

Your application is now opened in a browser, showing the welcome to your Appsody microservice page.

### Adding a REST service to your application

1. Go to your project's workspace under the Project Explorer tab.
2. Navigate to `Java Resources->src/main/java->dev.appsody.starter`.
3. Right-click `dev.appsody.starter` and select `New->Class`.
4. Create a Class file, name it `Calculator.java`, and select `Finish`. This file is your JAX-RS resource.
5. Populate the file with the following code and then **save** the file:

```java
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
    public String aboutme() {
        return "You can add (+), subtract (-), and multiply (*) with this simple calculator.";
    }

    @GET
    @Path("/{op}/{a}/{b}")
    @Produces(MediaType.TEXT_PLAIN)
    public Response calculate(@PathParam("op") String op, @PathParam("a") String a, @PathParam("b") String b) {
        int numA = Integer.parseInt(a);
        int numB = Integer.parseInt(b);

        switch (op) {
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
Any changes you make to your code are automatically built and re-deployed by Codewind and you can view them in your browser.

### Working with the example calculator microservice
You now can work with the example calculator microservice.

* Use the port number you saw when you first opened the application.
* Make sure to remove the `< >` symbol in the URL.
* `http://127.0.0.1:<port>/starter/calculator/aboutme`
* You see the following response:

```
You can add (+), subtract (-), and multiply (*) with this simple calculator.
```

You can try a few of the sample calculator functions:

* `http://127.0.0.1:<port>/starter/calculator/{op}/{a}/{b}`, where you can input one of the available operations `(+, _, *)`, and an integer a, and an integer b.
* So for `http://127.0.0.1:<port>/starter/calculator/+/10/3` you should see: `10+3=13`.

## What you have learned
In this quick guide, you have learned to:
1. Install Codewind on Eclipse
2. Develop your own microservice using Codewind

## Next Steps
See other quick guides to learn how to develop with Codewind:

* [Codewind in VS Code](codewind-vscode-quick-guide.html)