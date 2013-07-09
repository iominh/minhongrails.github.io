---
layout: post
title: "Tutorial: Ruby's XML Builder"
description: ""
category: tech
tags: [ruby, XML, Builder, tutorial]
---
{% include JB/setup %}

In this tutorial I wanted to go over Ruby's Builder gem and more specifically
I wanted to show examples of code to create XML with attributes. Although
the <a href="http://builder.rubyforge.org/" target="_blank">official documentation</a> is not too bad, in my opinion it doesn't clearly
provide enough examples of input and output.

Here's an example of how to create some XML with an attribute: 

<div><pre><code class="ruby">#!/usr/bin/ruby
require 'builder'

class XMLGenerator
	def generate()
		xml = Builder::XmlMarkup.new( :indent => 2 ) 
		xml.instruct! :xml, :encoding => "ASCII"
		xml.tag!('automobile', {"type"=>"car"}) do
		end
	end		
end

generator = XMLGenerator.new()
puts generator.generate()
</code></pre></div>

Here's what that program will output:

<div><pre><code class="xml">&lt;?xml version="1.0" encoding="ASCII"?&gt;
&lt;automobile type="car"&gt;
&lt;/automobile&gt;
&lt;/code&gt;
</code></pre></div>

<br/>
<br/>

And of course you can add more attributes and more elements:

<div><pre><code class="ruby">#!/usr/bin/ruby
require 'builder'

class XMLGenerator
	def generate()
		xml = Builder::XmlMarkup.new( :indent => 2 ) 
		xml.instruct! :xml, :encoding => "ASCII"
		xml.tag!('automobile', {"type"=>"car"}, {"color"=>"red"}) do
			xml.engine "v8"
		end
	end		
end

generator = XMLGenerator.new()
puts generator.generate()
</code></pre></div>

<div><pre><code class="xml">&lt;?xml version="1.0" encoding="ASCII"?&gt;
&lt;automobile type="car"&gt;
  &lt;engine&gt;v8&lt;/engine&gt;
&lt;/automobile&gt;
</code></pre></div>