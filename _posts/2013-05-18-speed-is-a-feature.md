---
layout: post
title: "Speed is a feature"
description: ""
category: tech
tags: [speed, performance, features, jekyll, wordpress]
---
{% include JB/setup %}
Lately I've been focused on improving application
performance, which is often considered a top feature. There's so many
examples that prove this point but here are a few <a href="http://www.strangeloopnetworks.com/assets/images/infographic2.jpg" target="_blank">examples</a>:

<table class="table table-bordered table-striped">
    <tr>
        <td>Amazon</td>
        <td>Increased revenue by 1% for every 100milliseconds of improvement</td>
    </tr>
    <tr>
        <td>Shopzilla</td>
        <td>Sped up average page load time from 6 seconds to 1.2 seconds. 
        <p>Results: increased revenue by 12% and page views by 25%</p></td>
    </tr>
    <tr>
        <td>AOL</td>
        <td>Visitors in the top ten percentile of site speed viewed 50% more pages than visitors in the bottom ten percentile</td>
    </tr>
    <tr>
        <td>Yahoo</td>
        <td>Increased traffic by 9% for every 400milliseconds of improvement</td>
    </tr>
    <tr>
        <td>Mozilla</td>
        <td>Made pages 2.2 seconds faster. Estimated result: 60 million more Firefox downloads per year</td>
    </tr>
</table>
<br>
So, now that we know that speed is important, how do we measure and improve it?
Well, I've listed the tools I've used with my favorites at the top:

<table class="table table-bordered table-striped">
    <tr>
        <td><a href="http://tools.pingdom.com/fpt/" target="_blank">Pingdom Tools</a></td>
        <td>Great tool that calculates load times with 3 different locations (2 U.S. and 1 Europe). It also
            archives historical results and offers tips for improving performance</td>
    </tr>
    <tr>
        <td><a href="http://www.webpagetest.org/" target="_blank">Webpagetest</a></td>
        <td>Probably one of the most comprehensive tools for evaluating website
        performance with lots of advanced options for selecting connection speeds, browsers,
        and a multitude of locations. My only gripe is that its historical results
        take quite a long time to show...</td>
    </tr>
    <tr>
        <td><a href="https://www.gtmetrix.com" target="_blank">GTmetrix</a></td>
        <td>Tool that aggregates results from PageSpeed and YSlow to provide a detailed
            breakdown of performance</td>
    </tr>
    <tr>
        <td><a href="https://developers.google.com/speed/pagespeed/insights" target="_blank">Google PageSpeed</a></td>
        <td>Nice tool that offers a PageSpeed Score and suggestions for improving speeds</td>
    </tr>
    <tr>
        <td><a href="http://www.neustar.biz/enterprise/resources/web-performance/free-website-performance-test" target="_blank">BrowserMob</a></td>
        <td>Nice tool and interface that queues performance tests from 4 locations
            around the world but unfortunately doesn't provide any historical
            data</td>
    </tr>
    <tr>
        <td><a href="http://loads.in/" target="_blank">Loads.in</a></td>
        <td>Great interface to see page load times around the world
            but unfortunately some of the scans do not load and I'm not
            sure how reliable the tool is</td>
    </tr>
</table>

While these tools are great, I would prefer to have a single tool that aggregates
my results and shows my performance across the world with different browsers
and not just through a single page but a queue of pages. Depending on my availability, 
this may become a future side project for me.

Anyway, one of the reasons I switched away from Wordpress to Jekyll was because
Jekyll was really fast given that it's all static content with no database 
connectivity. Another major speed boost was when I moved away from Apache and
used Nginx as my static content server.
