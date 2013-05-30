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

  <section id="options" class="clearfix">
    
      <ul id="filters" class="nav nav-tabs option-set clearfix" data-option-key="filter">
        <li><a href="#filter" data-option-value="*" class="selected">All</a></li>
        <li><a href="#filter" data-option-value=".metal">Tech</a></li>
        <li><a href="#filter" data-option-value=".transition">Business</a></li>
        <li><a href="#filter" data-option-value=".post-transition">post-transition</a></li>
        <li><a href="#filter" data-option-value=".nonmetal">nonmetal</a></li>
        <li><a href="#filter" data-option-value=".inner-transition">inner-transition</a></li>
        <li><a href="#filter" data-option-value=".alkali, .alkaline-earth">alkali and alkaline-earth</a></li>
        <li><a href="#filter" data-option-value=":not(.transition)">not transition</a></li>
        <li><a href="#filter" data-option-value=".metal:not(.transition)">metal but not transition</a></li>
      </ul>

  </section> <!-- #options -->

  <div id="container" class="clearfix">

        <ul class="posts">
          {% for post in site.posts %}
            <div class="metal" data-symbol="{{post.date}}" data-category="metal"><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></div>
          {% endfor %}
        </ul>  
</div>
  
    </div>
    <div class="span6 spotlight">
        <!-- TODO: photo or something? -->
    </div>
  </div>

  <section id="content">
  
  <div id="container" class="clearfix">
          
    <div class="element transition metal   " data-symbol="Hg" data-category="transition">
      <p class="number">80</p>
      <h3 class="symbol">Hg</h3>
      <h2 class="name">Mercury</h2>
      <p class="weight">200.59</p>
    </div>
    
      
          
    <div class="element metalloid   " data-symbol="Te" data-category="metalloid">
      <p class="number">52</p>
      <h3 class="symbol">Te</h3>
      <h2 class="name">Tellurium</h2>
      <p class="weight">127.6</p>
    </div>
    
      
          
    <div class="element post-transition metal   " data-symbol="Bi" data-category="post-transition">
      <p class="number">83</p>
      <h3 class="symbol">Bi</h3>
      <h2 class="name">Bismuth</h2>
      <p class="weight">208.9804</p>
    </div>
    
      
          
    <div class="element transition metal   " data-symbol="Cd" data-category="transition">
      <p class="number">48</p>
      <h3 class="symbol">Cd</h3>
      <h2 class="name">Cadmium</h2>
      <p class="weight">112.411</p>
    </div>
    
      
          
    <div class="element alkaline-earth metal   " data-symbol="Ca" data-category="alkaline-earth">
      <p class="number">20</p>
      <h3 class="symbol">Ca</h3>
      <h2 class="name">Calcium</h2>
      <p class="weight">40.078</p>
    </div>
    
      
          
    <div class="element transition metal   " data-symbol="Re" data-category="transition">
      <p class="number">75</p>
      <h3 class="symbol">Re</h3>
      <h2 class="name">Rhenium</h2>
      <p class="weight">186.207</p>
    </div>
    
      
          
    <div class="element post-transition metal   " data-symbol="Tl" data-category="post-transition">
      <p class="number">81</p>
      <h3 class="symbol">Tl</h3>
      <h2 class="name">Thallium</h2>
      <p class="weight">204.3833</p>
    </div>
    
      
          
    <div class="element metalloid   " data-symbol="Sb" data-category="metalloid">
      <p class="number">51</p>
      <h3 class="symbol">Sb</h3>
      <h2 class="name">Antimony</h2>
      <p class="weight">121.76</p>
    </div>
    
      
          
    <div class="element transition metal   " data-symbol="Co" data-category="transition">
      <p class="number">27</p>
      <h3 class="symbol">Co</h3>
      <h2 class="name">Cobalt</h2>
      <p class="weight">58.933195</p>
    </div>
    
      
          
    <div class="element lanthanoid metal inner-transition   " data-symbol="Lu" data-category="lanthanoid">
      <p class="number">71</p>
      <h3 class="symbol">Lu</h3>
      <h2 class="name">Lutetium</h2>
      <p class="weight">174.9668</p>
    </div>
    
      
          
    <div class="element noble-gas nonmetal   " data-symbol="Ar" data-category="noble-gas">
      <p class="number">18</p>
      <h3 class="symbol">Ar</h3>
      <h2 class="name">Argon</h2>
      <p class="weight">39.948</p>
    </div>
    
      
          
    <div class="element alkali metal   " data-symbol="Rb" data-category="alkali">
      <p class="number">37</p>
      <h3 class="symbol">Rb</h3>
      <h2 class="name">Rubidium</h2>
      <p class="weight">85.4678</p>
    </div>
    
      
          
    <div class="element other nonmetal   " data-symbol="N" data-category="other">
      <p class="number">7</p>
      <h3 class="symbol">N</h3>
      <h2 class="name">Nitrogen</h2>
      <p class="weight">14.0067</p>
    </div>
    
      
          
    <div class="element actinoid metal inner-transition   " data-symbol="Np" data-category="actinoid">
      <p class="number">93</p>
      <h3 class="symbol">Np</h3>
      <h2 class="name">Neptunium</h2>
      <p class="weight">(237)</p>
    </div>
    
      
          
    <div class="element actinoid metal inner-transition   " data-symbol="Ac" data-category="actinoid">
      <p class="number">89</p>
      <h3 class="symbol">Ac</h3>
      <h2 class="name">Actinium</h2>
      <p class="weight">(227)</p>
    </div>
    
  </div> <!-- #container -->
    
  </section> <!-- #content -->

