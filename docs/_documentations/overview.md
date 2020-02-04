---
layout: docs
title: `What is Codewind?`
description: Overview
keywords: install, standalone, cloud
duration: 1 minute
permalink: Overview
type: document
parent: root
---

# What is Codewind?

Building and Developing a cloud native, containerised application can be challenging. 

Firstly, you need to create your own application stack for a containerised microservice that also fits your preferred language and project type.

Then, if you are a software developer, you need to perform many actions as you develop, build, run and test your code - you need to build images, assess build status, create containers, open application end points, debug, analyse the different logs, assess performance metrics, and re-build the containers with each code change.

Or, if you are responsible for defining standards for application and runtime environments such as framework and software levels, you need to implement and maintain your standards across the whole development team, ensuring consistency and reliability. 

Built from the ground up, Codewind, an [open source project](https://github.com/eclipse/codewind), helps you to achieve all of the above by extending your Integrated Development Environment(IDE). Container development flow feels like a traditional application flow and project templates can be used across your development teams effortlessly. Support for rapid iteration of your code is achieved using features including automatic updating of containers with code changes, pre-supplied container-based project templates and a user interface that exposes metrics, logs and load testing at the click of a button. Your own standardised templates can be accessed by your developers using their IDE of choice.

Different development flows are supported, so you can choose whether you want to use a Desktop-based or cloud-based IDE, and whether you want to build and run your containers on your Desktop or in the Cloud.

Codewind can be used to build and run Docker-containerized applications on [Kubernetes](https://kubernetes.io/) container orchestration applications, including [OpenShift](https://www.openshift.com/), without the need for in-depth knowledge of container technology.

### How does Codewind help me develop containerized applications?
Codewind improves your inner loop experience, enabling you to create a microservice quickly, rapidly iterate on changes, and make improvements to performance thanks to the following features:

1. **Access to pre-configured containerized project templates** Codewind provides pre-configured, Docker-containerized project templates covering several languages including [Node.js](https://nodejs.dev/), [Java](https://www.java.com/), [Python](https://www.python.org/) and [Swift](https://swift.org/), and several frameworks such as [Express](https://expressjs.com/), [Spring Boot](https://spring.io/projects/spring-boot) and [Open Liberty](https://openliberty.io/). [Quickly create and deploy microservices](https://www.youtube.com/watch?v=zKMggp10gq4&t=12s) in languages and frameworks that you're familiar with. Modify the pre-configured projects to develop your customised microservice.

2. **Ability to add your own standardised project templates** Create your own project templates and your development teams can access them within their IDE. 

3. **Ability to add your own applications** Access the seamless container development and deployment experience on your IDE that Codewind offers for your current projects.

4. **Auto-build-and-run on code changes** As you develop, Codewind *automatically* pushes your code changes to your container as efficiently as possible. 

5. **Ability to toggle between auto-build and manual build settings** Have control over when you want to implement Codewind's auto-build feature.

6. **Project details displayed in a user-friendly panel on your IDE** Use Codewind's Project Overview interface to instantly view the endpoint, container ID, location on disk, build and run status, and ports.

7. **Access application, build and container logs and run commands from within the container without leaving your IDE** Codewind integrates with your IDE's terminal window and PROBLEMS and OUTPUT panels for a smooth test and debug experience. Additionally, you can open a shell session *inside* your container with a simple click.

8. **Support for your IDE's debug features**<sup>*</sup>  Full compatibility with the debug functionality of your IDE.

9. **Visualize your container application's footprint such as CPU and memory usage** <sup>*</sup> Codewind's Application Metrics Dashboard exposes your microservice's core metrics, including HTTP(S) request and throughput information, as well as CPU usage, memory footprint and heap.

10. **Integrated load-testing** <sup>*</sup> Configure and run load tests against your microservices using [Codewind's performance dashboard](https://www.youtube.com/watch?v=nfJt3f5TUvc). Use the graphs to compare your repeated load test results and iterate on performance improvements. 

<sup>*</sup> where supported.

### What Integrated Development Environments (IDEs) does Codewind support?

Codewind is available as a Desktop IDE extension for [**VS Code**](https://marketplace.visualstudio.com/items?itemName=IBM.codewind) and [**Eclipse**](https://marketplace.eclipse.org/content/codewind), and as a cloud-based IDE extension for [**Eclipse Che**](https://www.eclipse.org/codewind/mdt-che-installinfo.html).

### What cloud-native technology does Codewind support?
Codewind supports [Kubernetes](https://kubernetes.io/) and [OpenShift](https://www.openshift.com/) for container orchestration. 

### Where can I use Codewind? How does Codewind support my development flow?
Codewind supports several ways to develop your applications, so you can develop containerised applications on your desktop, directly in the cloud, or a combination of both:

1. **Use Codewind locally** - your IDE, with the Codewind extension installed, and Docker Desktop<sup>**</sup>, is all you need to build and run containerised applications on your Desktop.

2. **Use Codewind as a hosted application on your cloud** - both your IDE, with the Codewind extension installed, and your containerised applications, are located in your cloud environement.

3. **Use Codewind remotely** - your IDE, with the Codewind extension installed, is hosted on your desktop, but the building and running of your microservice takes place in your cloud enviroment. Using secure HTTPS connections, you connect to your multiple cloud-hosted microservices from the Codewind panel in your desktop-hosted IDE.

<sup>**</sup> or, if you are using Linux, your local Docker Engine and Docker Compose installations

### What preconfigured containerized projects does Codewind provide?
Codewind provides preconfigured project templates covering several languages including [Node.js](https://nodejs.dev/), [Java](https://www.java.com/), [Python](https://www.python.org/) and [Swift](https://swift.org/), and several frameworks such as [Express](https://expressjs.com/), [Spring Boot](https://spring.io/projects/spring-boot) and [Open Liberty](https://openliberty.io/).
 
Codewind also supplies [Appsody](https://appsody.dev/) project templates for many languages and frameworks. 

### What are the prerequisites for Codewind?
Codewind requires Docker Desktop for Windows or Mac, or Docker Engine and Docker Compose for Linux.

### Can I contribute to the project?
Codewind is an [open source Eclipse project](https://github.com/eclipse/codewind). 

[Contribute in GitHub](https://github.com/eclipse/codewind) and let us know what you think via [Mattermost](https://mattermost.eclipse.org/eclipse/channels/eclipse-codewind).

