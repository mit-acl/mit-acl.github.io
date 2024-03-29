---
title: Backward Reachability for Neural Feedback Loops
date: 2022-10-15

description: This project developed a backward reachability strategy to certify safety for systems controlled by neural networks 
summary:

featured_image: '/images/projects/backward_reach_nfls.png'

authors:
- nrober
- mfe

papers:
- rober2022backward
- rober2023backward
- rober2023hybrid

active: false
---

### About

Neural networks (NNs) are useful for many controls problems. However, while they may behave well for a nominal input, NNs are not generally robust to perturbations to that input, which may exist due to noise or adversarial attacks. For this reason, as NNs are applied to safety-critical systems such as mobile robotics, it is necessary to develop algorithms that can provide safety assurances about these systems. This project developed a backward reachability analysis approach that can determine what states a system would have to come from to end up in a given target set. Our approach can be used to guarantee safety for the system by setting the target set as an obstacle and ensuring that the system is not in the backprojection set, i.e., the set of states that will collide with the obstacle.

![](/images/projects/backward_reach_nfls.png)

### Software

https://github.com/neu-autonomy/nfl_veripy

### Sponsor

This research is funded by Ford Motor Company.
