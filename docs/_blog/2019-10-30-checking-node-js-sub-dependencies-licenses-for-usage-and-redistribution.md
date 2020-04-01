---
layout: post
title: "Checking Node.js sub-dependencies licenses for usage and redistribution"
categories: blog
author_picture: images/blog/author_icon_nik_canvin.jpg
author_url: https://www.linkedin.com/in/nik-canvin-110326/
author: Nik Canvin
blog_description: "Reusing Node.js modules from NPM is technically easy, but understanding the commercial legal usage and redistribution implications can be a ‘black art’."
permalink: checking-node-js-sub-dependencies-licenses-for-usage-and-redistribution
duration: 5 minutes
tags: [JavaScript, Nodejs, Licensing, Project Management, Software Development]
---

Reusing Node.js modules from NPM is technically easy, but understanding the commercial legal usage and redistribution implications can be a ‘black art’.

![image of npm](images/blog/npmdependencies_1.png)
*‘npm list’ ... then scroll and scroll and just keep going*
{: style="text-align: center;"}

Working as a software project manager for the last 2 years on an offering which uses 1000s of open source packages and releases every four weeks, I’ve spent considerable time discovering, understanding and manually working through several pain points regarding open source (OS) sub-dependency identification and licensing challenges.

*Note: In my case I needed automation to keep up with both my project’s consumption of new OS packages, as well as the OS community’s appetite to continuously update their packages. A new microservice was developed for use by my team, which I’ve shared in a separate blog here: “[A new microservice to provide Node.js sub-dependency license insights](/codewind/a-new-microservice-to-provide-node-js-sub-dependency-license-insights).”*

![image of license chcker](images/blog/npmdependencies_2.png){:width="800px"}
*Enter a package name and version to check (left window) and license results (right window)*
{: style="text-align: center;"}

However, for anyone in a sinking ‘sub-dependency nightmare’ boat and without a magic microservice, the main purpose of this blog is to share the four main pain-points I encountered and the approaches I learned to overcome them.

### Pain point 1: Developers start using open source sub-dependencies that have inappropriate licenses
When choosing open source, developers usually focus on capability and community popularity (downloads), then the declared license provided and maybe top level sub-dependency license compatibility, but unforeseen legal issues/risks buried deeper in sub-dependencies may surface late in the development process, causing the following:
- Best case: wasted time (developer, code committer, IP attorney, project manager), to assist with investigation and/or mitigation.
- Medium case: removal of the offending open source, leading to reworking code, wasting time and delaying feature release (maybe even contamination of the developer environment if wrongly downloaded).
- Worst case: loss at legal litigation with executive level consequences.
Should the developer either directly or request management to investigate the potential use of a package with sub-dependencies, then there is no quick easy way to overcome the following three additional pain-points.

Should the developer either directly or request management to investigate the potential use of a package with sub-dependencies, then there is no quick easy way to overcome the following three additional pain-points.

### Pain point 2: Compile an accurate listing of ‘production’ sub-dependencies with versions
There are several things to consider here:
1. In a multi-person development team, don’t ask multiple people to manually provide listings of sub-dependencies being consumed, as you’ll likely get an inconsistent set of packages/versions (see the following bullets), so it’s often best to go directly to the source code, understand how it’s built and do it yourself. The learning curve for a non-technical project manager is pretty low, so don’t be afraid.
2. If the offering is built, using ‘npm ci’ (clean install), then the sub-dependency tree used will exactly match the package names/versions listed in the project package-lock.json file.
3. If the offering is not built using ‘npm ci’, then the actual versions used are generated at install time following semantic rules in the package.json instead. In this case, good automation is key to ensure when you release you can quickly provide the most current license and copyright notices possible.
4. Also when doing the ‘npm install’, using the ‘-production’ flag will make sure only production dependencies (not development only dependencies) are installed, as those are the ones that commercial offering license and notices files need to cater for.
5. If your offering spans multiple code repositiories (such as git repos), make sure you know which are the ones that will be used in the actual offering build. Large offerings with distributed agile development teams often spawn many repositories, which can easily become obsolete or even never contain final offering code.
6. Delta processing (only handling what’s changed since the last release) is a common approach to minimise pain, however, this can all too easily result in missed packages never being picked up in the future.

### Pain point 3: Compile an accurate understanding of sub-dependency licenses and copyright notices
Again this is not quite as easy as it sounds:
1. The good news for Node.js is that the community is good at declaring the license for a module in the package.json. I used a ‘[license-checker](https://www.npmjs.com/package/license-checker){:target="_blank"}’ module on NPM, which does a great job reporting the declared license and in the absence of a declaration, it parses targeted files and guesses the license.
2. However, it’s possible that code under less commercially redistribution friendly licenses lurks in package files, so it is advantageous to check all files for ‘risky keywords’ such as ‘GPL’.
3. Some packages release under ‘dual’ license terms, so you need to do your due diligence to ensure that you can use a package under the accepted license terms for your offering.
4. Each of the cases above can require manual investigation, so rediscovery of risks and issues can result in wasted time, especially when packages with trickier cases release frequently.

### Pain point 4: If you are required to follow a legal IP clearance process*, then ensuring only previously uncleared packages are checked and cleared
*An example ‘legal IP clearance process’ is the [Eclipse IP process](https://www.eclipse.org/projects/handbook/#ip){:target="_blank"}, which is required for Eclipse projects.
I found the tricky parts here, are:
- Maintaining a list of package versions previously cleared, then using it to help developers choose which open source packages to use in future and also when processing previously uncleared packages at release time.
- When producing the final offering license and copyright notices for a release, then all the packages present should be included, not just the delta in the bullet above. You should also be able to exclude any packages no longer present since the last release.

### In summary
As the use of open source continues to balloon with the exponential growth of sub-dependencies (see this 30 billion monthly downloads [NPM blog](https://blog.npmjs.org/post/180868064080/this-year-in-javascript-2018-in-review-and-npms){:target="_blank"}), coupled with the need pick up the latest security vulnerability fixes in the latest package versions, automation is the obvious way to ensure any subsequent legal risks are consciously mitigated.

![image of Codewind](images/blog/npmdependencies_3.png){:width="800px"}

Using the Eclipse Codewind developer tools, the automation in this case was implemented as a microservice to enable the widest possible reuse within my company, either as-is or as part of other parties’ automation workflows. Find out more in this related blog: “[A new microservice to provide Node.js sub-dependency license insights.](/codewind/a-new-microservice-to-provide-node-js-sub-dependency-license-insights)”

Node.js is not the only language with challenging sub-dependency package identification and licensing risks, so similar work drilling into other languages is in progress.

As checking Node.js sub-dependency licenses and copyrights is only part of the legal work required for typical release (other work being to check for other language packages, as well as creating final license and notices files), further microservices are also in progress to automate many other legal and non-legal offering release steps.