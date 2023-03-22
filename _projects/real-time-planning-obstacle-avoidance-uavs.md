---
title:  Real-time Planning and Obstacle Avoidance for UAVs

subtitle:

date: 2018-11-01

description: This work proposes a planning framework in which multi-fidelity models are used to reduce the discrepancy between the local and global planner.

summary: This work proposes a planning framework in which multi-fidelity models are used to reduce the discrepancy between the local and global planner.

featured_image: '/images/projects/real_time_obstacle_avoidance_uavs_comparison.png'
image_alt: 

authors:
- jtorde
- btlopez

papers:
- tordesillas2021faster
- Tordesillas19_IROS
- Tordesillas19_ICRA
- Lopez18_ICRA
- Lopez17_IROS
- Lopez17_ICRA

active: true
---

![](/images/projects/uav_planning_drone.jpg)

### About

High-speed trajectory planning through unknown environments requires algorithmic techniques that enable fast reaction times while maintaining safety as new information about the operating environment is obtained.The requirement of computational tractability typically leads to optimization problems that do not include the obstacle constraints (collision checks are done on the solutions) or use a convex decomposition of the free space and then impose an ad-hoc time allocation scheme for each interval of the trajectory. Moreover, safety guarantees are usually obtained by having a local planner that plans a trajectory with a final stop condition in the free-known space. However, these two decisions typically lead to slow and conservative trajectories.

We propose FASTER (Fast and Safe Trajectory Planner) to overcome these issues. FASTER obtains high-speed trajectories by enabling the local planner to optimize in both the free-known and unknown spaces. Safety guarantees are ensured by always having a feasible, safe back-up trajectory in the free-known space at the start of each replanning step. Furthermore, we present a Mixed Integer Quadratic Program formulation in which the solver can choose the trajectory interval allocation, and where a time allocation heuristic is computed efficiently using the result of the previous replanning iteration. This proposed algorithm is tested extensively both in simulation and in real hardware, showing agile flights in unknown cluttered environments with velocities up to 3.6 m/s.

**Code is available at [https://github.com/mit-acl/faster](https://github.com/mit-acl/faster).**

![](/images/projects/real_time_obstacle_avoidance_uavs_comparison.png)


### Videos
<iframe width="560" height="315" src="https://www.youtube.com/embed/gwV0YRs5IWs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/E4V2_B8x-UI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/m8HWggcqYf8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/mqfgeuMezwg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/dAFzohQGFhE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>