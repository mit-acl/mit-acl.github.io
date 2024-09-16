---
title: Constraint-Aware Refinement for Safety Verification of Neural Feedback Loops
date: 2024-09-05

description: This project developed an approach to reduce conservativeness in reachable set calculations for neural feedback loops
summary:

featured_image: '/images/projects/CARV.png'

authors:
- nrober


papers:

active: true
---

### About
Neural networks~(NNs) are becoming increasingly popular in the design of control pipelines for autonomous systems. However, since the performance of NNs can degrade in the presence of out-of-distribution data or adversarial attacks, systems that have NNs in their control pipelines, i.e., neural feedback loops~(NFLs), need safety assurances before they can be applied in safety-critical situations. Reachability analysis offers a solution to this problem by calculating reachable sets that bound the possible future states of an NFL and can be checked against dangerous regions of the state space to verify that the system does not violate safety constraints. Since exact reachable sets are generally intractable to calculate, reachable set over approximations~(RSOAs) are typically used. The problem with RSOAs is that they can be overly conservative, making it difficult to verify the satisfaction of safety constraints, especially over long time horizons or for highly nonlinear NN control policies. Refinement strategies such as partitioning or symbolic propagation are typically used to limit the overconservativeness of RSOAs, but these approaches come with a high computational cost and often can only be used to verify safety for simple reachability problems. This project presents Constraint-Aware Refinement for Verification (CARV): an efficient refinement strategy that reduces the overconservativeness of RSOAs by explicitly using the safety constraints on the NFL to refine RSOAs only where necessary.

![](/images/projects/CARV.png)

### Software

Coming soon.

### Sponsor

This research is funded by Ford Motor Company.
