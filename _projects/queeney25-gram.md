---
title: Robust Dynamics Generalization in Deep RL
subtitle:
date: 2025-06-10
description: Deep RL framework for adaptive in-distribution and robust out-of-distribution dynamics generalization
summary:
authors:
- queeney
- xyc
featured_image: '/images/projects/gram_thumbnail.png'
papers:
- queeney2024gram
active: true
---

<img src="/images/projects/gram_overview.png" width="850"/>

### About

The reliable deployment of deep reinforcement learning in real-world settings requires the ability to generalize across a variety of conditions, including both in-distribution scenarios seen during training as well as novel out-of-distribution scenarios. In this work, we present a framework for dynamics generalization in deep reinforcement learning that unifies these two distinct types of generalization within a single architecture. We introduce a robust adaptation module that provides a mechanism for identifying and reacting to both in-distribution and out-of-distribution environment dynamics, along with a joint training pipeline that combines the goals of in-distribution adaptation and out-of-distribution robustness. Our algorithm GRAM achieves strong generalization performance across in-distribution and out-of-distribution scenarios upon deployment, which we demonstrate through extensive simulation and hardware locomotion experiments on a quadruped robot.

### Links

* [Paper](https://arxiv.org/abs/2412.04323)
* [Code](https://github.com/merlresearch/gram)

### Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/0g2nos2EnCw?si=B8eDtNUD94FfjBuQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

