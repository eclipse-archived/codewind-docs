---
layout: post
title: "A technical autopsy of a containerized ‘Node.js dependency insights’ microservice application"
categories: blog
author_picture: images/blog/author_icon_nik_canvin.jpg
author_url: https://www.linkedin.com/in/nik-canvin-110326/
author: Nik Canvin
blog_description: "This blog focuses on the code to implement a cloud-native serverless Node.js microservice developed using Eclispe Codewind."
permalink: a-technical-autopsy-of-a-containerized-node-js-dependency-insights-microservice-application
duration: 5 minutes
tags: [Nodejs, Cloud Computing, Microservices, Software Development, Licensing]

---
This blog focuses on the code to implement a cloud-native serverless Node.js microservice developed using Eclispe Codewind.

Note: To see a quick overview and demonstration of the running microservice from an end users point of view, you may like this [previous blog](/codewind/a-new-microservice-to-provide-node-js-sub-dependency-license-insights).

An overview of flow and microservice files:

![image of the microservice flow and files](images/blog/technicalautopsy_1.gif)

A more in-depth look at the key files in the microservice:

**‘routers/processNow.js’** and **‘public/uploads.html’** files

![image of code in VS Code](images/blog/technicalautopsy_2.png){:width="800px"}
*code extract*
{: style="text-align: center;"}

1. processNode.js defines the root ‘/‘ application endpoint, which loads the uploads.html form, from the ‘/public’ dir.
2. After the user has entered the details of the package name and version they would like to check, the community ‘[multer](https://www.npmjs.com/package/multer){:target="_blank"}’ module is used to store the details in an ‘uploadData’ constant.
3. That constant is then passed to the following service for processing:

**‘services/handleUpload.js’** file (using asynchronous calls throughout to control the following work flow):

![image of code in VS Code](images/blog/technicalautopsy_3.png){:width="800px"}
*code extract*
{: style="text-align: center;"}

1. Removes the packageDir if it pre-exists (makes sure we do a fresh check even if package name/version previously checked, in case and sub-dependency details have changed).
2. Creates working directories for the packageDir and an analysisDir.
3. Calls GetPackageAndDependencies which downloads and decompresses the package from NPM. It the calls CleanNodePackageInstall to install all the sub-dependencies. If the user specified a ‘clean’ install of sub-dependencies (default) and a package-lock.json exists, then NPM installs all the production sub-dependencies at the versions specified in the package-lock.json file. If not, then the none explicit semver versions declared in the package.json are used instead.
4. Calls PerformLicenseCheck, with uses the community ‘license-checker’ module to determine either the declared license for all production dependencies to a best guess by analysing a few targeted files.
5. Now it’s time to determine package usage safety. Initially, all packages are added to the ‘Green list’ (no further action needs to be taken), then the following steps are run to determine any increased usage risk level that is detected.It then calls CompareResultsWithExistingClearance which checks which packages have been previously cleared for use (this assumes the developer is part of a project following a formal IP clearance package approval process, such as the Eclipse Codewind project following the Eclipse IP Process). Any packages not previously cleared for use, are moved to the ‘amber list’ (warning users of packages not previously cleared).
6. Next os to call CompareResultsWithApprovedLicenses, which checks which packages are NOT licensed according to a pre-approved safe license type list (as above, this also assumes the developer is part of a project following a formal IP clearance package approval process, such as the Eclipse Codewind project following the Eclipse IP Process). Any packages without pre-approved license types are moved to the ‘red list’ (alerting users of packages with potentially blocking usage licenses). Finally is to check if any dependency files contain any risky secondary licensed code by calling ‘PerformGrep’, which spawns a child process to run a ‘grep command’ which scans every file in every package looking for risky non-case sensitive ‘gpl’ keyword. All results are passed too ‘ProcessGrepResults, which gets the line and line number of any risky secondary licensed code. It then calls CompareResultsWithGPLMentions, which moves any ‘amber’ packages to be ‘red’ packages, if risky keywords are found.
7. All the results are then sent to sent to ‘RenderPugResultsFile’ (see below) to format them as html
8. Then the html is returned to the users browser.

**‘results.pug’** file

![image of code in VS Code](images/blog/technicalautopsy_4.png){:width="800px"}
*code extract*
{: style="text-align: center;"}

9. A ‘results.css’ stylesheet is linked to help format the html
10. A banner is added, linking to the ‘Eclipse Codewind’ page and the specific OpenSourceUsageManager’ project GitHub page
11. Then a summary of overall results is displayed
12. If packages (on the ‘red’ list) with issues were found, then an alert immediately informs the user.
13. Else if packages (on the ‘amber’ list) with warnings were found, then this is conveyed to the user.
14. Else a ‘green’ bill of health informs the user that they may use their package without further action.
15. Then in a collapsable format, first all the ‘red’ packages are displayed (with a drill to salient comments), then the ‘amber’ ones and finally the ‘green’ ones at the bottom.

To get a new containerized microservice up and running immediately without any Kubernetes or Docker skills at all, I used Eclispe Codewind. See this [introduction](/codewind/introduction-to-eclipse-codewind-build-high-quality-cloud-native-applications-faster) to follow in my footsteps.

**All projects created using the Eclipse Codewind Express Node.js project template that I used, contain the following key files:**

![image of code in VS Code](images/blog/technicalautopsy_5.png){:width="800px"}
*code extract*
{: style="text-align: center;"}

- A ‘dockerfile’ which drives the docker build process when Eclipse Codewind containerises the application. It defines the base operating system (node:12-stretch in this case) to put in the container and updates all the operating system dependencies. It then copies all the application root files into the container, installs all the application sub-dependencies (node modules in this case), configures/exposes port 3000, then starts the application in the container.
- A ‘server.js’ file which creates the ‘express’ server and defines an ‘appmetrics-dash’ endpoint that Eclipse Codewind uses to visualise application metrics such as CPU, memory and http response time/throughput.
- A ‘router/health.js’ file which defines a ‘/health’ endpoint which displays a ‘status: ‘UP” message and is used by Eclipse Codewind to determine if the app is running.

Two other noteworthy features (available by right-clicking a project in Eclipse Codewind) that were used to ensure the microservice delivered acceptable behaviour and performance that come built in with Eclipse Codewind are:

**Application Monitor**

![image of code in VS Code](images/blog/technicalautopsy_6.gif)
*realtime metrics for a running containerised application*
{: style="text-align: center;"}

This was used to check CPU, memory and http metrics during development iterations, to ensure nothing untoward had occured in the latest code changes.

**Performance Dashboard**

![image of performance dashboard](images/blog/technicalautopsy_7.png){:width="800px"}
*the performance dashboard*
{: style="text-align: center;"}

This was used to drive simulated load through the microservice to check overall throughput performance. Several runs were stored and compared during development iterations and to verify the final code.

### In a nutshell
Using the Eclipse Codewind develop tools instantly created a fully formed and started containerized Node.js microservice application, doing all the heavy containerization lifting automatically.

![image of Codewind](images/blog/technicalautopsy_8.png){:width="800px"}
*the performance dashboard*
{: style="text-align: center;"}

The application was completed by adding the code in files described above.
To see the final microservice in action, you may like to visit this previous blog: [“A new microservice to provide ‘Node.js sub-dependency license insights’”](/codewind/a-new-microservice-to-provide-node-js-sub-dependency-license-insights)