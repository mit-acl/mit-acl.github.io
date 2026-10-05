---
title: Planning with Limited Communication Networks 

subtitle:

date: 2016-10-01

description: In this work, we explore the performance of a real ad-hoc network using 802.11 WiFi adapters and low-cost Raspberry Pi's, placed across the 6th floor of Stata.

featured_image: /images/projects/planning_comms.png
image_alt: 

authors:
- nbuckman

papers:
- Buckman17_RSS

active: false
---

Communication plays a key role in multi-agent planning and estimation, serving as a critical component of the robot system. Many multirobot coordination schemes require some sort of consensus across the team such as in task allocation, consensus filtering, and coverage control. In all of these planning algorithms, robots are able to estimate and plan in a distributed fashion with distributed communication. Communication is especially important in highly dynamic environments, when information can be changing very quickly and unpredictably, and thus team-wide communication is necessary to maintain a consistent team wide belief. In these dynamic scenarios it is imperative to have fast and reliable communication that still maintains the decentralized nature of most of these algorithms.

In this work, we explore the performance of a real ad-hoc network using 802.11 WiFi adapters and low-cost Raspberry Pi's, placed across the 6th floor of Stata. We are interested in understanding the reliability and delays associated with using 802.11 ad-hoc's mode for broadcasting information across a team of agents. The first goal is to better understand effects of hidden neighbors, weak link signals, and limited buffer sizes on the team's ability to transmit information. Secondly, by co-designing planning algorithms and communication realities, we can both design planning algorithms that are robust to communication failures, as well as improving team-wide communication. 

![](/images/projects/planning_comms.png)