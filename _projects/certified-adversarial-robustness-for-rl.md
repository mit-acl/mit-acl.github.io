---
title: Certified Adversarial Robustness for Deep RL
date: 2020-01-29

description: This project develops deep RL algorithms that are robust to an adversarial perturbation in the observation space
summary:

featured_image: '/images/projects/certified_adversarial_robustness.png'

authors:
- mfe
- lutjens

papers:
- Lutjens19_CORL

active: true
---

### About

Deep Neural Network-based systems are now the state-of-the-art in many robotics tasks, but their application in safety-critical domains remains dangerous without formal guarantees on network robustness. Small perturbations to sensor inputs (from noise or adversarial examples) are often enough to change network-based decisions, which was already shown to cause an autonomous vehicle to swerve into oncoming traffic. In light of these dangers, numerous algorithms have been developed as defensive mechanisms from these adversarial inputs, some of which provide formal robustness guarantees or certificates. This work leverages research on certified adversarial robustness to develop an online certified defense for deep reinforcement learning algorithms. The proposed defense computes guaranteed lower bounds on state-action values during execution to identify and choose the optimal action under a worst-case deviation in input space due to possible adversaries or noise. The approach is demonstrated on a Deep Q-Network policy and is shown to increase robustness to noise and adversaries in pedestrian collision avoidance scenarios and a classic control task.

![](/images/projects/certified_adversarial_robustness.png)

### Software

The software is under release review.

### Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/Gp6QG66ATy4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Sponsor

This research is funded by Ford Motor Company.

