---
layout: docs
title: Referencing files external to a project
description: Referencing files external to a project
keywords: users, projects, Kubernetes, LDAP, user management, access management, login, deployment, pod, security, securing cloud connection, remote deployment of Codewind
duration: 1 minute
permalink: referencing-files
type: document
parent: installoncloud
order: 0
---

# Referencing files external to a project

You can define references to files that reside outside of a project.

To do this: 
1. Create a file called `.cw-refpaths.json` in your project
2. Define the references as follows:

```
{
    "refPaths": [
        {
            "from": "",
            "to": ""
        }
    ]
}
```

Where:
- `refPaths` is an array of references. A reference's `from` property is an absolute or relative path to the file you are referencing. Note that you cannot reference directories. 
- The reference's `to` property is a path relative to the root of the project.

Codewind copies the contents of the file that is being referenced, and places it in the file specified by the `to` path when building and running the project.
