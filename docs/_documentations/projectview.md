---
layout: docs
title: Using the project view
description: Project view
keywords: project, view, list, using, coding, run, apply, import, create, edit, log, monitor, project list, project view, page header, project view menu, project view main workspace
duration: 1 minute
permalink: projectview
type: document
order: 0
parent: managingprojects
---

# Using the project view

## Project list

After you create or import a project into Microclimate, you can view, administer, and modify it. In your Microclimate workspace, click the **Projects** tab to view the list of all of your projects and their statuses.

To view details about a project, click the project name. You can also click the shortcut menu alongside a project name for the same options. To delete a project, click the `Delete project` option on the shortcut menu.

## Project view

The project view page has three parts:
* [Page header](#page-header)
* [Menu](#project-view-menu)
* [Main workspace](#project-view-main-workspace)

### Page header

The page header contains the following information:
* Project name
* Project status
* Build status
* A `Build` button to manually rebuild your projects

### Project view menu

At the side of the page is a menu:

![Image of menu](./images/projectmenu.png)


From this menu, you have the following options:

- **Overview** Provides you with project information including language, location of you project, status, and whether the project is set to automatically build on modification.

- **Edit code** After creating your project, Microclimate has already built your project and started it. Use the Theia editor to modify your code, and to redeploy it.

- **Build logs** Click this tab to view the Microclimate project build logs.
  - On the **Build logs** page, the **Log File** drop-down menu lists individual build logs. If a log file changed, an **Updated** icon appears next to the **Log File** menu. An asterisk appears next to the name of each changed log file in the list.
  - After you select any of the changed log files, the asterisk disappears from the log file entry in the menu. After you select all of the changed log files, the icon disappears from the **Log File** menu.

- **Open app** Supply the context root and then open your application.

- **App logs** Log files for your application.

- **App monitor** Use this tab to monitor your application.

- **Pipeline** Use a pipeline to automatically detect changes in your application, and to rebuild and redeploy it. For more information, see [Using a pipeline](./usingapipeline).

- **Set Codewind Server Logging Level** To assist with problem determination, configure the log level in PFE.

### Project view main workspace

The main workspace provides a summary of your project including language, location, and status.

By default, your project automatically builds when you save your project files. Use the `Auto build` switch located on this page to control automatic building of your project.

Use the `Disable project` button to disable project development. For more information, see [Disable development on specific projects](./disabledevelopmentonprojects).

### Viewing log files

You can view multiple log files in **Build logs** and **Apps logs** by selecting a log from the **Log File** dropdown menu.

When one or more log files have changed, an `Updated` notice is displayed. The changed logs are marked with `*`. 

If there are no log files, the dropdown menu will be empty.

Would it be possible to add something to the IDEs to allow the user to configure the log level for a Codewind instance?

![Image of log files](./images/viewingmultiplelogfiles.png)

## Need help?
If you encounter problems with using the project view, check the [Troubleshooting page](troubleshooting.html#using-the-project-view).
