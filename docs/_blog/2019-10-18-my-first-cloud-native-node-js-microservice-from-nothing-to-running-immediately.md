---
layout: post
title: "My first cloud-native Node.js microservice, from nothing to running, immediately"
categories: blog
author_picture: images/blog/author_icon_nik_canvin.jpg
author_url: https://www.linkedin.com/in/nik-canvin-110326/
author: Nik Canvin
description: "Having read about the virtues of 12-factor Apps, I knew I wanted to develop a new microservice — something that would handle one task really well and be easy to deploy to any cloud, but did not have..."
permalink: my-first-cloud-native-node-js-microservice-from-nothing-to-running-immediately.html
duration: 5 minutes
tags: [Docker, Nodejs, Containers, Microservices, Development]
---
Having read about the virtues of [12-factor Apps](https://www.12factor.net/){:target="_blank"}, I knew I wanted to develop a new microservice — something that would handle one task really well and be easy to deploy to any cloud, but did not have the Kubernetes and Docker skills required. However, using Eclipse [Codewind](http://ibm.biz/eclipse-cw01), a developer experience designed specifically to make cloud-native development simple, I was up and running immediately.

![image of a new microservice](images/blog/myfirstnodejs_1.jpeg){:width="800px"}
*From VS Code, I clicked to create/run a new microservice. A few dev iterations later to add my application logic, and I was DONE.*
{: style="text-align: center;"}

Having worked as a Software Project Manager for 20 years, I’m currently focused on legally dispositioning all the open source packages that my offering uses and tasked with producing software licenses and copyright notices files. Since the explosion of technologies like Node.js, Go-lang and Docker, the number of Open Source package sub-dependencies can quickly spiral into the 100s in my case.

I’m not alone. Across my company many other offerings are in the same boat, and the response has been consistently frustrating. Localized automation tightly coupled to local environments and needs, has stifled reuse. That is what inspired me to use the modern microservices approach, providing common jigsaw pieces of function, aiming to transform the local-only automation anti-pattern.

Getting started developing a microservice was remarkably simple, as the Codewind experience seamlessly did all the containerization heavy lifting. After the one click installation and setup of [Docker on my Mac](https://docs.docker.com/docker-for-mac/install/){:target="_blank"}, I installed the [Codewind extension in VS Code](http://ibm.biz/vsc-ecw) (other IDEs are also supported) and I was all set.

![image of Kabanero](images/blog/myfirstnodejs_2.png){:width="800px"}

**To IMMEDIATELY get a running cloud-native microservice:**
1. [Install Codewind](http://ibm.biz/ecw-getstarted) (I picked the VS Code extension).
1. In Codewind click ‘create project’.
1. Pick a type. In my case I used ‘Express Node.js’, but many other stacks/languages supported.
1. Give it a name, then <enter>.

**DONE.**

What I got was a fully formed dockerized Node.js ‘hello-world’ microservice that I could see in my browser, the source to play with in VS Code, shell access to the running container, an application health metrics monitor and a performance testing capability.

The ‘Inner Loop’ feature, instantly rebuild/ran any code changes I made, providing instant feedback as I developed. Some types of changes required rebuilding/starting the Docker container the app runs in, but that was transparent to me, as Codewind had the smarts to handle everything in the background.

My first microservice was a utility to re-format copyright CSV data into the notices legal file format required for my offering. Since then, I’ve written several more microservices, continuing to automate parts of the end-to-end open source usage legal process.

<div style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/hFZYn8vK-gg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

Developing microservices with [Eclipse Codewind](http://ibm.biz/eclipse-cw01) has been extremely productive, as I’ve spent zero time worrying about setting up and driving a cloud-native development environment. Neither has any time been wasted figuring out how to containerize my app, then manually drive development build/run/test iterations. Instead, I’ve been able to devote 100% of my time on the business logic in my chosen language.