---
layout: guide
summary-title: "Codewind in CodeReady Workspaces"
title: "Getting Started with Codewind in CodeReady Workspaces"
categories: guides 
guide_description: "Take advantage of Codewind's tools to help build high quality cloud native applications regardless of which IDE or language you use."
permalink: codewind-crw-quick-guide.html
duration: 10 minutes
tags: Codewind, CodeReady Workspaces, Openshift, Kubernetes, containers, microservice
--- 

## Objectives
* Install CodeReady Workspaces and Codewind
* Develop a simple microservice, using Eclipse Codewind on CodeReady Workspaces

## Overview
Eclipse Codewind enables you to develop microservice applications from application stacks in an integrated developer environment (IDE). CodeReady Workspaces provides a containerized IDE for cloud native application development on an OpenShift cluster. 

## Developing with CodeReady Workspaces 
CodeReady workspaces uses Kubernetes and containers to provide a preconfigured environment. CodeReady Workspaces allows you to create, build, and test your code in OpenShift containers but makes you feel like you are working on an IDE on your local machine.  

### Prerequisite
CodeReady Workspaces requires at least two 1Gi ReadWriteOnce (RWO) persistent volumes on the cluster to install and a 1Gi RWO volume for each created workspace.

Each Codewind workspace also requires at least on 1Gi ReadWriteMany (RWX) persistent volume.

### Installing CodeReady Workspaces
To install CodeReady Workspaces, set `Spec.codeReadyWorkspaces.enable: true` in the Kabanero custom resource (Kabanero CR) instance and apply it.

To edit the Kabanero CR, you can run `oc edit kabanero -n kabanero` from the command line. 

The following sample shows a Kabanero CR instance configuration: 

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

### Configuring CodeReady Workspaces
The Kabanero CR instance provides additional fields allowing you to configure your installation of CodeReady Workspaces.

* If you want to install CodeReady Workspaces with TLS Support, set `Spec.codeReadyWorkspaces.operator.customResourceInstance.tlsSupport` to `true`.
  **Note:** If your OpenShift cluster's router is set up with self-signed certificates, `Spec.codeReadyWorkspaces.operator.instance.selfSignedCert` must also be set to `true`.
* If you want to use your OpenShift accounts with CodeReady Workspaces, set up permanent users (accounts other than kube:admin) and then set `Spec.codeReadyWorkspaces.operator.customResourceInstance.openShiftOAuth` to `true`.
* To view the full list of configurable fields, see [Kabanero Custom Resource](../configuration/kabanero-cr-config.html). 

### Installing Codewind
When CodeReady Workspaces is installed on your OpenShift cluster, complete the following steps:

1. Log in to CodeReady Workspaces.
2. Click **Create Workspace**.
3. For **Name**, give your workspace some meaningful name.
4. For **Select Stack**, select `Codewind`.
5. Click **Create & Open** to create and start Codewind in CodeReady Workspaces.

CodeReady Workspaces starts Codewind and installs the Codewind plugins. This process might take a couple of minutes for all of the necessary components to be pulled and started.

See (Codewind on Che documentation)[https://www.eclipse.org/codewind/mdt-che-installinfo.html] for additional information and next steps.

### Configuring Codewind to use application stacks
Configure Codewind to use Appsody templates so you can focus exclusively on your code. These templates include an Eclipse MicroProfile stack that you can use to follow this guide. Complete the following steps to select the Appsody templates:

1. Under the Explorer pane, select `Codewind`.
2. Right-click `Local`.
3. Select `Template Source Manager`.
4. Enable `Appsody Stacks - incubator` and `Default templates`. 

You have now configured Codewind to use Appsody templates and can proceed to develop your microservice within Codewind.

If your organization uses customized application stacks and has given you a URL that points to an `index.json` file, you can add it to Codewind:

1. Return to  `Codewind` and right-click `Local`.
2. Select `Template Source Manager`.
3. Click the `Add New +` button to add your URL.
4. Add your URL in the pop up window and save your changes.

### Creating an Appsody project
Throughout the application lifestyle, Appsody helps you develop containerized applications and leverage containers curated for your usage. If you want more context about Appsody, visit the [Appsody welcome page](https://appsody.dev/docs).

1. Under the Explorer pane, select `Codewind`.
2. Expand `Codewind` by clicking the drop-down arrow.
3. Hover over the `Projects` entry underneath Codewind in the Explorer pane, and press the `+` icon to create a project.
    * **Note:** Make sure Docker is running. Otherwise, you get an error.
4. Choose the `Appsody Open Liberty default template (Appsody Stacks - incubator)`.
5. Name your project `appsody-calculator`.
    * If you don't see Appsody templates, find and select `Template Source Manager` and enable `Appsody Stacks - incubator`.
    * The templates are refreshed, and the Appsody templates are available.
6. Press `Enter`.
    * To monitor your project's progress, right-click your project, and select `Show all logs`. Then an `Output` tab is displayed where you see your project's build logs.

Your project is complete when you see your application status is running and your build status is successful.

### Accessing the application endpoint in a browser
1. Return to your project under the Explorer pane.
2. Select the Open App icon next to your project's name, or right-click your project and select `Open App`.

Your application is now opened in a browser, showing the welcome to your Appsody microservice page.

### Adding a REST service to your application
 1. Go to your project's workspace under the Explorer tab.
 2. Navigate to `src->main->java->dev->appsody->starter`.
 3. Right-click `starter` and select `New File`.
 4. Create a file, name it `Calculator.java`, and press `Enter`. This file is your JAX-RS resource.
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

1. Use the exposed port number you saw when you first opened the application.
2. Make sure to remove the `< >` symbol in the URL.
3. `http://127.0.0.1:<port>/starter/calculator/aboutme`
4. You see the following response:

```
You can add (+), subtract (-), and multiply (*) with this simple calculator.
```

You can also try a few of the sample calculator functions:

* `http://127.0.0.1:<port>/starter/calculator/{op}/{a}/{b}`, where you can input one of the available operations `(+, _, *)`, and an integer a, and an integer b.
* So for `http://127.0.0.1:<port>/starter/calculator/+/10/3` you see: `10+3=13`.

## What you have learned
Now that you have completed this quick guide, you have learned to:

1. Install CodeReady Workspaces and Codewind
2. Develop your own microservice using Codewind on CodeReady Workspaces

## Next Steps
See other quick guides to learn how to develop with Codewind:

* [Codewind in Eclipse](codewind-eclipse-quick-guide.html)
* [Codewind in VS Code](https://www.eclipse.org/codewind/codewind-vscode-quick-guide.html)