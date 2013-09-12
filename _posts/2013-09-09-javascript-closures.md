---
layout: post
title: "JavaScript closure example"
description: ""
category: tech
tags: [javascript, closure]
---
{% include JB/setup %}

JavaScript closures can be a tricky to understand. 
Take a look at the following examples:

<pre>
<code class="javascript">function logNumbers1(){
    for (var x = 0; x &lt;  10; x++) {
        console.log(x);
    }
}

logNumbers1();
</code>
</pre>

<pre>
<code class="javascript">function logNumbers2(){
    for (var x = 0; x &lt;  10; x++) {
        setTimeout(function() {
            console.log(x)
        }, 0);
    }
}

logNumbers2();
</code>
</pre>

At first glance, it looks like both functions should log 0 through 9. The second 
function, instead of logging immediately, sets a timeout with zero, which appears 
to be equivalent.

Of course this wouldn't be much of a post if this wasn't true. As it turns
out, logNumbers2 actually prints the number 10 ten times because of its closure. 
The reason is because the last value assigned to x is 10 and when console.log(x)
is executed, it only has access to the last value assigned to x within its scope/closure.

While closures can be confusing, they do provide a nice benefit for encapsulation.
For example, [observe the following](http://stackoverflow.com/questions/4532407/general-javascript-syntax-question):

<pre>
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
</code>
</pre>



Here's another [example](http://stackoverflow.com/questions/947352/javascript-closure-and-data-visibility):

<pre>
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
</code>
</pre>



