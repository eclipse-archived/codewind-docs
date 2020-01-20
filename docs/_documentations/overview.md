---
layout: docs
title: Overview
description: Overview
keywords: install, standalone, cloud
duration: 1 minute
permalink: Overview
type: document
parent: root
---

# What is Codewind?
Codewind is an [open source project](https://github.com/eclipse/codewind) for building and developing cloud native, containerized applications. Built from the ground up, Codewind provides an improved and integrated IDE-based container development flow. We're all about the developer experience. 

From creating your project, all the way to debugging and optimizing, Codewind does the heavy lifting so that you can simply focus on rapidly iterating your code. Expose the metrics and logs that you need, perform load testing at the click of a button, and relax in a flow that will feel the same as a traditional application flow.

When it comes to running your microservices on the cloud, you can use Codewind to build and run Docker-containerized applications on [Kubernetes](https://kubernetes.io/) container orchestration applications, including [OpenShift](https://www.openshift.com/), without the need for in-depth knowledge of container technology.

### How does Codewind help me develop containerized applications?
Codewind improves your inner loop experience, enabling you to create a microservice quickly, rapidly iterate on changes, and make improvements to performance thanks to the following features:

1. **Access to pre-configured containerized project templates** Codewind provides pre-configured, Docker-containerized project templates covering several languages including [Node.js](https://nodejs.dev/), [Java](https://www.java.com/), [Python](https://www.python.org/) and [Swift](https://swift.org/), and several frameworks such as [Express](https://expressjs.com/), [Spring Boot](https://spring.io/projects/spring-boot) and [Open Liberty](https://openliberty.io/). [Quickly create and deploy microservices](https://www.youtube.com/watch?v=zKMggp10gq4&t=12s) in languages and frameworks that you're familiar with. Modify the pre-configured projects to develop your customised microservice.

2. **Ability to add your own applications** Access the seamless container development and deployment experience on your IDE that Codewind offers for your current projects.

3. **Auto-build-and-run on code changes** As you develop, Codewind *automatically* pushes your code changes to your container as efficiently as possible. 

4. **Ability to toggle between auto-build and manual build settings** Have control over when you want to implement Codewind's auto-build feature.

5. **Project details displayed in a user-friendly panel on your IDE** Use Codewind's Project Overview interface to instantly view the endpoint, container ID, location on disk, build and run status, and ports.

6. **Access application, build and container logs and run commands from within the container without leaving your IDE** Codewind integrates with your IDE's terminal window and PROBLEMS and OUTPUT panels for a smooth test and debug experience. Additionally, you can open a shell session *inside* your container with a simple click.

7. **Support for your IDE's debug features**<sup>*</sup>  Full compatibility with the debug functionality of your IDE.

8. **Visualize your container application's footprint such as CPU and memory usage** <sup>*</sup> Codewind's Application Metrics Dashboard exposes your microservice's core metrics, including HTTP(S) request and throughput information, as well as CPU usage, memory footprint and heap.

9. **Integrated load-testing** <sup>*</sup> Configure and run load tests against your microservices using [Codewind's performance dashboard](https://www.youtube.com/watch?v=nfJt3f5TUvc). Use the graphs to compare your repeated load test results and iterate on performance improvements. 

<sup>*</sup> where supported.

### What Integrated Development Environments (IDEs) does Codewind support?

* Codewind is available as an extension for [**VS Code**](https://marketplace.visualstudio.com/items?itemName=IBM.codewind) and [**Eclipse**](https://marketplace.eclipse.org/content/codewind) for local development work. In this setup, your integrated development environment is located locally, but the build and run itself can be done either locally or remotely.

* If instead you prefer to develop your code from within the cloud enviroment where your microservice will be built and run, you can use Codewind for [**Eclipse Che**](https://www.eclipse.org/codewind/mdt-che-installinfo.html).

### What cloud-native technology does Codewind support?
When it comes to running your containerized application on the cloud, Codewind supports [Kubernetes](https://kubernetes.io/) and [OpenShift](https://www.openshift.com/) for container orchestration. 

### How does Codewind support my development architecture?
Codewind supports several architectures, so you can use your local, test, and deployment infrastructure however suits your teams. 

* **Support for hosting your development environment locally or remotely** Your code development, which takes place within your IDE, can be located either locally or on your cloud. 

* **Support for building and running your containers locally or remotely** The building and running of your microservice is actioned by the Codewind Server, which can be located locally or on your cloud.

These options mean that you can use Codewind in 3 different setups:

1. **local configuration** - your IDE is hosted on your desktop. The building and running of your microservice also takes place on your desktop, via your local Docker Desktop installation (or, if you are using Linux, your local Docker Engine and Docker Compose installations).

2. **fully hosted configuration** - both your IDE and the Codewind server are hosted on your cloud. In this setup, your code development takes place in the same location that your microservices are built and run.

3. **remote configuration** - your IDE is hosted on your desktop, but the building and running of your microservice is undertaken on your cloud environment by the Codewind server. Using secure HTTPS connections, you connect to your multiple cloud-hosted microservices from the Codewind panel in your locally-hosted IDE.


### What pre-configured containerized projects does Codewind provide?
Codewind provides pre-configured project templates covering several languages including [Node.js](https://nodejs.dev/), [Java](https://www.java.com/), [Python](https://www.python.org/) and [Swift](https://swift.org/), and several frameworks such as [Express](https://expressjs.com/), [Spring Boot](https://spring.io/projects/spring-boot) and [Open Liberty](https://openliberty.io/).
 
Codewind also supplies [Appsody](https://appsody.dev/) project templates for many languages and frameworks. 

### What are the prerequisites for Codewind?
Codewind requires Docker Desktop for Windows or Mac, or Docker Engine and Docker Compose for Linux.

### Can I contribute to the project?
Codewind is an [open source Eclipse project](https://github.com/eclipse/codewind). 

[Contribute in GitHub](https://github.com/eclipse/codewind) and let us know what you think via [Mattermost](https://mattermost.eclipse.org/eclipse/channels/eclipse-codewind).

