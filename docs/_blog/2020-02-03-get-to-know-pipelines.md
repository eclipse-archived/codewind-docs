---
layout: post
title: "Get to know Pipelines"
categories: blog
author: Dewan Ahmed
author_picture: https://avatars1.githubusercontent.com/u/30604461
author_github: https://github.com/dewan-ahmed
seo-title: Get to know Pipelines
seo-description: This blog provides an overview of Pipelines. Learn about the architecture and components of Pipelines provided with Kabanero along with the end-to-end flow of a working pipeline.
blog_description: This blog provides an overview of Pipelines. Learn about the architecture and components of Pipelines provided with Kabanero along with the end-to-end flow of a working pipeline.
---
Why do we need pipelines? The answer is simple - to move things from one place to another. Water that sits in a reservoir isn't usable in the household, just as code that sits on your local computer isn't useful to your potential users. Pipeline mechanisms provide the infrastructure to move things, whether it's water or code, to benefit users. In regard to software delivery, a revolution started after the birth and growth of Kubernetes. Developers no longer rely on a single Jenkins instance with hundreds of plug-ins. Rather, they opt for modular, cloud-native CI/CD engines that provide reusable pieces of pipeline. Pre-built Pipelines and Tasks in Kabanero are based on link:https://github.com/tektoncd/pipeline/tree/master/docs#usage[Tekton Pipelines], which is a Kubernetes-native CI/CD engine.

== Components of our Pipelines

Each Collection contains a set of default Tasks and Pipelines. A Task usually has one objective. For example, a Task might build the project or push the image. Alternatively, a Pipeline consists of multiple tasks to support a more complex end-to-end scenario. The collection's build process copies the task and pipeline files from the link:https://github.com/kabanero-io/collections/tree/master/incubator/common/pipelines/default[collections repo]. If you are building a new collection, the default tasks and pipelines are automatically pulled into your collections repo. If you want to customize the default tasks or pipelines to meet your needs, you can choose to apply your changes either to all collections or to a specific collection.

== Running your first Pipeline

While there are two ways to run your Pipeline, it is preferable to use link:https://github.com/tektoncd/experimental/blob/master/webhooks-extension/docs/GettingStarted.md[automated webhooks].

To begin, link:https://github.com/kabanero-io/kabanero-foundation[Kabanero Foundation] needs to be installed on a Red Hat Origin Community Distribution of Kubernetes (OKD) or an OpenShift Container Platform (OCP) cluster. Next, follow the steps in the link:https://github.com/kabanero-io/kabanero-pipelines[Pipelines documentation] to create a persistent volume, create secrets to pull from your Git repo, and push to a container registry. Finally, run your pipelines by using the link:https://github.com/tektoncd/experimental/blob/master/webhooks-extension/docs/GettingStarted.md[Tekton Dashboard Webhook Extension].

== Dissecting a `pipeline.yaml` file

The following file is the YAML definition of an end-to-end Pipeline that builds, pushes, and deploys an application:

----
#Kabanero! on activate substitute CollectionId for text 'CollectionId'
apiVersion: tekton.dev/v1alpha1
kind: Pipeline
metadata:
  name: CollectionId-build-push-deploy-pipeline
spec:
  params:
  - name: event-headers
    type: string
    description: "The event headers"
  resources:
  - name: git-source
    type: git
  - name: docker-image
    type: image
  tasks:
  - name: build-push-deploy-task
    taskRef:
      name: CollectionId-build-push-deploy-task
    resources:
      inputs:
      - name: git-source
        resource: git-source
      outputs:
      - name: docker-image
        resource: docker-image
  - name: image-scan-task
    taskRef:
      name: CollectionId-image-scan-task
    runAfter: [build-push-deploy-task]
    resources:
      inputs:
      - name: git-source
        resource: git-source
      - name: docker-image
        resource: docker-image
----

Because our Pipelines are based on Tekton resources, the *apiVersion* attribute reflects the API version of Tekton. The *kind* attribute points to `Pipeline` as the Kubernetes Custom Resource Definition (CRD) type. The *metadata* attribute tags the unique name of this resource. The *spec* attribute contains the *params*, *resources*, and *tasks* attributes. *params* injects parameters, *resources* indicates the source and destination resources that the pipeline uses, and *tasks* is made up of the basic building blocks of pipelines. This pipeline uses a `git-source` to fetch the application code and a Docker registry to push the image that is built from the source. These attributes are defined under *resources*. Specifics of each resource are found under each *task*. 

== Monitoring your pipeline

There are three ways to monitor your pipelines:

. OKD/OpenShift console
. Tekton Dashboard
. Command line

To check status of your pipelines from an OKD/OpenShift console, log in from the *developer* perspective and click *Pipelines*:

image::/img/blog/kabanero-pipelines.jpg[link="/img/blog/kabanero-pipelines.jpg" alt="Monitoring your Kabanero Pipelines from Tekton Dashboard"]

To check pipeline run status from the Tekton Dashboard, login to the Tekton Dashboard and click *Pipeline runs* in the sidebar menu. Find your pipeline run in the list and click it to check the status and find logs. You can see the logs and status of each step and task.

You can also monitor pipeline run status by running the following commands from the command line:
----
oc get pipelineruns
oc -n kabanero describe pipelinerun.tekton.dev/<pipeline-run-name>
----

If you need to troubleshoot, go to the link:https://github.com/kabanero-io/kabanero-pipelines/blob/master/Troubleshooting.md[Pipelines Troubleshooting Guide]. This blog was written based on Kabanero 0.4.0. 
