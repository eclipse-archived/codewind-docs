---
layout: post
title: "Introduction to Eclipse Codewind: Build high-quality cloud-native applications faster"
categories: blog
author_picture: images/blog/author_icon_andy_watson.jpeg
author_url: 
author: Andy Watson
blog_description: "Eclipse Codewind is an open source project that makes it easier for developers to create cloud-native applications within their favorite IDE. Codewind initially supports Visual Studio Code, Eclipse..."
permalink: introduction-to-eclipse-codewind-build-high-quality-cloud-native-applications-faster.html
duration: 2 minutes
tags: [Microservices, Containers, Nodejs, Java, Cloud]
---
[Eclipse Codewind](https://codewind.dev/) is an open source project that makes it easier for developers to create cloud-native applications within their favorite IDE. Codewind initially supports Visual Studio Code, Eclipse IDE and Eclipse Che. We’re working on adding support for additional editors in the coming months.

### Easy to get started
Once you’ve [installed Codewind](https://www.eclipse.org/codewind/gettingstarted.html), you can use common templates to quickly start using popular frameworks including Express (Node.js), Spring Boot (Java), Open Liberty (Java), and Kitura (Swift). If you want to develop in other runtimes and frameworks, you can do that as well! Codewind enables you to bring your own templates to expand support to meet your own needs.

### Containerized from the start
When you’re creating an application, Codewind immediately syncs and builds your application within its own container, pulling in application dependencies as appropriate. The best part? You don’t have to leave your editor to use dependent tools.

Auto-rebuild capabilities ensure that changes you make to your application are immediately reflected in your container, which results in quick feedback on your code changes. Applications that you build using Codewind come with health endpoints and metrics so that you can make sure your microservices are responding like you expect them to.

In addition, Codewind’s built-in performance tooling generates load on your microservice endpoint. This enables you to watch the metrics to compare changes between application levels and to identify hot spots that indicate potential application bottlenecks.

<div style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/mjADP2_4FBg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
*Welcome to Eclipse Codewind*
{: style="text-align: center;"}

### Start your Codewind journey
- Learn more: [Codewind.dev](https://codewind.dev/)
- Contribute to the project: [Visit GitHub](https://github.com/eclipse/codewind){:target="_blank"}
- Follow us on EclipseCodewind@twitter

*Originally published at [https://developer.ibm.com](https://developer.ibm.com){:target="_blank"}.*