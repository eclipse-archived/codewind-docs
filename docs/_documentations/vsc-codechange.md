---
layout: docs
title: "Codewind for VS Code"
description: "Codewind for VS Code"
keywords: introducing, introduction, overview, what is, tools, vscode, visual, studio, code, java, microprofile, spring, node, nodejs, node.js, javascript, Codewind for VS Code, tools, view, debug, integrate, open a shell session, toggle auto build, manually build, scope VS Code workspace, disable, enable, delete
duration: 1 minute
permalink: vsc-codechange
type: document
order: 2
parent: gettingstarted
---
# Making a code change

Codewind will automatically build and redeploy your application whenever you make a code change and save the file.

To see this in action, we can make a change to the getting started example.

First step is to edit the index.html file

![](../images/vsc-codechange.png)

and navigate to the bottom of the file to find the lines

![](../images/vsc-codeline.png)

Change the heading from *Congratulations* to be *I did this* 

![](../images/vsc-ididthis.png)

You will see the status of the project change to be *stopped* whilst the project is being rebuilt and deployed

![](../images/vsc-buildstopped.png)

After a few moments, the status will change back to running

![](../images/vsc-buildrunning.png)

Clicking the
![](../images/launchicon.png)
icon will now show your code change running

![](../images/vsc-screenchanged.png)

Next step, 
<a class="cw-gettingstarted-card-link" href="remote-overview.md">Buiding and deploying in a cloud environment</a>