---
title: Incremental Learning of Motion Primitives for Pedestrian Trajectory Prediction at Intersections
subtitle:

date: 2019-09-15 00:00:00
description: This project presents a novel incremental learning algorithm for pedestrian motion prediction, with the ability to improve the learned model over time when data is incrementally available. 
summary: This project presents a novel incremental learning algorithm for pedestrian motion prediction, with the ability to improve the learned model over time when data is incrementally available.
featured_image:  '/images/projects/similar_dictionary_ames_vass.png'
image_alt: 

authors:
- golnaz
- nikitaj
- Jonathan How

active: true
---

![](/images/projects/similar_dictionary_ames_vass.png)

We have designed a novel incremental learning algorithm for pedestrian motion prediction, with the ability to improve the learned model over time when data is incrementally available. In this setup, trajectories are modeled as simple segments called motion primitives. Transitions between motion primitives are modeled as Gaussian Processes. When new data is available, the motion primitives learned from the new data are compared with the previous ones by measuring the inner product of the motion primitive vectors. Similar motion primitives and transitions are fused and novel motion primitives are added to capture newly observed behaviors. The proposed approach is tested and compared with other baselines in intersection scenarios where the data is incrementally available either from a single intersection or from multiple intersections with different geometries. In both cases, our method incrementally learns motion patterns and outperforms the offline learning approach in terms of prediction errors. The results also show that the model size in our algorithm grows at a much lower rate than standard incremental learning, where newly learned motion primitives and transitions are simply accumulated over time, without any combination fusion.
