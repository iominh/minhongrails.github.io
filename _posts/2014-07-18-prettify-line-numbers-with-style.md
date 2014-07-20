---
layout: post
title: "Prettify line numbers with style"
description: ""
category: tech
tags: [prettify, google, line numbers]
---
{% include JB/setup %}

In this post I wanted to share how to enable line numbers using [Google Code Prettify](https://code.google.com/p/google-code-prettify/)
with a bit of style.

After doing a little googling, I came across the [official documentation](https://code.google.com/p/google-code-prettify/wiki/GettingStarted), a [Stackoverflow post](http://stackoverflow.com/questions/8399547/how-to-add-line-numbers-to-all-lines-in-google-prettify), and a [blog post with
an example](http://mobifreaks.com/syntax-highlighting-with-google-prettify-adding-numbers/). Unfortunately, it seems
I had to modify the original source CSS and even then the styling wasn't ideal.

At any rate, I [forked](https://github.com/minhongrails/google-code-prettify) the [Github repo](https://github.com/tcollard/google-code-prettify) and updated the code, so here's a section of code with line numbers (I just added 'linenums' to my &lt;pre&gt;):

<pre class="prettyprint linenums">
<code class="ruby">/**
 * Returns the nth fibonacci number
 *
 * @param {number} n the nth fibonacci number
 */
function fibonacci(n) {
  if (n < 2){
    return 1;
  } else {
    return fibonacci(n-2) + fibonacci(n-1);
  }
}</code>
</pre>

And here's the same code without line numbers.

<pre class="prettyprint">
<code class="ruby">/**
 * Returns the nth fibonacci number
 *
 * @param {number} n the nth fibonacci number
 */
function fibonacci(n) {
  if (n < 2){
    return 1;
  } else {
    return fibonacci(n-2) + fibonacci(n-1);
  }
}</code>
</pre>

<div class="mSpotlight">Usage</div>

If you want this for your site, you have to make some modifications to your prettyify.css code. I created a Github
repo [here](https://github.com/minhongrails/google-code-prettify) if you want to check it out.

In order to highlight a pre section, just add a 'linenums' class. So for example:

<pre class="prettyprint"><code>&lt;pre&gt; class="prettyprint linenums"&gt;
  &lt;code&gt;System.out.println("Add line numbers to this code");&lt;/code&gt;
&lt;/pre&gt;</code>
</pre>

<div class="mSpotlight">Recommendation and TODOs</div>

Following the advice of [Ivan Sagalaev](http://highlightjs.readthedocs.org/en/latest/line-numbers.html) (creator of Highlight.JS), I personally prefer not using line numbers and instead like to
do inline comments whenever I share code. However, my posts on line numbers appear to be some of my most popular posts,
so it seems there's a demand for it.

If anyone wants to continue development for this feature (Prettify doesn't appear to be maintained that much anymore),
then the following are areas I think can be improved:

* It takes a few milliseconds before the line numbers appear, meaning the user can see the code without line numbers
if he/she pays attention. This needs to be improved somehow.
* Highlighting code only copies whatever is highlighted, but visually the line numbers appear to be highlighted too.
Looking at [Github's syntax highlighting](https://github.com/minhongrails/google-code-prettify/blob/master/src/prettify.css), it appears they separate the line numbers into a separate column (TD) in a table, which may
fix this issue.