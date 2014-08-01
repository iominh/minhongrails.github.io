---
layout: post
title: "MongoDB collection JSON"
description: ""
category: tech
tags: [mongodb]
---
{% include JB/setup %}

Hopefully this helps someone out there but here's a command to output syntactically valid JSON from a MongoDB
collection that's pretty printed and excludes metadata like "_id" and and "__v":

<pre class="prettyprint"><code>db.collection.find( {}, { _id : 0, __v: 0}).forEach(printjson)</code></pre>

In the output, there will be commas separating the JSON elements and none of the Mongo metadata. This was tested on MongoDB 2.4.9 but the command was found from the [MongoDB 2.6 documentation](http://docs.mongodb.org/manual/reference/method/db.collection.find/#db.collection.find) as well as a helpful
[StackOverflow post](http://stackoverflow.com/questions/6756024/in-mongo-how-do-i-make-the-display-of-results-when-doing-a-find-the-same-as).