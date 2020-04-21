---
layout: docs
title: Understanding the Metrics Dashboard
description: Understanding the Metrics Dashboard
keywords: import, help, metrics, Swift, Node.js, Java, performance monitoring, app monitor, dashboard, CPU, HTTP incoming requests, memory, HTTP throughput, Heap, HTTP outbound requests, loop times, other requests, run load, HTTP Requests, environment, resource usage, profiling, enabling, graph
duration: 1 minute
permalink: metrics-dashboard
type: document
parent:
order:
---

# Understanding the Metrics Dashboard

Application Metrics instruments Java, Node.js, and Swift runtimes for performance monitoring and provides the monitoring data through an API. The Metrics Dashboard is a method for you to visualize this data. 

## What you’ll learn

Learn how to use the Metrics Dashboard to monitor Java, Node.js, and Swift projects. Furthermore, learn how to use the Metrics Dashboard's features to verify if your application is performing as expected.  

## Prerequisites

* Eclipse, Eclipse Che, IntelliJ, or VS Code
* A Codewind installation

## Metrics Dashboard types

The Metrics Dashboard is available for Java, Node.js, and Swift. You can monitor the projects that you create in these languages.
* [Application Metrics for Java](https://developer.ibm.com/javasdk/application-metrics-java/)
* [Application Metrics for Node.js](https://developer.ibm.com/node/monitoring-post-mortem/application-metrics-node-js/)
* [Application Metrics for Swift](https://developer.ibm.com/swift/monitoring-diagnostics/application-metrics-for-swift/)

## Accessing the Metrics Dashboard

1. From your IDE, go to the Codewind plug-in and right-click on a project.
2. Then, select **Metrics Dashboard**. A window appears that displays the Metrics Dashboard.
3. Toggle between the **Dashboard** and **Summary** tabs. If you have a Node.js project, you can also access the **Profiling** tab.<br>

![Metrics Dashboard](images/metricsdashboard/metrics-dashboard.png){:height="450px" width="800px"}<br>

## Enabling Application Metrics

If you import a project that does not include Application Metrics monitoring data associated with it, you can add Application Metrics by including the appropriate resource or performance monitoring application. For more information, see [RuntimeTools](https://github.com/RuntimeTools/).

## Understanding performance metrics in the **Dashboard** tab

View these metrics to learn if your application is performing as intended. An application might look like it's functioning well, but these metrics can reveal if an application is working harder than it should be.
* **CPU:** View this graph to see whether your computer is keeping up with the work you're doing. If you have spare CPU cycles, your machine is likely keeping up with your throughput. If you don't have spare CPU cycles, you might notice a degradation in performance.
* **HTTP Incoming Requests:** View this graph to see the incoming requests that your microservice receives. You can track the incoming requests and their response times. The graph doesn't show each request. Instead, it shows requests at specific points in time. Use this graph to see whether your application responds to the requests as quickly as intended or if a change created delays in response times.
* **Memory:** Straight horizontal lines and lines that plateau indicates good memory. An ascending line indicates a memory leak and that the computer is running out of memory.
* **HTTP Throughput:** This graph indicates how fast the application is processing the requests that are coming into it.
* **Heap:** This graph is only available for Java and Node.js projects. It displays the heap size and the used heap on a timeline.
* **HTTP Outbound Requests:** This graph is similar to the HTTP Incoming Requests graph and shows the number of outbound requests at specific points in time.
* **Loop Times:** This graph indicates how fast a Node.js project is processing through an event loop.
* **Other Requests:** This graph indicates the Socket.IO and other requests that the application processes.

## Viewing metrics information in the **Summary** tab

View a summary of the information from the performance metrics graphs that you saw in the **Dashboard** tab.
* **HTTP Requests:** This table displays how many times an endpoint is hit. If you repeatedly run a test while making code changes, you can see how the code changes are impacting application performance.

![HTTP Requests](images/metricsdashboard/http-requests.png){:height="220px" width="800px"}

* **Environment:** This table shows information about the environment you're running, such as the OS architecture and the number of processors you have. Having this information can make troubleshooting easier if you need to contact support and provide it.

![Environment](images/metricsdashboard/environment.png){:height="200px" width="800px"}

* **Resource Usage:** This table shows the **Average Process CPU**, which shows what the application is using, and the **Average System CPU**, which shows what the environment as a whole is using. This information can help determine whether application issues are caused by something else in the environment that is external to the application.

![Resource Usage](images/performanceguide/viewing_metrics.png)

## Viewing the graph in the **Profiling** tab

The **Profiling** tab is available only in Node.js projects. This tab pulls information from the CPU metric in the **Dashboard** tab. CPU cycles are caused by an execution of code. Receiving an endpoint doesn't cause many CPU cycles, but receiving an incoming payload can. Profiling shows you what occurs when a spike appears in the CPU metric. Each spike on the flame graph shows a call stack in the path. The width of a spike indicates how much time the CPU spends on a function. Wide spikes indicate that your CPU spends much time on a particular function and where you might want to change the code to optimize it.

## Code highlighting for profiling data

Code highlighting for profiling data highlights the most heavily used functions based on profiling data gathered through [load testing](performance.html). Support for code highlighting is available for Node.js or Java projects that are created through Codewind and then profiled.

To enable code highlighting, you must install the appropriate VS Code extension:
- For Node.js projects, install the [Codewind Node Profiler](https://marketplace.visualstudio.com/items?itemName=IBM.codewind-node-profiler).
- For Java projects, install the [Codewind Java Profiler](https://marketplace.visualstudio.com/items?itemName=IBM.codewind-java-profiler). Java is supported, however, if the Metrics Dashboard does not show profiling data, use the editor plug-in to display it instead. 
- To execute a load test, please refer to **Running a load test** section of the [Performance Dashboard](performance.html).
- Profiling data is written to the workspace only on a successfully completed load run. If the load run is cancelled, it won't be written to the workspace.
- Run the load run for a minimum of 45 seconds for enough profiling data to be gathered.
- You can configure the load run time in the  **Edit load run settings** window. Please, refer to the [Performance Dashboard](performance.html) for additional information. The default time is 3 minutes.
- Out of all the `load-test` folders that contain profiling data, the most up-to-date `.hcd` file for Java projects or .json file for Node.js projects is the one that is displayed. The code for the older profiling data might be out of date, such as pointing to lines that have been moved.

To display code highlighting:
1. Open a project created with Codewind and profiled using the [load testing](performance.html) feature of Codewind. 
- For Java, the profiling data is created in a `load-test/[timestamp]/xxxx.hcd` file in your Codewind project.
- For Node.js, the profiling data is created in a `load-test/[timestamp]/profiling.json` file in your Codewind project.
2. In the **Editor** view, open a Java file for Java projects or a JavaScript file for Node.js projects. The editor highlights any lines that were found in the profiling data and annotates them to show how often they were seen and where they were called from.

For more information on sample-based profiling, see [Sample-based profiling](https://www.ibm.com/support/knowledgecenter/en/SS3KLZ/com.ibm.java.diagnostics.healthcenter.doc/topics/profiling_using.html).

If profiling markers do not appear, check to see if your project and load run conform to the [necessary requirements to use profiling](troubleshooting.html#profiling-markers-do-not-appear).

## Interpreting the annotation tooltip

After you start the load test and the test completes, view the source code. Theia displays an annotation tooltip with a specified message in a similar format to the following example:

![image of Theia annotation tooltip](images/theia-annotation-tooltip.png)

- The bullet points indicate the parent callers of the function. The percentages equal the number of times that a parent caller called a function. In this example, `<anonymous function>` probably made 2 calls to the `app.get()` function, and the `handle()` function probably made 1 call.
- The numbers in the parenthesis indicate the position of the parent function in the file, such as the line and character number. This position information is ambiguous for anonymous functions, but the message includes the information regardless.
- If a function runs quickly, in less than 5 milliseconds with the default configuration, then the function might not run during any of the samples, so it might not be included in the profiling data for that load run.

## Need help?

If you encounter problems with the Metrics Dashboard, check the [Troubleshooting](troubleshooting.html#understanding-application-metrics) page.
