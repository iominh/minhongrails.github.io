---
layout: post
title: "Regex and scripting FTW"
description: ""
category: tech
tags: [regex]
---
{% include JB/setup %}

It's great being a programmer. Recently I had to modify and replace various matching strings in 26 files. I'm not sure how
tedious, sucky, and error-prone this would be if I did this manually but luckily I'm a programmer and quickly wrote
a Ruby script. I also used Git and Sourcetree to review my changes and can roll back changes later.

Anyway, here's the code I wrote, which reads all .md and .html files in a directory and replaces all scripts matching
 &lt;pre&gt; with &lt;pre class="prettyprint"&gt;. It's not exactly using a regular expression but one could
 be used if necessary.

<pre class="prettyprint"><code>def proc_file(fname)
	text = File.read(fname)
	newText = text.gsub(/&lt;pre>&gt;, '&lt;pre class="prettyprint"&gt;')
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

proc_dir("_posts/*")</code>
</pre>