---
layout: post
title: "Want to get a microservice up and running super quickly? Try Codewind."
categories: blog
author_picture: https://miro.medium.com/fit/c/96/96/0*Vl79KlGMXrzQcZNB.jpeg
author_github: https://github.com/Kabanero-io
author: Dr Melanie Hopper
seo-title: "Want to get a microservice up and running super quickly? Try Codewind."

seo-description: "Whether you are new to the world of microservices, or are a seasoned containerised applications developer, you’ll know of the various ways that your time can be sapped from the nitty gritty work of writing good code."

blog_description: "Whether you are new to the world of microservices, or are a seasoned containerised applications developer, you’ll know of the various ways that your time can be sapped from the nitty gritty work of writing good code."
permalink: quickmicroservice
---

Whether you are new to the world of microservices, or are a seasoned containerised applications developer, you’ll know of the various ways that your time can be sapped from the nitty gritty work of writing good code.
There’s the task of creating your own application stack for a containerised microservice that also fits your preferred language and project type.
Then there’s the multiple commands you must run to build images, create containers, assess build status, open end points, debug, eyeball the different logs, assess performance metrics, re-build the containers with each code change…the list goes on.

Well, there’s an open source tool that’s been developed with you in mind. It’s called Codewind.
Not only will you be able to choose your microservice from a list of pre-supplied project templates, you’ll have a fully integrated container development environment at your fingertips.
Say what?
We’ll show you.
We’re going to get a microservice up and running in a container within 2 minutes just by using the Codewind plugin for VS Code. Then we’re going to run through some of the features that Codewind provides for your inner loop work.
Let’s get started.
1. Choose your microservice from Codewind’s list of pre-configured, container-ready project templates
After getting our pre-requisites of Docker Desktop and Codewind for VS Code installed, let’s choose our microservice.
Screenshot of Codewind plugin panel in VS Code. The Project menu is shown with the Create New Project option selected
Create a new project using Codewind’s project templates
A right-click on the Projects tree of the Codewind view in VS Code offers the option of creating a new project by selecting from a list of project templates. These templates cover several languages including Node.js, Java, Python and Swift, and several frameworks such as Express, Spring Boot and Open Liberty, with more on the way.

Screenshot of Codewind for VS Code, showing a few of the many project templates available
As soon as you select the template, Codewind will automatically build the project and run it in a container, in this case hosted by your local Docker Desktop. And that’s it! You’ve got a running containerized application! Congratulations!
Ok, so what about the container itself?
2. You can probe and take a look inside your container without having to leave VS Code
By integrating with VS Code’s terminal window and output panels, Codewind enables you to view your container’s logs, run docker commands to get detailed information on the containers and run commands from within the container, all from the comfort of your IDE.
Taking a look inside your container couldn’t be easier — just right-click the project in the codewind project tree to open a shell into your container. Job done.
3. Want information on your microservice?
Use Codewind’s Project Overview feature to instantly view the location of the endpoint, the container ID, location on disk, build and run status, and ports.

You also have the option to build, remove, or disable your project from this panel. Simply click the information icon located next to your project listing in the Codewind view project tree to open your project’s overview window.
4. Viewing your microservice endpoint is also just a click away.
Navigating back to the project’s listing in the Codewind view project tree, this time click the Open External Site icon, and the endpoint is opened in your default browser.

Browser endpoint of the node.js express Codewind template
5. Make a change to your code and watch Codewind implement these changes intelligently.
Codewind automatically rebuilds your code changes, redeploying as efficiently as possible. You can see the automatic restart in action by watching how the project’s build and run statuses change in the Codewind project listing view.
6. Additional features
Codewind has many other features that make for a smooth inner loop experience, which include:
application and performance dashboards that allow you to observe real-time changes and improve your code as you develop
full compatibility with the Debug functionality of VS Code.
ability to open your own containerised projects in Codewind and use Codewind’s development environment features
Fancy a go?
Experience what the Codewind integrated container development experience can do for you by downloading Codewind from the VS Code or Eclipse marketplace.
Watch Codewind in action and subscribe on our Youtube Channel.
Have questions or feedback? We’re all ears. Let us know what you think.