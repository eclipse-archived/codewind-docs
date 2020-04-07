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
* [Upgrading Codewind](#upgrading-codewind)
* [Creating a project](#creating-a-project)
* [Importing a project](#importing-a-project)
* [Understanding Application Metrics](#understanding-application-metrics)
* [Troubleshooting project application and build statuses](#troubleshooting-project-application-and-build-statuses)
* [Editing your project](#editing-your-project)
* [Disabling development on specific projects](#disabling-development-on-specific-projects)
* [Appsody with Codewind](#appsody-with-codewind)
* [OpenShift Do (odo) with Codewind](#openshift-do-(odo)-with-codewind)
* [OKD and OpenShift](#okd-and-openshift)
* [Codewind and Tekton pipelines](#codewind-and-tekton-pipelines)
* [OpenAPI tools](#openapi-tools)
* [Setting Codewind server log levels](#setting-codewind-server-log-levels)
* [Executable file not found on PATH in VS Code](#executable-file-not-found-on-path-in-vs-code)

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
ERROR: for codewind-performance  Cannot start service codewind-performance: b"error while creating mount source path '/host_mnt/c/codewind-data': mkdir /host_mnt/c: file exists"

ERROR: for codewind-performance  Cannot start service codewind-performance: b"error while creating mount source path '/host_mnt/c/codewind-data': mkdir /host_mnt/c: file exists"
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
Action/Topic: Installing Codewind
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
Action/Topic: Installing Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind/issues/436
0.6.0: Still present
-->
## Error appears after installing or updating Codewind
After you install or update Codewind, an error might appear when you try to start Codewind.

**Workaround:**
Remove the Codewind Docker images with your IDE:
1. Stop Codewind.
2. Remove the Codewind Docker images.
   - In VS Code, use the `Remove Codewind Images` command.
   - In Eclipse, use the `Uninstall` action.

If removing the images with the IDE fails, remove them with the Docker command line instead:
1. Stop Codewind.
2. Use `docker image ls` to identify the Codewind images.
3. Then, enter `docker image rm` to remove them.

If installing and starting Codewind still fails, you can use Docker system prune:<br>
**Caution:** Docker system prune removes more than just the Codewind Docker images. It can potentially remove all of your images.
1. Stop Codewind.
2. Enter the `docker system prune -a` command.
3. Carefully review the list of items that Docker system prune removes. Preserve any items that you want to keep.
   - To preserve containers, start all the containers that you want to save.
   - To preserve images, start a container from the images that you want to save.
4. After you ensure the preservation of any necessary items that Docker system prune removes, enter `y` to continue.

<!--
Action/Topic: Installing Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind/issues/2239
0.9.0: New
-->
## Cannot find Codewind in Marketplace when attempting to install in IntelliJ
When attempting to install Codewind in IntelliJ, you cannot locate the Codewind plug-in in Marketplace, and if you verify the custom plug-in repository link, you get a `Connection failed` error message:

![intellij install error](images/intellij/custom-plugin-repo-connection-failed-error.png)

This error occurs because the custom plug-in repository link contains an additional space.

**Workaround**
Remove the extra space from the custom plug-in repository link.

***
# Upgrading Codewind

<!--
Action/Topic: Upgrading Codewind
Issue type: bug/info
Issue links: https://github.com/eclipse/codewind/issues/2604
0.11.0: New for this release
-->

## Error upgrading Codewind to the latest
When upgrading Codewind from any version older than 0.9 to the latest, you see the following error:

```
==> Run cwctl --json remove -t 0.8.1
Removing Codewind docker images..
System architecture is:  amd64
Host operating system is:  darwin
Please wait whilst images are removed...
.FileNotFoundError: [Errno 2] No such file or directory: '/Users/<username>/.codewind/docker-compose.yaml'
{"error":"IMAGE_REMOVE_ERROR","error_description":"exit status 1"}
```

**Workaround:**

1\. Remove the Codewind images by hand. On macOS or Linux, you can remove the images with the following command:
`$ docker rmi $(docker images | grep eclipse/codewind | awk '{ print $3 }')`

2\. Remove the Codewind network:
`$ docker network rm <codewind_network>`

3\. Go to your IDE and click **Start Local Codewind**. Codewind starts.

4\. If Codewind fails to start, you can use Docker system prune.<br>
**Caution:** Docker system prune removes more than just the Codewind Docker images. It can potentially remove all of your images.
1. Enter the `$ docker system prune -a` command.
2. Carefully review the list of items that Docker system prune removes. Preserve any items that you want to keep.
   - To preserve containers, start all the containers that you want to save.
   - To preserve images, start a container from the images that you want to save.
3. After you ensure the preservation of any necessary items that Docker system prune removes, enter `y` to continue.

***
# Creating a project

<!--
Action/Topic: Creating a project and/or Checking the application and build statuses
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind/issues/477
0.4.0: Issue still present
-->
## Project creation on macOS fails, and Codewind reports an error
If creating a Codewind project on macOS fails, Codewind might report the `net/http: TLS handshake timeout` error. For a similar issue, see the report [Error "net/http: TLS handshake timeout"](https://discussions.agilebits.com/discussion/99219/error-net-http-tls-handshake-timeout).

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
Issue link: https://github.com/eclipse/codewind/issues/2251
0.10.0: Issue still present
-->
## Codewind unable to deploy projects on IBM Cloud Kubernetes Service (IKS) with Kubernetes 1.15 and earlier
Codewind cannot deploy Codewind style projects with remote Codewind on IKS and Kubernetes 1.15 and earlier. The projects fail to deploy, and you see the following error:
```
Failed to pull image "<image>": rpc error: code = Unknown desc = failed to pull and unpack image "<image>": failed to unpack image on snapshotter overlayfs: failed to extract layer sha256:<hash>: mount callback failed on /var/lib/containerd/tmpmounts/containerd-mount799987480: archive/tar: invalid tar header: unknown
```

**Workaround:** Upgrade to the latest version of IKS. IKS clusters that run Kubernetes 1.16 and later run a later version of containerd and are not affected by this issue.

<!--
Action/Topic: Creating a project and/or Checking the application and build statuses
Issue type: bug/info
Issue link:
0.2.0: Issue still present
-->
## Codewind Che extension loses connectivity to the Codewind pod
The Codewind Che extension might lose connectivity to the Codewind pod during a Lagom or Swift project build if you have multiple projects in the workspace for each runtime type. When this issue occurs, the project tree says **Disconnected**.

**Workaround:** Refresh the projects list to have the tree repopulate. If the issue persists, refresh the webpage.

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
# Troubleshooting project application and build statuses
<!--
Action/Topic: Checking the application and build statuses
Issue type: bug
Issue link: https://github.ibm.com/dev-ex/iterative-dev/issues/459
18.10: Still an issue
-->
## Troubleshooting general application status problems
If your application goes into the **Stopped** state unexpectedly or stays in the **Starting** state longer than expected, check the project logs to see whether something went wrong. Open the build and application logs from the project’s context menu. Problems with the build or project configuration can cause the application to fail to start. There are usually errors in the log files in this case.

Even without errors, the **Stopped** state can occur if:
  * The [health check endpoint](project-settings.html#health-check-endpoint) of the application is unreachable. Ensure it is set to an endpoint that is reachable.
  * The [internal application port](#internal-application-port) is not correct.
  * Your application uses HTTPS but the [HTTPS setting](project-settings.html#https-application) is not set.
  * The time required for your application to start is longer than the [Project status ping timeout](#project-status-ping-timeout). Increase the timeout to a more sufficient time.

<!--
Action/Topic: Checking the application and build statuses
Issue type: bug
Issue link: https://github.ibm.com/dev-ex/iterative-dev/issues/459
18.10: Still an issue
-->
## Troubleshooting general build status problems
If your build fails, try the following:
  * Inspect the build logs. Open the build logs from the project's context menu. In the build logs, you can view error messages that describe the type and cause of failure.
  * If the build failure is related to the image build, then view the docker build log and correct any errors in the project's Dockerfile.

<!--
Action/Topic: Creating a project or Checking the application and build statuses
Issue type: bug/info
Codewind version: 0.5.0
OS: Windows
IDE extension version: 0.5.0
IDE version: Eclipse 2019-09
Issue link: https://github.com/eclipse/codewind/issues/715
-->
## Projects stuck in starting or stopped state
You might occasionally see projects stuck in the `Starting` or `Stopped` state even though the container logs say the projects are up and running. This behavior can occur when you create a number of projects, for example, using the default and Appsody templates with Codewind 0.5.0.

**Workaround** Manually rebuild the projects that are stuck in `Starting` or `Stopped` state. To do this:
1. In the **Codewind Explorer** view, right-click your project and select **Build**.
2. Wait for the project state to return to **Running** or **Debugging** in the **Codewind Explorer** view.

<!--
Action/Topic: Checking the application status
Issue type: bug/info
Codewind version: 0.9.0
Issue link: https://github.com/eclipse/codewind/issues/1269
-->
## Application stuck in Starting state
Some project templates come with no server configured by default, like Appsody Node.js. The application status cannot be determined for these types of projects because Codewind relies on application endpoints for status. Codewind determines the port of the application by inspecting the project's container information. The container may have a port exposed but since no server is available to ping on that port, the status check times out, and the state is stuck on `Starting`.

**Workaround** The constant state is not inherently a problem; nonetheless, you can disable the status check for the project by taking the following steps:
1. Edit the `.cw-settings` file under the application, and set the key `internalPort` to `-1`.
    - This forces the project state to `Stopped`, stops pinging the project's health check endpoint, and ignores the timeout error.
2. Once you implement the project's server, revert the setting by setting `internalPort` to `""` to allow Codewind to use the default port of the container. Alternatively, choose a specific port if your container exposes multiple ports.

<!--
Action/Topic: Checking the application status
Issue type: bug/info
Codewind version: 0.9.0
Issue link: https://github.com/eclipse/codewind/issues/1269
-->
## How to create a .cw-settings file if it does not exist
Prior to the 0.9.0 release, some Appsody and OpenShift Do (odo) templates did not come with a `.cw-settings`. The `.cw-settings` file is usually created automatically and tells Codewind how to interact with a project. Things like application and build status are tied to these settings. If you have a project from those stacks from a previous release, you must manually create the .cw-settings file. The file must reside under the project root directory.

**Workaround** Create a template .cw-settings file with the following contents:

```
{
"contextRoot": "",
"internalPort": "",
"healthCheck": "",
"isHttps": false,
"ignoredPaths": [
""
]
}
```

<!--
Action/Topic: Changing the max number of concurrent builds
Issue type: info
Codewind version: 0.9.0
-->
## Adjusting the maximum number of concurrent builds
It is not recommended to alter this value because there can be a significant impact on performance but in some cases it may be necessary. For example, if there aren't enough resources to run 3 builds concurrently, you can reduce the maximum number to 1 or 2. If you must adjust the maximum number of concurrent builds, you can set the `MC_MAX_BUILDS` environmental variable in the `codewind-pfe` container.

<!--
Action/Topic: Creating a project and/or Checking the application and build statuses
Issue type: bug/info
Codewind version: 0.6.0
Issue link: https://github.com/eclipse/codewind/issues/1039
-->
## Projects build twice upon creation
If you use Codewind on Eclipse and VS Code at the same time, projects build twice during project creation, resulting in longer project creation time.

**Workaround:** To reduce project creation time, do not use Codewind on Eclipse and on VS Code at the same time. Close either Eclipse or VS Code, then create your project.

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
## Che editor might not work correctly in Microsoft Edge
Theia, the open source code editor used by Che, currently has limited support for Microsoft Edge. The Theia team is aware of the issue and is working to fix it.

**Workaround:** Use a different web browser.

<!--
Action/Topic: Editing your project
Issue type: bug/info
Issue link:
18.10:
-->
## New projects sometimes do not show in Che hierarchy view
Sometimes when a new project is created, it doesn't show up in the hierarchy view within Eclipse Che.

**Workaround:** Refresh the page in the browser.

<!--
Action/Topic: Creating a project and/or Checking the application and build statuses
Issue type: bug/info
Issue link:
18.10:
-->
## Context Root / Application Endpoint not correct
If you create or bind a project that has a context root set in `.cw-settings`, such as a project using the Lagom template, the context root is not picked up initially. This also happens after restarting Codewind.

**Workaround** For Eclipse, add the context root to the URL in your browser. For example, the browser might open with `localhost:34567` instead of `localhost:34567/mycontextroot`, so type `mycontextroot`. For VS Code and Che, edit and save the `.cw-settings` file, and the context root updates.

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
Action/Topic: Creating a project and/or Checking the application and build statuses
Issue type: bug/info
Issue link:
18.10:
-->
## Projects created never start after installing Codewind
Intermittently, after installing Codewind on Windows, projects can be created, but they never start and instead remain in the **Starting** state. A Docker issue for Windows exists where, although it shows a volume is mounted, it does not allow any writing to the volume. To check if this issue is present, verify that a `codewind-data` directory exists in the root of your `C:` drive on Windows and verify you can see your Appsody project folders created within.

**Workaround:** This issue can appear for many reasons, so you have many possible workarounds. First, open the `Docker\Settings\Shared Drives` directory to confirm that your `C:` drive is selected. If it is not selected, select it, click **Apply**, and then try creating projects again. If you're still noticing the problem, and you're using an ID for the shared drive that is not your current user, check that the ID being used doesn't have an expired password that requires a password reset. Reset the password if necessary.

<!--
Action/Topic: Appsody with Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind/issues/498
18.10:
-->
## Appsody and Docker Desktop on Windows 10
When you use Appsody, configure Docker Desktop to access your `C:` drive that contains your `codewind-data` directory. In most cases, you can configure Docker with the same user as the user who develops applications with Appsody. However, if you use Windows 10 Enterprise secured with Azure Active Directory (AAD), the AAD user does not reside in the localhost and might not be accepted in the **Shared Drives** tab of the Docker Desktop **Settings** page, especially if the organization configured AAD to issue only PIN codes instead of user passwords.

**Workaround** Complete the instructions in [Special notes about Appsody and Docker Desktop on Windows 10](https://github.com/gcharters/kabanero-dev-getting-started/blob/master/docker-windows-aad.md).

<!--
Action/Topic: Appsody with Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind-docs/issues/64
18.10:
-->
## Node.js and Swift templates remain in the starting state
The templates `Appsody Node.js template` and `Appsody Swift template` remain in the starting state by default because these templates do not have a server implemented, and therefore, its status cannot be detected. These templates do not have a server and are intended to help you implement your own server.

**Workaround** To get the application into a **Started** state, use a server for the application. After the application has a server, Codewind can monitor the server, and the status turns to **Started** if the server is running. Alternatively, you can also temporarily [stop Codewind from continueously pinging the application](#how-to-stop-the-app-from-continuously-pinging).

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

**Workaround** Add the project's parent folder to the VS Code workspace.
1. After you create an Appsody Java MicroProfile project, right-click and `Add Project to Workspace` if it is not already added.
2. Right-click on the project from the workspace view and select **Add Folder to Workspace...** and choose the parent folder of the project. Click `Add`.
3. Choose the project folder and click **Add**.

<!--
Action/Topic: Appsody with Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind-docs/issues/64 and https://github.com/eclipse/codewind/issues/239
18.10:
-->
## Starting in debug mode results in failure to attach the debugger
If you work with Appsody projects in Codewind, and if you restart the project in debug mode, the first attempt to attach the debugger might fail.

**Workaround** Run the `Attach Debugger` action manually. The following sample steps show instructions for VS Code. The steps to manually attach the debugger in other IDEs is similar:
1. After you create a project, wait for VS Code to display the project's state as **Running**.
2. Then, right-click the project and select **Restart in Debug Mode**.
3. Allow the process to finish. It fails, and a connection exception window appears.
4. The `Restarting <my_project> into debug mode` message is displayed. Wait for this restart notification to disappear.
5. To manually set the debugger, click the **Debug** tab and then **Play**. The debugger is successfully attached to the project if `Debug <my_project>` is displayed in the message bar or if the project's state shows **Debugging**.

<!--
Codewind version: 0.6.0
Action/Topic: Appsody with Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind/issues/1061
-->
## Appsody binds fail

If an Appsody repository is already added in your local Appsody CLI, the Appsody bind might fail.

These steps create the issue:
1. The Appsody repository was added to your local Appsody CLI. The same Appsody repository was then added to Codewind from your IDE by right-clicking **Projects (Local)** and then clicking **Manage Template Sources**.
2. Later, a project was bound to a stack from the added Appsody repository. The project appears in the Codewind Explorer view, and the `appsody.log` displays this error:
```
[Error] The current directory is not a valid appsody project. Run `appsody init <stack>` to create one. Run `appsody list` to see the available stacks.
```
Codewind displays an error. In VS Code, the error appears in the Codewind log:
```
2019/11/08 11:07:29 Please wait while the command runs...
2019/11/08 11:07:31 [Error] Repository 77b94c9b-0daf-5426-98b8-83eb8ee63e3c is not in configured list of repositories
```

**Workaround**
1. Remove the repository from the local Appsody CLI. For example, run the `appsody repo remove` command.
2. Remove and add the repository back into Codewind with **Manage Template Sources**.
3. Rebind the project to Codewind.

<!--
Codewind version: 0.9.0
Action/Topic: Appsody with Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind/issues/938
-->
## Using Appsody stacks images from private Docker registries

**Local scenario**
For Codewind to work with an Appsody stack image on a private Docker registry, the stack must fully qualify the image name in the `.appsody-config.yaml` configuration of its template, for example: `hostname[:port]/username/reponame[:tag]`. Also, before you work with the stack, on the local system, enter `docker login` to the private registry.
- **Note:** When you view the application log, you might see failures to pull the image during a rebuild. However, Codewind is taking the cached container image from your local machine. If you ever delete that image, you need to pull the image again. You can either create another project from the same stack or manually call a `docker pull` with the required image.

**Remote scenario**
Follow the instructions in [Adding a container registry in Codewind](che-setupregistries.html).

<!--
Codewind version: 0.9.0
Action/Topic: Appsody with Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind/issues/2455
-->
## Open Liberty projects do not start within the default timeout

Occasionally, Appsody Open Liberty projects do not start, and you see the following entries in the `appsody.log`:

```
[Container] [INFO] CWWKM2010I: Searching for CWWKF0011I: in /opt/ol/wlp/usr/servers/defaultServer/logs/messages.log. This search will timeout after 120 seconds.
[Container] [INFO] CWWKM2013I: The file /opt/ol/wlp/usr/servers/defaultServer/logs/messages.log being validated does not exist.
...
[Container] [INFO] CWWKM2011E: Timed out searching for CWWKF0011I: in /opt/ol/wlp/usr/servers/defaultServer/logs/messages.log.
...
[Container] [ERROR] Failed to execute goal io.openliberty.tools:liberty-maven-plugin:3.2:dev (default-cli) on project starter-app: Unable to verify if the server was started after 120 seconds.  Consider increasing the serverStartTimeout value if this continues to occur. -> [Help 1]
```

By default, Open Liberty projects are configured to wait 2 minutes (120 seconds) for the server to start. These messages are an indication that the server did not start within the default timeout period.

**Workaround**

Increase the timeout value in the project's `pom.xml` file. Look for the following element and increase the value:

```
<serverStartTimeout>120</serverStartTimeout>
```

***
# OpenShift Do (odo) with Codewind

For more information about the OpenShift Do (odo) extension in Codewind, see the [README](https://github.com/eclipse/codewind-odo-extension) file in the `codewind-odo-extension` repository.

<!--
Action/Topic: OpenShift Do (odo) with Codewind
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind/issues/1514
-->
## Building an odo project fails because of an existing image stream
If you try to create an image stream that already exists in your cluster and then build an odo project, you might receive error messages in the build log:
```
Failed to create component with name <component name>. Please use odo config view to view settings used to create component. Error: imagestreams.image.openshift.io "<image stream name>" already exists unable to create ImageStream for <image stream name>
```

**Workaround:**
1. Run `kubectl get is` to get the existing image stream.
2. Run `kubectl delete is <existing image stream name>` to manually delete the existing image stream.

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

<!--
Codewind version: 0.8.0
OS: RHEL
Che version: 7.5.1
IDE extension version: 0.8.0
IDE version: 7.5.1
Kubernetes cluster: Red Hat OpenShift on IBM Cloud
Action/Topic:
Issue type: bug/info
Issue link: https://github.com/eclipse/codewind/issues/1806
-->
## Che sometimes fails to reinstall successfully on Red Hat OpenShift on IBM Cloud
Sometimes when Che is reinstalled on Red Hat OpenShift on IBM Cloud, the installation might fail with the following error:
```
 ✔ Create Che Cluster eclipse-che in namespace che...done.
  ❯ ✅  Post installation checklist
    ❯ PostgreSQL pod bootstrap
      ✔ scheduling...done.
      ✔ downloading images...done.
      ✖ starting
        → ERR_TIMEOUT: Timeout set to pod ready timeout 130000
```

This error appears because of permissions issues in the namespace.

**Workaround:** To resolve the error, install Che into a namespace other than `che` with the `--chenamespace` flag when running `chectl server:start`.

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

The following workaround applies to Eclipse. Add the configuration element to the `pom.xml` file:

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

***
# Setting Codewind server log levels

<!--
Action/Topic: Setting Codewind server log levels
Issue type: info
Issue link: https://github.com/eclipse/codewind/issues/1251
Info added in 0.10.0.
-->
## Assisting with problem determination by raising the default Codewind server log level
To assist with problem determination, raise the default Codewind server log level to **Debug** or **Trace**. Use the `cwctl loglevels` command or follow the instructions for an IDE:
- In Eclipse, enable support features in the Codewind preferences, then right-click the connection in the Codewind Explorer view and click **Codewind server log level**.
- In VS Code, use the **Codewind: Set Codewind Server Logging Level** command in the Command Palette.

# Executable file not found on PATH in VS Code
<!--
Action/Topic: Executable file not found on PATH in VS Code
Issue type: info
Issue link: https://github.com/eclipse/codewind/issues/1682
Solution: https://github.com/eclipse/codewind/issues/1682#issuecomment-572649328
Info added in 0.11.0.
-->
Codewind will not work if it cannot find the `docker` executable in the [`PATH`](https://en.wikipedia.org/wiki/PATH_(variable)). You will see an error message like the following:
```
exec: "docker": executable file not found in $PATH
```
First, make sure `docker` is installed and can be run from the command line. The terminal used does not have to be a terminal within VS Code. Try running:
```
$ docker --version
Docker version 19.03.8, build afacb8b
```
and make sure the output is similar to above.

If you can run `docker` from the command line, but Codewind still fails to find `docker`, it's possible that VS Code is using a different `PATH` than the terminal you used. To make sure they are using the same `PATH`, perform the following steps:

1. Make sure you can run VS Code (the executable is `code`) from the command line.
  - On Windows and Linux, it should be possible immediately after installation by running `code`.
  - For macOS, there is an additional step: https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line.
2. Close all instances of VS Code.
3. Open the terminal you were able to run `docker` from, and run `code`.
4. The new VS Code instance should share the terminal's `PATH`. Try and start Codewind again.
