---
title:  Perception-Aware Trajectory Planning in Dynamic Environments

subtitle:

date: 2020-02-24

description: This work proposes a real-time perception-aware trajectory planner in dynamic environments.

summary: This work proposes a real-time perception-aware trajectory planner in dynamic environments.

featured_image: '/images/projects/panther.png'
image_alt: 

authors:
- jtorde

papers:
- tordesillas2021panther

active: true
---
<img src="/images/projects/panther.png" width="850"/>

### About

This project presents PANTHER, a real-time perception-aware (PA) trajectory planner in dynamic environments. PANTHER plans trajectories that avoid dynamic obstacles while also keeping them in the sensor field of view (FOV) and minimizing the blur to aid in object tracking. The rotation and translation of the UAV are jointly optimized, which allows PANTHER to fully exploit the differential flatness of multirotors. Real-time performance is achieved by implicitly imposing this constraint through the Hopf fibration. PANTHER is able to keep the obstacles inside the FOV 7.4 and 1.5 times more than non-PA approaches and PA approaches that decouple translation and yaw, respectively. The projected velocity (and hence the blur) is reduced by 30%. Our recently-derived MINVO basis is used to impose low-conservative collision avoidance constraints in position and velocity space. Finally, extensive hardware experiments in unknown dynamic environments with all the computation running onboard are presented, with velocities of up to 5.8 m/s, and with relative velocities (with respect to the obstacles) of up to 6.3 m/s. The only sensors used are an IMU, a forward-facing depth camera, and a downward-facing monocular camera.


**Code is available at [https://github.com/mit-acl/panther](https://github.com/mit-acl/panther).**


### Videos
<iframe width="560" height="315" src="https://www.youtube.com/embed/jKmyW6v73tY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>