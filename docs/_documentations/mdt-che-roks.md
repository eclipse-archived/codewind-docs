---
layout: docs
title: Setting up OpenShift on IKS (ROKS) for Codewind
description: How to set up OpenShift on IKS (ROKS) for Codewind
keywords: roks, codewind, openshift, iks, kubernetes, clusters, cluster, node, nodes, vps, settingup
duration: 1 minute
permalink: mdt-che-roks
type: document
---

# Setting up OpenShift on IKS (ROKS) for Codewind

## Prerequisites
- Activate a paid IBM Cloud account. Trial accounts cannot create OpenShift clusters.
- Start a running ROKS cluster with a minimum of 1 node, 4 CPU, and 16 GB RAM.
- Start a running Network File System (NFS) server that the cluster can access and use for storage.
   - The default IBM Cloud Kubernetes Service (IKS) storage cannot be used.
   - Either provision a virtual server on IBM Cloud or create a pod on the cluster that runs as an NFS server.

## Setting up NFS on ROKS

#### Provisioning a VPS
1. From the IBM Cloud catalog, select **Virtual Server**. Then, select **Public Virtual Server**.
2. Leave most of the defaults as they are, but change the following values:
   - **Hostname**: Choose a name for this value, such as `codewind-nfs`.
   - **Location**: Choose the same region that your ROKS cluster is running in, either Washington, D.C. or Dallas.
   - **Profiles**: Select **Balanced B1.2x2** by default, which gives the server 2 CPU and 4 GB RAM.
   - **SSH Key**: Add the SSH key of your machine to the cluster so that you can SSH to the virtual private server (VPS).
   - **Image**: Select **Ubuntu 18.04**.
   - **Private security group**: Choose either **allow_all** or **allow_outbound**.
   - **Public security group**: Choose either **allow_all** or **allow_outbound**.
3. Click **create**. Wait approximately 5 to 10 minutes for the provisioning to complete.

#### Setting up the NFS server
1. SSH into the VPS.
2. Install the NFS server on the VPS with the following commands:
   ```
   apt-get update
   apt-get install nfs-kernel-server
   ```
3. Create folders to share with the NFS server:
   ```
   mkdir -p /nfs/codewind/data
   mkdir -p /nfs/codewind/workspace1
   mkdir -p /nfs/codewind/workspace2
   mkdir -p /nfs/codewind/workspace3
   mkdir -p /nfs/codewind/workspace4
   mkdir -p /nfs/codewind/workspace5
   ```
4. Set the proper permissions on the folders:
   ```
   chmod -R 777 /nfs/codewind
   chown -R nobody:nogroup /nfs/codewind
   ```
5. Export the folders in the `/etc/exports` directory:
   - First, retrieve the public IP addresses for your worker nodes.
   - Then, add the following code to the `/etc/exports` directory. Repeat for as many worker nodes that you have. Do not use the wildcard to whitelist all IP addresses.
   
   ```
   /nfs/codewind/data worker1-public-ip(rw,sync,no_subtree_check,insecure,no_root_squash)
   /nfs/codewind/workspace1 worker1-public-ip(rw,sync,no_subtree_check,insecure,no_root_squash)
   /nfs/codewind/workspace2 worker1-public-ip(rw,sync,no_subtree_check,insecure,no_root_squash)
   /nfs/codewind/workspace3 worker1-public-ip(rw,sync,no_subtree_check,insecure,no_root_squash)
   /nfs/codewind/workspace4 worker1-public-ip(rw,sync,no_subtree_check,insecure,no_root_squash)
   /nfs/codewind/workspace5 worker1-public-ip(rw,sync,no_subtree_check,insecure,no_root_squash)
   
   /nfs/codewind/data worker2-public-ip(rw,sync,no_subtree_check,insecure,no_root_squash)
   /nfs/codewind/workspace1 worker2-public-ip(rw,sync,no_subtree_check,insecure,no_root_squash)
   /nfs/codewind/workspace2 worker2-public-ip(rw,sync,no_subtree_check,insecure,no_root_squash)
   /nfs/codewind/workspace3 worker2-public-ip(rw,sync,no_subtree_check,insecure,no_root_squash)
   /nfs/codewind/workspace4 worker2-public-ip(rw,sync,no_subtree_check,insecure,no_root_squash)
   /nfs/codewind/workspace5 worker2-public-ip(rw,sync,no_subtree_check,insecure,no_root_squash)
   ```

6. Restart the NFS server:
```
systemctl restart nfs-kernel-server
```
7. Download the persistent volume (PV) `.yaml` file from [nfs-pv.yaml](https://github.com/eclipse/codewind-che-plugin/blob/master/setup/nfs/nfs-pv.yaml) and set the `<ip-address>` field to the IP address of the VPS.
8. Run the `oc apply -f che-nfs-pv.yaml` command to create the PVs on the OpenShift cluster.
9. Disable the IBM Block Storage `storageclass`:
```
kubectl patch storageclass ibmc-block-bronze -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```

## Install Che and Codewind

Follow the installation documentation at [Setting up a Codewind-ready install of Che](https://www.eclipse.org/codewind/installoncloud.html) to set up Eclipse Che and Codewind on the cluster.
