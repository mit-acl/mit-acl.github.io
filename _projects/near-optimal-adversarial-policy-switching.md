---
title:  Near-Optimal Adversarial Policy Switching for Decentralized Asynchronous Multi-Agent Systems

subtitle:

date: 2017-10-01

description:  Our key contribution is a novel two-stage asynchronous multi-agent planning framework which first optimizes a set of stratagems that represent these best responses.

featured_image:
image_alt: 

authors:
- nghiaht

papers:
- HoangICRA_18
active: false
---

A key challenge in multi-robot and multi-agent systems is generating solutions that are robust to other self-interested or even adversarial parties who actively try to prevent the agents from achieving their goals. The practicality of existing works addressing this challenge is limited to only small-scale synchronous decision-making scenarios or a single agent planning its best response against a single adversary with fixed, procedurally characterized strategies. In contrast this work considers a more realistic class of problems where a team of asynchronous agents with limited observation and communication capabilities need to compete against multiple strategic adversaries with changing strategies. This problem necessitates agents that can coordinate to detect changes in adversary strategies and plan the best response accordingly. 

Our key contribution is a novel two-stage asynchronous multi-agent planning framework which first optimizes a set of stratagems that represent these best responses. These optimized stratagems are then integrated into a unified policy that can detect and respond when the adversaries change their strategies. The near-optimality of our proposed framework is established theoretically as well as demonstrated empirically in simulation and hardware.