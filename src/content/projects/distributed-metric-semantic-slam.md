---
title: Distributed Metric-Semantic SLAM

subtitle:

date: 2022-01-01

description: We propose a distributed metric-semantic SLAM system.

summary: We propose a distributed metric-semantic SLAM system.

featured_image: '/images/projects/kimera_multi_camp_reconstruction.png'
image_alt: 

authors:
- yulun

papers:
- Tian21_TRO
- Chang21_ICRA

active: true
---

![](/images/projects/kimera_multi_camp_reconstruction.png)

### About

 Multi-robot Simultaneous Localization and Mapping (SLAM) is a crucial capability to obtain timely situational awareness over large areas. Real-world applications demand multi-robot SLAM systems to be robust to perceptual aliasing and to operate under limited communication bandwidth; moreover, it is desirable for these systems to capture semantic information to enable high-level decision-making and spatial AI.

 This paper presents Kimera-Multi, a multi-robot system that (i) is robust and capable of identifying and rejecting incorrect inter and intra-robot loop closures resulting from perceptualaliasing, (ii) is fully distributed and only relies on local (peerto-peer) communication to achieve distributed localization and mapping, and (iii) builds a globally consistent metric-semantic 3D mesh model of the environment in real-time, where faces of the mesh are annotated with semantic labels. Kimera-Multi is implemented by a team of robots equipped with visual-inertial sensors. Each robot builds a local trajectory estimate and a local mesh using Kimera. When communication is available, robots initiate a distributed place recognition and robust pose graph optimization protocol based on a distributed graduated nonconvexity algorithm. The proposed protocol allows the robots to improve their local trajectory estimates by leveraging interrobot loop closures while being robust to outliers. Finally, each robot uses its improved trajectory estimate to correct the local mesh using mesh deformation techniques.

### Press

<iframe width="560" height="315" src="https://www.youtube.com/embed/G8PktlQ82uw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
