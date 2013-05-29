---
layout: page
title: Welcome to minh.io
---

  <div class="row-fluid">
    <div class="span6">
            <p>Hey there! I'm <b>Minh Nguyen</b> and this is my blog.</p>
            <p>Read my <a href="https://www.linkedin.com/in/minhnguyen9" target="_blank">resume</a></p>
            <p>Follow me on <a href="https://twitter.com/MinhOnGrails" target="_blank">Twitter</a></p>
            <p>See my <a href="https://github.com/minhongrails" target="_blank">code</a></p>
            <p>Send me an email <a href="mailto:hello@minh.io" target="_blank">hello@minh.io</a></p>


        <h3>Blog</h3>
        <ul class="posts">
          {% for post in site.posts %}
            <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
          {% endfor %}
        </ul>    
    </div>
    <div class="span6 spotlight">
        <!-- TODO: photo or something? -->
    </div>
  </div>





