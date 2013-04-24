---
layout: page
title: Welcome to minh.io
---

Hey there! I'm <b>Minh Nguyen</b> and this is my blog. 

Read my [resume](https://www.linkedin.com/in/minhnguyen9).

Follow me on [Twitter](https://twitter.com/MinhOnGrails).

See my [code](https://github.com/minhongrails).

Send me an email [minhongrails@gmail.com](minhongrails@gmail.com) 

### Posts

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>



