---
title: Illumination-Robust Navigation around Unknown Space  Objects using Multispectral Imagery
subtitle:
date: 2026-09-04
description: We use a fuse visible and thermal camera to provide illumination-robust localization around an unknown 
authors:
- eelias
featured_image: '/images/projects/efficient_rtmpc_learning_cover_img.png'
papers:
- elias2026scitech
active: true
---

<img src="/images/projects/vis_tir_fusion.png" alt="Example of a frame of a simulated spacecraft in visible, thermal-infrared, and fused sensing modalities." width="800"/>

## About

As the popularity of on-orbit operations grows, so does the need for precise navigation around unknown resident space objects (RSOs) such as other spacecraft, orbital debris, and asteroids. The use of Simultaneous Localization and Mapping (SLAM) algorithms is often studied to map out the surface of an RSO and find the inspector’s relative pose using a lidar or conventional camera. However, conventional cameras struggle during eclipse or shadowed periods, and lidar, though robust to lighting, tends to have higher SWaP. Thermal-infrared cameras can track the target RSO through difficult illumination conditions without these limitations. While useful, thermal-infrared imagery lacks the resolution and feature richness of visible cameras. In this work, images of a target satellite in low Earth orbit are simulated in both visible and thermal-infrared bands. Pixel-level fusion methods are used to create visible/thermal-infrared composites that leverage the best aspects of each camera. Navigation errors from a monocular SLAM algorithm are compared among visible, thermal-infrared, and fused imagery in various lighting conditions and trajectories. Fused imagery yields substantially improved navigation performance over visible-only and thermal-only methods. Additionally, a novel silhouette-based visual place recognition method is developed to detect loop closures—instances where the inspector returns to a previously visited viewpoint of the RSO. Existing place recognition techniques fail due to extreme illumination changes, eclipse periods, and out-of-domain training. Our proposed method extracts the target’s silhouette from thermal-infrared imagery and encodes it into a compact descriptor that is efficiently matched, requiring no training and running entirely on CPU. Precision–recall analysis demonstrates that the silhouette-based approach significantly outperforms all baseline methods, reducing localization errors substantially when integrated into the SLAM pipeline. Compared to lidar, this use of low-SWaP visible and thermal cameras enables reliable navigation on lower-cost, smaller spacecraft for complex proximity-operations missions.

### Sponsor

This work is funded by Draper under the Draper Scholars program.