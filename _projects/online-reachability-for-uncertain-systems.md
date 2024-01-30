---
title: Online Reachability Analysis for Systems Subject to Uncertain Disturbances
date: 2023-10-15

description: This project developed an approach to verify safety for systems subject to unknown disturbances 
summary:

featured_image: '/images/projects/heron_reachability_icon.png'

authors:
- nrober


active: true
---

### About

As autonomy pipelines become more complex, possibly including learned components, it becomes necessary to verify that they are safe to be deployed in safety-critical environments. This poses a challenge for real systems, which are typically subject to modeling errors and unknown disturbances that make it more challenging to predict how the system will behave. Since the disturbances are not known ahead of time, we need to generate safety assurances at runtime. We accomplish this by using a computational graph analysis tool configured with a known system model to predict the possible future states of the system, i.e., the reachable set. Data is collected online and fed into a moving horizon estimator to generate an estimate of the disturbances affecting the system, which is included in the reachability analysis to accurately predict the behavior of the true system.

![](/images/projects/heron_reachability.png)

### Software

Software is in review.

