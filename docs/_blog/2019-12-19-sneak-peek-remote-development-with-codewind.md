---
layout: post
title: "Sneak Peek: Remote Development with Codewind"
categories: blog
author_picture: images/blog/author_icon_becca_bau.jpeg
author_url: 
author: Becca Bau
blog_description: "In our Codewind 0.7.0 release, we’re very excited to share with you a preview of our latest feature: a remote development scenario with Codewind! We can hear you asking, “Why should I even care?”..."
permalink: sneak-peek-remote-development-with-codewind
duration: 2 minutes
tags: [Docker, Kubernetes, Eclipse, Codewind, Remote Development]
---

(Brought to you by Julie Stalley, John Collier, and Becca Bau)

In our Codewind [0.7.0 release](https://www.eclipse.org/codewind/news07.html), we’re very excited to share with you a preview of our latest feature: a remote development scenario with Codewind! We can hear you asking, “Why should I even care?”

Well, first, let me start by telling you what it even is. Our remote scenario enables you to develop locally on Codewind — meaning you get to use your own IDE! — and then securely build and run your service on a remote instance of Codewind in the cloud. This is really great news for Kubernetes developers everywhere.

Now, why is this so cool?

1. You get to take control of your Kubernetes development. You can use your favorite IDE — on your laptop or local machine — and build and run code straight in the cloud on Kubernetes.
- This means you don’t have to change IDEs if you want to start developing in the cloud, so you still have access to your favorite plugins and language server packs. Why would you give them up if you don’t have to?
- You can dedicate your local machine to focus purely on developing code and use the cloud’s resources to build and run your apps.
2. It abstracts away a lot of the complicated parts of app development on Kube. This also applies for Che.
- You no longer need to worry about figuring out how to push your images up to a registry, where to build and run your apps, and figuring out how to update or debug that application.
- That translates to more time spent developing!
3. You can develop against multiple clouds at once (relevant when you want to compare clouds quickly, among other reasons).
- With our remote scenario, you can install Codewind on multiple clouds, but have a single IDE pointing to all your Codewind instances. For example, you can have 3 projects in your IDE workspace instead of needing 3 separate editors for all of your builds on 3 separate instances of Codewind.

![image of the dependency microservice](images/blog/sneakpeakremotedevelopment.jpeg){:width="800px"}
*You can have all your projects in one editor and still deploy to multiple clouds.*
{: style="text-align: center;"}

TL;DR:
- Codewind now supports connecting your local IDE of choice to Codewind installed in a remote cloud.
- Connect to multiple clouds as well as your local installation of Codewind.
- Keep your favorite IDE and all your favorite tools and easily run your microservice in Kubernetes.

Questions or feedback?
- Visit [codewind.dev](https://codewind.dev/).
- Connect with us on [Mattermost](https://mattermost.eclipse.org/eclipse/channels/eclipse-codewind){:target="_blank"}.
- Open a [feature request or issue](https://github.com/eclipse/codewind/issues/new/choose){:target="_blank"}.
- Start [contributing](https://github.com/eclipse/codewind){:target="_blank"} with us!