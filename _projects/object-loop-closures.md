---
title: Global Localization via Open-Set Object Mapping and Alignment
date: 2024-09-01

description: This project presents an outdoor global localization method based on robust registration of open-set segment maps.
summary: (optional) One paragraph summary

featured_image: '/images/projects/global_loc_obj_map.png'

authors:
- masonbp
- yulun
- yixuany

papers (optional):
- 

active: true
---

![](/images/projects/global_loc_obj_map.png)

## About

Global localization is a fundamental capability enabling long-term and drift-free robot navigation.
This work develops a global localization method based on robust registration of open-set segment maps.
Our method detects and tracks segments using open-set image segmentation models that enable direct generalization to unseen environments.
To perform global localization under the high outlier regimes, 
we formulate a registration problem between small submaps of 3D segments 
and solve for the correspondences using a graph-theoretic global data association approach.
Further, to guide registration in highly noisy or ambiguous scenarios, we propose novel ways of incorporating additional information like semantics, geometric shape, and known gravity direction within the global data association formulation.