---
layout: news
title: New for Codewind 0.5
description: New for Codewind 0.5
keywords: news, new, updates, update, version
duration: 1 minute
permalink: news05
---

## Codewind 0.5.0
Thursday 17 October 2019

#### Appsody
- You can now easily import existing Appsody projects into Codewind, or convert projects to use Appsody during import. If you are using the Eclipse IDE, see [Adding existing projects](mdteclipseimportedprojects.html). If you are using VS Code, see [Adding existing projects](mdt-vsc-importedprojects.html).

#### OpenShift
- Codewind supports the OpenShift project type in Eclipse Che running on OpenShift or OKD. Create and build applications with Codewind and OpenShift. Codewind supports the [ODO extension feature](https://github.com/eclipse/codewind/issues/605). 

#### IDEs (Both Eclipse and VS Code)
- Project template support is improved.
  - [Template sources can be named.](https://github.com/eclipse/codewind/issues/541)
  - [When you have two or more repositories configured, the repository name is included with templates that have similar names.](https://github.com/eclipse/codewind/issues/570)

#### Eclipse
- OpenAPI for Eclipse includes improved post-generation support for Liberty Maven projects. Code is generated and ready for use with no manual steps required to compile it and have a valid `pom.xml` file.
- [Automatically import projects from other workspaces into the Eclipse workspace.](https://github.com/eclipse/codewind/issues/507)
- [The project overview page opens when a project is created or added.](https://github.com/eclipse/codewind-eclipse/issues/258)

#### VS Code
- [GitHub URLs that are used as template resources are no longer limited to raw URLs.](https://github.com/eclipse/codewind/issues/540)
- [Template source URLs can use file scheme.](https://github.com/eclipse/codewind-vscode/pull/223)
- [Improved project overview page.](https://github.com/eclipse/codewind-vscode/pull/225)

#### Website
- Code phrases and code blocks appear with grey backgrounds and syntax coloring for easier visibility.