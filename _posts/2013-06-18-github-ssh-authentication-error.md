---
layout: post
title: "Github ssh authentication error"
description: ""
category: tech
tags: [github ssh]
---
{% include JB/setup %}

This post is more for myself since I always get SSH authentication errors
when using SourceTree and GitHub after rebooting since I forget to ssh-add my github ssh key.

If anyone out there encounters ssh auth errors, the command to add
your key is:

<pre class="prettyprint">
<code class="bash">ssh-add ~/.ssh/id_rsa</code>
</pre>

Where id_rsa is typically the name of your private ssh key. Ideally it would've
been nice to add that line to my /etc/profile or .bashrc so that it's
automatically run but that would also require storing my password (someone
correct me if I'm wrong), so meh.
