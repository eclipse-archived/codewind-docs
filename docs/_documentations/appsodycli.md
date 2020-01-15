---
layout: docs
title: Defining environment variables for Appsody projects
description: Defining environment variables for Appsody projects
keywords: appsody, environment variable, environment variables, variables, variable, environment, environments, cli, command line interface
duration: 3 minutes
permalink: appsodycli
type: document
---

# Defining environment variables for Appsody projects
Complete the following steps to define environment variables that take effect in an Appsody application:
1. Create an `env.properties' file in the root of the Appsody project.
   - **Caution:** Do not commit the `env.properties` file to your source repository if it contains confidential information, such as passwords.
2. Define your environment variables in this file by using the standard properties format. This format features one `name=value` entry per line.
3. In autobuild is enabled, Codewind automatically rebuilds the project to pick up the environment values. If autobuild is not enabled, new values take effect the next time you rebuild the project.