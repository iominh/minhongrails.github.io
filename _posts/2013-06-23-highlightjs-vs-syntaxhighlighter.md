---
layout: post
title: "Highlight.js vs SyntaxHighlighter"
description: ""
category: tech
tags: [SyntaxHighlighter, highlightJS, highlight, octopress]
---
{% include JB/setup %}

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

I tried organizing my JS code so that
it would be the first JavaScript invoked but for whatever reason, whenever
loading the page I would first briefly see the unhighlighted code before it
was highlighted. Highlight.js, however, worked great out of the box and I
didn't see this issue.


<div class="mSpotlight">The Solarized theme is brilliant</div>
   
<pre>
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
