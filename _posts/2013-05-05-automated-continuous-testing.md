---
layout: post
title: "Automated continuous testing"
description: ""
category: 
tags: [continuous integration, testing, travis CI, github, selenium, TDD, test driven development, jenkins, cruisecontrol]
---
{% include JB/setup %}

As a web developer, it's always been tedious having to test my websites after
every change. In fact, it becomes impossible without a dedicated testing team
once you have many features since there's a billion different browsers
and devices to test. Luckily in the Java world there's free tools like 
Jenkins, Selenium, and CruiseControl.

Recently I looked into a free continuous integration host called Travis CI that
allows me to run tests immediately after I commit my code to github, which is 
brilliant. I was able to get it up and running after 10-15 minutes by following
their getting-started guide: <a href="http://about.travis-ci.org/docs/user/getting-started/" target="_blank">http://about.travis-ci.org/docs/user/getting-started/</a>

You can check out my current repo here: <a href="https://travis-ci.org/minhongrails/DataStructures" target="_blank">https://travis-ci.org/minhongrails/DataStructures</a>

I'll update this post again once I've tried them out for a while. 