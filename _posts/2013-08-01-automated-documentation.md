---
layout: post
title: "Automated documentation"
description: ""
category: tech
tags: [javadoc, documentation, java, maven]
---
{% include JB/setup %}

Software documentation is terrible in general. Most of the time it's 
missing, out of date, or just plain incorrect. Usually it's because
documentation is a pain to write or there's simply no time. 

Alas, while writing documentation may be tedious, that's usually
where software automation shines. In this post, I'll share my experiences with automatic JavaDoc
and UML documentation through Maven and a semi-free tool called <a href="http://www.yworks.com/en/products_ydoc.html" target="_blank">yWorks UML Doclet</a>.

I created an example project on <a href="https://github.com/minhongrails/multimoduleJavadocUML" target="_blank">GitHub</a>
 (also on <a href="https://bitbucket.org/mnguyen3/multimodulejavadocuml" target="_blank">BitBucket</a> since GitHub seems
to be down sometimes) to show how to generate UML and nice looking documentation
automatically.

<div class="mSpotlight">Install Guide</div>
<ol>
<li>Download <a href="http://www.yworks.com/en/products_ydoc.html#download" target="_blank">yWorks UML Doclet</a> and extract
it to a directory.</li>

<li>Set an environment variable YWORKS_HOME to point to the extracted directory.</li>

<li>Clone the sample GitHub repo:
<div><pre class="prettyprint"><code class="bash">git clone https://github.com/minhongrails/multimoduleJavadocUML</code></pre></div>
</li>

<li>Build the project and execute
<div><pre class="prettyprint"><code class="bash">mvn clean install site</code></pre></div>
</li>
</ol>

<div class="mSpotlight">Results</div>

If everything worked out well, you should be able to navigate to <a href="http://doc1.minh.io" target="_blank">target/site/apidocs/index.html</a>
and you'll see UML automagically generated like this:

<img src="/assets/img/yworks/uml.png" alt="uml.png"/>

