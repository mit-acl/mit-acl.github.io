---
title:  A Transferable Pedestrian Motion Prediction Model for Intersections with Different Geometries 

subtitle:

date: 2019-01-12

description: This project pursues the development and application of unsupervised and semi-supervised machine learning algorithms to automate exploration of underwater environments.

summary: This project pursues the development and application of unsupervised and semi-supervised machine learning algorithms to automate exploration of underwater environments.

featured_image: '/images/projects/transferable_ped_pred.jpg'
image_alt: 

authors:
- golnaz
- nikitaj

papers:
- Jaipuria18_curb_ITSC

active: false
---

![](/images/projects/transferable_ped_pred.jpg)


We have presented a transferable model for accurate pedestrian trajectory prediction in intersection corners or near crosswalks. Given prior knowledge of curbside geometry (i.e. angle made by intersecting curbs at the corner point of interest and the coordinates of the corner itself), the presented framework can accurately predict pedestrian trajectories even in new, unseen intersections. This is achieved by learning motion primitives in a common frame, called the curbside coordinate frame. A key insight in developing this common frame is to ensure that trajectories from intersections with different geometries, representing the same behavior, are spatially similar in the common frame. Motion primitives learned in such a common frame, can then be easily generalized to predict in new intersections, with different geometries than the ones trained on. 

We test our algorithm on real pedestrian trajectory datasets collected at two intersections, with distinctly different curbside and crosswalk geometries. Our algorithm demonstrates improved prediction accuracies of pedestrian trajectory prediction compared to the previous work. The result also shows additional context, such as information about pedestrian traffic lights, if available, can be easily incorpo rated in our prediction model for further improvement in prediction accuracy. 
