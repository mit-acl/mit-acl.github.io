---
title:  Communication Delay Robust Multi-Agent Trajectory Planning in Dynamic Environments

subtitle:

date: 2023-10-18

description: This work proposes a fully decentralized and asynchronous multiagent trajectory planner that is robust to communication delays for UAVs.

summary: This work proposes a fully decentralized and asynchronous multiagent trajectory planner that is robust to communication delays for UAVs.

featured_image: '/images/projects/rmader.png'
image_alt: RMADER flight experiments

authors:
- kkondo

papers:
- kondo2022rmader
- kondo2023rmader

active: true
---
<img src="/images/projects/rmader-mit-news.png" width="850"/>

### About

Communication delays can be catastrophic for multiagent systems. However, most existing state-of-the-art multiagent trajectory planners assume perfect communication and therefore lack a strategy to rectify this issue in real-world environments.
To address this challenge, we propose Robust MADER (RMADER), a decentralized, asynchronous multiagent trajectory planner robust to communication delay. 
RMADER ensures safety by introducing (1) a Delay Check step, (2) a two-step trajectory publication scheme, and (3) a novel trajectory-storing-and-checking approach.
Our primary contributions include: proving recursive feasibility for collision-free trajectory generation in asynchronous decentralized trajectory-sharing, simulation benchmark studies, and hardware experiments with different network topologies and dynamic obstacles.
We show that RMADER outperforms existing approaches by achieving a 100\% success rate of collision-free trajectory generation, whereas the next best asynchronous decentralized method only achieves 83\% success.

**Code is available at:**
* **[https://github.com/mit-acl/rmader](https://github.com/mit-acl/rmader).**

**Featured at MIT News**
* **[New algorithm keeps drones from colliding in midair](https://news.mit.edu/2023/new-algorithm-keeps-drones-colliding-midair-0329).**

### Videos
<iframe width="560" height="315" src="https://www.youtube.com/embed/i1d8di2Nrbs?si=fSPukXPPecZUvtdK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
