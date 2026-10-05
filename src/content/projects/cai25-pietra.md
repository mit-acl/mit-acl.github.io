---
title: Physics-Informed Evidential Traversability Learning
subtitle:
date: 2025-01-08
description: Incorporating physics knowledge into learned models for traversing out-of-distribution terrain
summary:
authors:
- xyc
- queeney
featured_image: '/images/projects/2025_pietra.png'
papers:
- cai2025pietra
active: true
---

### Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/OTnNZ96oJRk?si=XVb6hxRNVdu8FzeU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Links

* [Paper Link](https://www.arxiv.org/abs/2409.03005)


### About

Self-supervised learning is a powerful approach for developing traversability models for off-road navigation, but these models often struggle with inputs unseen during training. Existing methods utilize techniques like evidential deep learning to quantify model uncertainty, helping to identify and avoid out-of-distribution terrain. However, always avoiding out-of-distribution terrain can be overly conservative, e.g., when novel terrain can be effectively analyzed using a physics-based model. To overcome this challenge, we introduce Physics-Informed Evidential Traversability (PIETRA), a self-supervised learning framework that integrates physics priors directly into the mathematical formulation of evidential neural networks and introduces physics knowledge implicitly through an uncertainty-aware, physics-informed training loss. Our evidential network seamlessly transitions between learned and physics-based predictions for out-of-distribution inputs. Additionally, the physics-informed loss regularizes the learned model, ensuring better alignment with the physics model. Extensive simulations and hardware experiments demonstrate that PIETRA improves both learning accuracy and navigation performance in environments with significant distribution shifts.
