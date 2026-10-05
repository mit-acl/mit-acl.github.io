---
title: Sharing in Multiagent Reinforcement Learning
subtitle:
date: 2019-03-01
description: Sharing information during learning in multiagent environments can reduce the need for each agent to explore the entire state space, leading to reduced learning time. 
summary:
authors:
- samirw
- dkkim93
- shayegan
featured_image: '/images/projects/dvm/distillation_overview.jpg'
active: true
papers:
- Wadhwania19_IROS
---

Multiagent  reinforcement  learning  algorithms (MARL) have been demonstrated on complex tasks that require the coordination of a team of multiple agents to complete. Existing works have focused on sharing information between agents via centralized critics to stabilize learning or through communication to increase performance, but do not generally look at how information can be shared between agents during training to address the curse of dimensionality in MARL. We propose that an _n_-agent multiagent problem can be decomposed into an _n_-task multitask problem where each agent explores a subset of the state space instead of exploring the entire state space.

<div class="image-wrap" style="margin-bottom: 0px;"><img src="/images/projects/dvm/distillation_overview.png" alt=""></div>
<p style="text-align: center; margin-top: 5px;">Figure 1: Agents can distill policies to combine knowledge</p>

An example is illustrated in Figure 1 where agents must navigate to the closest target. This multiagent single-task problem can be decomposed into two symmetric single-agent tasks. In one case, an agent must learn a policy as though it were in Agent 1’s position; in the other, the agent must learn a policy for Agent 2’s position. The ability to share information enables agents to “divide and conquer”, where each agent only needs to learn how to complete the task from one perspective.