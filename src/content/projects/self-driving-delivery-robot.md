---
title: Self-Driving Delivery Robot
date: 2019-09-01

description: This project develops planning algorithms to enable autonomous navigation in the "last 100m" for delivery robots
summary:

featured_image: '/images/projects/self_driving_delivery_robot.png'

authors:
- mfe
- Justin Miller (Ford)

papers:
- Everett19_IROS

active: true
---

### About

Last-mile delivery systems commonly propose the use of autonomous robotic vehicles to increase scalability and efficiency. The economic inefficiency of collecting accurate prior maps for navigation motivates the use of planning algorithms that operate in unmapped environments. However, these algorithms typically waste time exploring regions that are unlikely to contain the delivery destination. Context is key information about structured environments that could guide exploration toward the unknown goal location, but the abstract idea is difficult to quantify for use in a planning algorithm. Some approaches specifically consider contextual relationships between objects, but would perform poorly in object-sparse environments like outdoors. Recent deep learning-based approaches consider context too generally, making training/transferability difficult. Therefore, this work proposes a novel formulation of utilizing context for planning as an image-to-image translation problem, which is shown to extract terrain context from semantic gridmaps, into a metric that an exploration-based planner can use. The proposed framework has the benefit of training on a static dataset instead of requiring a time-consuming simulator. Across 42 test houses with layouts from satellite images, the trained algorithm enables a robot to reach its goal 189% faster than with a context-unaware planner, and within 63% of the optimal path computed with a prior map. The proposed algorithm is also implemented on a vehicle with a forward-facing camera in a high-fidelity, Unreal simulation of neighborhood houses.

![](/images/projects/self_driving_delivery_robot.png)

### Awards

* 2019 Winner for IROS Best Paper Award on Cognitive Robotics

### Software

Software for a recent paper is published at [Github](github.com/mit-acl/dc2g_public).

### Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/yVlnbqEFct0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Sponsor

This research is funded by Ford Motor Company.

