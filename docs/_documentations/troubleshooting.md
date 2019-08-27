---
layout: docs
title: Troubleshooting
description: Troubleshooting Codewind
keywords: troubleshooting, issues, workaround, logs, common problems, Mac, Windows, Linux, Theia, Docker, help, open a new issue, contact us, help, check the logs
duration: 1 minute
permalink: troubleshooting
type: document
order: 60
parent: root
---
<!-- NOTE: The '***' before each level one title adds a line to the final output, which helps this topic to be more readable and easier to consume. -->

# Troubleshooting

The following sections contain workarounds for issues that you might encounter when you use Codewind. If you don't see your issue here, please check our [GitHub repository](https://github.com/eclipse/codewind/issues). If you still don't see your issue, you can open a new issue in the repository.

* [Installing Codewind](#installing-codewind)
* [Creating a new project](#creating-a-new-project)
* [Importing a project](#importing-a-project)
* [Understanding Application Metrics](#understanding-application-metrics)
* [Checking the application and build statuses](#checking-the-application-and-build-statuses)
* [Editing your project](#editing-your-project)
* [Disabling development on specific projects](#disabling-development-on-specific-projects)
* [Appsody with Codewind](#appsody-with-codewind)
* [OpenAPI tools](#openapi-tools)

<!-- Provide an upfront link to where users can go if they can't figure out how to troubleshoot the problems. Avoid telling them to call IBM support, but you can link to the support website. -->

***

# Installing Codewind

<!--
Action/Topic: Installing Codewind
Issue type: bug/info
Issue links: https://github.com/docker/for-win/issues/1560, https://github.com/eclipse/codewind-installer/issues/35, https://github.com/eclipse/codewind-installer/issues/40
0.2.0: Still present
-->

## Installer fails with mount issues on Windows
If you try to install Codewind on Windows 10 and use Docker, you might see the following error:
```
ERROR: for codewind-performance  Cannot start service codewind-performance: b"error while creating mount source path '/host_mnt/c/codewind-workspace': mkdir /host_mnt/c: file exists"

ERROR: for codewind-performance  Cannot start service codewind-performance: b"error while creating mount source path '/host_mnt/c/codewind-workspace': mkdir /host_mnt/c: file exists"
Encountered errors while bringing up the project.
```

**Workaround:**
Enter the following command and install again:
1. Enter the `docker volume rm -f /host_mnt/c` command.
2. Restart Docker and run the installer again.

If the command and another installation attempt don't succeed, complete the following steps instead:
1. Uninstall Codewind and remove all the images with the `docker system prune -a` command.
2. From the Docker settings dialog box, reset Docker to the factory default to resolve the mount issues.

For more information, see [this issue about Docker mounts on Windows](https://github.com/docker/for-win/issues/1560).

<!--
Action/Topic : Installing Codewind
Issue type: bug/info
Issue link:
18.10:
-->
## Docker Shared Drive not accepting OS credentials for Windows
When using OS authentication setups (for example, AzureAD), Docker Shared Drive might not accept your OS credentials.

**Workaround:** Create a new user account.
1. Navigate to **Settings** -> **Accounts** -> **Family & other people** -> **Add someone else to this PC** -> **I don't have this person's sign-in information** -> **Add a user without a Microsoft account**.
2. Create the new account with the same username but without the prefix (for example, if your AzureAD account is `AzureAD/BobSmith`, your new local account should be `BobSmith`). Use the same password as your other account.
3. Select your new local account and click **Change account type**. Select the dropdown menu and select **Administrator**. Share the drive again in Docker.

<!--
Action/Topic : Installing Codewind
Issue type: bug/info
Issue link:
18.10:
-->
## Unable to create multiple Codewind workspaces on Docker Desktop Kubernetes
When running a Docker Desktop local Kubernetes cluster, multiple Codewind workspaces may fail to start.

**Workaround:**
Use only one Codewind Che workspace on Docker Desktop for the time being, or use an alternative local Kubernetes cluster such as Minikube or Minishift. Due to how Docker Desktop handles networking, multiple Codewind workspaces may cause a collision on the port that it's running on.

***
# Creating a new project

<!--
Action/Topic: Creating a new project and/or Checking the application and build statuses
Issue type: bug/info
Issue link:
18.10:
-->
## Projects created never start after installing Codewind
Intermittently, after installing Codewind on Windows, projects can be created, but they never start and instead remain in the **Starting** state. A Docker issue for Windows exists where, although it shows a volume is mounted, it does not allow any writing to the volume. To check if this issue is present, verify that a `codewind-workspace` exists (in your $HOME directory on Mac/Linux, or the root of your C: directory on Windows) and verify you can see your project folders created within.

**Workaround:** This issue can appear for many reasons, so you have many possible workarounds. First, open the `Docker`->`Settings`->`Shared Drives` directory to confirm that you have a shared drive. If you have one selected, unselect it, click **Apply**, and then try creating projects again. If you're still noticing the problem, and you're using an ID for the shared drive that is not your current user, check that the ID being used doesn't have an expired password that requires a password reset. Reset the password if necessary.

<!--
Action/Topic: Creating a new project and/or Checking the application and build statuses
Issue type: bug/info
Issue link:
0.2.0: Issue still present
-->
## Codewind Che extension loses connectivity to the Codewind pod
The Codewind Che extension might lose connectivity to the Codewind pod during a Lagom or Swift project build if you have multiple projects in the workspace for each runtime type. When this issue occurs, the project tree says **Disconnected**.

**Workaround:** Refresh the projects list to have the tree repopulate. If the issue persists, refresh the webpage.

# Importing a project

<!--
Action/Topic: Importing a project.
Issue type: bug/info
Issue link:
18.10:
-->
## Imported project never builds or starts
To view the status of the imported project, enter the following command:
```
docker logs codewind-pfe
```

**Workaround:** If you see the following messages, the imported project is likely not a valid Codewind project.
```
build-log requested, no build log found for project <project name>
build-log requested, no build log found for project <project name>
build-log requested, no build log found for project <project name>
build-log requested, no build log found for project <project name>
No containerId for running project <project name>
```

For more information about valid Codewind projects, see [Imported projects and supported project types](importedprojects.html).

***

# Understanding Application Metrics

<!--
Action/Topic: Understanding application metrics
18.10: Still an issue (Toby)
-->
## Application Monitoring unavailable after Project Import
After importing an application, when you click `App Monitor`, the dashboard is not displayed and results in a `Cannot GET /appmetrics-dash/` error. If this error appears, the application was not created by Codewind or previously had AppMetrics integration.

**Workaround:** Enable AppMetrics for your application. You can enable AppMetrics for [Node.js](https://developer.ibm.com/node/monitoring-post-mortem/application-metrics-node-js/), [Swift](https://developer.ibm.com/swift/monitoring-diagnostics/application-metrics-for-swift/), and [SpringBoot](https://github.com/RuntimeTools/javametrics#spring-boot) projects.

<!--
Action/Topic: Understanding application metrics
Issue type: info
Issue link: https://github.ibm.com/dev-ex/landing-pages/issues/923
19.03: Info added in 19.03.
-->
## Profiling markers do not appear
If you have the Codewind Language Server for Node.js Profiling extension enabled and have run a load test, profiling markers still might not appear. Ensure that your project and load run conform to the following requirements to use profiling:
- Your project exists in Theia or VS Code. Profiling is available only in Theia and VS Code.
- Your project is a Node.js project that was created through Codewind.
- Your project has `Run Load` executed on it.
- The load run successfully completed. Profiling data is written to the `load-test/<datestamp>/profiling.json` file in your Codewind project only on a successfully completed load run. If the load run was cancelled, it won't be written to the workspace.
- The load run ran for a minimum of 45 seconds to gather enough profiling data to generate the `profiling.json` file.
- If a function runs quickly, in less than 5 milliseconds with the default configuration, then the function might not run during any of the samples, so it might not be included in the profiling data for that load run.
- Profiling is not disabled. To enable profiling, access the profiling in one of the following ways:
  - Right-click in the editor and select `Toggle Profiling`.
  - Open the command palette with `cmd+shift+p` on a Mac or `ctrl+shift+p` on Windows. Then, select `Codewind: Profiling: Toggle Profiling`.
  - Toggle the `Codewind Profiling: Show Profiling` setting in the extensions settings.

**Workaround:** Review the preceding list and ensure that your project conforms to all of the items in the list.

***
# Checking the application and build statuses

<!--
Action/Topic: Checking the application and build statuses
Issue type: bug
Issue link: https://github.ibm.com/dev-ex/iterative-dev/issues/459
18.10: Still an issue
-->
## MicroProfile project gets updated twice upon file change
If you modify files in MicroProfile projects, sometimes the project gets double updates. You might see the application status changed from **Running** to **Stopped** twice. If you notice this status change, the default polling rate, which is 500 ms, is too short for the application monitor.

**Workaround:** Increase the polling rate in the `server.xml` file to 1000 ms or longer.
```
<applicationMonitor pollingRate="1000ms" />
```
***
# Editing your project

<!--
Action/Topic: Editing your project
Issue type: bug
Issue link: https://github.ibm.com/dev-ex/theia/issues/3
18.10: Still an issue
-->
## Theia editor might not work correctly in Microsoft Edge
Theia, the open source code editor used by Che, currently has limited support for Microsoft Edge. The Theia team is aware of the issue and is working to fix it.

**Workaround:** Use a different web browser.

<!--
Action/Topic: Editing your project
Issue type: bug/info
Issue link:
18.10:
-->
## New projects sometimes do not show in Theia hierarchy view
Sometimes when a new project is created, it doesn't show up in the hierarchy view within Eclipse Che.

**Workaround:** Refresh the page in the browser.

<!--
Action/Topic: Creating a new project and/or Checking the application and build statuses
Issue type: bug/info
Issue link:
18.10:
-->
## Context Root / Application Endpoint not correct
If you create or bind a project which has a context root set in `.cw-settings`, such as a project using the Lagom template, the context root is not picked up initially. This also happens after restarting Codewind.

**Workaround** For Eclipse. add the context root to the URL in your browser. For example, the browser might open with `localhost:34567` instead of `localhost:34567/mycontextroot` so type `mycontextroot`. For VS Code and Theia, edit and save the `.cw-settings` file, and the context root updates.

***
# Disabling development on specific projects

<!--
Action/Topic: Disabling development on specific projects
Issue type: bug/info
Issue link:
18.10:
-->
## Turning off auto build has no effect for Node.js projects when you run Codewind locally
If you turn off `auto build` for a Node.js project when you run Codewind locally, it has no effect. Changes you make to your code automatically start or restart a build even though `auto build` is disabled.

***
# Appsody with Codewind

<!--
Action/Topic: Appsody with Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind-docs/issues/64
18.10:
-->
## Node.js and Swift templates remain in the starting state
The templates `Appsody Node.js template` and `Appsody Swift template` go from the starting state to the stopped state by default. The application stops, but the container still runs. These templates do not have a server and are intended to help you implement your own server.

**Workaround** To get the application into a started state, use a server for the application. After the application has a server, Codewind can monitor the server, and the status turns to `started` if the server is running.

<!--
Action/Topic: Appsody with Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind-docs/issues/64
18.10:
-->
## A project build error appears after you create an initial project
If you use Eclipse and either Java MicroProfile or Spring Appsody templates, you might receive a `Project build error: Non-resolvable parent POM` error after you create the initial project.

**Workaround** Complete the following instructions to work around the error:
1. Right-click the project and select **Show Log Files**>**Show All**.
2. If your `.m2` cache is empty, or if you have not previously created a Java Appsody project, the dependencies will download, and the `[Container] Installing parent dev.appsody` message appears.
3. Wait until the cache completes. You can wait until the Project status is `Running`, or, if you use the MicroProfile template, you can wait until the `Liberty defaultServer` starts.
4. Right-click the **Project** from the Project Explorer and select **Maven**>**Update Project...**.
5. Accept the defaults and click **OK**. The project is configured, and the `Project build error: Non-resolvable parent POM` disappears.

After you create the initial project and set the `.m2` cache, new projects begin to be configured properly.

<!--
Action/Topic: Appsody with Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind-docs/issues/64
18.10:
-->
## An Unknown error appears on line one of the pom.xml file
If you use an Eclipse IDE for Enterprise Developer EPP prior to version 2019.06, you might see an `Unknown` validation error in the `pom.xml` file.

**Workaround** Switch to version 2019.06 or later, or see [Cannot import any project into Eclipse with maven-jar-plugin 3.1.2](https://bugs.eclipse.org/bugs/show_bug.cgi?id=547340).

<!--
Action/Topic: Appsody with Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind-docs/issues/64
18.10:
-->
## Classpath warnings appear or the application classes are not on the classpath
If you work with Appsody projects in Codewind for VS Code, you might encounter `Classpath is incomplete` warnings or notifications that application classes are not on the classpath.

**Workaround** Add the `codewind-workspace` folder to the workspace:
1. After you create an Appsody Java MicroProfile project, open the `codewind-workspace` folder.
2. Right-click the `codewind-workspace` folder and select **Add Folder to Workspace...**.
3. Choose the project folder and click **Add**.

<!--
Action/Topic: Appsody with Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind-docs/issues/64 and https://github.com/eclipse/codewind/issues/239
18.10:
-->
## Starting in debug mode results in failure to attach the debugger
If you work with Appsody projects in Codewind for VS Code, you might receive messages that state, `Failed to attach to remote debuggee VM` or `Failed to attach debugger` when you start a project in debug mode.

**Workaround** Run the `Attach Debugger` action manually:
1. Right-click the project and select **Restart in Debug Mode**. You might receive an error message that states, `Failed to attach to remote debuggee VM` or `Failed to attach debugger`.
2. Right-click on the project and select `Attach Debugger`.

<!--
Action/Topic: Appsody with Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind/issues/239
18.10:
-->
## Attempts fail to attach the debugger
If you work on Appsody projects on macOS, and if you restart an extension project in debug mode, the first attempt to attach the debugger might fail. Currently, a delay does not occur for project extensions.

These steps reproduce the issue:
1. Set up a project extension environment and create a Microprofile project.
2. Restart the project in debug mode. You receive one or both of the following error messages: `Failed to attach to remote debuggee VM` or `Failed to attach debugger to at ipaddress:`.

**Workaround** Run the `Attach Debugger` action manually.

***
# OpenAPI tools

<!--
Action/Topic: OpenAPI tools
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind/issues/275
Version: 2019-06 (4.12.0)
Build ID: 20190614-1200
-->
## OpenAPI generation fails in Eclipse if the output path does not exist
In Eclipse, OpenAPI generation fails if a path does not exist, and the wizard doesn't automatically create the folder tree hierarchy if the hierarchy doesn't already exist. 

These steps reproduce the issue:
1. Install the latest version of Codewind.
2. Add a sample OpenAPI `.yaml` file.
3. From the Project or Package Explorer views, right-click the project and select one of the generator actions in **OpenAPI Generate**. A dialog window appears.
4. In the dialog window, if necessary, select the OpenAPI definition file by clicking the **Browse...** button.
5. In the **Output folder** field, copy and paste a path or edit the path directly.
6. Click **Finish**. The OpenAPI generator fails if the folder doesn't already exist.

**Workaround:** Manually create the output folder before you start the OpenAPI generator wizard. After you create the folder, you can start the wizard again.

For post-client or post-server stub generation, use a separate output folder for code generation. Depending on the language and the generator type, the OpenAPI generator generates both source code files and build-related files. Some refactoring might be necessary. For example, if you are working with an existing Java or Maven project, move the generated source code to the proper source folder that already exists in the project. However, if your project is empty, the target output folder can be the root of the project, and you don't need to do as much refactoring and merging.