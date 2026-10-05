---
title: Safety Filtering for Systems with Perception Models Subject to Adversarial Attacks
date: 2026-01-01

description: This project developed an approach to guard systems with NN-based state estimators from adversarial attacks designed to cause safety constraint violations
summary:

featured_image: '/images/projects/guardian_cover.png'

authors:
- nrober
- ameredit


papers:
- rober2026guardian

active: true
---

### About
Safety filtering is an effective method for enforcing constraints in safety-critical systems, but existing methods typically assume perfect state information. This limitation is especially problematic for systems that rely on neural network (NN)-based state estimators, which can be highly sensitive to noise and adversarial input perturbations. We address these problems by introducing GUARDIAN: Guaranteed Uncertainty-Aware Reachability Defense against Adversarial INterference, a safety filtering framework that provides formal safety guarantees for systems with NN-based state estimators. At runtime, GUARDIAN uses neural network verification tools to provide guaranteed bounds on the system’s state estimate given possible perturbations to its observation. It then uses a modified Hamilton-Jacobi reachability formulation to construct a safety filter that adjusts the nominal control input based on the verified state bounds and safety constraints. The result is an uncertainty-aware filter that ensures safety despite the system’s reliance on an NN estimator with noisy, possibly adversarial, input observations. Theoretical analysis and numerical experiments demonstrate that GUARDIAN effectively defends systems against adversarial attacks that would otherwise lead to a violation of safety constraints.

<!-- ![](/images/projects/CARV.png) -->
<p>
  <img src="/images/projects/guardian_cover.png" alt="">
</p>

<p>
  <img src="/images/projects/guardian_trajectory.gif" alt="" style="width:50%;">
</p>

### Links

* [Paper](https://arxiv.org/abs/2602.06026)
<!-- * [Code](https://github.com/mit-acl/CARV) -->
