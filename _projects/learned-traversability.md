---
title: Risk-Aware Off-Road Navigation Leveraging Semantics
subtitle:
date: 2022-03-25
description: Use semantics of the environment to infer terrain traversability based on history of speed data.
summary:
authors:
- xyc
- mfe
featured_image: '/images/projects/sara_husky_in_woods.jpg'
papers:
- cai2022risk
active: true
---


### About

Motion planning in off-road environments requires reasoning about both the geometry and semantics of the scene (e.g., a robot may be able to drive through soft bushes but not a fallen log). In many recent works, the world is classified into a finite number of semantic categories that often are not sufficient to capture the ability (i.e., the speed) with which a robot can traverse off-road terrain. Instead, this work proposes a new representation of traversability based exclusively on robot speed that can be learned from data, offers interpretability and intuitive tuning, and can be easily integrated with a variety of planning paradigms in the form of a costmap. Specifically, given a dataset of experienced trajectories, the proposed algorithm learns to predict a distribution of speeds the robot could achieve, conditioned on the environment semantics and commanded speed. The learned speed distribution map is converted into costmaps with a risk-aware cost term based on conditional value at risk (CVaR). Numerical simulations demonstrate that the proposed risk-aware planning algorithm leads to faster average time-to-goals compared to a method that only considers expected behavior, and the planner can be tuned for slightly slower, but less variable behavior. Furthermore, the approach is integrated into a full autonomy stack and demonstrated in a high-fidelity Unity environment and is shown to provide a 30\% improvement in the success rate of navigation.

Pipeline for generating risk-aware speed map from semantic input and commanded speeds.
![](/images/projects/sara_iros22_architecture.png)

Image illustrating the training environment and test environment in Unity simulator.
![](/images/projects/sara_iros22_unity_and_test_goals.png)

### Sponsor

This research is funded by ARL SARA.

---