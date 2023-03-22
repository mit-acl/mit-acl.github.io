---
title: Multi-Robot Information Gathering
subtitle:
date: 2022-01-01
description: Optimizing the trade-off between information and energy cost.
summary:
authors:
- xyc
- mrrobot
featured_image: '/images/projects/infogathering_hwexp.png'
papers:
- cai2022energy
- cai2021non
active: true
---


### About

This project considers the problem of safely coordinating a team of sensor-equipped robots to reduce uncertainty about a dynamical process such as moving targets, where the objective trades off information gain and energy cost. Optimizing this trade-off is desirable, but leads to a non-monotone objective function in the set of robot trajectories (i.e., having more information may lead to worse objective due to higher energy cost). In this setting, common multi-robot planners based on sequential planning lose their performance guarantees. 

Our first work presented a distributed planner that uses local search with a worst-case performance guarantees for the non-monotone objective that trades off information and energy cost. The work was presented at ICRA 2021 and featured in MIT News.

As an extension to handle inter-robot collision avoidance, our second work proposed a hierarchical approach with the local search based distributed planner and a decentralized controller based on control barrier functions that ensures safety and encourages timely arrival at sensing locations. Via extensive simulations, hardware-in-the-loop tests and hardware experiments in our lab's flight space, we demonstrate that the proposed approach achieves a better trade-off between sensing and energy cost than sequential planning based algorithms.

These are some images showing the hardware experiment setup and the onboard sensors of the robots.

![](/images/projects/infogathering_hwexp.png)
![](/images/projects/infogathering_hwexp_HX19.png)
![](/images/projects/infogathering_hwexp_TB02.png)


### Press

* [MIT News](https://news.mit.edu/2021/robots-collaborate-search-0513)


### Videos

A video describing the distributed infoplanner, made for ICRA 2021.
<iframe width="560" height="315" src="https://www.youtube.com/embed/xWgFi6fwex0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

A video showing the hardware experiment setup.
<iframe width="560" height="315" src="https://www.youtube.com/embed/IJtQL7orBgA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Sponsor

This research is funded by Boeing.

---
