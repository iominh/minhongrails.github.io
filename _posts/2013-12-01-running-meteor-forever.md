---
layout: post
title: "Running Meteor forever"
description: ""
category: tech
tags: [meteor, nodejs]
---
{% include JB/setup %}

Recently I've decided to learn [Meteor JS](http://www.meteor.com/), which is an "open-source platform for building top-quality web apps in a fraction of the time."
It's super fast (i.e. great for hackathons) to get an application up and running. I've only been using Meteor for a couple of days
but love it so far and possibly will consider using it instead of my current favorite [Play Framework](http://www.playframework.com/).

One issue I encountered when deploying my application to production was that once I started the app on my
server using "meteor &" I noticed the application would die after I exited the terminal. This is actually a common
"issue" in the NodeJS world and many posts have suggested the use of the [NPM Forever](https://npmjs.org/package/forever) tool
for running a Meteor bundle even when you exit the terminal session. One [StackOverflow post](http://stackoverflow.com/questions/14529677/what-is-the-proper-syntax-for-running-a-meteor-generated-node-bundle-using-forev)
 showed the following commands:

<pre class="prettyprint">
<code class="bash">export MONGO_URL=mongodb://localhost:27017/&lt;dbname&gt;
export PORT=&lt;server_port&gt;
export ROOT_URL=http://sub.example.com/
forever start bundle/main.js</code></pre>

Unfortunately this didn't work for me but bsilvereagle from the Meteor IRC channel suggested I
create a [tmux](http://tmux.sourceforge.net/) session, start my Meteor server in it, and detach
the session. So, you would roughly run the following commands:

<pre>
<code class="no-highlight">tmux
[a new tmux session will be created and you'll notice a green bar at the bottom of the terminal]
[start your Meteor app: (e.g. "meteor &amp;")]
[press CLTR and B, :, and "detach" to detach the session]</code></pre>

Now Meteor will run even if I exit from my terminal. Yay!

Hopefully this helps someone out there but here's a couple more tmux resources:

* [Ubuntu post](http://askubuntu.com/questions/8653/how-to-keep-processes-running-after-ending-ssh-session)
* [tmux commands](http://www.dayid.org/os/notes/tm.html)
