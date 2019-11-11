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
* [Creating a project](#creating-a-project)
* [Importing a project](#importing-a-project)
* [Understanding Application Metrics](#understanding-application-metrics)
* [Checking the application and build statuses](#checking-the-application-and-build-statuses)
* [Editing your project](#editing-your-project)
* [Disabling development on specific projects](#disabling-development-on-specific-projects)
* [Appsody with Codewind](#appsody-with-codewind)
* [ODO with Codewind](#odo-with-codewind)
* [OKD and OpenShift](#okd-and-openshift)
* [Codewind and Tekton pipelines](#codewind-and-tekton-pipelines)
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

```sh
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

***
# Creating a project

<!--
Action/Topic: Creating a project and/or Checking the application and build statuses
Issue type: bug/info
Issue link:
18.10:
-->
## Projects created never start after installing Codewind
Intermittently, after installing Codewind on Windows, projects can be created, but they never start and instead remain in the **Starting** state. A Docker issue for Windows exists where, although it shows a volume is mounted, it does not allow any writing to the volume. To check if this issue is present, verify that a `codewind-workspace` exists (in your $HOME directory on Mac/Linux, or the root of your C: directory on Windows) and verify you can see your project folders created within.

**Workaround:** This issue can appear for many reasons, so you have many possible workarounds. First, open the `Docker`->`Settings`->`Shared Drives` directory to confirm that you have a shared drive. If you have one selected, unselect it, click **Apply**, and then try creating projects again. If you're still noticing the problem, and you're using an ID for the shared drive that is not your current user, check that the ID being used doesn't have an expired password that requires a password reset. Reset the password if necessary.

<!--
Action/Topic: Creating a project and/or Checking the application and build statuses
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind/issues/477
0.4.0: Issue still present
-->
## Project creation on macOS fails, and Codewind reports an error
If creating a Codewind project on macOS fails, Codewind might report the `net/http: TLS handshake timeout` error. You might encounter the same issue if you run `codewind-installer` from the Terminal. For a similar issue, see the report [Error "net/http: TLS handshake timeout"](https://discussions.agilebits.com/discussion/99219/error-net-http-tls-handshake-timeout).

**Workaround**
As noted in the report [Error "net/http: TLS handshake timeout"](https://discussions.agilebits.com/discussion/99219/error-net-http-tls-handshake-timeout), go to **Applications**>**Utilities**>**Keychain Access** and delete from the keychain the certificates that you no longer need. You might notice that some certificates are redundant. Then, restart Codewind.

<!--
Action/Topic: Creating a project and/or Checking the application and build statuses
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind/issues/829
0.5.0: Issue still present
-->
## Project creation fails if a persistent volume (PV) is unavailable
If you try to create a project on Codewind for Eclipse Che, errors might occur if a PV is unavailable for your cluster.

**Workaround:** Run the `kubectl get pv` command to check that a PV is available for each project that you want to create.

<!--
Action/Topic: Creating a project and/or Checking the application and build statuses
Issue type: bug/info
Issue link:
0.2.0: Issue still present
-->
## Codewind Che extension loses connectivity to the Codewind pod
The Codewind Che extension might lose connectivity to the Codewind pod during a Lagom or Swift project build if you have multiple projects in the workspace for each runtime type. When this issue occurs, the project tree says **Disconnected**.

**Workaround:** Refresh the projects list to have the tree repopulate. If the issue persists, refresh the webpage.

<!--
Action/Topic: Creating a project and/or Checking the application and build statuses
Issue type: bug/info
Codewind version: 0.5.0
OS: Windows
IDE extension version: 0.5.0
IDE version: Eclipse 2019-09
Issue link: https://github.com/eclipse/codewind/issues/715
-->
## Projects stuck in starting or stopped state
You might occasionally see projects stuck in the `Starting` or `Stopped` state even though the container logs say the projects are up and running. This can happen when you create a number of projects, for example, using the default and Appsody templates with Codewind 0.5.0. 

**Workaround** Manually rebuild the projects that are stuck in `Starting` or `Stopped` state. To do this: 
1. In the **Codewind Explorer** view, right-click your project and select **Build**.
2. Wait for the project state to return to **Running** or **Debugging** in the **Codewind Explorer** view.

***
# Importing a project

<!--
Action/Topic: Importing a project.
Issue type: bug/info
Issue link:
18.10:
-->
## Imported project never builds or starts
To view the status of the imported project, enter the following command:

```sh
docker logs codewind-pfe
```

**Workaround:** If you see the following messages, the imported project is likely not a valid Codewind project.

```sh
build-log requested, no build log found for project <project name>
build-log requested, no build log found for project <project name>
build-log requested, no build log found for project <project name>
build-log requested, no build log found for project <project name>
No containerId for running project <project name>
```

<!--
Action/Topic: Importing a project.
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind/issues/243
18.10:
-->
## Adding an existing Open Liberty project fails to build because of missing files
An Open Liberty project fails to build after it is added into Codewind with the **Add Existing Project** action, and the project fails to build because of missing files.

**Workaround:** Bind the existing project again and click **No** followed by **Other** for the project type.

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

```xml
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
Action/Topic: Creating a project and/or Checking the application and build statuses
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

For general information about the Appsody extension on Codewind, see the [README](https://github.com/eclipse/codewind-appsody-extension) file in the `codewind-appsody-extension` repository.

<!--
Action/Topic: Appsody with Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind/issues/498
18.10:
-->
## Appsody and Docker Desktop on Windows 10
When you use Appsody, configure Docker Desktop to access the shared drive that contains your home directory and that you associated with the shared drive. In most cases, you can configure Docker with the same user as the user who develops applications with Appsody. However, if you use Windows 10 Enterprise secured with Azure Active Directory (AAD), the AAD user does not reside in the local host and might not be accepted in the **Shared Drives** tab of the Docker Desktop **Settings** page, especially if the organization configured AAD to issue only PIN codes instead of user passwords.

**Workaround** Complete the instructions in [Special notes about Appsody and Docker Desktop on Windows 10](https://github.com/gcharters/kabanero-dev-getting-started/blob/master/docker-windows-aad.md).

<!--
Action/Topic: Appsody with Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind-docs/issues/64
18.10:
-->
## Node.js and Swift templates go from the starting state and then to the stopped state by default
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
1. After you create a project, wait for VS Code to display, `Running [Build succeeded]`.
2. Then, right-click the project and select **Restart in Debug Mode**.
3. Allow the process to finish. It fails, and a connection exception window appears.
4. The `Restarting <my_project> into debug mode` message is displayed. Wait for this restart notification to disappear.
5. To manually set the debugger, click the **Debug** tab and then **Play**. The debugger is successfully attached to the project if `Debug appsody-mp (codewind-workspace) Cloud Code -- NORMAL --` is displayed in the message bar.

<!--
Action/Topic: Appsody with Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind-docs/issues/92
18.10:
-->
## Appsody mount errors on Windows Enterprise
If you use Windows Enterprise and authenticate through Azure Active Directory (AAD), you might see mount errors when you use any of the Java Appsody stacks, such as `java-microprofile` or `java-spring-boot2`:
```
[Container] docker: Error response from daemon: error while creating mount source path '/C/Users/<user name>/.m2/repository': mkdir /C/Users/<user name>/.m2: permission denied.
```

**Workaround:** Configure the Maven `.m2` cache to be outside of your home directory. If you log in to your Windows machine as an Azure user, and you want to create Appsody applications, set the global `MAVEN_OPTS` environment variable before you start Eclipse or VS Code.
- Example: `MAVEN_OPTS=-Dmaven.repo.local=C:\somefolder\.m2\repository`

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

<!--
Codewind version: 0.6.0
Action/Topic: Appsody with Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind/issues/1061
-->
## Appsody binds fail

If an Appsody respository is already added in your local Appsody CLI, and if you try to add the Appsody repository again with a different name or ID, the Appsody bind might fail in the following scenario:
1. Use a template manager to add the Appsody repository in Codewind.
2. Try to bind the project to a stack from the added Appsody repository.
3. Create the project in Codewind.
The `appsody.log` displays this error:
```
[Error] The current directory is not a valid appsody project. Run `appsody init <stack>` to create one. Run `appsody list` to see the available stacks.
```
The `cwctl` log path in the Codewind log in VS Code displays an error like this one:
```
2019/11/08 11:07:29 Please wait while the command runs... 
2019/11/08 11:07:31 [Error] Repository 77b94c9b-0daf-5426-98b8-83eb8ee63e3c is not in configured list of repositories
```

**Workaround**
1. Remove the repository from the local Appsody CLI. For example, run the `appsody repo remove` command.
2. Remove and add the repository back into Codewind with the template manager.
3. Rebind the project to Codewind.

***
# ODO with Codewind

<!--
Codewind version: 0.5.0
Che version: 7.2.0
IDE extension version: 0.5.0
IDE version: **7.1.0
Action/Topic: ODO with Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind/issues/692
-->
## ODO projects are not deleted after the workspace is deleted

If you create ODO projects and then delete the workspace without deleting the projects, all your ODO deployments still exist. 

These steps reproduce the issue: 
1. Install Codewind Che.
2. Create ODO projects.
3. Delete the Codewind workspace.
4. Create a new workspace. You still see previously created ODO project deployments.

**Workaround** 
1. Login to the OKD/OpenShift cluster.
2. Change to the project where the resources are by running the following command: 

   ```sh
   oc project <project name>
   ```

3. Delete the ODO project resources by running the following command: 

   ```sh
   oc delete svc,route,dc,pvc,is -l=app.kubernetes.io/part-of=app
   ```

   Or for individual components:

   ```sh
   oc delete svc,route,dc,pvc,is -l=app.kubernetes.io/instance=<component>
   ```

***
# OKD and OpenShift
<!--
Codewind version: 0.5.0
OS: RHEL
Che version: 7.2.0
IDE extension version: 0.5.0
IDE version: 7.1.0
Kubernetes cluster: OKD/OpenShift
Action/Topic: 
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind/issues/733
-->
## Plugin runtime crashes unexpectedly and all plugins are not working
With the latest Eclipse Che Version 7.2, you might see the following error when your user session expires for the Eclipse Che workspace: `Plugin runtime crashed unexpectedly, all plugins are not working, please reload ...`

These steps reproduce the issue: 
1. Install Eclipse Che on an OKD cluster.
2. Create your Codewind workspace from this [devfile](https://raw.githubusercontent.com/eclipse/codewind-che-plugin/master/devfiles/0.5.0/devfile.yaml).
3. After your session expires, you see a `Crash` message in the Codewind workspace.
**Workaround** Go to the `Che workspace` dashboard, log out of the Che workspace, and then log back in to the Che workspace. Access the Codewind workspace. 

***
# Codewind and Tekton Pipelines

<!--
Codewind version: 0.3
Che version: 7.0
IDE extension version: Theia plugin 0.3
IDE version: Theia 7.0-rc4
Action/Topic: Codewind and Tekton pipelines
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind/issues/309
-->
## Codewind cannot access the Tekton dashboard URL

If you install Codewind before you install Tekton, Codewind cannot access the Tekton dashboard URL. In the logs, you see the following error message: 

```sh
Tekton dashboard does not appear to be installed on this cluster. Please install Tekton dashboard on your cluster, and restart your Codewind Che workspace. 
```

These steps reproduce the issue:
1. Install Codewind on OpenShift.
2. Install Tekton Pipelines.
3. Click **Open Tekton dashboard URL**. Codewind does not access the Tekton dashboard URL. 

**Workaround:** 
1. Go to the Eclipse Che workspace console.  
2. Select your workspace and stop it. 
3. After 2 minutes, start your workspace again. 
4. Now, access the Tekton dashboard URL from the Codewind palette. 

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

**Workaround:**
For the VS Code extension, manually create the output folder before you start the OpenAPI generator wizard. In the wizard, you can also create the **Output folder** in the browse dialog. Ensure that the path points to a valid folder in the project.

For post-client or post-server stub generation, use a separate output folder for code generation. Depending on the language and the generator type, the OpenAPI generator generates both source code files and build-related files. Some refactoring might be necessary. For example, move the generated source code to the proper source folder that already exists in the project. However, if your project is empty, the target output folder can be the root of the project, and you don’t need to do as much refactoring and merging. 

For Eclipse, for Java-based code generators, the Open API wizards provide additional support to configure the project. It is recommended that the project's root folder is selected as the output folder of the generator so that `.java` files will be generated into the existing `src/main/java` and `src/test/java` folders. The wizard's default value of the output folder is the project's root folder. The wizard also performs some automatic configuration, including `pom.xml` file merging, and necessary updates to the project's classpath.

<!--
Action/Topic: Plugin execution validation error in the pom.xml file for Open API tools
Issue type: bug
Issue link: https://github.com/eclipse/codewind/issues/650
0.5.0: New issue
-->
## Plugin execution validation error in the pom.xml file
When generating a Java client or server stub into an existing Appsody or Codewind Liberty Microprofile project, you might see a plugin execution validation error in the `pom.xml` file:

```sh
Plugin execution not covered by lifecycle configuration: org.codehaus.mojo:aspectj-maven-plugin:1.0:compile (execution: default, phase: process-classes)
```

The build is successful even though the validator reports this issue. 

**Workaround:** To resolve this in Eclipse, surround the plugins element under the `build` element of the `pom.xml` file with the `pluginManagement` element.

```xml
<build>
    <pluginManagement>
        <plugins>   
        ...
```

The following work-around applies to both VS Code and Eclipse. The spring server generator creates invalid source in the `OpenAPI2SpringBoot` class. Simply implement the methods from the interface and save the file. Also add the configuration element to the `pom.xml` file, like this:

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <mainClass>org.openapitools.OpenAPI2SpringBoot</mainClass>
                </configuration>
                ....             
```
