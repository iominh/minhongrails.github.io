---
layout: post
title: "Speeding up Nginx with PageSpeed"
description: ""
category: tech
tags: [nginx, pagespeed, ngx_pagespeed, google]
---
{% include JB/setup %}

Today I had a chance to try out <a href="https://developers.google.com/speed/pagespeed/mod" target="_blank">Google's PageSpeed</a> tool for nginx, which
"rewrites your webpages to make them faster for your users. This includes compressing 
images, minifying CSS and JavaScript, extending cache lifetimes, and many other web 
performance best practices." 

This sounded great because it appeared to be a free and magical way of improving speeds
with minimal effort. However, after spending a couple of hours using it I was
disappointed because it was not simple to install and the performance boost was
minimal. Granted I can probably tweak some settings so I'm still optimistic.

<div class="mSpotlight">Performance Experiments</div>
I ran basic tests comparing 5 different pages using Pingdom's tools to measure
the page load times and PageSpeed scores with mod_pagespeed enabled and disabled.
Each test was run against the New York location and run at least 2 times with
the best time being chosen (usually the pings didn't vary too much except
in some cases)


<table class="table table-striped table-bordered">
    <tr>
        <td>PageSpeed enabled</td>
        <td>URL</td>
        <td>PageSpeed score</td>
        <td># Requests</td>
        <td>Load time (ms)</td>
        <td>Size (kb)</td>
    </tr>
    <tr>
        <td>Yes</td>
        <td>dev1.minh.io</td>
        <td>88/100</td>
        <td>3</td>
        <td>130</td>
        <td>10.7</td>
    </tr>
    <tr>
        <td>No</td>
        <td>dev1.minh.io</td>
        <td>75/100</td>
        <td>4</td>
        <td>145</td>
        <td>10.1</td>
    </tr>
    <tr>
        <td>Yes</td>
        <td>dev2.minh.io</td>
        <td>94/100</td>
        <td>3</td>
        <td>209</td>
        <td>102.8</td>
    </tr>
    <tr>
        <td>No</td>
        <td>dev2.minh.io</td>
        <td>83/100</td>
        <td>4</td>
        <td>246</td>
        <td>102.6</td>
    </tr>
    <tr>
        <td>Yes</td>
        <td>dev3.minh.io</td>
        <td>88/100</td>
        <td>2</td>
        <td>275</td>
        <td>92</td>
    </tr>
    <tr>
        <td>No</td>
        <td>dev3.minh.io</td>
        <td>81/100</td>
        <td>3</td>
        <td>246</td>
        <td>91.3</td>
    </tr>
    <tr>
        <td>Yes</td>
        <td>dev4.minh.io</td>
        <td>88/100</td>
        <td>3</td>
        <td>114</td>
        <td>7.1</td>
    </tr>
    <tr>
        <td>No</td>
        <td>dev4.minh.io</td>
        <td>75/100</td>
        <td>3</td>
        <td>125</td>
        <td>2.7</td>
    </tr>
    <tr>
        <td>Yes</td>
        <td>dev5.minh.io</td>
        <td>96/100</td>
        <td>4</td>
        <td>204</td>
        <td>74.1</td>
    </tr>
    <tr>
        <td>No</td>
        <td>dev5.minh.io</td>
        <td>85/100</td>
        <td>6</td>
        <td>197</td>
        <td>74.1</td>
    </tr>
</table>

<div class="mSpotlight">Conclusion</div>

Overall, there were mixed results. My Google PageSpeed
scores improved but sometimes latencies actually increased. I
imagine this is because the tool takes time to perform its 
optimizations or maybe that the Pingdom tool caches results.

For the effort taken and results shown I can't confidently recommend the tool
at this time but it also could be because my server is mostly optimized already.
In fact the greatest performance boost I noticed was gzip, which off the top of
my head yielded 30-50% latency improvements.

I'll come back later and update this post as I use ngx_pagespeed some more.

<div class="mSpotlight">Install Notes</div>

In a perfect world it would've nice to run something like
"apt-get install nginx_pagespeed" but unfortunately it was more involved than
that since nginx doesn't support dynamic loading of modules. For the most part
I followed notes <a href="http://serverfault.com/questions/502764/how-to-build-nginx-1-4-0-and-ngx-pagespeed-in-ubuntu-debian" target="_blank">here</a> 
(thanks to PePe who wrote them) after reading the official notes which left me
hanging. I'll update this post later with my revisions/notes to PePe's notes.
