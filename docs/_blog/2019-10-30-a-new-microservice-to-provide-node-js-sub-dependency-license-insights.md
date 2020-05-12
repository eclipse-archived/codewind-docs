---
layout: post
title: "A new microservice to provide ‘Node.js sub-dependency license insights’"
categories: blog
author_picture: images/blog/author_icon_nik_canvin.jpg
author_url: https://www.linkedin.com/in/nik-canvin-110326/
author: Nik Canvin
blog_description: "An overview and demonstration of a microservice that automates some Node.js sub-dependency management pain-points, developed using Eclipse Codewind. Note: I covered the pain points and manual..."
permalink: a-new-microservice-to-provide-node-js-sub-dependency-license-insights.html
duration: 3 minutes
tags: [Nodejs, Licensing, Cloud Computing, Development]
---

An overview and demonstration of a microservice that automates some Node.js sub-dependency management pain-points, developed using [Eclipse Codewind](http://ibm.biz/eclipse-cw01).

*Note: I covered the pain points and manual remedies associated with Node.js sub-dependency identification and licensing in a [previous blog](/codewind/checking-node-js-sub-dependencies-licenses-for-usage-and-redistribution.html). You may also be interested in a lower level technical autopsy of this containerized microservice in this [next blog](/codewind/a-technical-autopsy-of-a-containerized-node-js-dependency-insights-microservice-application.html).*

### What does the microservice do?
Once the user has submitted the Node.js package name and version to check, as well as the NPM install type (clean or not), the microservice downloads the entire package dependency tree needed for production use.

<div style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/zUiVekFCs-w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

*See it in action!*

As the team initially using this microservice are releasing an Eclipse Project, they must follow the formal Eclipse IP usage clearance process. The first step to process the sub-dependencies, is to identify packages previously cleared for use, as no further action is required for those.

The next step to identify which software license each package has declared, so for this an open source [license-checker](https://www.npmjs.com/package/license-checker){:target="_blank"} NPM module was reused. The licenses detected are then compared with a list of pre-approved licenses that the project may use.

An additional check is conducted at the package file level and scanning all the characters looking for risky keywords. This is to catch cases where the declared licenses not may have handled sub-licensed files within the package correctly. In our case we initially looked for instances ‘GPL’ strings, which was used to flag up commercial risks.

Finally a report is compiled and presented, which summarised what next action was required if applicable and sorted all the package results in a traffic light order:
- Red is used to indicate any legal license risks found.
- Amber is used when no risks were found, but the specific package has not previously been approved for use on the project.
- Green covered the case where the specific package has been previously approved for use.

### Why was a microservice implementation chosen?
There were many benefits using a microservice to solve this problem, including:
- The capability did not run on the users workstation, so the barrier to adoption was minimal (no install/setup is required). Also the myriad of sub-dependencies were not downloaded directly to the user, avoiding potential IP contamination edge cases.
- Easy for other more extensive automation to elegantly reuse this single function. Development teams aim to automate as much end-to-end release process as possible, often resulting in unreusable localised coding of this type of function.
- Easy to deploy to any Cloud. I used an instance of OpenShift running internally within IBM (so currently only IBM employees can access this microservice).

### How was the microservice implemented?
If you’re interested in a lower level technical autopsy of this containerized microservice then my [next blog](/codewind/a-technical-autopsy-of-a-containerized-node-js-dependency-insights-microservice-application.html) may be for you, but to keep things simple here’s a quick overview.

Eclipse Codewind was used to instantly create and run an empty Express Node.js containerised microservice in one simple step.

![image of the dependency microservice](images/blog/newmicroservicedependencies_1.png){:width="800px"}

The application logic was iteratively added in Node.js and as Codewind automatically respun the running microservice from code level changes, progress was continuously validated between iterations.

Once complete, the containerised microservice was simply deployed to the Cloud of choice (an OpenShift instance within IBM in this case).

### Summary
A previously laborious process of working out the software license legal risks for a Node.js package, has now been reduced to a simple self-service check for the Developers I work with on my offering. Eclipse Codewind enabled a fully containerised cloud native microservice, to be quickly created and efficiently iteratively updated until it was complete.