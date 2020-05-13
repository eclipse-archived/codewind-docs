---
layout: post
title: "Codewind in IntelliJ IDEA"
categories: blog
author_picture: images/blog/author_icon_john_pitman.png
author_url:
author: John Pitman
blog_description: "Update on support for Codewind in IntelliJ IDEA"
permalink: codewind-in-intellij-may
duration: 2 minutes
tags: [IntelliJ]
---

Over the past few months we've been hard at work creating a plugin for IntelliJ IDEA to add support for Codewind. This is a tech preview, because there are still some fundamental features to be implemented, but we have made significant progress.

Our first tech-preview release included basic support for Codewind, and last month we added the ability to show the log files, open the performance dashboard, and debug projects.

This month, we've added the support for opening the application metrics dashboard, and the ability to open a shell into the application container.  Stay tuned for more function to be delivered next month.

Here's a high-level feature comparison between the IDEs

| Feature |  VSCode  |  Eclipse	 |  IntelliJ  |
| ------------- | ------------- | ------------- | ------------- |
| Local container development | x | x | x | 
|Automatic project build | x | x | x |
|Remote codewind connection | x | x | |
|Launch Application | x | x | x |
|Local debug mode | x | x | x |
|Application Metrics view | x | x | new |
|Performance Tool | x | x | new |
|Inject metrics endpoint | x | x | new |
|View container logs | x | x | x |
|View application logs | x | x | x |
|Open Container Shell | x | x | new |
|Example templates | x | x | x |
|Template manager support | x | x | |
|Node.js profiler plugin | x |  | |
|Java profiler plugin | x |  | |
|OpenAPI plugin | x |  | |

