---
layout: docs
title: "Creating your first Codewind project with Codewind for Eclipse"
description: "Creating your first Codewind project with Codewind for Eclipse"
keywords: introducing, introduction, overview, what is, tools, vscode, visual, studio, code, java, microprofile, spring, node, nodejs, node.js, javascript, Codewind for VS Code, tools, view, debug, integrate, open a shell session, toggle auto build, manually build, scope VS Code workspace, disable, enable, delete
duration: 1 minute
permalink: eclipse-firstproject
type: document
order: 2
---
# Creating your first Codewind project with Codewind for Eclipse
<br/>
To create your first project:

1\. Right-click the **Local [Running]** item and select **Create New Project...**.

![image of the menu where you select Create New Project](images/eclipsecreateproject1.png){:width="800px"}

2\. Creating a new project displays the project creation screen.

![image of the project creation screen](images/eclipsecreateproject2.png){:width="800px"}

3\. Enter a name for the project and change the location if you want. Scroll through the list of templates until you see **Node.js Express**. For more information about templates, see [Working with templates](workingwithtemplates.html).

![image of the list of templates](images/eclipsecreateproject3.png){:width="800px"}

4\. Select this template and click **Finish**. You now see the project overview screen.

![image of the project overview screen](images/eclipsecreateproject4.png){:width="800px"}

5\. Codewind now starts to build and run your very first project. This process initially takes several minutes, depending on the speed of your network and the selected project.

Once complete, the following screen shows your application is built and running. 

![image of the screen that shows the application is built and running](images/eclipsecreateproject5.png){:width="800px"}

6\. To view your running application, select it in the Codewind Explorer view and click the **Open Application** icon.
![image of the Open Application icon](images/eclipseopenprojecticon.png)

This icon launches your web browser and displays your application.

![image of the application in the web browser](images/eclipsefirstprojectrunning.png){:width="800px"}

Congratulations, you have now created, built and run your first Codewind project using Codewind on your local machine.

# Next Steps

Choose from the following:

**Getting started with Codewind - next steps** Continue to instructions for [Making a Code change with Eclipse](./eclipse-codechange.html) to see the auto-build-and-run feature in action.

**Installing Codewind for remote use** If you intend to use Codewind [remotely](./remote-codewind-overview.html), you have now completed the pre-requisite step of installing Codewind on your local machine and can proceed to:

1. Deploy Codewind to your cloud if not already done so by you or a sysadmin/DevOps engineer. See tutorial [Deploying Codewind Remotely](./remote-deploying-codewind.html).
2. Connect your Codewind extension of your local desktop IDE to Codewind in your cloud by following the tutorial [Using Codewind Remotely](./remote-codewind-overview.html).