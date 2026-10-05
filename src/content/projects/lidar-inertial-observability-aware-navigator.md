---
title:  Lidar-Inertial Observability-Aware Navigator

subtitle:

date: 2020-01-15

description: This work presents the Lidar-Inertial Observability-Aware Navigator used at the DARPA Subt. challenge.

summary: This work presents the Lidar-Inertial Observability-Aware Navigator used at the DARPA Subt. challenge.

featured_image: '/images/projects/lion.jpg'
image_alt: 

authors:
- atagliab
- jtorde
- xyc
- aliagha

papers:
- tagliabue2020lion

active: true
---
<img src="/images/projects/lion.jpg" width="850"/>

### About

State estimation for robots navigating in GPS-denied and perceptually-degraded environments, such as underground tunnels, mines and planetary subsurface voids, remains challenging in robotics. Towards this goal, we present LION (Lidar-Inertial Observability-Aware Navigator), which is part of the state estimation framework developed by the team CoSTAR for the DARPA Subterranean Challenge, where the team achieved second and first places in the Tunnel and Urban circuits in August 2019 and February 2020, respectively. LION provides high-rate odometry estimates by fusing high-frequency inertial data from an IMU and low-rate relative pose estimates from a lidar via a fixed-lag sliding window smoother. LION does not require knowledge of relative positioning between lidar and IMU, as the extrinsic calibration is estimated online. In addition, LION is able to self-assess its performance using an observability metric that evaluates whether the pose estimate is geometrically ill-constrained. Odometry and confidence estimates are used by HeRO, a supervisory algorithm that provides robust estimates by switching between different odometry sources. In this paper we benchmark the performance of LION in perceptually-degraded subterranean environments, demonstrating its high technology readiness level for deployment in the field.


### Videos
<iframe width="560" height="315" src="https://www.youtube.com/embed/Jd-sqBioarI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>