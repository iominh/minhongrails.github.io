---
layout: post
title: "Subdomains with Linode and Nginx"
description: ""
category: tech
tags: [subdomains, linode, nginx]
---
{% include JB/setup %}

This post will show how I created subdomains on my Linode box with Nginx. Overall it was
very easy and although I'm using Linode and nginx as a reference, I assume this could be generalized
with other types of domains and web servers. Take a look at one my subdomains @ [http://doc1.minh.io](http://doc1.minh.io/ "dev1.minh.io").
Anyway, listed below are the steps I took to get that to work:

**Log into Linode and add an A/AAAA record**
<p>(DNS Manager -> Edit -> Add a new A record)</p>
<table class="table">
    <tr>
        <td>Hostname</td>
        <td>IP Address</td>
        <td>TTL</td>
    </tr>
    <tr>
        <td>dev</td>
        <td>10.10.10.10</td>
        <td>Default</td>
    </tr>
</table>
One issue I encountered was that my Domain Zone was "www.minh.io" when 
I needed it to be "minh.io" so I cloned "www.minh.io" to "minh.io" and deleted 
"www.minh.io." This solved an issue where I couldn't access "minh.io"
and also my subdomain was "dev.www.minh.io" when it should've just been "dev.minh.io"

Also keep in mind that it takes a couple of minutes for the subdomain DNS changes to propagate across
the internet. I initially had some trouble figuring this out and kept trying
new changes until eventualy I saw the subdomain.

<br>
**In nginx, here's a sample configuration showing how you could add a subdomain**

<pre class="prettyprint"><code class="no-highlight">server {
        listen          80;
        server_name     mysite.io;
        location / {
            root   /srv/www/mysite.io/public_html/static;
        }
}

server {
        listen          80;
        server_name     sub.mysite.io;
        location / {
            root   /srv/www/mysite.io/public_html/static;
        }
}
</code></pre>
