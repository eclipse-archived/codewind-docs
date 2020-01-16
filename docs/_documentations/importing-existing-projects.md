---
layout: docs
title: Importing existing projects
description: Documents
keywords: importing, directory, archive, configuring, cloud, microservices, application, Eclipse, MicroProfile, Java, Spring, Node.js, Swift, Maven, Dockerfile, GitHub, container, Liberty, Helm, Dockerfile-lang, local directory, add existing project, pre-import, pom.xml, server.xml, Maven, Docker, Helm chart
duration: 1 minute
permalink: importing-existing-projects
type: document
parent: importingaproject
order: 0
---

# Importing existing projects

Modifications are usually required to successfully add and deploy projects that have never been run in Codewind before. This guide covers the basics of configuring a project to run in Codewind.

## What kind of projects can I add?

Codewind is designed to develop cloud native microservices. Therefore, each project must be self-sufficient and not dependent on other projects to build. The requirements to add projects for each of the supported application types are outlined in the following sections:

* [MicroProfile/Java EE projects](#eclipse-microprofile-projects)
* [Java Spring projects](#java-spring-projects)
* [Node.js projects](#nodejs-projects)
* [Swift projects](#swift-projects)
* [Generic Docker projects](#generic-docker-projects)
* [Appsody projects](#appsody-projects) 

## MicroProfile/Java EE projects

MicroProfile projects are Java applications that are deployed to WebSphere Liberty. They are built by using Maven and the `liberty-maven-plugin` and are based on the [WebSphere Liberty Docker image](https://hub.docker.com/_/websphere-liberty/). MicroProfile projects support rapid iterative development in Codewind with a few changes to your `pom.xml` file.

### Instructions

Avoid copying files from the project’s Maven target folder as part of any Dockerfile instructions because Codewind builds your project within the container. The application builds against the same runtime that is used in production to avoid inconsistencies between development and production environments.

### Pre-import instructions

MicroProfile projects must be configured to build by using Maven.

Tip: For an example of a working MicroProfile application, create a new MicroProfile project in Codewind. You can see the `pom.xml` file contents and use the file as a template when you configure your project's `pom.xml` file.

Configure your `pom.xml` file as follows:

1. The Liberty Maven parent is required for rapid iterative development:

```xml
<parent>
    <groupId>net.wasdev.wlp.maven.parent</groupId>
    <artifactId>liberty-maven-app-parent</artifactId>
    <version>2.1.1</version>
</parent>
```

  2a. Add a Maven profile for Codewind that configures the Liberty Maven plug-in.

  ```xml
  <profile>
      <id>microclimate</id>
      <activation>
          <property>
              <name>libertyEnv</name>
              <value>microclimate</value>
          </property>
      </activation>
      <build>
          <directory>${microclimateOutputDir}</directory>
          <plugins>
              <!-- Enablement of liberty-maven plugin in Codewind -->
              <plugin>
                  <groupId>net.wasdev.wlp.maven.plugins</groupId>
                  <artifactId>liberty-maven-plugin</artifactId>
                  <version>2.1.1</version>
                  <extensions>true</extensions>
                  <configuration>
                      <serverName>defaultServer</serverName>
                      <looseApplication>true</looseApplication>
                      <appsDirectory>apps</appsDirectory>
                      <installDirectory>/opt/ibm/wlp</installDirectory>
                      <userDirectory>${project.build.directory}/liberty/wlp/usr</userDirectory>
                      <configFile>${basedir}/src/main/liberty/config/server.xml</configFile>
                      <serverEnv>${basedir}/src/main/liberty/config/server.env</serverEnv>
                      <jvmOptionsFile>${basedir}/src/main/liberty/config/jvm.options</jvmOptionsFile>
                      <include>usr</include>
                      <bootstrapProperties>
                          <default.http.port>9080</default.http.port>
                          <default.https.port>9443</default.https.port>
                      </bootstrapProperties>
                      <installAppPackages>project</installAppPackages>
                  </configuration>
              </plugin>
          </plugins>
      </build>
  </profile>
  ```

  Then add the required Liberty Maven plugin configuration:

  2b. Liberty server configuration file, `server.xml`, that is located in the source folder that is referenced in the `pom.xml` file.

  ```xml
  <configFile>${basedir}/src/main/liberty/config/server.xml</configFile>
  ```

  2c. Optional: Liberty server environment file:

  ```xml
  <serverEnv>${basedir}/src/main/liberty/config/server.env</serverEnv>
  ```

  2d. Optional: Liberty Java Virtual Machine options file:

  ```xml
  (jvm.options)
  <jvmOptionsFile>${basedir}/src/main/liberty/config/jvm.options</jvmOptionsFile>
  ```

3. Add `/mc-target` to the `.gitignore` file to ignore build output from the `microclimate` build profile.

Note: Due to a known issue the server needs to be configured to use port 9080 in order for the project to be detected as started. See [Troubleshooting](troubleshooting.html) for more details.

### Post-import instructions

The following files are generated during the import process. If your project requires additional configuration files or instructions for build, you might need to modify them.

**Note:** Only Microprofile projects enable the use of `Dockerfile-lang` and `Dockerfile-build` files.

**Dockerfile-lang**

The `Dockerfile-lang` file is an optional project file and a development version of the Dockerfile. It contains any Docker instructions that are required only for the development image, including copying application resources from source. For example, if your application requires configuration files, you can use a `COPY` instruction to copy those files into your application's Docker container.

If `Dockerfile-lang` does not exist, the Dockerfile is used for the development image instead. 

Maven is included in a generated `Dockerfile-build` file, so you do not need to include instructions to set up a Maven download in `Dockerfile-lang`.

**Dockerfile-build**

The `Dockerfile-build` file is used to install a Java SDK and Maven. This file must be updated if your application requires different versions of these tools.

## Java Spring projects

Java Spring Boot projects are built by using Maven and produce stand-alone runnable applications.

Requirements:

- The project must be a valid Spring Boot project. The `pom.xml` must contain a dependency on an artifact from the `<groupId>org.springframework.boot</groupId> group`.
- The `artifactId` value in the `pom.xml` file must match the project name.
- Configure the project to build with Maven and produce a exectutable `.jar` file.
- Configure the application to use port 8080.
- Copy the executable `.jar` file produced by the Maven build to `/app.jar` within the Docker container. To do this, simply add a `COPY` instruction to the Dockerfile. If your project does not have a Dockerfile, one is generated for you.

For example:

```docker
FROM ibmjava:8-sfj
    MAINTAINER IBM Java engineering at IBM Cloud

    COPY target/spring-application-2.0.0.BUILD-SNAPSHOT.jar /app.jar

    ENV JAVA_OPTS=""
    ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar" ]
```

## Node.js projects

Your `package.json` must meet the following requirements. For an example of a good `package.json` for importing, see [the express application generator](https://github.com/ibm-developer/generator-ibm-core-node-express/blob/develop/app/templates/package.json):

- Ensure the project provides a `start` npm script in `package.json` so it can be started by `npm start`.
    - For example: `start: "node server/server.js"`
- In local installations of Codewind, you can restart the project in Debug mode. To use this feature, the project must also provide a `debug` npm script, which accepts connections from all hosts on port 9229. For help configuring this script, see [the Node.js debugging guide](https://nodejs.org/en/docs/guides/debugging-getting-started/#command-line-options).
    - For example: `debug: "node --inspect=0.0.0.0:9229 server/server.js"`
- If auto-build is enabled, `nodemon` is used to restart your project automatically. `nodemon` calls either the `start` or `debug` script on a code change, depending on whether or not the project is debugging. Consequently, neither of these scripts should invoke `nodemon`.
    - If a problem occurs with either script, the error appears in the Application Logs view in Codewind.

If you have a `Dockerfile`, it must meet the following requirements:
- A `Dockerfile` is generated if it does not exist. Ensure the `Dockerfile` exposes your application port.
    - For example, if you're using port 3000, the `Dockerfile` needs to include `EXPOSE 3000`.
- Ensure that the application is located in the `/app` directory within the Docker container.
- Ensure that the `Dockerfile` sets the working directory to `/app`:
    - `WORKDIR "/app"`


## Swift projects

Codewind works with Swift projects that use the Kitura web framework.

Requirements:

- A `Dockerfile-tools` file is generated to build the project. Ensure the project can be built by using a `release` build configuration.
For example, you should be able to build the project by using the command
`swift build --configuration release`.
- A `Dockerfile` file is generated. It runs the application that was built by using `Dockerfile-tools`.

## Generic Docker projects

If you have a Dockerized application that doesn't fit an existing template, you can still add the project to Codewind by selecting the **Other (Basic Container)** option as the project type. For the application state detection to work, the Dockerfile needs to include an `EXPOSE` instruction to point to the port that is used to determine whether the project is running.

## Appsody projects

If you have an existing Appsody project, or a project that you want to add to Codewind as an Appsody project, select the corresponding Appsody project type and, if applicable, the Appsody stack when adding the project. 
For more information about Appsody and Appsody stacks, see [https://appsody.dev](https://appsody.dev).

#### Defining environment variables for Appsody projects
Complete the following steps to define environment variables that take effect in an Appsody application:
1. Create an `env.properties' file in the root of the Appsody project.
   - **Caution:** Do not commit the `env.properties` file to your source repository if it contains confidential information, such as passwords.
2. Define your environment variables in this file by using the standard properties format. This format features one `name=value` entry per line.
3. If autobuild is enabled, Codewind automatically rebuilds the project to pick up the environment values. If autobuild is not enabled, new values take effect the next time you rebuild the project.
