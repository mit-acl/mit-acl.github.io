---
title: Ship Airwake Measurement System
date: 2020-01-29

description: This project is for designing and deploying a robust and accurate autonomous UAV platform for tethered flight and air flow data collection behind naval ships.

summary:
authors:
- torgesen
papers:
- Torgesen2021_ST
featured_image: '/images/projects/aerowake-project-banner.png'
active: true
---

![](/images/projects/aerowake-project-banner.png)

### About

This project was founded on the concept of using a small, unmanned air vehicle (UAV) to collect location-based air flow data behind a moving ship in the interest of characterizing aerodynamic inefficiencies for improvements in maritime ship design. Tethered flight, where the UAV is effectively towed behind the moving vessel, is desirable both for keeping the UAV within a safe distance as well as facilitating recovery in the event of an accident. That being said, tethered flight presents its own challenges in terms of flight control and stability. Moreover, accurate relative state estimation between the UAV and the ship in an outdoor and globally dynamic environment is imperative for the collected air flow data to be useful.

Over the past several months, efforts have been made to develop a working flight system prototype from the ground up that is suitable for tethered flight and reliable outdoor state estimation, along with a comprehensive simulation environment for extensive algorithm development and testing. The proposed solution encompasses all of the following concepts and tools:

* Usage (and continual improvement of) a highly configurable ROS-based autopilot ([ROSflight](http://rosflight.org)) built by researchers for researchers
* A nested-loop custom control scheme capable of tracking altitude, lateral velocity, pitch, and yaw commands without becoming subject to integrator wind-up
* An Extended Kalman Filter-based sensor fusion scheme
* An Unscented Kalman Filter algorithm for detecting when the tether is taut
* Both carrier-phase and code-phase differential GPS
* A computer vision-based relative pose estimation scheme with a monocular camera and an infrared beacon array structure
* A software-in-the-loop simulation environment capable of simulating aerodynamic and tether effects, as well as all aircraft sensors and mission scenarios

In all, the project is a sizable engineering undertaking which requires not only the development of robust tools for demonstrable and repeatable real-world performance, but also the creative application and synthesis of state-of-the-art algorithms and hardware to address the unique challenges of the dynamic maritime environment. Deployment of the complete flight system is slotted to occur in August of 2020.

### Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/y2Es1eBVndI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://youtube.com/embed/fbL3U45sz8Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://youtube.com/embed/MW5t8BAQ_lA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://youtube.com/embed/dRS6GkOCtP0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://youtube.com/embed/tnFhM2z2OW4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://youtube.com/embed/9CwsIE9Ty2U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
