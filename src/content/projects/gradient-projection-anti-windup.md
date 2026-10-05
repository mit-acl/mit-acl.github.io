---
title: Gradient Projection Anti-windup Scheme
subtitle:

date: 2009-01-01

description: We propose the gradient projection anti-windup (GPAW) scheme for general nonlinear systems comprising possibly nonlinear saturated plants and nonlinear controllers.

featured_image: '/images/projects/gpaw_1.png'
image_alt: 

authors:
- justinteo

papers:
- Teo11_PhD
- Teo09_CDC
- Teo10_ACC
- Teo10_ACC_GPAW
- TeoCDC11
- Teo10_MITTR
- Teo10_MITTR_GPAW

active: false
---

It is a well-recognized fact that control saturation affects virtually all practical control systems. It induces performance degradation, and possibly instability. Anti-windup compensation is one of two main approaches to mitigate the negative effects of windup, and is conceptually and practically appealing due to its amenability to be retrofitted to existing control designs. Given some nominal controller designed without consideration of saturation effects, the anti-windup problem is to design controller modifications such that when the saturation constraints are not triggered, nominal performance is recovered; and when some controls saturate, nominal performance is recovered as much as possible.

Due to its practical importance, anti-windup compensation is a well researched topic. However, the majority of the literature addresses saturated linear time invariant (LTI) plants driven by LTI controllers. For nonlinear systems with either saturated nonlinear plants and/or nonlinear controllers, the literature is very sparse, and is dominated by anti-windup schemes for feedback linearizable nonlinear systems driven by a controller obtained through feedback linearization (or equivalently, dynamic inversion). Indeed, it was recognized in a recent [survey paper](http://dx.doi.org/10.1049/iet-cta:20070435) that anti-windup compensation for nonlinear systems is still largely an open problem.

We propose the gradient projection anti-windup (GPAW) scheme for general nonlinear systems comprising possibly nonlinear saturated plants and nonlinear controllers. The GPAW scheme is a generalization of the well-known [conditional integration method](http://dx.doi.org/10.1007/1-84628-586-0_3) for proportional-integral-derivative (PID) type controllers to general multi-input-multi-output (MIMO) nonlinear controllers. The key mechanism used for this generalization is an extension of [Rosen's gradient projection method for nonlinear programming](http://www.jstor.org/stable/2098960) to continuous-time. The GPAW scheme uses the derived projection operator to project the controller state to the unsaturated region in the controller state space. This is illustrated below, where the vector field of the nominal controller is projected onto the unsaturated region "K" to yield the vector field of the GPAW compensated controller. 

![](/images/projects/gpaw_1.png)

A unique property of the GPAW scheme (due to projection) is that it achieves __controller state-output consistency__, which is an implicit objective for a large portion of existing anti-windup schemes. It has a single symmetric positive definite matrix parameter, and its realization is independent of the plant's description (rendering it suitable, in particular, for adaptive controllers). The GPAW compensated controller is defined by the online solution to either a combinatorial optimization subproblem, a convex quadratic program, or a projection onto a convex polyhedral cone. For systems with a small number of outputs, closed-form expressions may be derived, eliminating the need to solve any optimzation problems online and yielding significant savings in computation.

For a saturated first order LTI plant driven by a first order LTI controller, strong results on GPAW compensation have been obtained. In particular, for this simple system, GPAW compensation can only maintain/enlarge the region of attraction (ROA) of the uncompensated system. This result is __independent of any Lyapunov function__, and valid for all plant and controller parameters that ensures stability of the unconstrained (or unsaturated) system, a standard assumption in the anti-windup framework. Numerical results shown below, apart from illustrating the ROA containment, also indicates a need to consider __asymmetric__ saturation constraints for saturated systems in general. 

<div class="gallery" data-columns="2">
	<img src="/images/projects/gpaw_2.png">
	<img src="/images/projects/gpaw_3.png">
</div>

The results above indicate that ROA estimates for the symmetric saturation case are in general invalid for the asymmetric case, __even when the saturation constraints are relaxed__.

Current and future work is on extending the stability (ROA) results to more general systems. 