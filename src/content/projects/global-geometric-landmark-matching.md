---
title: Global Matching of 3D Geometric Landmarks

subtitle:

date: 2022-02-01

description: This work proposes a method for matching 3D line and plane landmarks without an initial guess.

summary: This work proposes a method for matching 3D line and plane landmarks without an initial guess.

featured_image: '/images/projects/graffmatchfig.png'
image_alt: 

authors:
- plusk

papers:
- Lusk22_IROS

active: true
---
### About

Using geometric landmarks like lines and planes can increase accuracy and decrease map storage requirements compared to commonly-used LiDAR point cloud maps. However, landmark-based registration for applications like loop closure detection is challenging because a reliable initial guess is not available. Global landmark matching has been investigated in the literature, but these methods typically use ad  hoc representations of 3D line and plane landmarks that are not invariant to large viewpoint changes, resulting in incorrect matches and high registration error. To address this issue, we adopt the affine Grassmannian manifold to represent 3D lines and planes and prove that the distance between two landmarks is invariant to rotation and translation if a shift operation is performed before applying the Grassmannian metric. This invariance property enables the use of our graph-based data association framework for identifying landmark matches that can subsequently be used for registration in the least-squares sense. Evaluated on a challenging landmark matching and registration task using publicly-available LiDAR datasets, our approach yields a 65 % and 245 % total increase in successful registrations compared to methods that use viewpoint-dependent centroid and “closest point” representations, respectively.


<img src="/images/projects/graffmatchkitti.png" />
