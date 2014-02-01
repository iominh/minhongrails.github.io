---
layout: post
title: "Race conditions in Java with ThreadWeaver"
description: ""
category: tech
tags: [java, threadweaver, multithreading]
---
{% include JB/setup %}

Writing code to test race conditions is tough. Recently I looked at
[ThreadWeaver](https://code.google.com/p/thread-weaver/), which is a framework 
that [Alasdair Mackintosh](https://code.google.com/u/alasdair.mackintosh/) wrote for writing 
multi-threaded unit tests in Java. I liked how it allows you to write 
deterministic code where you can control the exact sequence/interweaving of operations between 
threads. In other words, it allows you to precisely create and test a race condition.

The only downside to the framework was that it used Ant. This meant it took
a little bit of extra work to set up since I had to download the jars
and figure out the project structure. Considering all of this,
I took some time to "Mavenize" the project and put a version
on <a href="https://github.com/minhongrails/ThreadWeaver">Github</a>. 
I'm currently working with another developer to possibly publish 0.20 to
Maven Central.

Other issues I encountered were "no object instrumented" and
"class not instrumented" errors. After posting a question to the mailing list,
the author responded almost immediately and I [resolved the issue](https://groups.google.com/forum/#!topic/thread-weaver/3BS74oiB9Yc) by 
placing my ThreadWeaver "Scripts" code within the ThreadWeaver annotations
like @ThreadMain, etc. 

Open source is awesome :). 
