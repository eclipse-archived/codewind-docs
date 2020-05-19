---
layout: docs
title: "Making a code change with Eclipse"
description: "Making a code change with Eclipse"
keywords: introducing, introduction, overview, tools, get, getting, start, started, install, vscode, visual, studio, code, Codewind for VS Code getting started, VS Code Marketplace, VS Code Extensions view, VS Code workspace,installing Codewind for VS Code
duration: 1 minute
permalink: eclipse-codechange
type: document
order: 1
parent: vsc-overview
---
# Making a code change with Eclipse 
<br/>
Codewind automatically builds and redeploys your application whenever you make a code change and save the file.

To see this feature in action, make a change to the getting started example.

1\. Edit the `index.html` file.

![image of the index.html file as it appears in Eclipse](images/eclipsechangeproject1.png){:width="800px"}

2\. In the file, find the `Congratulations!` line.

![image of the congratulations line in the file](images/eclipsechangeproject2.png)

3\. Change the heading from `Congratulations` to `I did this` and save the file.

![image of the text change](images/eclipsechangeproject3.png)

4\. Click the **Open Application**
![image of the Open Application icon](images/eclipseopenprojecticon.png)
icon to show your code change running.

![image of the application with the code change](images/eclipsechangeproject4.png){:width="800px"}

## Next Steps

**Getting started with Codewind** You have now completed all the steps to get started with Codewind. To learn more about how you can develop using Codewind, choose from the following:

- [Working with templates](./workingwithtemplates.html)
- [Using the Metrics Dashboard for performance monitoring](./metrics-dashboard.html)
 
If you would like to use Codewind with your cloud, choose from the following:

**Using Codewind as a hosted application in the cloud** See the [Codewind on Eclipse Che instructions](./eclipseche-codewind-overview.html)

**Installing Codewind for remote use** You have now completed all the steps to get started with Codewind. If you intend to use Codewind [remotely](./remote-codewind-overview.html), you have now completed the prerequisite step of installing Codewind on your local machine  and can now proceed:

1. Deploy Codewind to your cloud if not already done so by you or a sysadmin/DevOps engineer. See tutorial [Deploying Codewind Remotely](./remote-deploying-codewind.html).
2. Connect your Codewind extension of your local desktop IDE to Codewind in your cloud by following the tutorial [Using Codewind Remotely](./remote-codewind-overview.html).
Next step: [Buiding and deploying in a cloud environment](remote-deploying-codewind.html)

To learn more about the different ways of using Codewind - locally, remotely, or as an application hosted on the cloud - see [Codewind Architecture](./overview.html#architecture).
