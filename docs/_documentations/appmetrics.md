---
layout: docs
title: Understanding Application Metrics
description: Understanding Application Metrics
keywords: import, help, metrics, Swift, Node.js, Java, performance monitoring, app monitor, dashboard, CPU, HTTP incoming requests, memory, HTTP throughput, Heap, HTTP outbound requests, loop times, other requests, run load, HTTP Requests, environment, resource usage, profiling, enabling, graph
duration: 1 minute
permalink: appmetrics
type: document
parent: usingmicroclimate
order: 6
---

# Understanding Application Metrics

## What is Application Metrics?

Application Metrics instruments Java, Node.js, and Swift runtimes for performance monitoring and provides the monitoring data through an API. You can also visualize data with the Application Metrics Dashboard. For more information, see [Application Metrics on GitHub](https://github.com/RuntimeTools/appmetrics).

## Application Metrics types

Application Metrics is available in Java, Node.js, and Swift. You can monitor the projects that you create in these languages.
* [Application Metrics for Java](https://developer.ibm.com/javasdk/application-metrics-java/)
* [Application Metrics for Node.js](https://developer.ibm.com/node/monitoring-post-mortem/application-metrics-node-js/)
* [Application Metrics for Swift](https://developer.ibm.com/swift/monitoring-diagnostics/application-metrics-for-swift/)

## Accessing Application Metrics

Click **App monitor** in the Microclimate project to access Application Metrics. Toggle between the **Dashboard** and **Summary** tabs. If you have a Node.js project, you can also access the **Profiling** tab.

## Enabling Application Metrics

If you import a project that does not include Application Metrics monitoring data associated with it, you can add Application Metrics by including the appropriate resource or performance monitoring application. For more information, see [RuntimeTools](https://github.com/RuntimeTools/).

## Understanding performance metrics in the **Dashboard** tab
View these metrics to learn if your application is performing as intended. An application might look like it's functioning well, but these metrics can reveal if an application is working harder than it should be.
* **CPU:** View this graph to see whether your computer is keeping up with the work you're doing. If you have spare CPU cycles, your machine is likely keeping up with your throughput. If you don't have spare CPU cycles, you might notice a degradation in performance.
* **HTTP Incoming Requests:** View this graph to see the incoming requests that your microservice receives. You can track the incoming requests and their response times. The graph doesn't show each request. Instead, it shows requests at specific points in time. Use this graph to see whether your application responds back to the requests as quickly as intended or if a change created delays in response times.
* **Memory:** Straight horizontal lines and lines that plateau indicate good memory. An ascending line indicates a memory leak and that the computer is running out of memory.
* **HTTP Throughput:** This graph indicates how fast the application is processing the requests that are coming into it.
* **Heap:** This graph is only available for Java and Node.js projects. It displays the heap size and the used heap on a timeline.
* **HTTP Outbound Requests:** This graph is similar to the HTTP Incoming Requests graph and shows the number of outbound requests at specific points in time.
* **Loop Times:** This graph indicates how fast a Node.js project is processing through an event loop.
* **Other Requests:** This graph indicates the Socket.IO and other requests that the application processes.

## Clicking the **Run load** button
Click the **Run load** button to run load your microservice. This button pings endpoints by using the Microclimate load runner service.

## Viewing metrics information in the **Summary** tab
View a summary of the information from the performance metrics graphs that you saw in the **Dashboard** tab.
* **HTTP Requests:** This table displays how many times an endpoint is hit. If you repeatedly run a test while making code changes, you can see how the code changes are impacting application performance.
* **Environment:** This table shows information about the environment you're running, such as the OS architecture and the number of processors you have. Having this information can make troubleshooting easier if you need to contact support and provide it.
* **Resource usage:** This table shows the **Average Process CPU**, which shows what Microclimate is doing, and the **Average System CPU**, which shows what the environment as a whole is doing. This information can help determine whether application issues are caused by something else in the environment that is external to the application.

## Viewing the graph in the **Profiling** tab
The **Profiling** tab is available only in Node.js projects. This tab pulls information from the CPU metric in the **Dashboard** tab. CPU cycles are caused by an execution of code. Receiving an endpoint doesn't cause many CPU cycles, but receiving an incoming payload can. Profiling shows you what occurs when a spike appears in the CPU metric. Each spike on the flame graph shows a call stack in the path. The width of a spike indicates how much time the CPU spends on a function. Wide spikes indicate that your CPU spends much time on a particular function and where you might want change the code to optimize it.

## Profiling Data Support
In Theia or VS Code, you can use the Profiling Language Server to provide code highlighting. Code highlighting displays the relative time spent in JavaScript functions based on profiling data gathered through [Microclimate load testing](performancetesting). Profiling support is only available for Node.js projects that are created through Microclimate and then profiled.

- Profiling data is written to the workspace only on a successfully completed load run. If the load run is cancelled, it won't be written to the workspace.
- Run the load run for a minimum of 45 seconds for enough profiling data to be gathered to generate the `profiling.json` file.
- You can configure the load run time in the `config.json` file in the `load-test` directory. The default time is 2 minutes.
- Out of all the folders that contain a `profiling.json` file, the most up-to-date `profiling.json` file is the one that is displayed. The code for the older profiling data might be out of date, such as pointing to lines that have been moved.

To display code highlighting:
1. Open a project created with Microclimate and profiled using the [performance testing](performancetesting) feature of Microclimate. Profiling data is created in a `load-test/<datestamp>/profiling.json` file in your Microclimate project.
2. In the **Editor** view, open a JavaScript file. The Editor highlights any lines that were found in the profiling data and annotates them to show how often they were seen and where they were called from.

To enable or disable the profile highlighting in the code, access the profiling in one of the following ways:
- Right-click in the editor and select `Toggle Profiling`.
- Open the command palette with `cmd+shift+p` on a Mac or `ctrl+shift+p` on Windows. Then, select `Microclimate: Profiling: Toggle Profiling`.
- Toggle the `Microprofile Profiling: Show Profiling` setting in the extensions settings.

For more information on sample-based profiling, see [Sample-based profiling](https://www.ibm.com/support/knowledgecenter/en/SS3KLZ/com.ibm.java.diagnostics.healthcenter.doc/topics/profiling_using.html).

If profiling markers do not appear, check to see if your project and load run conform to the [necessary requirements to use profiling](troubleshooting#profiling-markers-do-not-appear).

## Interpreting the annotation tooltip
After you start the load test and the test completes, view the source code. Theia displays an annotation tooltip with a specified message in a similar format to the following example:

![image of Theia annotation tooltip](dist/images/theia-annotation-tooltip.png)

- The bullet points indicate the parent callers of the function. The percentages equal the number of times that a parent caller called a function. In this example, `<anonymous function>` probably made 2 calls to the `app.get()` function, and the `handle()` function probably made 1 call.
- The numbers in the parenthesis indicate the position of the parent function in the file, such as the line and character number. This position information is ambiguous for anonymous functions, but the message includes the information regardless.
- If a function runs quickly, in less than 5 milliseconds with the default configuration, then the function might not run during any of the samples, so it might not be included in the profiling data for that load run.

## Need help?
If you encounter problems with application metrics, check the [Troubleshooting page](troubleshooting#understanding-application-metrics).
