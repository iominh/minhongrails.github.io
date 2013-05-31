---
layout: post
title: "Experiments with Isotope"
description: ""
category: tech
tags: [isotope]
---
{% include JB/setup %}

In this post, I wanted to describe a new feature that I
developed to solve a UI problem with my blog: there's way too many posts
on random subjects that nobody cares about. I can't really do much about
the content but at the very least I can provide a mechanism for users to
filter my posts for content that interests them. So, without further ado, I created an experimental page using
the <a href="http://isotope.metafizzy.co/" target="_blank">Isotope framework</a>
as a method for filtering posts. You can check it out 
<a href="http://test.minh.io" target="_blank">here.</a>

I'm not one to brag too much but even though I coded it all tonight, my inspiration
didn't come from a vacuum and instead I stumbled upon the idea after visiting
the <a href="http://www.amoveointeractive.com/index.html" target="_blank">Amoveo Interactive</a> website.
So, if I decide to put this into production, I'll make sure to thank Amoveo for the
idea.

Update 5/30/12: After testing Isotope for a day, I decided to put it into production
even though I don't particularly like its performance especially for Safari on 
iOS and Firefox (it's faster on Chrome but it seems everything is)
. However, I think the ability to filter posts outweights the slow performance. 
Eventually I may switch it with something faster.
