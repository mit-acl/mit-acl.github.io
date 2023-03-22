---
title: Closed-Loop Control of Autonomous Spacecraft

subtitle:

date: 2010-01-01

description: The goal of this research is to understand how process noise and process bias can degrade the performance of formations of spacecraft, as well as autonomous spacecraft following trajectories, and to develop control algorithms that minimize these effects.

featured_image: '/images/projects/spheres.jpg'
image_alt: 

authors:
- mjeffre4

active: false
---

### About

The goal of this research is to understand how process noise and process bias can degrade the performance of formations of spacecraft, as well as autonomous spacecraft following trajectories, and to develop control algorithms that minimize these effects. The measures of performance are 1) fuel usage and 2) state error.

This research involves performing experiments on the [Synchronized Position Hold Engage and Reorient Experimental Satellites (SPHERES)](http://ssl.mit.edu/spheres) testebed. There are currently three SPHERES satellites onboard the International Space Station. Each satellite has twelve thrusters that are used to impart specific ΔV's when commanded by a control algorithm. The current implementation of the low-level thrust controller is open-loop and frequently leads to errors in the actual delivered ΔV; it is based on an idealized force/torque model. The performance gains resulting from the reduction of these errors is under investigation while a new, closed-loop thrust controller is developed. The new controller utilizes onboard accelerometers and gyros to monitor the performance of the thrusters in real-time, and attempts to more accurately apply ΔV commands. The overall performance improvements in fuel use and trajectory tracking are studied.

The image below (Courtesy of NASA) shows the U.S. astronaut and MIT alum Dan Tani observes a SPHERES under closed-loop control on the ISS, in December 2007. 

![](/images/projects/spheres.jpg)

### Related Links

* [Spheres Flight Program](http://ssl.mit.edu/spheres)