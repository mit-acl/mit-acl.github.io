---
title: Consensus-Based Bundle Algorithm (CBBA)

subtitle:

date: 2008-01-01

description: CBBA is a decentralized market-based protocol that provides provably good approximate solutions for multi-agent multi-task allocation problems over networks of heterogeneous agents.

featured_image: '/images/projects/cbba.png'
image_alt: 

authors:
- lbj16
- sponda
- hanlimc

active: false
---

### About

Modern day network centric operations involve large teams of agents, with heterogeneous capabilities, interacting together to perform missions. These missions involve executing several different tasks such as conducting reconnaissance, surveillance, target classification, and rescue operations. Within the heterogeneous team, some specialized agents are better suited to handle certain types of tasks than others. For example, UAVs equipped with video can be used to perform search, surveillance and reconnaissance operations, human operators can be used for classification tasks, ground teams can be deployed to perform rescue operations, etc. Ensuring proper coordination and collaboration between agents in the team is crucial to efficient and successful mission execution, motivating the development of autonomous task allocation methods to improve mission coordination.

CBBA is a decentralized market-based protocol that provides provably good approximate solutions for multi-agent multi-task allocation problems over networks of heterogeneous agents. CBBA consists of iterations between two phases: a bundle building phase where each vehicle greedily generates an ordered bundle of tasks, and a consensus phase where conflicting assignments are identified and resolved through local communication between neighboring agents. There are several core features of CBBA that can be exploited to develop an efficient planning mechanism for heterogeneous teams. First, CBBA is a decentralized decision architecture, which is a necessity for planning over large teams due to the increasing communication and computation overhead required for centralized planning with a large number of agents. Second, CBBA is a polynomial-time algorithm leading to a framework that scales well with the size of the network and/or the number of tasks (or equivalently, the length of the planning horizon). Third, CBBA is capable of handling various design objectives, nonlinear agent models, and constraints, and under a few assumptions on the schoring structure, a provably good feasible solution is guaranteed. 

![](/images/projects/cbba.png)

### CBBA Variants

#### Asynchronous Consensus-Based Bundle Algorithm (ACBBA) 

Asynchronous CBBA is a decentralized task allocation algorithm for networked agents communicating through an asynchronous channel. The algorithm extends the Consensus-Based Bundle Algorithm (CBBA) to account for more realistic asynchronous communication protocols. Direct implementation of CBBA into such an asynchronous setting requires agents to frequently broadcast their information states, which would cause significant communication overflow. In contrast, ACBBA minimizes communication load while preserving the convergence properties of the original algorithm. ACBBA applies a new set of local deconfliction rules that do not require access to the global information state. This new deconfliction protocol also features consistent handling of out-of-order messages and detection of redundant information.

Recent work on ACBBA accounts for more real-time implementation issues resulting from a decentralized planner by using a new implementation that allows further insight into the consensus and message passing structures of ACBBA. Additionally, a new feature called asynchronous replan was introduced to ACBBA's functionality that enables efficient updates to large changes in local situational awareness. This new version of ACBBA was used to compare global and local convergence performance of asynchronous consensus algorithms. A real-time software implementation using multiple agents communicating through the user datagram protocol (UDP) was used to validate the proposed algorithm. 

***

####  Coupled-Constraint Consensus-Based Bundle Algorithm (CCBBA)

Coupled-Constraint CBBA is a decentralized algorithm that creates feasible assignments for a network of autonomous agents in the presence of coupled constraints. The coupled constraints address complex mission characteristics that include assignment relationships, where the value of a task is conditioned on whether or not another task has been assigned, and temporal relationships, where the value of a task is conditioned on when it is performed relative to other tasks. This new algorithm extends CBBA, introducing the notion of pessimistic or optimistic bidding strategies and relative timing constraints between tasks. The performance of CCBBA was compared to the baseline CBBA algorithm in various complex mission simulations and was found to outperform CBBA, particularly in task-rich scenarios.

***

#### CBBA with Relays

This work addresses the issue of network connectivity for a team of heterogeneous agents operating in a dynamic environment. Unmanned agent communication systems typically have limited range and/or potential line-of-sight requirements. As a result, as agents move around the environment the network topology is usually dynamic, with varying communication links between the agents. Dynamic communication constraints and network disconnects can cause several issues, such as performing consensus on information or situational awareness, or streaming data back to a base station (e. g. video). In such scenarios, where the success of task execution is dependent upon maintaining continuous communication, dynamic network topologies and network disconnects can severely limit the performance of the team.

CBBA with Relays addresses these limited communication issues by extending the baseline CBBA algorithm. In particular, CBBA with Relays leverages information available through already existing consensus phases to predict the network topology at select times and creates relay tasks to strengthen the connectivity of the network. By employing underutilized resources, CBBA with Relays improves network connectivity without limiting the scope of the active agents, thus improving mission performance. The algorithm has been validated on heterogeneous multi-agent missions both in simulation and through experimental flight tests, demonstrating the real-time applicability of the approach.

***

#### CBBA with IRRT

This work combines CBBA with a motion planning algorithm called [Information-rich Rapidly-exploring Random Trees (IRRT)](/projects/irrt) to create a novel stratified planning approach for teams of heterogeneous mobile sensors that maximizes information collection while minimizing resource costs. The main contribution of this work is the scalable unification of effective algorithms for decentralized informative motion planning and decentralized high-level task allocation. Both CBBA and IRRT are amenable to very general and realistic mobile sensor constraint characterizations, and the combination of both offers several enhancements to the existing algorithms that embed the goal of information collection at each phase of the planning process. The proposed framework was validated through simulation and experimental results for networks of mobile sensors performing multi-target localization missions.

### Software

* <a href="/files/CBBA_MATLAB_ACLMIT_July13_2010.zip" class="js-no-ajax" download>CBBA With Time-Windows (MATLAB)</a>

### Videos

**CBBA With Relays - Hardware Demonstration** - March 2011

<iframe width="560" height="315" src="https://www.youtube.com/embed/M_TfyDl1Uik" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**CBBA - Mission Planning for Heterogenous Teams** - November 2009

<iframe width="560" height="315" src="https://www.youtube.com/embed/FhmRaRd8G24" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Related Publications

#### Journal Articles

<ul class="papers">
	<li>
		{% reference Cummings11_IEEE %}
	</li>
	<li>
		{% reference Choi09_TRO %}
	</li>
</ul>

#### Conference Papers

<ul class="papers">
	<li>
		{% reference Johnson11_Infotech %}
	</li>
	<li>
		{% reference Luders11_Info_IRRT %}
	</li>
	<li>
		{% reference Ponda11_Infotech %}
	</li>
	<li>
		{% reference Ponda11_GNC %}
	</li>
	<li>
		{% reference Whitten11_ACC %}
	</li>
	<li>
		{% reference Choi10_ACC %}
	</li>
	<li>
		{% reference Johnson10_GNC %}
	</li>
	<li>
		{% reference Ponda10_ACC %}
	</li>
	<li>
		{% reference Ponda10_Globecom %}
	</li>
	<li>
		{% reference Ponda10_Infotech %}
	</li>
	<li>
		{% reference Brunet08_GNC %}
	</li>
</ul>

#### Thesis Publications

<ul class="papers">
	<li>
		{% reference Whitten10_Masters %}
	</li>
	<li>
		{% reference Brunet08_Masters %}
	</li>
</ul>