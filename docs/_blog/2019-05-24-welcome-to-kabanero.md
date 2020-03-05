---
layout: post
title: "Welcome to Kabanero - Where some like it hot"
categories: blog
author_picture: https://avatars2.githubusercontent.com/u/50369766
author_github: https://github.com/Kabanero-io
seo-title: Welcome to Kabanero

seo-description: Kabanero is an open source project that is focused on bringing together several foundational open source technologies in well-architected ways...

blog_description: "Kabanero is an open source project that is focused on bringing together several foundational open source technologies in well-architected ways..."
permalink: huh
---
= Welcome to Kabanero - where some like it hot
Alan Little <https://github.com/Kabanero-io>

Welcome to the Kabanero open source project, where our aim is to add some serious flavor to the experience of building apps on Kubernetes.  Our project is focused on simplifying the task of architecting, developing, deploying, and managing cloud-native apps, using tailored application stacks and tightly integrated tooling that works in harmony with open source.

Kabanero brings together foundational open source technologies into a modern microservices-based framework for building applications on Kubernetes. The number of open source technologies businesses have today for delivering IT function is overwhelming. Kabanero reduces the complex choices, yet retains flexibility. Kabanero enables architects to design and define, developers to write code faster with confidence, and operators to manage efficiently.  

The industry has converged on two key principles that Kabanero embraces:

* Building containerized applications with containerized middleware is a must.
* Kubernetes is the underlying container orchestration environment for new applications.

The Kabanero team did persona-based design thinking on the needs of the roles involved. We tested our hypothesis from these design thinking sessions with users from businesses that are on a journey to move to Cloud. What we found as the as-is state does not meet these customers desired outcomes, and our proposed to-be states drastically improved the issues they were encountering with shifting responsibilities between the personas. This led them to believe that Kabanero will help teams builds software faster, that's ready for cloud deployment, and fits with how organizations are structured today and brings them forward to a more efficient way of delivering code.


We find three personas throughout organizations today that Kabanero is designed for -- Champ, Jane, and Todd.

Champ "The architect" (Enterprise, solution or application)

Champ is responsible for ensuring his company's overall architecture holds together and business applications are governed to meet company and industry regulations. He is looking for consistency and flexibility applied to his chosen languages, runtimes, and tools. This reduces training costs and enables developers to move between projects. Champ seeks to provide Jane and Todd a small number of application stacks that allow them to efficiently build and manage applications. He wants to move the company’s application estate forward and modernize the significant investment that he and his predecessors have made on the company’s behalf.

Jane "The established Java developer"

Jane is skilled at developing Java, Java EE, and Spring applications for traditional application servers. Jane is keen to learn new languages and frameworks to exploit the full potential of cloud-native applications and services. Her role requires her to focus on application logic, business logic, and the underlying infrastructure. She is constantly under pressure to deliver code at a faster pace and with higher quality. Champ's goal is to provide Jane with his approved application stacks to enable Jane to develop applications for Kubernetes.

Todd "The operator"

Todd is responsible for operating the Kubernetes platform and the applications produced by Jane. His focus is on tailoring a set of automation pipelines to ensure the applications meet his needs for running the systems that he is responsible for. Todd is also responsible for monitoring the systems and ensuring that he can meet the availability requirements set by his company or the line of business. Todd ensures a smooth transition between the development team and the delivery of code into production by using a set of standards and automation to maintain continual compliance.

== What we're currently focused on...

A central Kabanero concept is an application stack. An application stack defines the runtimes and frameworks that Jane will use to develop the applications. It also includes educational material, samples, and documentation that she can use to learn how to build these applications. This is infused with expertise for deploying onto Kubernetes including security, scale, health and liveliness. The application stack is the entity that Todd installs and Champ curates before sharing it with Jane.


Application stacks will include both templates for Jane’s application as well as certified base container images that provide a runtime (and much more) for Jane’s code. Champ is responsible for curating his approved application stacks locally into an Application Hub. We'll be writing more about this in an upcoming blog post.


To better develop applications in containers for Kubernetes from day one, we have chosen Eclipse Codewind which provides extensions to popular developer IDEs, including VS Code, Eclipse, and Eclipse Che for teams working in a hosted development environment. Jane can build both new applications, or modernize existing apps, using her preferred tools. Inner loop development happens inside a container, right from the start, making it easier for Jane to be confident about her code when it's checked in. Jane can then check her code into Git where the next phase of the process begins.


Checking the code into Git causes a webhook to be kicked off; this webhook causes a CI/CD pipeline to start -- this is all part of the integrated and automated application lifecycle that Kabanero provides. By default we use Tekton pipelines to manage the deployment lifecycle. Tekton is a Kubernetes-native open source project for creating CI/CD pipelines, that originated from the Knative project. More details will be discussed in a later blog, including how to plug in other CI/CD options.


The application stack used by Jane, which was set up by Champ, causes the container to be built in a manner that is prescribed by the Kubernetes Special Interest Group for Applications. This allows a component of Kabanero called Application Navigator to provide a management view to all the pieces of an application. It enables groups of containers that work together to be visualized and managed together by Todd and Jane.

== Stay tuned, we're just getting started

As the project progresses you'll see us building in the open. We'll introduce many more topics for each of our key personas. Here are a few topics that are to come:

* Education guides and samples
* Runtimes and languages that can be used to build applications
* Details on the Application Hub and workflows for Champ to manage it
* How applications are validated for security
* How APIs are integrated into the flow and managed

Keep checking in with us. You will see the site come alive with guides, code and additional blogs. Meanwhile, follow us on Twitter, or join our slack channel to tell us what you think or want to see more of!
