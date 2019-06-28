---
layout: docs
title: Monitoring your applications with the performance dashboard
description: Monitoring your applications with the performance dashboard
keywords: guide, help, performance, dashboard, monitoring, applications, VS Code, Codewind, Eclipse, graph, graphs, load, test, load test, test comparison
duration: 1 minute
permalink: guide_performance
type: document
parent:
order:
---

## Monitoring applications with the performance dashboard
Learn how to improve application performance with the performance dashboard.

## What you’ll learn
You will learn how to add and enable monitoring to your application. Then, you can run an application and use the performance dashboard data to determine whether the application is working harder than it should. By determining which applications are running harder than necessary, the performance dashboard can help you find slower applications and detect memory leaks.

## Prerequisites
- VS Code or Eclipse
- A Codewind installation

## Accessing the performance dashboard
1. From your IDE, go to the Codewind plug-in and right-click a project.
2. Then, select **Open Performance Dashboard**. A window appears that displays the performance dashboard.<br>

![performance dashboard](dist/images/performanceguide/performancedash_window.png){:height="345px" width="691px"}. <br>

## Running a load test
1. Click **Run Load Test**. A **Load test configuration** window appears.
2. Add a description for the test.
3. Then, click **Run**. The **Running** counter begins counting down as load is applied to your application.
4. [Optional] If you want to cancel, click `x` to stop the test.
5. When the load is finished, the graph shifts and displays new plot points.

## Modifying the load test
1. To modify the type of load run, click **Modify Parameters**. The **Load test configuration** window appears.
2. You can change the following values:
    - **Method**: Choose a GET or POST request.
    - **Path**
    - **Requests/second**: Change the number of requests per second.
    - **Concurrent**
    - **Duration**: Choose the duration of the test in seconds.
    - **JSON Body**: Add custom JSON. The builds include validation, and notifications are sent if the JSON is incorrect.

## Viewing test comparisons
The **Previous test** and **Latest test** display a comparison between the most recent load test that you ran and the previous load test.

You can edit the test descriptions by clicking the pencil icons and saving your text. The description then appears in the **Test history** list. Click the pencil or the text to edit the description in the **Test history** list.

## Reading line graphs
- The response time, **Response (ms)**, is selected by default.
- The graph shows the last entry that you selected in the list of counter types, such as **Hits**, **CPU (%)**, and **Memory (MB)**.
- Hover over a point in the graph to see individual values for the counters. The tooltip displays **CPU (%)**, **Memory**, **HTTP Response**, and **HTTP Hits**.
- A maximum of fifteen minutes of data is shown across all graphs. If the monitored application is producing large amounts of data, the dashboard automatically starts to aggregate the data. The longest time is the value that is plotted.
- If you have five or more snapshots, the zoom bar appears by default. To use the zoom bar, swipe over a section of the graph by using your computer touch pad or use the handles in the zoom bar itself. To remove the handles, click a blank space in the zoom bar.<br>

### Diagnosing problems
Use the performance dashboard to identify common performance problems:
- Slow HTTP response times on some or all routes
- Lower than expected throughput in the application
- Spikes in demand that cause slowdown
- Higher than expected CPU usage for the level of throughput or load
- High or growing memory usage that indicates a potential memory leak
- Where time is being spent in your application
