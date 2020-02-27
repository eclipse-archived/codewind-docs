---
layout: docs
title: "Making a code change with VS Code"
description: "Making a code change with VS Code"
keywords: introducing, introduction, overview, tools, get, getting, start, started, install, vscode, visual, studio, code, Codewind for VS Code getting started, VS Code Marketplace, VS Code Extensions view, VS Code workspace,installing Codewind for VS Code
duration: 1 minute
permalink: vsc-codechange
type: document
order: 1
---
# Making a code change with VS Code
<br/>
Codewind automatically builds and redeploys your application whenever you make a code change and save the file.

To see this feature in action, make a change to the getting started example.

1\. Edit the `index.html` file:

![](dist/images/vsc-codechange.png){:width="800px"}

2\. In the file, find the `Congratulations!` line.

![](dist/images/vsc-codeline.png)

3\. Change the heading from `Congratulations` to `I did this`:

![](dist/images/vsc-ididthis.png)

The status of the project changes to **Stopped** while the project is rebuilt and deployed:
 
![](dist/images/vsc-buildstopped.png)

After a few moments, the status changes back to **Running**:

![](dist/images/vsc-buildrunning.png)

4\. Click the **Open Application** icon to show your code change running:
![](dist/images/launchicon.png)

![](dist/images/vsc-screenchanged.png)

Next step: [Buiding and deploying in a cloud environment](remote-overview.html)
