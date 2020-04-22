---
layout: docs
title: "Creating your first VS Code Codewind project"
description: "Creating your first VS Code Codewind project"
keywords: introducing, introduction, overview, what is, tools, vscode, visual, studio, code, java, microprofile, spring, node, nodejs, node.js, javascript, Codewind for VS Code, tools, view, debug, integrate, open a shell session, toggle auto build, manually build, scope VS Code workspace, disable, enable, delete
duration: 1 minute
permalink: vsc-firstproject
type: document
order: 2
---
# Creating your first VS Code Codewind project
<br/>
To create your first project:

1\. Click the prompt in the **Codewind** window.

![image of VS Code without any local Codewind projects](images/createproject.png)

2\. This prompt displays a list of project types for you to select. 

![image of the list of project types](images/listtemplates.png)

3\. Scroll through the list until you see **Node.js Express (Default templates)**.

![image of Node.js Express (Default templates) as it appears in the list of project types](images/nodetemplate.png)

4\. Selecting this template prompts you to enter a name for your project.

![image of the text field where you can enter the name of your project](images/projectname.png)

5\. Enter a name and then choose where to create this on disk. For example, `myFirstNodeProject`.

![image of folder locations where you can store the project](images/projloc.png)

6\. Codewind now starts to build and run your very first project. Once complete, the following screen shows your application is built and running.

![image of the screen that shows that the project is built and running](images/allbuilt.png)

7\. To view your running application, click on the project name in the **Codewind** window. 

![image of VS Code with a Codewind project named myFirstNodeProject](images/launch.png)

8\. Then click the **Open Application** icon.
![image of the Open Application icon](images/launchicon.png)

This icon launches your web browser and displays your application.

![image of the application as it appears in a web browser](images/runningapp.png){: .imageborder}

Congratulations, you have now created, built and run your first Codewind project using Codewind on your local machine.

# Next Steps

For next steps, choose from the following:

* If you intend to use Codewind [remotely](./remote-codewind-overview.html), you have now completed the pre-requisite step of installing Codewind on your local machine and can proceed to:

1. Deploy Codewind to your cloud if not already done so by you or a sysadmin/DevOps engineer. See tutorial [Deploying Codewind Remotely](./remote-deploying-codewind.html).
2. Connect your Codewind extension of your local desktop IDE to Codewind in your cloud by following the tutorial [Using Codewind Remotely](./remote-codewind-overview.html).

 * To continue with this [Using Codewind Locally](./local-codewind-overview.html) tutorial, continue to the next step [Making a Code change with VS Code](./vsc-codechange.html) to see the auto-build-and-run feature in action.


