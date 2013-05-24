---
layout: post
title: "Setting up domain email"
description: ""
category: 
tags: [email, gandi.net, linode, google]
---
{% include JB/setup %}

I changed my site's email from minhongrails@gmail.com to hello@minh.io. 
This took more effort than it should've. Initially I considered
Google Apps as an email host but then discovered it cost $5 a month. Next I
looked at self-hosted mailing servers for my Linode but I decided against it
due to server resource consumption, security, and reliability concerns.

Eventually I found out that my new domain host Gandi.net offered mailboxes
for my registered domain, so I just added "hello@minh.io" as a mail service
and forwarded my emails to my gmail account. I also added spool.mail.gandi.net
and fb.mail.gandi.net to my Linode's MX records since they run my nameservers.

The great thing about this is that I can create any sort of handle such as 
"bah@minh.io" and change my forwarding email addresses at any time. This is
great for spam control like when signing up at stores.

Anyway, I tried out some test emails and it seemed to work fine with emails
being received within minutes. I'll see how this goes and update this post
if I discover any issues.