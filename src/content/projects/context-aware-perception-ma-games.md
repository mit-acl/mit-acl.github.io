---
title: Context-aware Active Perception in Multi-agent Asymmetric Information Games 
subtitle:

date: 2019-07-19

description: We are developing a general purpose algorithm for solving asymmetric information games that combines self-play for policy discovery, online POMDP planner for anticipation of opponent strategies, and maximum entropy agent modeling for robust belief update.

featured_image: '/images/projects/asymmetric_madrl.jpg'
image_alt: 

authors:
- macshen
active: true
---

![](/images/projects/asymmetric_madrl.jpg)

Autonomous decision making in Multi-agent games is a crucial step towards fully autonomous robots that continually learn and adapt to stochastic environment and interact with other agents. We identified a sub-class of imperfect information Multi-agent games, where the objective of the decision making agent depends on information known only to its opponent. As a result, the agent must actively interact with its opponent to infer the required information. This asymmetric-information game is an abstraction of many real world applications such as urban security, humanitarian assistance.

Recent advancement in multi-agent deep reinforcement learning (MADRL) demonstrated promising results in large scale games with hidden information. We are developing algorithms for active perception within this game theoretic framework. We identified three key challenges: (1) Robustness of active perception policy to unseen opponent behaviors: In a multi-agent competitive game, agent could learn the best response policy to its opponent policies. Although this best response is optimal against the opponents during the training, it could suffer from significant degradation against different policy during validation. (2) Learning intelligent exploring behaviors: We conjecture that the optimal behavior in asymmetric-information games should involve exploration actions that reduce the uncertainty of agent's belief about the hidden information. Existing MADRL approaches use recurrent neural network(RNN) to handle partial observability. RNN summarizes the history of observations into its hidden state to make decisions, while it is not clear whether it can learn active exploring strategies which help reduce uncertainty. (3) Scalability to large scale multi-agent systems: Most of the recent MADRL approaches apply the centralized learning and decentralized execution framework to improve the stability of MADRL by mitigating the non-stationarity of multi-agent learning. This centralized learning, however, does not scale well to large size multi-agent systems. 

We are developing solutions to these technical challenges using ideas from ensemble training, belief space planning and decentralized learning with opponent modeling. The goal is to design an algorithm for stable learning of robust exploraing policy that exhibits sophisticated intelligence and reasoning capability in asymmetric-information multi-agent interactions.
