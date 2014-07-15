---
layout: post
title: "CSS list add remove effects"
description: ""
category: tech
tags: [css3, transforms, transitions, animations]
---
{% include JB/setup %}

In this post I want to show how to use CSS3 transforms to smoothly transition list elements as they are added and removed.
The example below has an "Add Item" button that demonstrates how items slide into position while the "delete" button
shows how subsequent items slide into the slot of the deleted item.

<p data-height="420" data-theme-id="0" data-slug-hash="xBges" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/minhongrails/pen/xBges/'>xBges</a> by Minh Nguyen (<a href='http://codepen.io/minhongrails'>@minhongrails</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

This is still a work-in-progress tutorial / guide but I wanted to see if there was a way to animate
items as they are added while maintaining the "slide / transform" animation that occurs whenever subsequent elements
slide into the slot of a deleted item. However, I encountered issues with overriding transforms. For example, I can
specify the transform for list items but if I perform an animation with a transform then it appears that there's
duplicate animations. Whenever I figure out a solution, I'll update this post.

<div class="mSpotlight">Credit</div>

Please note the above code is not mine. I only modified it and stuck it on a codepen. Please see the original author
Steven Sanderson's ["Animating Lists with CSS3 transitions post"](http://blog.stevensanderson.com/2013/03/15/animating-lists-with-css-3-transitions/).
 I also drew inspiration from Sara Soueidan's post ["Creative Add/Remove Effects for List Items with CSS3 Animations"](http://sarasoueidan.com/blog/creative-list-effects/).