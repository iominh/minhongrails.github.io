---
layout: post
title: "MySQL, Play, and Scala"
description: ""
category: tech
tags: [scala, mysql, play]
---
{% include JB/setup %}

Recently I had a chance to try out the Play Framework's Computer Database sample,
which shows database access, CRUD forms, and integration with a CSS framework.
Out of the box it comes initialized with an H2 in-memory database, which is
great for starting out because it requires no setup.

However, for production, most users will want to use an actual database
such as MySQL, Postgres, or anything else, since H2 does not persist data
in between reloads of the server (imagine a server crash or simply updating your
application -- you'll lose all your data!). 

Unfortunately, switching from H2 to MySQL was not a trivial task. The
Play evolution scripts and models for the Computer Database sample 
actually do not work for MySQL, so there's some effort required in migrating databases.
Luckily, before doing any significant work I did a Google search and came
across an <a href="https://github.com/opensas/openshift-play2-computerdb" target="_blank">Openshift github repo</a>
that solved this issue.

It was slightly out of date and missing some instructions for MySQL, so
I forked the repo and added instructions + configuration for setting up
the sample with MySQL <a href="https://github.com/minhongrails/play2-computerdb-mysql-scala" target="_blank">here</a>.
I also created up a demo application <a href="http://dev1.minh.io" target="_blank">here</a>, 
which I will probably migrate to Heroku or some other source.

