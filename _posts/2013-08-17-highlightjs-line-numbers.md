---
layout: post
title: "Highlight.js line numbers"
description: ""
category: tech
tags: []
---
{% include JB/setup %}

<div class="mSpotlight">Update 2/1/14</div>

I've [changed syntax highlighters](/tech/2014/01/30/prettyprint-syntax-highlighting/), so see [this version](http://design7.minh.io/tech/2013/08/17/highlightjs-line-numbers/), which uses Highlight.js

<div class="mSpotlight">Summary</div>

In this post I will show how to add line numbers with syntax highlighting
provided through <a href="http://softwaremaniacs.org/soft/highlight/en/" target="_blank">Highlight.js</a>. 
I decided to give this a whirl after getting a [comment](/tech/2013/06/23/highlightjs-vs-syntaxhighlighter/) from the author
<a href="https://github.com/isagalaev" target="_blank">Ivan Sagalaev</a> describing
how Highlight.js supports line numbers on an [experimental code branch](https://github.com/isagalaev/highlight.js/compare/line-numbers)
(line numbers are actually [not included as a feature](http://highlightjs.readthedocs.org/en/latest/line-numbers.html)).
Hmm, I thought nobody read my random posts but I guess not :).

<div class="mSpotlight">Examples</div>

So, without further ado, here's code with line numbers:

<pre class="prettyprint linenums">
<code class="ruby lineNumbers">class Float
  def number_decimal_places
    self.to_s.length-2
  end
  def to_fraction
    higher = 10**self.number_decimal_places
    lower = self*higher
    gcden = greatest_common_divisor(higher, lower)

    return (lower/gcden).round, (higher/gcden).round
  end</code>
</pre>

And the same code without: 

<pre class="prettyprint">
<code class="ruby">class Float
  def number_decimal_places
    self.to_s.length-2
  end
  def to_fraction
    higher = 10**self.number_decimal_places
    lower = self*higher
    gcden = greatest_common_divisor(higher, lower)

    return (lower/gcden).round, (higher/gcden).round
  end</code>
</pre>

This is just an initial attempt but I'm actually quite happy with
how it turned out, especially since I can copy the text and not have
it also copy the numbers.

<div class="mSpotlight">Details</div>

So how does this work? Well, from looking at Ivan's branch, it appeared that 
the line numbers were set through a global variable. Instead, I figured that
sometimes you may want line numbers and other times you may not, so I rewrote
the code to detect for a classname called "lineNumbers" and if it detects
that class then it applies line numbering.

For example, if I want code without line numbering I write my HTML like:

<pre class="prettyprint">
<code class="css">&lt;pre&gt;
&lt;code class="java"&gt;
System.out.println("hello");
&lt;/code&gt;
&lt;/pre&gt;</code></pre>

Otherwise, if I do want line numbering, I just add a "lineNumbers" class:

<pre class="prettyprint">
<code class="css">&lt;pre&gt;
&lt;code class="java lineNumbers"&gt;
System.out.println("hello");
&lt;/code&gt;
&lt;/pre&gt;</code></pre>

<div class="mSpotlight">Github Fork</div>

If you're interested in having this for your site, I forked the Highlight.js 7.3
code and added the changes at [https://github.com/minhongrails/highlight.js](https://github.com/minhongrails/highlight.js).

A couple of tips to build the JS library:

* Make sure you have Python3 installed so you can run "python3 tools/build.py." 
Initially I encountered errors building with Python2.
* By default, the build creates a highlight.js that supports lots of languages,
which makes it somewhat heavy at 122KB+. I personally just used "python3 tools/build.py :common"
to support the most popular languages.
* The highlight.js is produced in the build directory.
* Run "python3 tools/build.py -h" if you need further help and of course visit
the highlight.js site for official documentation.

You should review the changes described at [https://github.com/isagalaev/highlight.js/compare/line-numbers](https://github.com/isagalaev/highlight.js/compare/line-numbers) and in particular the CSS that you will need to add.
