---
title: Graph-Theoretic Robust Data Association

subtitle:

date: 2020-11-01

description: This work proposes a graph-theoretic framework for robust pairwise data association.

summary: This work proposes a graph-theoretic framework for robust pairwise data association.

featured_image: '/images/projects/clipper.png'
image_alt: 

authors:
- plusk
- kavehf

papers:
- Lusk21_ICRA

active: true
---
### About

Data association is a fundamental problem in robotics and autonomy. This project proposes CLIPPER, a framework for robust, pairwise data association that is applicable in a wide variety of problems (e.g., point cloud registration, sensor calibration, place recognition, etc.). By leveraging the notion of geometric consistency, a graph is formed and the data association problem is reduced to identifying the densest clique within the graph. This NP-hard problem has been studied in many fields, including data association, and solutions techniques are either exact (and not scalable) or approximate (and potentially imprecise). CLIPPER relaxes this problem in a way that is applicable to weighted graphs, avoiding the loss of information due to binarization which is common in other data association work. These features allow CLIPPER to achieve high performance, even in the presence of extreme outliers.


**Code is available at [https://github.com/mit-acl/clipper](https://github.com/mit-acl/clipper).**

<img src="/images/projects/clipper_d435i.png" width="850"/>


### Videos
<iframe width="560" height="315" src="https://www.youtube.com/watch?v=QYLHueMhShY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>