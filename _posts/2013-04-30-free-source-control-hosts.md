---
layout: post
title: "Best source control options"
description: ""
category: tech
tags: [git, bitbucket, github, scm, svn]
---
{% include JB/setup %}

Most developers know the value of source control management (SCM) so I won't 
emphasize its awesomeness. In this post I  wanted to share my 
experiences with various source control systems I've used:

<table class="table table-bordered table-striped">
    <tr>
        <td>SCM</td>
        <td>Notes</td>

    </tr>
    <tr>
        <td>Git</td>
        <td>My current favorite SCM. I love its speed, simplicity, and distributed
nature (you can work offline and any local repo can take over a remote repo). 
Currently I use <a href="http://www.bitbucket.org" target="_blank">www.bitbucket.org</a> 
for private repo hosting and <a href="http://www.github.com" target="_blank">www.github.com</a>
 for public repo hosting.</td>
    </tr>

    <tr>
        <td>SVN</td>
        <td>I used SVN prior to Git and while it worked great it wasn't as easy
to learn how to branch, merge, and so on. There's also been times when I couldn't
use source control whenever a host machine was down. Nonetheless, I found 
<a href="http://www.bitbucket.org" target="_blank">www.bitbucket.org</a> to work 
great as an SVN host.
        </td>
    </tr>

    <tr>
        <td>Rational Clearcase</td>
        <td>My least favorite source control system. I found it to be very slow
compared to Git but I believe it works great for integration with other Rational
tools like ClearQuest for change control management.
        </td>
    </tr>

</table>
