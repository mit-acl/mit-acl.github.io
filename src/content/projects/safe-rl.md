---
title: Robust and Interpretable RL for Navigation in Pedestrian Crowds
subtitle:
date: 2018-12-31 00:00:00
description: Deep neural networks can fail overconfidently on novel observations. This work pioneers a reinforcement learning framework that reasons about the predictive confidence and is more robust to novel observations.
summary: 
featured_image: '/images/projects/safe_rl.jpg'
image_alt: 
authors:
- lutjens
- mfe
papers:
- Lutjens19_ICRA
- Lutjens18_IROS_WS
active: true
---

![](/images/projects/safe_rl.jpg)

Most autonomous vehicles strongly rely on black box predictions from deep neural networks (DNNs). However, DNNs can give unpredictably bad predictions on test data that is far from the training distribution. Moreover, the model tends to be overconfident for predictions on unseen data.

The importance of predictions that are robust to a distributional shift from training to test is evident for safety-critical applications. One of these applications is collision avoidance in pedestrian crowds.

Measures of model uncertainty can be used to identify unseen data, that the model has not been trained on. Our work "Safe Reinforcement Learning with Model Uncertainty Estimates" embeds model uncertainty estimates of neural networks in a Safe Reinforcement Learning framework. The resulting collision avoidance policy is sensitive to pedestrians that are observed in a previously unseen manner (e.g. runner, sheep, sensor failure,...). It identifies these pedestrians regionally and take navigatory action that avoid these pedestrians carefully. 

### Video

<iframe width="1216" height="684" src="https://www.youtube.com/embed/7vwQkSS0D-g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
