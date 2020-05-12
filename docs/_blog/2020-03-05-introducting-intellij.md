---
layout: post
title: "Introducing Eclipse Codewind on IntelliJ"
categories: blog
author_picture: images/blog/author_icon_becca_bau.jpeg
author_url: 
author: Becca Bau
blog_description: "We recently announced the tech preview of Eclipse Codewind on the IntelliJ IDE. Many people have asked about IntelliJ, as it is a popular..."
permalink: introducing-eclipse-codewind-on-intellij.html
duration: 3 minutes
tags: [Microservices, IDE, Intellij, Open Source]
---

We recently announced the tech preview of Eclipse Codewind on the [IntelliJ IDE](https://www.jetbrains.com/idea/){:target="_blank"}. Many people have asked about IntelliJ, as it is a popular option among Java developers, and we want to make our tools available to as many developers as possible in their preferred IDEs. With this tech preview, you can now use Codewind on IntelliJ locally, and we are working hard to bring the full, effortless Codewind experience to IntelliJ over the coming months.

![image of the dependency microservice](images/blog/introintellij_1.gif){:width="800px"}
*Creating a MicroProfile project using the IntelliJ IDE*
{: style="text-align: center;"}

Get started with Codewind on IntelliJ [here](https://www.eclipse.org/codewind/mdt-intellij-getting-started.html)!

![image of the dependency microservice](images/blog/introintellij_2.png){:width="800px"}
*Get the Codewind plugin in the IntelliJ IDE Marketplace!*
{: style="text-align: center;"}

### Refresh my memory, what is Eclipse Codewind again?
Eclipse Codewind is an open source project for building and developing cloud-native, containerized applications. Built from the ground up, Codewind provides an improved and integrated IDE-based container development flow. Codewind does all the hard stuff, from creating your project to optimization so you can focus on rapidly iterating your code. Plus, you can debug your remote applications as if they were on your local machine. You can see all the metrics and logs you need, and perform load testing with a click of a button. Relax into the familiar flow of traditional application development without needing to be an expert in container technology.

### Why do we care about Codewind?
Container development is a regularly utilized process for developing for cloud-native applications, but debugging the deployment process can be tricky. Let’s discuss the different ways Codewind can help you out.

Codewind provides preconfigured, [Docker-containerized](https://www.eclipse.org/codewind/workingwithtemplates.html) project templates covering multiple popular languages and frameworks that you’re already familiar with. You can modify the preconfigured projects to develop your customized microservices. As you develop, Codewind automatically pushes your code changes to your container as efficiently as possible.

Codewind offers a smooth debugging and testing experience inside your IDE. Run commands and access your application, build, and container logs from within the container. Use the Project Overview interface to view the endpoint, container ID, location on disk, build/run status, and ports, so you don’t have to leave your IDE to search for this information. Codewind integrates with your IDE’s terminal window and Problems and Output panels for a smooth test and debug experience. Additionally, you can open a shell session inside your container with a simple click. And best of all, you get to do all this with full compatibility with the debug functionality of your IDE.

You can also visualize your container application’s footprint, such as CPU and memory usage (where supported). Codewind’s Application Metrics Dashboard exposes your microservice’s core metrics, including HTTP(S) requests and throughput information, as well as CPU usage, memory footprint, and heap. Codewind also features integrated load-testing for certain project types.

Codewind also features integrated load-testing for certain project types. You can configure and run load tests against your microservices using [Codewind’s performance dashboard](https://www.youtube.com/watch?v=nfJt3f5TUvc){:target="_blank"}, and use the graphs to compare your repeated load test results and iterate on performance improvements.

As an open-source project, we cater to our users, so if you’ve got any suggestions or want to get involved, let us know! We are on [GitHub](https://github.com/eclipse/codewind){:target="_blank"} and [Mattermost](https://mattermost.eclipse.org/eclipse/channels/eclipse-codewind){:target="_blank"} and happy to chat.

### Where can I use Codewind?
Full functionality on [VS Code](https://www.eclipse.org/codewind/mdt-vsc-getting-started.html), [Eclipse IDE](https://www.eclipse.org/codewind/mdt-eclipse-getting-started.html), [Eclipse Che](https://www.eclipse.org/codewind/mdt-che-installinfo.html), and partial functionality in [IntelliJ](https://www.eclipse.org/codewind/mdt-intellij-getting-started.html) with plans to expand — which is great news for Java developers!
