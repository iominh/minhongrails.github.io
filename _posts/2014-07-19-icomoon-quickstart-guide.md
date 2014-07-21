---
layout: post
title: "Icomoon Quickstart Guide"
description: ""
category: tech
tags: [icomoon]
---
{% include JB/setup %}

In this post I wanted to provide a quick guide to using Icomoon icons (which I'm using in my navbar). I found the official documentation to
be terribly lacking in terms of showing code so I can be up and running in less than 5 minutes. That's my goal
for this guide.

<div class="mSpotlight">Quick Install</div>

The easiest way to get started to use [Bower](http://www.bower.io) (which requires NPM). If you don't have both of these tools
it might be a minor inconvenience to install them but you'll save yourself tons of work down the road.

1. Install NodeJS (which includes NPM) if you don't already have it: [http://nodejs.org/download/](http://nodejs.org/download/)
1. Do the following:

<pre class="prettyprint"><code># If you don't have Bower, install it with the following line:
sudo npm bower -g

# Run the following command to install icomoon within your app
# Visit the github repo if you're having any issues: https://github.com/layerssss/icomoon-bower
bower install icomoon -S

# By default, it installs into 'bower_components'</code>
</pre>

Alternatively, you can download a [zip file](https://github.com/Keyamoon/IcoMoon--limited-/archive/master.zip) into your app from the [official page](http://icomoon.io/#icons-icomoon).

<div class="mSpotlight">Quickstart</div>

Import the CSS file into your webpage:

<pre class="prettyprint"><code>&lt;link href="/bower_components/icomoon/style.css" rel="stylesheet"&gt;</code>
</pre>

Find an icon you want to use and remember its name from the [official website](http://icomoon.io/app/#/select).

Now, you can just add it to your code like so:

<pre class="prettyprint"><code>&lt;i class="icon-airplane"&gt;&lt;/i&gt;

# If the above code doesn't work (may happen if you're also using Font Awesome)
# then reference the icon by its unicode value (found on the official site)
&lt;span data-icon="&amp;#xe0aa;"&gt;&lt;/span&gt;</code>
</pre>

Now you'll see something like this: <span data-icon="&#xe0aa;"></span>

<div class="mSpotlight">Final Thoughts</div>

Halfway through writing this guide I realized it isn't actually that difficult to get up and running with Icomoon
but my particular problem was that I am using both an older version of Font Awesome and Icomoon simultaneously,
which meant I had to reference the icons by their unicode values, which probably isn't a typical problem.
If anyone out there runs into the same issue, you may find it helpful to look at the [style.css](https://github.com/minhongrails/icomoon-bower/blob/master/style.css#L241) for the unicode
values once you've identified the icon name you want to use.