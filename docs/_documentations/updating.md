---
layout: docs
title: Updating Microclimate
description: Update Microclimate
keywords: update, refresh, uninstall, install, upgrade, path, fix, image, updating to a new version, updating images, updating local installations, updating IBM Cloud Private installations
duration: 1 minute
permalink: updating
type: document
order: 70
parent: abc
---

# Updating Microclimate

## Updating to a new version of Microclimate

**Note:** If you installed IBM Cloud Private 3.1, please update to the latest image of Microclimate Version 18.09 or a later version of Microclimate. Previous versions of Microclimate aren't compatible with IBM Cloud Private 3.1.

If you need to install the latest version, follow these steps to update Microclimate:
1. Uninstall the previous version. For more information, see [Uninstalling Microclimate](uninstall).
2. Install the new version. For more information, see [Installing Microclimate locally](installlocally) or [Installing Microclimate in IBM Cloud Private](https://github.com/IBM/charts/blob/master/stable/ibm-microclimate/README.md).

## Updating images

From time to time, updates to existing Microclimate images roll out for fixes that are especially important. For a list of releases with updated images, see [Microclimate versions with updates](updateslist).

Whichever type of installation that you run, you can uninstall and reinstall Microclimate to get the latest images. However, when images are updated, you can update the current images without removing the old ones first.

### Updating local installations of Microclimate

Before you run the update, you can check to see if you have the latest images:
1. Run the `docker images` command. For each image that you have installed, this command gives you an image ID.
2. Run the `docker image inspect <image ID>` command or, if you have grep, run the `docker inspect ibmcom/<image ID> | grep org.label-schema.build-date` command. Use the image ID that is associated with the image repository that is named on the [Microclimate versions with updates](updateslist) page for the version that you want to update. Output from this command produces data from which you can view the date.
3. Look in the output for `"org.label-schema.build-date": "<date and time>"`.
    1. If the date in your output matches the date listed for your version on the [Microclimate versions with updates](updateslist) page, you have an earlier version of Microclimate, and you should upgrade.
    2. If the date is later than the date shown on the [Microclimate versions with updates](updateslist) page, you have the latest version and do not need to upgrade.

To update a local installation of Microclimate, complete the following steps:
1. Stop Microclimate with the `~/mcdev stop` command.
2. Run the `~/mcdev refresh` command to refresh your current version of Microclimate by pulling the newest images. This command does not upgrade Microclimate to a newer version, but it refreshes the existing version if a patch to your currently installed version is available.
3. Restart Microclimate with the `~/mcdev start` command.

### Updating IBM Cloud Private installations of Microclimate

Before you run the update and delete pods, you can check to see if you have the latest images:
1. Log in to a worker node on your IBM Cloud Private cluster.
2. Run the `docker images` command to list the image IDs.
3. Run the `docker image inspect <image ID>` command or, if you have grep, run the `docker inspect ibmcom/<image ID> | grep org.label-schema.build-date` command.
4. Look in the output for `"org.label-schema.build-date": "<date and time>"`.
    1. If the date in your output matches the date listed for your version on the [Microclimate versions with updates](updateslist) page, you have an earlier version of Microclimate, and you should upgrade.
    2. If the date is later than the date shown on the [Microclimate versions with updates](updateslist) page, you have the latest version and do not need to upgrade.

To update an IBM Cloud Private installation of Microclimate, complete the following steps:
1. Run the `kubectl get pods` command on the console of the boot node of your IBM Cloud Private cluster.
2. Delete each of the Microclimate pods with the `kubectl delete pod <pod name>` command. If you delete a pod, the associated image is updated.
