---
layout: post
title: "Highlight.js vs SyntaxHighlighter"
description: ""
category: tech
tags: [SyntaxHighlighter, highlightJS, highlight, octopress]
---
{% include JB/setup %}

<div class="mSpotlight">Update 2/1/14</div>

I've [changed syntax highlighters](/tech/2014/01/30/prettyprint-syntax-highlighting/), so see [this version](http://design7.minh.io/tech/2013/06/23/highlightjs-vs-syntaxhighlighter/), which uses Highlight.js

<div class="mSpotlight">Summary</div>


In this post I want to compare two syntax highlighters: <a href="http://softwaremaniacs.org/soft/highlight/en/" target="_blank">Highlight.js</a> and  <a href="http://alexgorbatchev.com/SyntaxHighlighter/" target="_blank">Syntax Highlighter</a>.

For whatever reason I cannot understand at the moment, even though I already had Highlight.js in
my blog I decided to try out <a href="http://alexgorbatchev.com/SyntaxHighlighter/" target="_blank">Syntax Highlighter</a>,
which is another nice looking code highlighter. Maybe it was because I wanted to change
things after I stumbled across the builtin syntax highlighting in <a href="http://octopress.org/docs/blogging/code/" target="_blank">Octopress</a> 
or another great application of the <a href="http://ethanschoonover.com/solarized" target="_blank">Solarized</a> syntax highlighter at <a href="http://thanpol.as/jekyll/jekyll-code-highlight-and-line-numbers-problem-solved/" target="_blank">Thanpol.as</a>. Perhaps it was because it was late at night and I didn't realize I could change from
the default highlight.js theme to its Solarized theme.

Nonetheless, I switched from HighlightJS to SyntaxHighlighter <a href="http://design3.minh.io/tech/2013/05/13/maven3-on-ubuntu-1304/" target="_blank">briefly</a> but decided to switch back because:

<div class="mSpotlight">Syntax Highlighter requires more imports</div>

You need to import lots of different brushes for different languages. Highlight.js only has 2 imports and you can even use a CDN like Yandex so it's really only 
a couple lines to start using it.


<div class="mSpotlight">Syntax Highlighter is noticeably slower</div>

For whatever reason, despite my best efforts, Syntax Highlighter always
seems to take a moment after loading the page before it applies styling, which
means that a user will briefly see the unhighlighted code. I noticed this
both in official examples as well as other sites.

Highlight.js, however, worked out of the box and I didn't notice anything similar.

<div class="mSpotlight">Highlight.js' Solarized theme is brilliant</div>
   
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
  end

private
  def greatest_common_divisor(a, b)
     while a%b != 0
       a,b = b.round,(a%b).round
     end
     return b
  end
end
</code>
</pre>

Next up, I'll work on figuring out how to add line numbers...

* Update 8/17/13: [I figured out the line numbers](/tech/2013/08/17/highlightjs-line-numbers/).
