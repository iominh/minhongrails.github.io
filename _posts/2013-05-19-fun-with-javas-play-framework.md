---
layout: post
title: "Fun with Java's Play Framework"
description: ""
category: tech
tags: [play, java, foodwall]
---
{% include JB/setup %}

A while ago I made a claim that I would release my "Foodwall" project
within 2 months from its initial proof of concept. Well, I dropped the ball
since for the last month I haven't really worked on it. However, I'm going to
try to take a shot at releasing a newer version by the end of this month.

Recently I've been exploring new languages and frameworks to replace the PHP
and Yii I used for Foodwall 1.0. It might've been because I was rusty at PHP
or new at Yii but I wasn't fast at developing new features. Initially
I looked at Python and Django which looked really promising but then
it clicked that I oaught to find a modern Java web framework since that's the 
language I'm most familiar with.

My choices came down to Play and Grails, which both offer rapid development
and lots of nice features. Both addressed my primary concern with Java, which
was that with standard Java web applications you need to compile before
seeing changes, which really bogs down development when you're working on
the UI.

Anyway, so far I've really liked the Play Framework and got some basic 
samples running:

<hr>
<div class="row-fluid">
    <div class="span3">
        <h4>Ajax Database</h4>
        <br>
        <p>Sample from Play Framework showing database access through AJAX</p>
        <a href="http://www.minh.io:8081" target="_blank">Launch Site</a>
        <br>
    </div>  
    <br>
    <div class="span9">
        <a class="lightbox">
          <img src="/assets/img/play/play_db1.jpg" alt="play_db1.jpg"/>
        </a>
    </div>
</div>
<hr>
<div class="row-fluid">
    <div class="span3">
        <h4>Chat and Robot</h4>
        <br>
        <p>Websocket chatroom and server-side robot pushing messages</p>
        <br>
        <a href="http://www.minh.io:8082" target="_blank">Launch Site</a>
    </div>
    <br>
    <div class="span9">
        <a class="lightbox">
          <img src="/assets/img/play/play_chat1.jpg" alt="play_chat1.jpg"/>
        </a>
    </div>
</div>
<hr>
<div class="row-fluid">
    <div class="span3">
        <h4>Play Hello World</h4>
        <br>
        <p>Play Framework hello world</p>
        <br>
        <a href="http://www.minh.io:8083" target="_blank">Launch Site</a>
    </div>
    <br>
    <div class="span9">
        <a class="lightbox">
          <img src="/assets/img/play/play_helloworld.jpg" alt="play_helloworld.jpg"/>
        </a>
    </div>
</div>
<hr>
<div class="row-fluid">
    <div class="span3">
        <h4>Zentasks</h4>
        <br>
        <p>Play Framework ZenTasks sample</p>
        <br>
        <a href="http://www.minh.io:8084" target="_blank">Launch Site</a>
    </div>
    <br>
    <div class="span9">
        <a class="lightbox">
          <img src="/assets/img/play/play_zentasks1.jpg" alt="play_zentasks1.jpg"/>
        </a>
        <a class="lightbox">
          <img src="/assets/img/play/play_zentasks2.jpg" alt="play_zentasks2.jpg" title="Play Zentasks2"/>
        </a>
    </div>
</div>
