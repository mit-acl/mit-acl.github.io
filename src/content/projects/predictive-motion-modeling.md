---
title: Predictive Motion Modeling 

subtitle:

date: 2015-10-01

description: This work develops an algorithm that combines the strengths of the Markovian-based and clustering-based methods, by finding the local clusters characterized by partial trajectory segments, and making predictions using both the local motion models and the global Markovian transition dynamics. 

featured_image: '/images/projects/predictive_motion_modeling_hardware.png'
image_alt: 

authors:
- chenyuf2
- justinm
- miaoliu
- syliu

papers:
- Chen16_augmented_ICRA

active: false
---

With increased adoption of onboard sensors and GPS devices, large volumes of pedestrian and vehicular trajectory data has been made available. These datasets are useful for understanding the mobility patterns of human and vehicles, which in turn, benefit applications such as autonomous navigation and mobility-on-demand systems. To ensure safety in these applications, it is important for the autonomous vehicles to be able to anticipate the future paths of their surrounding moving objects. This requires learning motion models that can differentiate complex behavior patterns.

Markovian-based and clustering-based methods are the two main types of approaches for trajectory modeling. The Markovian-based methods learn a state-transition model from the training trajectories, and make predictions based on the current state and the hidden intent (e.g., goal) of an agent. The clustering-based methods group the training trajectories into a few clusters, and make predictions by fitting a predictive motion model, such as a Gaussian Process, to each cluster. Using only the current state, Markovian-based methods can be more susceptible to measurement noise. Clustering-based methods have been shown to generally produce better prediction accuracies, but they are slow to detect changes in an agent's behaviors. More importantly, in real datasets collected by onboard cameras or Lidar, there often exist a large portion of short, incomplete trajectory segments due to occluded views. This leads to some inherent ambiguity in trajectory clustering (not clear how to assign partial trajectories) and can lead to creating similar clusters that produce repetitive predictions. This work develops an algorithm that combines the strengths of the Markovian-based and clustering-based methods, by finding the local clusters characterized by partial trajectory segments, and making predictions using both the local motion models and the global Markovian transition dynamics. 

<div class="gallery" data-columns="2">
	<img src="/images/projects/predictive_motion_modeling_hardware.png">
	<img src="/images/projects/predictive_motion_modeling_dict_atoms.png">
</div>
