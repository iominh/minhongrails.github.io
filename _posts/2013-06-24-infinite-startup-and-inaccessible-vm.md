---
layout: post
title: "Infinite Startup and Inaccessible VM"
description: ""
category: tech
tags: [VMWare, Linux]
---
{% include JB/setup %}

In this post I wanted to document some issues I recently encountered. 

<div class="mSpotlight">VMware Fusion guest inaccessible from host</div>

For some reason when I use VMWare Fusion with bridged networking I
need to manually set an IP address on the VM that's on the same subnet
as my host machine or else I cannot ping my VM from my host.

For instance, if my host machine has an IP address of 192.168.50.100 then
my VM would need to be 192.168.50.X but if it was 192.168.51.X then I wouldn't
get a response. 

The steps I took to resolve this issue on my CentOS VM were:

* Change the IP address in /etc/sysconfig/network-scripts/ifcfg-eth0 
* Change the IP address in /etc/sysconfig/network
* Run "service network restart"

<div class="mSpotlight">Linux Startup Script Loops Forever</div>

If you ever boot up a VM and encounter a messed up startup script (e.g.
one that loops infinitely attempting to connect to an unknown host/IP) then
the key is to start the VM in <a href="http://www.centos.org/docs/5/html/Installation_Guide-en-US/s1-rescuemode-booting-single.html" target="_blank">"single user mode"</a>. For CentOS I just kept
pressing a key on bootup and then entered GRUB mode. After that I appended
the "single" keyword and was able to log into the system to fix the startup script.