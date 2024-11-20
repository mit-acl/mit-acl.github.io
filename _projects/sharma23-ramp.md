---
title: Risk-Aware Mapping and Planning
subtitle:
date: 2023-05-29
description: "RAMP: A Risk-Aware Mapping and Planning Pipeline for Fast Off-Road Ground Robot Navigation"
summary:
authors:
- lakshays
- mfe
- donggun
- xyc
featured_image: '/images/projects/ramp.png'
papers:
- sharma2023ramp
active: true
---
<img src="/images/projects/ramp.png" width="850"/>

### Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/vh5XxoWMjo8?si=ZZVpFW1NuUdc04nY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Links

* [Paper Link](https://ieeexplore.ieee.org/abstract/document/10160602)


### About

A key challenge in fast ground robot navigation in 3D terrain is balancing robot speed and safety. Recent work has shown that 2.5D maps (2D representations with additional 3D information) are ideal for real-time safe and fast planning. However, the prevalent approach of generating 2D occupancy grids through raytracing makes the generated map unsafe to plan in, due to inaccurate representation of unknown space. Additionally, existing planners such as MPPI do not consider speeds in known free and unknown space separately, leading to slower overall plans. The RAMP pipeline proposed here solves these issues using new mapping and planning methods. This work first presents ground point inflation with persistent spatial memory as a way to generate accurate occupancy grid maps from classified pointclouds. Then we present an MPPI-based planner with embedded variability in horizon, to maximize speed in known free space while retaining cautionary penetration into unknown space. Finally, we integrate this mapping and planning pipeline with risk constraints arising from 3D terrain, and verify that it enables fast and safe navigation using simulations and hardware demonstrations.