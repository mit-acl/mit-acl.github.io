---
title:  Fully Decentralized Uncertainty-aware Multiagent Trajectory Planner with Real-time Image Segmentation-based Frame Alignment

subtitle:

date: 2023-11-12

description: This work proposes a fully decentralized perception-aware, uncertainty-aware multiagent trajectory planner with real-time image segmentation-based frame alignment

summary: This work proposes a fully decentralized perception-aware, uncertainty-aware multiagent trajectory planner with real-time image segmentation-based frame alignment

featured_image: '/images/projects/puma.png'
image_alt: PUMA flight experiments

authors:
- kkondo

papers:
- kondo2023puma

active: true
---
<img src="/images/projects/puma-pipeline.png" width="850"/>

### About

Fully decentralized, multiagent trajectory planners enable complex tasks like search and rescue or package delivery by ensuring safe navigation in unknown environments.
However, deconflicting trajectories with other agents and ensuring collision-free paths in a fully decentralized setting is complicated by dynamic elements and localization uncertainty.
To this end, this paper presents (1) an uncertainty-aware multiagent trajectory planner and (2) an image segmentation-based frame alignment pipeline.

The uncertainty-aware planner propagates uncertainty associated with the future motion of detected obstacles, and by incorporating this propagated uncertainty into optimization constraints, the planner effectively navigates around obstacles. 
Unlike conventional methods that emphasize explicit obstacle tracking, our approach integrates implicit tracking. 

Sharing trajectories between agents can cause potential collisions due to frame misalignment.
Addressing this, we introduce a novel frame alignment pipeline that rectifies inter-agent frame misalignment. 
This method leverages a zero-shot image segmentation model for detecting objects in the environment and a data association framework based on geometric consistency for map alignment.

Our approach accurately aligns frames with only 0.18 m and 2.7 deg of mean frame alignment error in our most challenging simulation scenario.
In addition, we conducted hardware experiments and successfully achieved 0.29 m and 2.59 deg of frame alignment error.

Together with the alignment framework, our planner ensures safe navigation in unknown environments and collision avoidance in decentralized settings.

**Code is available at:**
* **[https://github.com/mit-acl/puma](https://github.com/mit-acl/puma).**

### Videos
<iframe width="560" height="315" src="https://www.youtube.com/watch?v=W73p42XRcaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
