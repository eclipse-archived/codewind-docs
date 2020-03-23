---
layout: post
title: "Introducing Eclipse Codewind on IntelliJ"
categories: blog
author_picture: https://miro.medium.com/fit/c/96/96/2*ZUqshp1_2Lz9vm6p2nUeRA.jpeg
author_github: https://github.com/Kabanero-io
author: Becca Bau
seo-title: "Introducing Eclipse Codewind on IntelliJ"

seo-description: "Introducing Eclipse Codewind on IntelliJ"

blog_description: "We recently announced the tech preview of Eclipse Codewind on the IntelliJ IDE. Many people have asked about IntelliJ, as it is a popular option among Java developers, and we want to make our tools available to as many developers as possible in their preferred IDEs."
permalink: introduction-intellij
---
<div class="ac ae af ag ah ey aj ak"><div><div id="89c8" class="ez fa cv ay fb b fc fd fe ff fg fh fi fj fk fl fm"><h1 class="fb b fc fn fe fo fg fp fi fq fk fr cv">Introducing Eclipse Codewind on IntelliJ</h1></div><div class="fs"><div class="n ft fu fv fw"><div class="o n"><div><a rel="noopener" href="/@bbau00?source=post_page-----aa3f5d1adff5----------------------"><img alt="Becca Bau" class="r do fx fy" src="https://miro.medium.com/fit/c/96/96/2*ZUqshp1_2Lz9vm6p2nUeRA.jpeg" width="48" height="48"></a></div><div class="fz ak r"><div class="n"><div style="flex:1"><span class="ax b ay az ba bb r cv q"><div class="ga n o gb"><span class="ax gc bq az bk gd bj ge gf gg cv"><a class="bv bw bx by bz ca cb cc cd ce gh ch ci cj ck" rel="noopener" href="/@bbau00?source=post_page-----aa3f5d1adff5----------------------">Becca Bau</a></span><div class="gi r aw h"><button class="gj cw gk gl gm gn go gp ce dh ax b ay gq gr bb di dj dk bm dl ch">Follow</button></div></div></span></div></div><span class="ax b ay az ba bb r bc bd"><span class="ax gc bq az bk gd bj ge gf gg bc"><div><a class="bv bw bx by bz ca cb cc cd ce gh ch ci cj ck" rel="noopener" href="/codewind/introducing-eclipse-codewind-on-intellij-aa3f5d1adff5?source=post_page-----aa3f5d1adff5----------------------">Mar 5</a> <!-- -->·<!-- --> <!-- -->3<!-- --> min read</div></span></span></div></div><div class="n gs gt gu gv gw gx gy gz ab"><div class="n o"><div class="ha r aw"><a href="//medium.com/p/aa3f5d1adff5/share/twitter?source=post_actions_header---------------------------" class="bv bw bx by bz ca cb cc cd ce cf cg ch ci cj ck" target="_blank" rel="noopener nofollow"><svg width="29" height="29" class="q"><path d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"></path></svg></a></div><div class="ha r aw"><button class="bv bw bx by bz ca cb cc cd ce cf cg ch ci cj ck"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" class="q"><path d="M5 6.36C5 5.61 5.63 5 6.4 5h16.2c.77 0 1.4.61 1.4 1.36v16.28c0 .75-.63 1.36-1.4 1.36H6.4c-.77 0-1.4-.6-1.4-1.36V6.36z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.76 20.9v-8.57H7.89v8.58h2.87zm-1.44-9.75c1 0 1.63-.65 1.63-1.48-.02-.84-.62-1.48-1.6-1.48-.99 0-1.63.64-1.63 1.48 0 .83.62 1.48 1.59 1.48h.01zM12.35 20.9h2.87v-4.79c0-.25.02-.5.1-.7.2-.5.67-1.04 1.46-1.04 1.04 0 1.46.8 1.46 1.95v4.59h2.87v-4.92c0-2.64-1.42-3.87-3.3-3.87-1.55 0-2.23.86-2.61 1.45h.02v-1.24h-2.87c.04.8 0 8.58 0 8.58z" fill="#fff"></path></svg></button></div><div class="ha r aw"><a href="//medium.com/p/aa3f5d1adff5/share/facebook?source=post_actions_header---------------------------" class="bv bw bx by bz ca cb cc cd ce cf cg ch ci cj ck" target="_blank" rel="noopener nofollow"><svg width="29" height="29" class="q"><path d="M23.2 5H5.8a.8.8 0 0 0-.8.8V23.2c0 .44.35.8.8.8h9.3v-7.13h-2.38V13.9h2.38v-2.38c0-2.45 1.55-3.66 3.74-3.66 1.05 0 1.95.08 2.2.11v2.57h-1.5c-1.2 0-1.48.57-1.48 1.4v1.96h2.97l-.6 2.97h-2.37l.05 7.12h5.1a.8.8 0 0 0 .79-.8V5.8a.8.8 0 0 0-.8-.79"></path></svg></a></div><div class="hb r ao"><div><div class="hc"><div><div class="bm" role="tooltip" aria-hidden="true" aria-describedby="1" aria-labelledby="1"><button class="bv bw bx by bz ca cb cc cd ce cf cg ch ci cj ck"><svg width="25" height="25" viewBox="0 0 25 25"><path d="M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z" fill-rule="evenodd"></path></svg></button></div></div></div></div></div></div></div></div></div></div><p id="eaf2" class="hd he cv ay hf b hg hh hi hj hk hl hm hn ho hp hq et" data-selectable-paragraph="">We recently announced the tech preview of Eclipse Codewind on the <a href="https://www.jetbrains.com/idea/" class="bv dl hr hs ht hu" target="_blank" rel="noopener nofollow">IntelliJ IDE</a>. Many people have asked about IntelliJ, as it is a popular option among Java developers, and we want to make our tools available to as many developers as possible in their preferred IDEs. With this tech preview, you can now use Codewind on IntelliJ locally, and we are working hard to bring the full, effortless Codewind experience to IntelliJ over the coming months.</p><figure class="hw hx hy hz ia ib ek el paragraph-image"><div class="ic id bs ie ak"><div class="ek el hv"><div class="ij r bs ik"><div class="il r"><div class="br if eo t u ig ak bk ih ii"><img class="eo t u ig ak im in ct oo" src="https://miro.medium.com/freeze/max/60/1*ylJNZ372UDizqDM1is3X4g.gif?q=20" width="1125" height="719" role="presentation"></div><img class="mt on eo t u ig ak ip" width="1125" height="719" role="presentation" src="https://miro.medium.com/max/2250/1*ylJNZ372UDizqDM1is3X4g.gif"><noscript><img class="eo t u ig ak" src="https://miro.medium.com/max/2250/1*ylJNZ372UDizqDM1is3X4g.gif" width="1125" height="719" role="presentation"/></noscript></div></div></div></div><figcaption class="bc bq iq ir is em ek el it iu ax gc" data-selectable-paragraph="">Creating a MicroProfile project using the IntelliJ IDE</figcaption></figure><p id="665d" class="hd he cv ay hf b hg hh hi hj hk hl hm hn ho hp hq et" data-selectable-paragraph="">Get started with Codewind on IntelliJ <a href="https://www.eclipse.org/codewind/mdt-intellij-getting-started.html" class="bv dl hr hs ht hu" target="_blank" rel="noopener nofollow">here</a>!</p><figure class="hw hx hy hz ia ib ek el paragraph-image"><div class="ic id bs ie ak"><div class="ek el iv"><div class="ij r bs ik"><div class="iw r"><div class="br if eo t u ig ak bk ih ii"><img class="eo t u ig ak im in ct oo" src="https://miro.medium.com/max/60/1*en0TEMpUTWMELlVWz7brDA.png?q=20" width="1685" height="1235" role="presentation"></div><img class="mt on eo t u ig ak ip" width="1685" height="1235" role="presentation" src="https://miro.medium.com/max/3370/1*en0TEMpUTWMELlVWz7brDA.png"><noscript><img class="eo t u ig ak" src="https://miro.medium.com/max/3370/1*en0TEMpUTWMELlVWz7brDA.png" width="1685" height="1235" role="presentation"/></noscript></div></div></div></div><figcaption class="bc bq iq ir is em ek el it iu ax gc" data-selectable-paragraph="">Get the Codewind plugin in the IntelliJ IDE Marketplace!</figcaption></figure><h2 id="cd48" class="ix iy cv ay ax iz ja jb jc jd je jf jg jh ji jj jk" data-selectable-paragraph=""><strong class="cb">Refresh my memory, what is Eclipse Codewind again?</strong></h2><p id="8633" class="hd he cv ay hf b hg jl hi jm hk jn hm jo ho jp hq et" data-selectable-paragraph="">Eclipse Codewind is an open source project for building and developing cloud-native, containerized applications. Built from the ground up, Codewind provides an improved and integrated IDE-based container development flow. Codewind does all the hard stuff, from creating your project to optimization so you can focus on rapidly iterating your code. Plus, you can debug your remote applications as if they were on your local machine. You can see all the metrics and logs you need, and perform load testing with a click of a button. Relax into the familiar flow of traditional application development without needing to be an expert in container technology.</p><h2 id="7806" class="ix iy cv ay ax iz ja jb jc jd je jf jg jh ji jj jk" data-selectable-paragraph="">Why do we care about Codewind?</h2><p id="3e8a" class="hd he cv ay hf b hg jl hi jm hk jn hm jo ho jp hq et" data-selectable-paragraph="">Container development is a regularly utilized process for developing for cloud-native applications, but debugging the deployment process can be tricky. Codewind provides preconfigured, Docker-containerized <a href="https://www.eclipse.org/codewind/workingwithtemplates.html" class="bv dl hr hs ht hu" target="_blank" rel="noopener nofollow">project templates</a> covering multiple popular languages and frameworks that you’re already familiar with. You can modify the preconfigured projects to develop your customized microservices. As you develop, Codewind automatically pushes your code changes to your container as efficiently as possible.</p><p id="8e01" class="hd he cv ay hf b hg hh hi hj hk hl hm hn ho hp hq et" data-selectable-paragraph="">Use Codewind for a smooth debugging and testing experience inside your IDE. Run commands and access your application, build, and container logs from within the container. Use the Project Overview interface to view the endpoint, container ID, location on disk, build/run status, and ports, so you don’t have to leave your IDE to search for this information. Codewind integrates with your IDE’s terminal window and Problems and Output panels for a smooth test and debug experience. Additionally, you can open a shell session inside your container with a simple click. And best of all, you get to do all this with full compatibility with the debug functionality of your IDE.</p><p id="a9f8" class="hd he cv ay hf b hg hh hi hj hk hl hm hn ho hp hq et" data-selectable-paragraph="">You can also visualize your container application’s footprint, such as CPU and memory usage (where supported). Codewind’s Application Metrics Dashboard exposes your microservice’s core metrics, including HTTP(S) request and throughput information, as well as CPU usage, memory footprint, and heap. Codewind also features integrated load-testing for certain project types. You can configure and run load tests against your microservices using <a href="https://www.youtube.com/watch?v=nfJt3f5TUvc" class="bv dl hr hs ht hu" target="_blank" rel="noopener nofollow">Codewind’s performance dashboard</a>, and use the graphs to compare your repeated load test results and iterate on performance improvements.</p><p id="1042" class="hd he cv ay hf b hg hh hi hj hk hl hm hn ho hp hq et" data-selectable-paragraph="">As an open-source project, we cater to our users, so if you’ve got any suggestions or want to get involved, let us know! We are on <a href="https://github.com/eclipse/codewind" class="bv dl hr hs ht hu" target="_blank" rel="noopener nofollow">GitHub</a> and <a href="https://mattermost.eclipse.org/eclipse/channels/eclipse-codewind" class="bv dl hr hs ht hu" target="_blank" rel="noopener nofollow">Mattermost</a> and happy to chat.</p><h2 id="6797" class="ix iy cv ay ax iz ja jb jc jd je jf jg jh ji jj jk" data-selectable-paragraph="">Where can I use Codewind?</h2><p id="4aa5" class="hd he cv ay hf b hg jl hi jm hk jn hm jo ho jp hq et" data-selectable-paragraph="">Full functionality on <a href="https://www.eclipse.org/codewind/mdt-vsc-getting-started.html" class="bv dl hr hs ht hu" target="_blank" rel="noopener nofollow">VS Code</a>, <a href="https://www.eclipse.org/codewind/mdt-eclipse-getting-started.html" class="bv dl hr hs ht hu" target="_blank" rel="noopener nofollow">Eclipse IDE</a>, <a href="https://www.eclipse.org/codewind/mdt-che-installinfo.html" class="bv dl hr hs ht hu" target="_blank" rel="noopener nofollow">Eclipse Che</a>, and partial functionality in <a href="https://www.eclipse.org/codewind/mdt-intellij-getting-started.html" class="bv dl hr hs ht hu" target="_blank" rel="noopener nofollow">IntelliJ</a> with plans to expand — which is great news for Java developers!</p></div>