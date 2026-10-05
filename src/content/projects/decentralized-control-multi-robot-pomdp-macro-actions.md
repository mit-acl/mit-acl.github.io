---
title: Decentralized Control of Multi-Robot Partially Observable Markov Decision Processes using Belief Space Macro-actions 

subtitle:

date: 2014-10-01

description: This work extends the Dec-POMDP model to the Decentralized Partially Observable Semi-Markov Decision Process (Dec-POSMDP) to take advantage of high-level representations that are natural for multi-robot problems and to facilitate scalable solutions to large discrete and continuous problems.

featured_image: '/images/projects/decposmdp_hardware.png'
image_alt: 

authors:
- shayegan
- aliagha
- Christopher Amato
- syliu
- miaoliu

papers:
- Omidshafiei16_IJRR
- Liu15_stick_IJCAI

active: false
---

### About

This work focuses on solving multi-robot planning problems in continuous spaces with partial observability given a high-level domain description. Decentralized Partially Observable Markov Decision Processes (Dec-POMDPs) are general models for multi-robot coordination problems. However, representing and solving Dec-POMDPs is often intractable for large problems.

This work extends the Dec-POMDP model to the Decentralized Partially Observable Semi-Markov Decision Process (Dec-POSMDP) to take advantage of high-level representations that are natural for multi-robot problems and to facilitate scalable solutions to large discrete and continuous problems. The Dec-POSMDP formulation uses task macro-actions created from lower-level primitive actions that allow asynchronous decision-making, which is crucial in multi-robot domains. We also present algorithms for solving Dec-POSMDPs, which are more scalable than previous methods since they can incorporate closed-loop belief space macro-actions in planning. The proposed algorithms are then evaluated on a complex multi-robot package delivery problem under uncertainty, showing that our approach can naturally represent realistic domains and provide high-quality solutions for large-scale problems.

<div class="gallery" data-columns="1">
	<img src="/images/projects/decposmdp_overview.png">
	<img src="/images/projects/decposmdp_hardware.png">
</div>

### Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/34xHxXrnPHw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>