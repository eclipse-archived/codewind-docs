---
layout: docs
title: What is Codewind?
description: What is Codewind?
keywords: IDE, cloud native, Kubernetes, cloud, development, VS Code, Eclipse, Eclipse Che, templates, local, remote, hosted, overview, prerequisites
duration: 2 minute
permalink: overview.html
type: document
---

# What is Codewind?

### What is Codewind?

Built from the ground up, Codewind, an [open-source project](https://github.com/eclipse/codewind), supports developers to develop cloud-native applications by extending their Integrated Development Environment (IDE).

### What is involved in developing cloud-native, containerized applications? 

You need to create your own application stack for a containerized microservice that also fits your preferred language and project type.

If you're a software developer, you need to perform many actions as you develop, build, run, and test your code. You need to build images, assess build status, create containers, open application endpoints, debug, analyze the different logs, assess performance metrics, and rebuild the containers with each code change.

Also, you often need to have a certain amount of knowledge in the area of cloud-native, containerized application just to get going.

Finally, if you're responsible for defining standards for application and runtime environments, such as framework and software levels, you need to implement and maintain your standards across the whole development team, ensuring consistency and reliability. 

### How Codewind provides a solution

Codewind extends IDEs to offer a container development flow that feels like a traditional application flow, and [project templates](workingwithtemplates.html) that can be used across development teams. Support for rapid iteration of your code is achieved with features that include automatic updating of containers with code changes, pre-supplied container-based [project templates](workingwithtemplates.html), and a user interface that exposes metrics, logs, and load testing at the click of a button. 

Using their IDE of choice, developers can access their team's standardized [project templates](workingwithtemplates.html).

Different development flows are supported. You can choose whether you want to use a desktop-based or cloud-based IDE, and whether you want to build and run your containers on your desktop or in the cloud.

Codewind can be used to build and run Docker-containerized applications on [**Kubernetes**](https://kubernetes.io/) container orchestration applications, including [**OpenShift**](https://www.openshift.com/), without the need for in-depth knowledge of container technology.

### Codewind's Inner Loop experience
Codewind improves your inner loop experience, enabling you to create a microservice quickly, rapidly iterate on changes, and make improvements to performance thanks to the following features:

1. **Access to preconfigured containerized project templates** Codewind provides preconfigured, Docker-containerized [project templates](workingwithtemplates.html) covering several languages, including [Node.js](https://nodejs.dev/), [Java<sup>TM</sup>](https://www.java.com/), [Python](https://www.python.org/), and [Swift](https://swift.org/), and several frameworks, such as [Express](https://expressjs.com/), [Spring Boot](https://spring.io/projects/spring-boot), and [Open Liberty](https://openliberty.io/). [Quickly create and deploy microservices](https://www.youtube.com/watch?v=zKMggp10gq4&t=12s) in languages and frameworks that you're familiar with. Modify the preconfigured projects to develop your customized microservice.

2. **Ability to add your own standardized project templates** Create your own [project templates](workingwithtemplates.html), and your development teams can access them within their IDE. 

3. **Ability to add your own applications** Access the seamless container development and deployment experience on your IDE that Codewind offers for your current projects.

4. **Auto-build-and-run on code changes** As you develop, Codewind automatically pushes your code changes to your container as efficiently as possible.

5. **Ability to toggle between auto-build and manual build settings** Have control over when you want to implement Codewind's auto-build feature.

6. **Project details that are displayed in a user-friendly panel on your IDE** Use Codewind's Project Overview interface to instantly view the endpoint, container ID, location on disk, build and run status, and ports.

7. **Access application, build, and container logs and run commands from within the container without leaving your IDE** Codewind integrates with your IDE's terminal window and Problems and Output panels for a smooth test and debug experience. Additionally, you can open a shell session inside your container with a simple click.

8. **Support for your IDE's debug features (where supported)** Full compatibility with the debug functionality of your IDE.

9. **Visualize your container application's footprint, such as CPU and memory usage (where supported)** Codewind's Application Metrics Dashboard exposes your microservice's core metrics, including HTTP(S) request and throughput information, as well as CPU usage, memory footprint, and heap.

10. **Integrated load-testing (where supported)** Configure and run load tests against your microservices by using [Codewind's performance dashboard](https://www.youtube.com/watch?v=nfJt3f5TUvc). Use the graphs to compare your repeated load test results and iterate on performance improvements.

### What Integrated Development Environments (IDEs) does Codewind support?

Codewind is available as a desktop IDE extension for [**VS Code**](https://marketplace.visualstudio.com/items?itemName=IBM.codewind), [**IntelliJ**](https://www.jetbrains.com/idea/download) and [**Eclipse**](https://marketplace.eclipse.org/content/codewind), and as a cloud-based IDE extension for [**Eclipse Che**](https://www.eclipse.org/codewind/che-installinfo.html).

### What cloud-native technology does Codewind support
Codewind supports [Kubernetes](https://kubernetes.io/) and [OpenShift](https://www.openshift.com/) for container orchestration. 

### Where do I develop my code? Where can I build and run my containers? How does Codewind support my development flow?
Codewind supports different configurations for developing your containerized applications, so you can use Codewind with whichever development flow you choose. You can develop containerized applications on your desktop, directly in the cloud, or a combination of both. To find out more about the three ways of using Codewind - locally, remotely, or as a hosted application on your cloud - see [Getting Started](./gettingstarted-overview.html).

### What preconfigured containerized projects does Codewind provide?
* Codewind provides preconfigured [project templates](workingwithtemplates.html) covering several languages, including [Node.js](https://nodejs.dev/), [Java<sup>TM</sup>](https://www.java.com/), [Python](https://www.python.org/), and [Swift](https://swift.org/) and several frameworks, such as [Express](https://expressjs.com/), [Spring Boot](https://spring.io/projects/spring-boot), and [Open Liberty](https://openliberty.io/).
 
* Codewind also supplies [Appsody](https://appsody.dev/) [project templates](workingwithtemplates.html) for many languages and frameworks. 

### What are the prerequisites for Codewind?
Codewind requires Docker Desktop for Windows<sup>TM</sup> or Mac, or Docker Engine, Docker Compose for Linux<sup>TM</sup> and your favorite IDE.

### Can I contribute to the project?
Codewind is an [open-source Eclipse project](https://github.com/eclipse/codewind). 

[Contribute in GitHub](https://github.com/eclipse/codewind) and let us know what you think on [Mattermost](https://mattermost.eclipse.org/eclipse/channels/eclipse-codewind).

