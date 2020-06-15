---
layout: post
title: "JDK 14 is now here, but will my Java application run on it?"
categories: blog
featured_image: https://i1.wp.com/softwareengineeringdaily.com/wp-content/uploads/2020/01/Java-Debugging-Tips-881x441.jpg?resize=730%2C389&ssl=1
author_picture: images/blog/author_icon_nik_canvin.jpg
author_url: https://www.linkedin.com/in/nik-canvin-110326/
author: Nik Canvin
description: "Well, ... NO... as it turns out... for my specific application at least, here’s how I tested against JDK14, then found, debugged and fixed an issue in minutes! New versions of the layers in your..."
permalink: jdk-14-is-coming-but-will-my-java-application-run-on-it.html
duration: 4 minutes
tags: [JDK, Java, Containers, Cloud Computing, Microservices]
---
Well, ... NO... as it turns out... for my specific application at least, here’s how I tested against JDK14, then found, debugged and fixed an issue in minutes!

![image of the dependency microservice](images/blog/jdk14coming_1.gif)
*JDK 14 tested clean, after an issue was identified/fixed*
{: style="text-align: center;"}

New versions of the layers in your application software stack are continuously released and often contain API breaking changes, especially as security fixes strive to lock down every possible risky code path. In the latest JDK14 release[1] for example, the ‘JEP367 to Remove the Pack200 Tools and API’[2] could bring your application or build process to a grinding halt and if it does, what can you do about it!

Staying current on the latest software stack has never been more critical to ensure your application gets the latest security features and fixes, as well as minimizing business agile development blocking technical debt!

The best way to stay current is to continuously test your application on latest stack levels, so here I’ve shared a great quick, easy and cheap way to achieve it. However, before I share my favourite method, it’s worth pointing out support can mean two things, which I’ll touch on later on:
1. Toleration — simply put, will the application still run at all!
2. Exploitation- will the application run better in some way, such as faster due to performance improvements, more resilient due to enhanced fault toleration, or maybe easier to debug issues thanks to new diagnostic features.

### Containerize your application and simply interchange software stack levels as required
Running a Java application in a container, using an implementation such as OCI or Docker, enables it to easily run in a controlled environment. Then in this JDK 14 case, I simply switched the Java Runtime used, re-built the container and tested it.

Simple in theory but the investment and maintenance of containerization skills and devops pipelines pain point, adds yet more pressure on stretched technology teams. This is where [Eclipse Codewind](https://www.eclipse.org/codewind/) had the answer, as it’s designed specifically to automate this pain point. Developing in your favorite IDE (Intellij, Eclipse and VS Code all currently supported), Codewind handles the Containerization and Kubernetes part automatically. To switch the JDK version to 14 (I was previously running on JDK8), I saved a simple update to the Dockerfile and Codewind did the rest.

![image of the dependency microservice](images/blog/jdk14coming_2.png)
*Switched the build process to JDK14, in the Dockerfile*
{: style="text-align: center;"}

The update was automatically spotted and new container instantly built and …oh, a BUILD FAILURE .. not what I was expecting. A ‘maven-war-plugin’ hit an API incompatibility issue:

![image of the docker build log](images/blog/jdk14coming_3.png)
*Docker build log extract, (using Codewind plugin in VS Code)*
{: style="text-align: center;"}

Toggling back to JDK13 the application built and ran, providing instant confirmation that this breaking change was introduced in JDK14.

Using Codewind to search the project for ‘maven-war-plugin’ I found it declared in the ‘pom.xml’ file, using version ‘2.6’. A quick web search steered me to the MvnRepository page, where I saw ‘2.6’ was released in 2015 (might security vulnerabilities lurk in that) and the latest version is now ‘3.2.3', so a quick edit to the pom.xml was made:

![image of the version bump](images/blog/jdk14coming_4.png)
*Bumping the version from 2.6 up to the latest 3.2.3 ( update made/saved in Codewind)*
{: style="text-align: center;"}

Codewind automatically spotted the ‘pom.xml’ file save, rebuilt the application (fully successful that time) and ran it. Issue resolved!

### Just to recap
A build process pre-requisite did not support JDK14. However, without personally having installed Kubernetes or having containerization skills, using Codewind I was able use containerization to test, find and fix an issue, in a matter of minutes.

#### Here are a few extra tips to consider:
1. Regarding testing for ‘exploitation’ mentioned above, Codewind has built-in performance monitoring and testing tools, that enable measurement of any improvements achieved by switching software stack layers.
2. It may be worth fully automation the currency testing activity. You could automate systematic changes to the Dockerfile, changing each software stack layer to the latest versions/releases and running your test suite against it. This could provide you with the earliest possible feedback that some technical debt had been incurred, helping you to plan to most cost effective response.
3. Of course the larger the application, the more APIs that are used in pre-requisite software, the more likely it is that stack currency testing hit issues. Here’s a great approach breaking application down into bite size microservices, see Modernize existing apps and build new cloud-native apps[4], offered by IBM.
4. Here’s one final tip regarding consolidating management and patching of software levels in the application stack of multiple microservices in one go (for example, bumping up the JDK level of many microserivces). Using the architectural stack features in Kabanero.io[5], a single JDK level change can instantly feed into scoped future development and deployment of new or updated microservices.

### References mentioned above:
1. JDK 14 release contents: [https://openjdk.java.net/projects/jdk/14/](https://openjdk.java.net/projects/jdk/14/){:target="_blank"}
2. JEP367 to Remove the Pack200 Tools and API: [https://openjdk.java.net/jeps/367](https://openjdk.java.net/jeps/367){:target="_blank"}
3. Eclipse Codewind (plug-in for VS Code, Eclipse and Intellij) to automate application containerization develop/build/run iterations: [https://www.eclipse.org/codewind/](https://www.eclipse.org/codewind/)
4. Modernize existing apps and build new cloud-native apps, offered by IBM: [https://www.ibm.com/cloud/cloud-pak-for-applications](https://www.ibm.com/cloud/cloud-pak-for-applications){:target="_blank"}
5. Kabanero, an open source project focused on bringing together foundational open source technologies into a modern microservices-based framework: [https://kabanero.io/](https://kabanero.io/){:target="_blank"}