---
title: Distributed Pose Graph Optimization

subtitle:

date: 2021-12-01

description: We propose a distributed pose graph optimization algorithm.

summary: We propose a distributed pose graph optimization algorithm.

featured_image: '/images/projects/dc2pgo.png'
image_alt: 

authors:
- yulun
- mrrobot

papers:
- Tian20_TRO
- Tian20_RAL

active: true
---

![](/images/projects/dc2pgo.png)

### About

 We develop the first certifiably correct algorithm for distributed pose-graph optimization (PGO), the backbone of modern collaborative simultaneous localization and mapping (CSLAM) and camera network localization (CNL) systems. Our method is based upon a sparse semidefinite relaxation that we prove provides globally-optimal PGO solutions under moderate measurement noise (matching the guarantees enjoyed by state-of-the-art centralized methods), but is amenable to distributed optimization using the low-rank Riemannian Staircase framework. To implement the Riemannian Staircase in the distributed setting, we develop Riemannian block coordinate descent (RBCD), a novel method for (locally) minimizing a function over a product of Riemannian manifolds. We also propose the first distributed solution verification and saddle escape methods to certify the global optimality of critical points recovered via RBCD, and to descend from suboptimal critical points (if necessary). All components of our approach are inherently decentralized: they require only local communication, provide privacy protection, and are easily parallelizable. Extensive evaluations on synthetic and real-world datasets demonstrate that the proposed method correctly recovers globally optimal solutions under moderate noise, and outperforms alternative distributed techniques in terms of solution precision and convergence speed.

### Papers
* Yulun Tian, Kasra Khosoussi, David M. Rosen, Jonathan P. How, **"Distributed Certifiably Correct Pose-Graph Optimization"**, *IEEE Transactions on Robotics*, 2021, **Honorable Mention for IEEE T-RO King-Sun Fu Memorial Best Paper Award** 
* Yulun Tian, Alec Koppel, Amrit S. Bedi, Jonathan P. How, **Asynchronous and Parallel Distributed Pose Graph Optimization**, *IEEE Robotics and Automation Letters*, 2020, **Honorable Mention for IEEE RA-L Best Paper Award** 

### Press

<iframe width="560" height="315" src="https://www.youtube.com/embed/PpFMTGNJpaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

