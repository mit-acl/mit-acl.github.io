---
title: Information-Rich Path Planning for Constrained Mobile Sensor Networks
subtitle:

date: 2009-12-01

description: Researchers at ACL have been developing an online planning algorithm called Information-rich Rapidly-exploring Random Trees (IRRT), which maximizes information collection subject to very general constraint characterizations.

featured_image: '/images/projects/information_rich_path_planning_1.jpg'
image_alt: 

authors:
- denu
- luders

papers:
- Levine10_Info
- Levine10_SM

active: false
---

Mobile intelligence, surveillance, and reconnaissance (ISR) missions are predicated on information collection via sensor measurements. Yet trajectories generated to best utilize onboard sensing must also comply with such mission parameters as sensor limitations (e.g., small field-of-view), environmental constraints (e.g., cluttered space), and dynamic constraints (e.g., the collection platform). Of particular interest are trajectories that efficiently reduce the uncertainty of target location estimates. 

Researchers at ACL have been developing an online planning algorithm called Information-rich Rapidly-exploring Random Trees (IRRT), which maximizes information collection subject to very general constraint characterizations. To capture the complexity of realistic ISR missions, IRRT can embed vehicle dynamics, environmental constraints, and sensor limitations. IRRT has also been extended to a decentralized planner for multiple agents in cooperative ISR missions. 

Ongoing research is examining models that describe the uncertain motion and behavior of dynamic targets. Moreover, extensions to IRRT that quantify and embed the uncertainty reduction due to sensing actions about these targets are being pursued. Finally, we are examining the relationship between IRRT and information-rich task allocation for networks of mobile sensors participating in large-scale missions. 

### Images


<div class="gallery" data-columns="3">
	<img src="/images/projects/information_rich_path_planning_1.jpg">
	<img src="/images/projects/information_rich_path_planning_2.jpg">
	<img src="/images/projects/information_rich_path_planning_3.jpg">
	<img src="/images/projects/information_rich_path_planning_4.jpg">
	<img src="/images/projects/information_rich_path_planning_5.jpg">
</div>

1. California wildfires, as seen from a UAV (US Navy Photo).
2. Block diagram of IRRT. The red shaded box denotes the typical closed-loop RRT (CL-RRT) functionality. The green box denotes the IRRT extension to CL-RRT.
3. Cartoon of the IRRT path measurement sequence for one RRT node.
4. Two IRRT simulation examples. Left: Dubins car with a monocular sensor in a cluttered environment. Right: Three agents in a cluttered environment performing cooperative localization of multiple targets. 
5. IRRT hardware flight test with two AscTec Hummingbird quadrotors and one iRobot Create. 