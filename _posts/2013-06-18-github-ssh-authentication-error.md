---
layout: post
title: "Github ssh authentication error"
description: ""
category: tech
tags: [github ssh]
---
{% include JB/setup %}

This post is more for myself since I always run into an issue after rebooting
where I forget that I need to ssh-add my github ssh key so that I can commit
to Github using SourceTree.

Anyway, if anyone out there encounters ssh auth errors, the command to add
your key is:

<pre>
<code class="bash">ssh-add ~/.ssh/id_rsa</code>
</pre>

Where id_rsa is typically the name of your private ssh key.