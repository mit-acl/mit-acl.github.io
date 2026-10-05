---
title: Collaborative SLAM for Facilitating Radiological Search and Mapping on a Multi-agent Aerial Platform

date: 2020-10-11

description: This project aims to expand remote sensing capabilities for radiation source localization and mapping with a collaborative SLAM (CSLAM) framework that enables faster/more versatile search coverage while utilizing lightweight and relatively inexpensive sensing on UAVs in a bandwidth-limited network.

summary:

featured_image: '/images/projects/flightmare_sensors.png'
image_alt:

authors:
- torgesen

papers:

active: true
---

### About

![Unity-based simulation environment based on Flightmare for multi-agent CSLAM algorithm implementation and preliminary testing.](/images/projects/flightmare_sensors.png)

Remote radiological source localization and mapping needed in first-response and disaster prevention scenarios in areas containing one or more radiation sources. UAVs provide ideal platforms for traversing arbitrary terrain when equipped with specialized, lightweight radiation sensors. Resolution of radiological sensing on a mobile platform is greatly improved when fused with pose estimates and 3D map information obtained through SLAM.

Single-agent aerial radiological mapping solutions such as the [LAMP](https://arxiv.org/pdf/1908.06114.pdf) exist, and there is currently interest in determining whether their capabilities can be expanded in a coordinated multi-agent configuration. From a systems perspective, the following questions remain to be answered:

- **What are the requirements for the accuracy and consistency of a collaborative mapping solution for multi-agent expansion costs to be justified by search gains in coverage and time?**
- **How to most efficiently jointly map 3D and radiation data?**

![Possible multi-agent mapping architectures. Left: Larger UAV generates 3D maps with LiDAR and several smaller UAVs exclusively relay radiological sensing data to the central drone. Right: several smaller drones equipped with radiological and/or RGBD sensors communicate with a central (grounded) server.](/images/projects/cslam_radsearch_architectures.png)

To determine what collaborative mapping architecture most efficiently enables multi-agent coordination in a radiological mapping setting, the following technical challenges must be addressed:

- **Implement a consistent and accurate RGBD-based CSLAM system and evaluate its performance tradeoffs in enabling radiological search and mapping compared to LiDAR-based single-agent SLAM in a variety of realistic environments.**
- **Deploy the mapping system in hardware for time-sensitive search and mapping scenarios in the real world.**

**Approach:** leverage current state-of-the-art in vision-based collaborative SLAM while adding novel contributions to resource-constrained, scalable map fusion and loop closure techniques.
