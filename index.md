---
layout: page
title: Welcome to minh.io
---

Hey there! I'm <b>Minh Nguyen</b> and this is my blog.

Read my <a href="https://www.linkedin.com/in/minhnguyen9" target="_blank">resume</a>

Follow me on <a href="https://twitter.com/MinhOnGrails" target="_blank">Twitter</a>

See my <a href="https://github.com/minhongrails" target="_blank">code</a>

Send me an email <a href="mailto:minhongrails@gmail.com" target="_blank">minhongrails@gmail.com</a>

### Posts

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>



