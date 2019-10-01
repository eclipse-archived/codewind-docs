---
layout: docs
title: Viewing logs using Kibana in IBM Cloud Private
description: Viewing logs using Kibana in IBM Cloud Private
keywords: troubleshooting, issues, workaround, logs, Elasticsearch, ELK Stack, filtering logs, filter, logging infrastructure, filter logs, IBM Cloud Private, Kibana, query logs
duration: 3 minutes
permalink: viewkibanalogs
type: document
parent: installonicp
order: 2
---

# Viewing logs using Kibana in IBM Cloud Private

To see what's going on with your IBM Cloud Private applications, view the log files.

The following procedure shows you how to use Kibana and Elasticsearch to view and filter the Codewind log files.

## Access the Kibana dashboard

- In the IBM Cloud Private web console, select **Platform**>**Logging** to view the Kibana interface.

## Build a query to filter the logs

Using Elasticsearch, build a query similar to the following example:

```json
 {
   "query": {
     "bool": {
       "must": [
         {
           "match": {
             "kubernetes.pod": "codewind"
           }
         }
       ],
       "filter": [
         { "term": { "log": "info" }}
       ]
     }
   }
 }
 ```

This query filters the logs, providing logs from only Codewind pods (with the ```"match": {"kubernetes.pod": "codewind"}``` section), and filters the logs from those Codewind pods to only provide logs tagged as info (with the ``` "filter": [{ "term": { "log": "info" }}]``` section).

To get more than one type of log, change the filter stanza to ```"filter": [{ "terms": { "log": ["info", "error"] }}]```, putting every log term you want to match into the ```"log":``` section, as in the following example. Log levels you can filter by are `info`, `error`, `fatal`, and `debug`.

```json
 {
   "query": {
     "bool": {
       "must": [
         {
           "match": {
             "kubernetes.pod": "codewind"
           }
         }
       ],
       "filter": [
         { "terms": { "log": ["info", "error"] }}
       ]
     }
   }
 }
 ```
