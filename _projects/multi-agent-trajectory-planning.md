---
title:  Multi-Agent Trajectory Planning

subtitle:

date: 2019-06-01

description: This work proposes a 3D decentralized and asynchronous multi-agent trajectory planner for UAVs.

summary: This work proposes a 3D decentralized and asynchronous multi-agent trajectory planner for UAVs.

featured_image: '/images/projects/mader.png'
image_alt: 

authors:
- jtorde

papers:
- tordesillas2021mader
- tordesillas2020minvo

active: true
---
<img src="/images/projects/mader.png" width="850"/>

### About

We present MADER, a 3D decentralized and asynchronous trajectory planner for UAVs that generates collision-free trajectories in environments with static obstacles, dynamic obstacles, and other planning agents. Real-time collision avoidance with other dynamic obstacles or agents is done by performing outer polyhedral representations of every interval of the trajectories and then including the plane that separates each pair of polyhedra as a decision variable in the optimization problem. MADER uses our recently developed MINVO basis to obtain outer polyhedral representations with volumes 2.36 and 254.9 times, respectively, smaller than the Bernstein or B-Spline bases used extensively in the planning literature. Our decentralized and asynchronous algorithm guarantees safety with respect to other agents by including their committed trajectories as constraints in the optimization and then executing a collision check-recheck scheme. Finally, extensive simulations in challenging cluttered environments show up to a 33.9% reduction in the flight time, and a 88.8% reduction in the number of stops compared to the Bernstein and B-Spline bases, shorter flight distances than centralized approaches, and shorter total times on average than synchronous decentralized approaches.

**Code is available at:**
* **[https://github.com/mit-acl/mader](https://github.com/mit-acl/mader).**
* **[https://github.com/mit-acl/minvo](https://github.com/mit-acl/minvo).**

<img src="/images/projects/minvo.png" width="850"/>

### Videos
<iframe width="560" height="315" src="https://www.youtube.com/embed/aoSoiZDfxGE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/f_JOYud9LUU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>