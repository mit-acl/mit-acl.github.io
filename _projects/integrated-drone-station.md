---
title: Integrated Drone Station

subtitle:

date: 2018-06-01

description: This project will create effective first/last-mile integrated ground/aerial delivery solutions for a fleet-wide package delivery system.

summary: This project will create effective first/last-mile integrated ground/aerial delivery solutions for a fleet-wide package delivery system.

featured_image: '/images/projects/drone_truck.png'
image_alt: 

authors:
- aleix
- btlopez

active: true
---

![](/images/projects/drone_truck.png)

The large growth of online shopping in the past years has attracted interest in reducing package shipment time and costs. Autonomous quadrotors are an efficient alternative to delivery trucks because of the large energy, emissions, and time savings that they can provide. Their payload and flight time is limited though, and they cannot accomplish this task completely by themselves. Therefore, several researchers have addressed the problem of a truck-drone delivery system, and have concluded that a promising research direction is autonomous drone landing on a moving truck.

Current approaches of quadrotor landing on moving platforms consist of slow maneuvers and do not account for the turbulent wind present in this scenario. This project aims to develop a robust system that provides a direct, vision-based fast landing without requiring to hover the drone above the vehicle as the state of the art does, and which accounts for the turbulent wind that will be present on the back of a pickup truck. The landing trajectory is computed online using receding horizon control and is followed by a boundary layer sliding controller that provides tracking performance guarantees in the presence of unknown, but bounded, disturbances. To improve the performance, the characteristics of the turbulent conditions are accounted for in the controller. The resulting framework allows a rapid landing in turbulent wind conditions and will be crucial for efficient truck-drone delivery systems.
