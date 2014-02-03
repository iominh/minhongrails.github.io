---
layout: post
title: "Prettify vs Highlight.js vs SyntaxHighlighter"
description: ""
category: tech
tags: [SyntaxHighlighter, highlightJS, highlight, octopress, prettify]
---
{% include JB/setup %}

I've changed syntax highlighters yet again. This time I've decided to use [Google-Code-Prettify](https://code.google.com/p/google-code-prettify/).
In a [previous post](/tech/2013/06/23/highlightjs-vs-syntaxhighlighter/) I compared HighlightJS vs Syntax Highlighter
and went with HighlightJS because of its easier setup, improved performance, and great themes (I liked the Solarized - Dark theme).
It's still a great library and I may change my mind yet again and switch back. However, once I switched
to a Macbook Retina, the [Solarized Dark theme](http://design4.minh.io/tech/2013/06/23/highlightjs-vs-syntaxhighlighter/) didn't look that great, I think because its dark blue contrasted
with my light background. I also tried the lighter Solarized theme from [Octopress](http://octopress.org/docs/plugins/codeblock/)
but it still didn't feel right.

Anyway, long story short, I've decided that most readers/users are familiar with the syntax highlighting from Stack
Overflow and Github, so I adopted Google Code Prettify, which has a similar look and good performance. The one issue
I encountered was that all of my &lt;pre&gt; tags needed to have a classname of "prettyprint." However, as explained
in [another post](/tech/2014/01/29/regex-and-scripting-ftw/), I updated all of my posts through a simple Ruby script:

<pre class="prettyprint">
def proc_file(fname)
	text = File.read(fname)
	newText = text.gsub(/&lt;pre&gt;/, '&lt;pre class="prettyprint"&gt;')
	File.open(fname, "w") {|file| file.puts newText}
	puts "Processed " + fname
end

def proc_dir(dir)
	Dir[dir].each do |fname|
	  next if fname == '.' or fname == '..'
	  next if !fname.include? ".md" and !fname.include? ".html"
	  proc_file(fname)
	end
end

proc_dir("_posts/*")
</pre>

