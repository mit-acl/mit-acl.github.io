---
title: "Albatross: Autonomous Soaring for Long-Endurance UAS"
subtitle:

date: 2025-01-01

description: We develop algorithms that extend the endurance of fixed-wing UAS by extracting energy from thermals, ridge lift, and wind gradients.
featured_image: '/images/projects/albatross_integrated_3d.jpg'
image_alt: Simulated glider route through mountainous terrain, climbing in a thermal before continuing along the ridges.

authors:
- julianpo
- lilisun
- omatt431
- yixuany

active: true
---

### About

Birds and sailplane pilots stay aloft for hours by extracting energy from the atmosphere. We aim to give small fixed-wing UAS the same ability. Thermal soaring exploits rising columns of warm air, ridge soaring exploits air deflected upward by terrain, and dynamic soaring extracts energy from wind gradients through aggressive maneuvering. None of this lift is visible, so the aircraft must infer it from noisy onboard sensors while still completing its mission. We develop and test our algorithms in simulation (JSBSim with PX4 software-in-the-loop) and on fixed-wing hardware.

![Simulated glider route through mountainous terrain](/images/projects/albatross_integrated_3d.jpg)

*A simulated mission. The glider follows the planner's route (green), diverts to climb in a thermal (orange), then continues toward its goal.*

### Integrated Static Soaring

We built an onboard system that exploits both thermal and ridge lift while following a mission with a goal location and a time limit. The system estimates a 3D wind field online by fusing the [WindNinja](https://ninjastorm.firelab.org/windninja/) terrain wind solver with onboard wind measurements in an unscented Kalman filter. An adaptive planner uses this wind field to route through ridge lift and away from sink, using as little battery energy as possible. When the aircraft encounters a thermal, a reactive controller holds it in the lift while an EKF estimates the thermal. A nonlinear model predictive controller then plans the climb.

![Ridge soaring simulation: adaptive planner vs. wind-agnostic baseline](/images/projects/albatross_ridge_sim.png)

*Simulated ridge soaring in the Eastern Sierra Nevada. Routing through the ridge lift, the planner (green) arrives up to 166 m higher than a planner that ignores the wind (dashed).*

### Learning to Soar

Classical thermal soaring controllers can fail when a thermal is small, drifting, or turbulent. We first train neural network policies to imitate classical controllers, then fine-tune them with reinforcement learning (PPO) across randomized thermals, winds, and sensor noise. The fine-tuned policies outperform all three classical controllers and largely eliminate their failure cases.

### Publications

- J. Powers, L. Sun, O. Matteson, Y. Jia, and J. P. How, "Integrated Autonomous Static Soaring: Thermal Exploitation, Ridge Lift, and Online Wind Estimation," *AIAA SciTech Forum*, 2027.
- O. Matteson and J. P. How, "Imitation-Bootstrapped Reinforcement Learning for Robust Autonomous Thermal Exploitation," *AIAA SciTech Forum*, 2027.

*This research is funded by DARPA. The views expressed are those of the authors and do not represent the official views or policies of the Department of Defense or the U.S. Government.*
