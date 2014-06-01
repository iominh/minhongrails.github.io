---
layout: post
title: "Gulp command not found"
description: ""
category: tech
tags: [gulp, osx, mac, npm, node, nodejs]
---
{% include JB/setup %}

Recently I was trying out Gulp (normally I use Grunt) but after running 'npm install -g gulp' everything seemed
 to install fine except I got a 'gulp command not found' error after trying to run 'gulp'

So, after looking around on the net, I came across a couple of posts ([post1](http://webbb.be/blog/command-not-found-node-npm/),
[post2](http://travismaynard.com/writing/getting-started-with-gulp)) that helped me identify the issue: essentially my
global NPM modules were being installed to the wrong location and couldn't be accessed on my PATH. For some context,
I'm running Node v0.10.26 with NPM 1.3.23 on OSX 10.9.2.

The following OSX terminal commands helped me narrow down the issue:

<pre class="prettyprint">
# identifies the directory where NPM is installed.
# e.g. /Users/username/.nvm/v0.10.22/bin/npm or /usr/local/bin/npm
which npm

# prints the current project's node_modules
npm root

# prints the location of the global node_modules.
# this was my issue since it showed /usr/local/bin/npm
# but my NPM was installed elsewhere
npm root -g

# so, I modified the config prefix to be something like:
sudo npm config set prefix /Users/username/.nvm/v0.10.22

# alternatively, /usr/local would work for normal NPM install locations

# finally I reinstalled gulp and it was accessible on the command line. hooray!
sudo npm install -g gulp
</pre>
