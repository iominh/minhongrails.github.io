---
layout: post
title: "Setting up domain email"
description: ""
category: tech
tags: [email, gandi.net, linode, google]
---
{% include JB/setup %}

In this post I wanted to share how  I changed my site's email from minhongrails@gmail.com to hello@minh.io. 
First, why create a domain email? Well, it lets you create any number of handles
such as "bah@minh.io" and provides spam control for whenever you sign up at 
stores or other spammy places by hiding your actual email. 

Initially I considered Google Apps as an email host but then discovered it cost $5 a month. Next I
looked at self-hosted mailing servers for my Linode but I decided against it
due to server resource, security, and reliability concerns.

Eventually I found out that my new domain host Gandi.net offered mailboxes
for my registered domain, so I just added "hello@minh.io" as a mail service
and forwarded my emails to my gmail account. I also added spool.mail.gandi.net
and fb.mail.gandi.net to my Linode's MX records.

Anyway, I tried out some test emails that were delivered nearly instantaneously
so things look good so far but I'll update this post if I discover any issues
down the road.
