---
layout: post
title: "Measuring code quality"
description: ""
category: tech 
tags: [sonar, sonarQube, jacoco, testNG, junit, java, cobertura]
---
{% include JB/setup %}

Sonar/SonarQube is a great platform for measuring 
<a href="http://www.sonarqube.com" target="_blank">code quality</a>.
It calculates lines of code, source quality, test quality, and numerous
other metrics. Recently, I used Sonar to calculate unit and integration test coverage across multiple 
Maven Java modules with TestNG and Jacoco:

<a class="lightbox">
  <img src="/assets/img/sonar/sonar_code_coverage.png" alt="sonar_screen.png"/>
</a>

It actually took quite a bit of effort to get this to work but 
<a href="http://www.kubrynski.com/2013/03/measuring-overall-code-coverage-in.html" target="_blank">Jakub Kubrynski's post</a>
helped greatly, so all credit should go to him. However, I wanted to create a template
for future projects, so I created this mini guide and a 
<a href="https://github.com/minhongrails/multimoduleSonar" target="_blank">Github project</a>
so that others could also get this working:

<div class="mSpotlight">Install SonarQube</div>
These are the instructions from the <a href="http://docs.codehaus.org/display/SONAR/Get+Started+in+Two+Minutes" target="_blank">2-minute quickstart guide</a>.

<ol>
<li> <a href="http://www.sonarsource.org/downloads/" target="_blank">Download</a> 
and unzip the SonarQube distribution (ex: "/etc/sonar" or "C:\sonar"). I used 3.6.2
but it seems that multi-module support was implemented <a href="http://docs.codehaus.org/display/SONAR/Analyzing+with+Maven" target="_blank">since 3.3</a>.</li>

<li> Start the SonarQube server 
<div><pre class="prettyprint"><code class="bash"># On Windows, execute:
C:\sonar\bin\windows-x86-xx\StartSonar.bat
 
# On other operating system, execute:
/etc/sonar/bin/[OS]/sonar.sh console
</code></pre></div>
</li>

<li>Navigate to <a href="http://localhost:9000" target="_blank">http://localhost:9000</a> to verify 
that Sonar has successfully loaded.</li>

<li>(Optional) If you care about integration test coverage, you should enable
that widget on your dashboard. Here's a <a href="http://docs.codehaus.org/display/SONAR/Code+Coverage+by+Integration+Tests+for+Java+Project" target="_blank">guide</a>.
</li>

<li>Checkout a sample multimoduleSonar project on <a href="https://github.com/minhongrails/multimoduleSonar" target="_blank">github</a>
<div><pre class="prettyprint"><code class="bash">git clone https://github.com/minhongrails/multimoduleSonar</code></pre></div>
</li>

<li> Run unit tests and archive results in sonar
<div><pre class="prettyprint"><code class="bash">mvn install sonar:sonar</code></pre></div>

Alternatively, run integration tests as well:
<div><pre class="prettyprint"><code class="bash">mvn install sonar:sonar -DskipIT=false</code></pre></div>
</li>

<li>Load the <a href="http://localhost:9000" target="_blank">Sonar GUI</a> in your browser and you should see
a project called "parent." Clicking that should show the following:
<br><br>
<a class="lightbox" href="/assets/img/sonar/sonar_screen.png" target="_blank"><img src="/assets/img/sonar/sonar_screen.png" alt="sonar_screen.png"/></a>
</li>

</ol>

<div class="mSpotlight">Deep Dive</div>

The sample Maven structure was designed to be simple. There is a single
parent project which contains two submodules module1 and module2. 

Here's some class diagrams:

<a class="lightbox">
  <img src="/assets/img/sonar/sonar_uml.png" alt="sonar_uml.png"/>
</a>

