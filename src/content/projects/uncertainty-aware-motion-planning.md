---
title: Uncertainty-Aware Motion-Planning for Partially-Observable Systems
subtitle:
date: 2020-06-16
description: Developing tractable continuous planning approaches (i.e., trajectory optimization) which achieve robustness by explicitly accounting for process and estimation uncertainty and accurately assessing risk.
summary:
authors:
- kfrey
featured_image: '/images/projects/uncertain_motion_planning.png'

papers:
- Frey20_RSS

active: true
---

![](/images/projects/traj_optim_active_sensing.jpg)

Mobile autonomous systems manuevering in the real world must often make safety-critical decisions in spite of uncertainty in estimation, execution, and the environment.
These problems can often be cast as POMDPs, a large class of problems for which exact solution is challenging, particularly for online systems.
In this project, we aim to develop tractable motion-planning solutions for dynamic systems operating in continuous space and time.
We specifically address challenges in uncertainty estimation under sophisticated estimation schemes like VIO that depend on the distribution of latent information (i.e. landmarks) in the environment.
Additionally, we seek lightweight risk estimation schemes that translate uncertainty estimates into constraints or objectives for onboard trajectory optimization.

---
