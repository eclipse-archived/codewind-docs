---
layout: docs
title: Linking your projects
description: Linking your projects
keywords: project actions, attach, build, disable, enable, validate, refresh, link, linking your projects, VS Code, Eclipse
duration: 1 minute
permalink: linking-your-projects.html
type: document
---

# Linking your projects

You can link your projects when you are using Codewind. This feature is available in the [VS Code](#linking-your-projects-in-vs-code) and [Eclipse](#linking-your-projects-in-eclipse) IDEs.

For example, use this feature to link a front-end Node.js project to a back-end database. You have a web page front-end Node.js project without a link:

![Image of unlinked project](images/linking-feature/unlinked_project.png){:width="650px"}

You then link it to a back-end Node.js database project:

![Image of linked project](images/linking-feature/linked_project.png){:width="650px"}

## Linking your projects in VS Code

To link your projects in VS Code:

_Instructions_

## Linking your projects in Eclipse

To link your projects in Eclipse, follow these steps where project `frontend-nodejs` is the source project and project `database-nodejs` is the target project. Both projects must be running in order to create a link.

1\. Right-click on project `frontend-nodejs` in the Codewind Explorer view and select **Manage Project Links**:

2\. Click **Add** to add a new project link:

![Image of managing project links](images/linking-feature/eclipse_manage_project_links.png){:height="550px" width="650px"}

3\. Select the target project and enter a name for the **Environment variable**. Then click **OK**:

![Image of selecting target project](images/linking-feature/eclipse_add_project_link.png){:width="650px"}

4\. The link shows in the **Manage Project Links** dialog. Click **OK** to create the link:

![Image of managing links for the front end project](images/linking-feature/eclipse_manage_project_links_step_4.png){:height="550px" width="650px"}

5\. Use the environment variable in your code as needed, for example:

`axios.get(http://${process.env.DATABASE}/api/v1/populations);`

6\. If the target project of a link is selected for removal, the **Remove Projects** dialog indicates this as a warning:

![Image of removing projects](images/linking-feature/eclipse_remove_projects.png){:width="650px"}

If you choose to go ahead and remove the project, the link is also removed. If the source project for a link is removed, the link is also removed.

7\. For convenience, project links are displayed in the **Project Overview** page:

![Image of removing projects](images/linking-feature/eclipse_application_overview.png){:width="650px"}
