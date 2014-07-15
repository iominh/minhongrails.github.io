---
layout: post
title: "Infinite startup and inaccessible VM"
description: ""
category: tech
tags: [VMWare, Linux]
---
{% include JB/setup %}

In this post I wanted to document some issues I recently encountered. 

<div class="mSpotlight">VMware Fusion guest inaccessible from host</div>

Sometimes when I get a VM I need to change its network settings so that
it's visible to the internet as well as other machines on the network. 
Typically I set my VM to use bridged networking and then configure it to use
DHCP so that it's assigned an IP by my network.

It depends on the operating system and VM but for <a href="http://www.centos.org/docs/5/html/Deployment_Guide-en-US/s1-dhcp-configuring-client.html">CentOS6.4</a>, in order to enable DHCP on a bridged VM:

* Modify <b>/etc/sysconfig/network-scripts/ifcfg-eth0</b> to have the following
settings:

<pre class="prettyprint">
<code class="bash">DEVICE=eth0
BOOTPROTO=dhcp
ONBOOT=yes
</code></pre>

* Modify  <b>/etc/sysconfig/network</b> to have the following settings:

<pre class="prettyprint">
<code class="bash">NETWORKING=yes
</code></pre>

* Also, don't forget to restart the network for the changes to take effect:

<pre class="prettyprint">
<code class="bash">service network restart
</code></pre>

* Additionally, <b>/etc/hosts</b> may need to be updated with the new IP address,
or else you may encounter the next issue...

<div class="mSpotlight">Linux Startup Script Loops Forever</div>

If you ever boot up a VM and encounter a messed up startup script (e.g.
one that loops infinitely attempting to connect to an unknown host/IP) then
the key is to start the VM in <a href="http://www.centos.org/docs/5/html/Installation_Guide-en-US/s1-rescuemode-booting-single.html" target="_blank">"single user mode"</a>. For CentOS I just kept
pressing a key on bootup and then entered GRUB mode. After that I appended
the "single" keyword and was able to log into the system to fix the startup script.
