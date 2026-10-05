---
title: Evidential Traversability Learning
subtitle:
date: 2024-09-09
description: Uncertainty-aware traversability learning and risk-aware navigation in off-road terrain
summary:
authors:
- xyc
- lakshays
- mfe
featured_image: '/images/projects/2024_evora.png'
papers:
- cai2024evora
- cai2023probabilistic
active: true
---

### Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/pV7GxAFYuto?si=jMrRwgMQsQL35HgV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Links

* [Project Website](https://xiaoyi-cai.github.io/evora/)
* [Paper Link](https://ieeexplore.ieee.org/abstract/document/10606099)
* [AeroAstro News](https://aeroastro.mit.edu/news-impact/evora-deep-evidential-traversability-learning-for-risk-aware-off-road-autonomy/)


### About

Traversing terrain with good traction is crucial for achieving fast off-road navigation. Instead of manually designing costs based on terrain features, existing methods learn terrain properties directly from data via self-supervision to automatically penalize trajectories moving through undesirable terrain, but challenges remain in properly quantifying and mitigating the risk due to uncertainty in the learned models. To this end, we present evidential off-road autonomy (EVORA), a unified framework to learn uncertainty-aware traction model and plan risk-aware trajectories. For uncertainty quantification, we efficiently model both aleatoric and epistemic uncertainty by learning discrete traction distributions and probability densities of the traction predictor’s latent features. Leveraging evidential deep learning, we parameterize Dirichlet distributions with the network outputs and propose a novel uncertainty-aware squared Earth Mover’s Distance loss with a closed-form expression that improves learning accuracy and navigation performance. For risk-aware navigation, the proposed planner simulates state trajectories with the worst-case expected traction to handle aleatoric uncertainty and penalizes trajectories moving through terrain with high epistemic uncertainty. Our approach is extensively validated in simulation and on wheeled and quadruped robots, showing improved navigation performance compared to methods that assume no slip, assume the expected traction, or optimize for the worst-case expected cost.

