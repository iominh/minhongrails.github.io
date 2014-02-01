---
layout: post
title: "Mac PIL decoder jpeg not available"
description: ""
category: tech
tags: [python, PIL, JPEG]
---
{% include JB/setup %}

Recently when using the Python Image Library (PIL) I encountered
an "IOError: decoder jpeg not available" error. Apparently to resolve
it I needed to uninstall PIL, install libjpeg, and then reinstall PIL:

<pre class="prettyprint">
<code class="bash">pip uninstall PIL
brew install libjpeg
pip install PIL</code></pre>
