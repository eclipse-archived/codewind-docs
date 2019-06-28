---
layout: docs
title: Performance testing your project
description: Performance testing
keywords: using, coding, code, edit, log, App monitor, test plan, performance, run load, metrics, load test directory, load tester, payload, endpoint, passing a payload to an endpoint
duration: 1 minute
permalink: performancetesting
type: document
order: 9
parent: usingmicroclimate
---

# Performance testing your project

Microclimate has a built in load tester that lets you drive data through your application to test its performance. When you first run the load tester, Microclimate generates a basic configuration for you. You can then customize this configuration for your application.

Follow the steps to edit and test your code:
1. Select a project or generate a new project.
2. To generate the initial test plan, click the **App monitor** tab, and then click the **Run load** button. You start to see the graphs on the screen indicating that the run load test is running. To cancel the run load test, click **Cancel load**.
4. Click the **Edit code** tab and expand your project directory. From the directory, you can access `load-test`>`config.json` and edit the code in the `config.json` file. For example, you can add your own endpoints or change the number of threads that are running. The default `config.json` contains the following information:

   ```json
   {
     "path":"/",
     "requestsPerSecond":"100",
     "concurrency":"20",
     "maxSeconds":"120"
   }
   ```

   Where:

   `path` is the endpoint of the application to test.

   `requestsPerSecond` is the number of requests to send to the endpoint every second.

   `concurrency` is the number of multiple users to simulate hitting the endpoint.

   `maxSeconds` is how long to run the test for.

   This default configuration performs a `GET` request on the `/` endpoint, `100` times a second, for `20` users, for `120` seconds.

## Passing a payload to an endpoint

To modify the configuration to pass an object to endpoint, include the following additional fields:

`method` is the method to use: POST, PUT. The default is GET.

`contentType` is the MIME type to use for the body. The default content type is text/plain.

`body` is the contents to send in the body of the message for POST or PUT requests; this can be a string or an object which is converted to JSON.

For example, the following `config.json` sends the json object to the `/api/v1/hello` endpoint for `5` seconds.

```json
{
  "method":"POST",
  "contentType":"application/JSON",
  "body":{"message":"microclimate"},
  "path":"/api/v1/hello",
  "maxSeconds":"5"
}
```

Where the json object is defined as:

```json
{ "message" : "microclimate"}
```

For a full list of options, see the [loadtest module documentation](https://www.npmjs.com/package/loadtest).

To pass a payload to an endpoint:
1. Edit the `config.json`, and then save your changes.
2. Click **App monitor**, and then click the **Run load** button. A text box appears that states `**Run load** The request to start the process has been sent`.
3. Wait for the test to run. You can watch the test metrics while the test is running.
4. When the test is complete, navigate back to the **Edit code** tab to see the result of the latest run. An entry appears under the `load-test` directory with a time stamp containing a summary of the run.
