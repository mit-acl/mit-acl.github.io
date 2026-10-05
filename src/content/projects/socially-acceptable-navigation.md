---
title: Socially Acceptable Navigation
subtitle:
date: 2019-01-16
description: Collision avoidance algorithm using Deep RL.
summary:
authors:
- mfe
- chenyuf2
featured_image: '/images/projects/jackal.jpg'
papers:
- Everett18_IROS
- Chen17_IROS
- Chen17_decentralized_ICRA
- Chen16_motion_IROS
active: true
---

![](/images/projects/jackal.jpg)

### About

Autonomous (self-driving) vehicles are being increasingly tested on highways and city streets. But there is also a need for robots that can navigate through environments like sidewalks, buildings, and hallways. In these situations, the robots must interact and cooperate with pedestrians in a socially acceptable manner. The "rules of the road" no longer apply -- there are no lanes or street signs, and pedestrians don't use turn signals when cutting through crowds. The way people walk even changes from city to city.

Our first work presented a collision avoidance algorithm using Deep RL, where agents learn to avoid collisions with other dynamic agents by training in a simulated environment. This led to more natural behavior, agents reaching their goals faster, and a demonstration of the algorithm with real robots in our lab. This work was awarded as a Finalist for Best Paper in Multi-Robot Systems at ICRA 2017.

A continuation of this work extended the algorithm to learn social norms that pedestrians tend to follow, such as passing on the right side. The contributions included a Socially Aware collision avoidance algorithm and better handling of multi-agent scenarios. The algorithmic improvements enabled a robot to operate among pedestrians in a public environment (Building 32) for periods of over 20 mins without human intervention. This work was awarded Best Student Paper and Finalist for Best Paper in Cognitive Robotics at IROS 2017.

Our most recent paper further improved the handling of large numbers of nearby agents (n &#62; 4) using LSTM and fewer assumptions about other agents' behaviors. This work was presented at IROS 2018.

The robot is often tested in MIT's Building 32 during peak traffic at lunchtime. Some applications of this technology could be in delivery of goods, mobility on demand (MOD) systems, and human assistance scenarios.

### Press

* [MIT News](http://news.mit.edu/2017/new-robot-rolls-rules-pedestrian-conduct-0830)
* [Boston Globe](https://www.bostonglobe.com/metro/2017/08/30/mit-engineers-develop-socially-aware-robot-keep-pace-with-pedestrians/rPUE2B9UKJT6MybMeqbcvL/story.html)
* [Techcrunch](https://techcrunch.com/2017/08/30/mits-new-ford-funded-robot-can-deftly-navigate-pedestrian-traffic/)
* [BBC Radio Interview](https://www.bbc.co.uk/programmes/w3cstxkx)
* Today Show
* [Reuters](http://reut.rs/2CAYAbq)
* Discovery Canada

### Awards

* 2017 Winner of IROS Best Student Paper Award
* 2017 Finalist for IROS Best Paper Award on Cognitive Robotics
* 2017 Finalist for ICRA Best Multi-Robot Systems Paper Award

### Software

Software for a recent paper is published at [Github](github.com/mfe7/cadrl_ros).

### Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/XHoXkWLhwYQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/PS2UoyCTrSw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/CK1szio7PyA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/3s9gswbhWSU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

---