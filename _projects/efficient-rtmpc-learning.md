---
title: Efficient Learning of Neural Network Policies via Imitation Learning and Tube MPC
subtitle:
date: 2022-08-03
description: Use a Robust Tube variant of MPC to efficiently learn Neural Network policies via Imitation Learning. 
summary: Use a Robust Tube variant of MPC to efficiently learn Neural Network policies via Imitation Learning. 
authors:
- atagliab
- dkkim93
- mfe
featured_image: '/images/projects/efficient_rtmpc_learning_cover_img.png'
papers:
- tagliabue2022demonstration
- tagliabue2022output
active: true
---


<img src="/images/projects/efficient_rtmpc_learning_experiment.jpg" alt="Experimental evaluation of a learned neural network policy for trajectory tracking." width="800"/>

## About

Imitation Learning (IL) can generate computationally efficient policies from demonstrations provided by computationally expensive model-based algorithms, such as Model Predictive Control (MPC). However, commonly employed IL methods are often data-inefficient, requiring the collection of a large number of demonstrations and producing policies with limited robustness to uncertainties. 

## Learning from Tube Model Predictive Control
<img src="/images/projects/efficient_rtmpc_learning_approach.png" alt="Pipeline for efficient learning of neural network policies from Tube MPC." width="800"/>

In the first part of this project, we address the robustness and demonstration efficiency challenges of IL by generating a Robust Tube variant of MPC (RTMPC) to collect demonstrations robust to process uncertainties (e.g., wind). We additionally leverage properties from the tube to introduce a data augmentation method that enables high demonstration-efficiency, capable of compensating the "distribution shifts" typically encountered in IL. Our approach opens to the possibility of zero-shot transfer from a single demonstration collected in a nominal domain, such as a simulation or a robot in a lab/controlled environment, to a domain with bounded model errors/perturbations. Experimental evaluations performed on a trajectory tracking MPC for a multirotor show that our method outperforms strategies commonly employed in IL, such as DAgger and Domain Randomization, in terms of demonstration-efficiency and robustness to perturbations unseen during training.

## Sensorimotor Policy Learning using 3D Meshes
<img src="/images/projects/efficient_rtmpc_learning_sensorimotor.png" alt="Pipeline to efficiently learn robust sensorimotor policies, using output feedback Tube MPC and a 3D mesh of the environment." width="800"/>
![](/images/projects/efficient_rtmpc_learning_sensorimotor.png)

In the second part of this project, we additionally introduce the ability to efficiently learn robust *sensorimotor* policies, capable to control a mobile robot directly from noisy, high-dimensional sensory observations, such as images. Key to our approach is to combine IL with an output feedback RTMPC to generate demonstrations robust to the effects of process *and* sensing uncertainties (e.g., noise, drifts), and co-generate a data augmentation strategy to augment the demonstrations collected by IL methods. We tailor our approach to the task of learning a trajectory tracking *visuomotor* policy for an aerial robot, leveraging a 3D mesh of the environment as part of the data augmentation process. We numerically demonstrate that our method can learn to control a robot from images using a single demonstration---a two-orders of magnitude improvement in demonstration efficiency compared to existing IL methods.

### Sponsor

This work is funded by the Air Force Office of Scientific Research MURI FA9550-19-1-0386

---

### Video
<iframe width="448" height="252" src="https://www.youtube.com/embed/28zQFktJIqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>