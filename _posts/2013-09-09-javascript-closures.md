---
layout: post
title: "JavaScript closure example"
description: ""
category: tech
tags: [javascript, closure]
---
{% include JB/setup %}

JavaScript can be tricky to understand. For example,
look at the following functions:

<pre class="prettyprint">
<code class="javascript">function logNumbers1(){
    for (var x = 0; x &lt;  10; x++) {
        console.log(x);
    }
}

logNumbers1();</code></pre>

<pre class="prettyprint">
<code class="javascript">function logNumbers2(){
    for (var x = 0; x &lt;  10; x++) {
        setTimeout(function() {
            console.log(x)
        }, 0);
    }
}

logNumbers2();</code></pre>

At first glance, it appears that both functions are equivalent. The only
difference, it seems, is that the second function sets a timeout of zero. 

So, what do you think will happen? 

<div id="showAnswer" class="btn btn-large">
     Show answer  <i class="icon-chevron-down"> </i>
</div>

<div>
    <br/>
</div>

<div id="hidden">

<p>Initially, it appears that both functions should log 0 through 9.
As it turns out, logNumbers2 actually prints the number 10 ten times because of its closure. 
The reason is because the last value assigned to x is 10 so when console.log(x)
is executed, it only has access to the last value assigned to x within its scope/closure,
so it outputs 10 ten times.
It might be helpful to run this code through a debugger like the Chrome developer
tool and in particular observe the "closure" section which shows what variables
are accessible within a particular execution stack.</p>

<p>While closures can be confusing, they do provide a nice benefit for encapsulation.
For example, <a href="http://stackoverflow.com/questions/4532407/general-javascript-syntax-question">observe the following</a>:</p>

<pre class="prettyprint">
<code class="javascript">function Counter() {
    var counter = 0;
    return {
        increment: function() {
            counter++; // closure only has access to "counter"
        },
        print: function() {
            console.log(counter);
        }
    }
}

var a = Counter();
a.increment();
a.increment();
console.log(a.counter); // undefined
a.print(); // 2
var b = Counter();
b.print(); // 0
</code></pre>


<p>Here's another <a href="http://stackoverflow.com/questions/947352/javascript-closure-and-data-visibility">example</a>:</p>

<pre class="prettyprint">
<code class="javascript">function create() {
    var counter = 0;
    this.increment = function() {
        counter++;
    }
    this.print = function() {
        console.log(counter);
    }
}
var c = new create();
c.increment();
c.print(); // 1
console.log(c.counter); // undefined
</code></pre>

</div>
