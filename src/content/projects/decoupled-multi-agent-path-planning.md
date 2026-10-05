---
title: Decoupled Multi-agent Path Planning 

subtitle:

date: 2014-09-01

description: This project aims to develop a multiagent path planning algorithm that finds collision-free trajectories for a team of mobile robots.

featured_image: '/images/projects/multiagent_pplaning.JPG'
image_alt: 

authors:
- chenyuf2
- cutlerm
- quindlen

papers:
- Chen15_ICRA

active: false
---

### About

This project aims to develop a multiagent path planning algorithm that finds collision-free trajectories for a team of mobile robots. A multiagent path planning problem can be formulated as a minimum-time optimization problem subject to collision avoidance constraints. Previous works have explored using sequential convex programming (SCP) methods for finding feasible paths in convex environments. However, in many scenarios where the environments are non-convex, previous SCP-based algorithms often fail to find feasible solutions because a convex approximation of the collision constraints might lead to forming infeasible optimization problems. 

This work develops incremental SCP (iSCP) to address this problem by gradually tightening the collision avoidance constraints. Further, we aim to reduce computational complexity by decoupling the multiagent problem into a sequence of simpler, single-agent planning problems. The iSCP algorithm is shown to find feasible paths more quickly and more reliably. The proposed method is real-time implementable and is validated through hardware experiments on a team of quadrotors.

![](/images/projects/multiagent_pplaning.JPG)

### Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/WpiB11u_UFE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>