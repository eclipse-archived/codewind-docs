---
layout: docs
title: Using a template repository of your own
description: Using a template repository of your own
keywords: getting started, setting up, projects, update, help, Theia, test, edit, Theia editor, using own IDE, empty page, refresh, credentials, default editor, Node.js profiling support, code highlighting, JavaScript file, template repository
duration: 1 minute
permalink: mdt-vsc-usingadifferenttemplate
type: document
order: 8
parent: usingcodewind
---

# Using a template repository of your own

When you create a new project, you can choose from the default set of templates available, or you can choose from a template repository of your own. To add a new repository, edit the `.config/repository_list.json` file within your `codewind-workspace`. The file is a json file that contains an array of objects with two fields, the URL of the repository and a description:

```
{
  "url": "https://raw.githubusercontent.com/kabanero-io/codewind-templates/master/devfiles/index.json",
  "description": "Standard Codewind templates."
}
```

After you have edited and saved this file, restart Codewind.
