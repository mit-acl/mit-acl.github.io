---
title: Flight Experiments Using Mixed-Integer Linear Programming (MILP) Trajectory Optimization
subtitle:

date: 2007-01-01

description: Mixed-integer linear programming (MILP) provides a very general framework for capturing problems with both discrete decisions and continuous variables.

featured_image: '/images/projects/milp_traj_optimization.jpg'
image_alt: 

authors:
- Kieran Culligan
- luders
- kuwata
- Mario Valenti

papers:
- Luders08_Masters

active: false
---

Mixed-integer linear programming (MILP) provides a __very general__ framework for capturing problems with both discrete decisions and continuous variables. Extensive research in the Aerospace Controls Lab (ACL) has explored ways of applying MILP to the control of unmanned aerial vehicles (UAVs). The standard MILP formulation has been used to model many UAV scenarios:

* Obstacle/collision avoidance and non-convex constraints
* Plume impingement
* Minimum-time trajectory problems
* Visibility graph-based cost-to-go models
* Multi-vehicle task assignment
* Hybrid systems
* Use of invariant sets for guaranteed safety

![](/images/projects/milp_traj_optimization.jpg)

Recent work in MILP control has focused on the implementation of a three-dimensional trajectory optimization algorithm in the lab's indoor testbed, the Real-time indoor Autonomous Vehicle test Environment (RAVEN). This implementation is designed to fly quadrotor UAVs in a three-dimensional obstacle environment. The MILP formulation uses non-uniform timesteps to design a detailed plan for the short term and a coarse plan for the long term. Additional upgrades include an expanding reachable horizon, such that only nearby obstacles are included in the formulation, and linear interpolation points to reduce the "discretization gap" between timesteps.

 A video demonstrating the use of MILP trajectory optimization for a quadrotor vehicle is available <a href="/videos/projects/vertol/MILP_obstacle_Avoidance_Nov_2007.flv" class="js-no-ajax" download>here</a>.