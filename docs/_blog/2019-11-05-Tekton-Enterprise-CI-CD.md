---
layout: post
title: "How Tekton can power your enterprise’s continuous integration & continuous delivery"
categories: blog
author: Anita Rass Wan
author_picture: https://avatars3.githubusercontent.com/u/50876789
author_github: https://github.com/rasswan
additional_authors: 
 - name: John Duimovich
   github: https://github.com/jduimovich
   image: https://avatars1.githubusercontent.com/u/7844190?s=400&v=4
seo-title: How Tekton can power your enterprise’s continuous integration & continuous delivery
seo-description: Read about Tekton pipelines in Kabanero, powering enterprise's continuous integration & continuous delivery needs on Kubernetes.
blog_description: "Read about Tekton pipelines in Kabanero, powering enterprise's continuous integration & continuous delivery needs on Kubernetes."
---

Accelerating application delivery is vital for today’s companies as they address market demands. The ability to create new applications quickly and then deploy, manage, and scale these applications is one of the key factors driving cloud adoption. As developers move to cloud, automation of end-to-end processes is a core component of success. This automation typically comes by embracing DevOps, and the adoption of continuous integration (CI) and continuous delivery (CD) as the key to this growth. CI and CD processes can build, deploy, and validate changes in a seamless and programmatic way, enabling developers to reliably integrate and quickly deploy new features in their applications.

CI systems typically integrate code changes by using an automated build and test process. This automated process gives developers the ability to integrate often and discover bugs early, resulting in software that is always ready to deploy. In systems where you deploy every change, you are practicing continuous deployment. However, CD generally refers to continuous delivery, the practice of having processes in place that allow for frequent deployments, even if you don’t deploy every code change.

There are several existing CI/CD tools that developers use to build and/or deploy their applications. These tools are ported to run on top of different cloud environments and provide integrations into cloud native platforms. While many of them provide similar CI/CD capability on the cloud, they aren’t born in the cloud and are unable to take advantage of underlying cloud capability. They are not cloud native tools.

What does it mean to be cloud native and why is it important? Cloud native tools are purpose-built for the cloud. They take advantage of access to instantly available compute and storage resources that can be adapted quickly to the needs of the tool. Cloud native tools also offer simplified maintenance, resiliency, and elasticity, which gives you the ability to scale resources as needed.

== Introducing Tekton 

Tekton is an open source project in the Continuous Delivery Foundation that provides a framework for creating cloud native CI/CD pipelines on Kubernetes. Tekton benefits from a robust community of contributors and provides a set of fundamental building blocks for creating a CI/CD environment. Tekton provides a first-class Kubernetes integration, including custom resource definitions (CRDs) as a standard way to run end-to-end pipelines. 

Each Tekton pipeline is made up of a sequence of tasks. For example, tasks could include a Git clone, a build, a vulnerability scan, running tests, or deploying the application. These tasks can be as simple or complex as needed. Tasks are tied together to make up a pipeline and can be run sequentially, concurrently, or on different nodes. Developers can create new tasks and share them across their enterprise by putting task containers into a container registry and consuming these containers in Tekton Tasks. This basic use case shows how leveraging a cloud native approach can simplify tool distribution across CI/CD systems and have an instant worldwide distribution of this new tool. Teams no longer need to reinstall existing tools across all build and test servers for build agents to use. With a cloud native approach, teams can use this distribution mechanism to deliver and update tools across the organization. 

An integrated CI/CD system also enables operations processes to be reliably automated. Operations activities like applying patches, security fixes, and maintenance can leverage the integrated CI system to provide updated containers for deployment.

== Sample Tekton pipeline

The following image shows a sample Tekton pipeline:

image::/img/blog/Tekton-Intro.png[link="/img/blog/Tekton-Intro.png" alt="Tekton Intro"]

== Summary
Through layered steps and tasks, Tekton pipelines give flexibility to enterprises for their continuous integration and delivery needs on Kubernetes. Tekton pipelines also allow enterprises to meet their customer demands by quickly delivering vital application updates that satisfy enterprise-specific quality and security requirements for cloud native applications. 
 
== Learn More
Kabanero provides pre-built pipelines and tasks using Tekton. You can read more about Tekton pipelines in Kabanero, which provides a modern DevOps toolchain for Kubernetes with cloud native CI/CD pipelines. To learn more about the architecture of Kabanero, go to the link:https://kabanero.io/guides/[Kabanero Guides].  
