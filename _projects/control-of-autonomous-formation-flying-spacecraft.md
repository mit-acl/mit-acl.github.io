---
title: Mitigation of the Impact of Sensing Noise on the Precise Formation Flying Control Problem 

subtitle:

date: 2005-10-01

description: There are many challenges associated with flying multiple satellites in formation. This work examines approaches for initializing, coordinating, and controlling spacecraft formations in the presence of process noise and navigation error. 

featured_image: '/images/projects/impact_of_sensing_noise_formation_flying.jpg'
image_alt: 

authors:
- lbreger

papers:
- Mitchell04_GNC
- Breger05_GNC
- Breger07_JGCD
- Breger05_ACC

active: false
---

### Research Objective

Understand and mitigate the effects of navigation errors on spacecraft formation flying missions.

* Analysis of the impact of the velocity errors on spacecraft formation flying missions (general orbit configurations)
* Investigate the fundamental performance limits of CDGPS estimators, and identify estimator changes that might improve upon the accuracy of the current velocity estimates
* Identify augmentation approaches that might be efficiently added to the spacecraft to improve velocity estimates (onboard and/or ground based)
* Extend current control techniques to further enhance their ability to achieve fuel efficient performance even with sensing errors, differential drag disturbances, and gravity perturbations.

### Focus on

* Navigation filter parameters and their effect on semimajor axis knowledge
* Analysis of the effects of spacecraft relative navigation errors on closed loop control in widely spaced, highly elliptical orbits
* Improving optimized control algorithms by incorporating precise
knowledge of expected noise characteristics

![](/images/projects/impact_of_sensing_noise_formation_flying.jpg)

### Results in Phase 1

Examined effects of navigation filter properties on semimajor axis estimation and formation flying control

* Linearized analysis of velocity noise with position measurements.
* Extended linearized analysis to include velocity measurements.
* Examined discrete and nonlinear effects.
* Developed linearized dynamics based on GVEs and embedded those dynamics in a model predictive controller.
    * Development of GVE-based dynamics; demonstration of large baseline formation flying. 
    * Extended GVE-based dynamics to include the effects of differential J2 disturbances.
* Demonstrated analytic performance prediction for formation flying mission using a model predictive control algorithm. Showed benefits by conducting trade studies of control parameters.

### Results in Phase 2

* Developed optimized approach to finding J2 invariant relative orbits. The method balances fuel use minimization, drift minimization, and template matching.
* Verified and implemented a new approach for creating J2-modified discrete input matrices. 