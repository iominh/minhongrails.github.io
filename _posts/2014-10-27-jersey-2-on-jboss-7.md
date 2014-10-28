---
layout: post
title: "Jersey 2 on JBoss 7"
description: ""
category: tech
tags: [jersey2, jboss7]
---
{% include JB/setup %}

Recently I got an email asking how I deployed Jersey2 on JBoss 7.x (specifically 7.1.1) while still being able to
access Jersey resources ([see my Stackoverflow post here](http://stackoverflow.com/questions/21173397/jersey-2-on-jboss-7)).
The solution that worked for me was to add a jboss-deployment-structure.xml in my
app's WEB-INF directory and manually register Jersey resources rather than rely on automatic package scanning:

<br>
Here's the jboss-deployment-structure.xml:

<pre class="prettyprint"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;jboss-deployment-structure&gt;
    &lt;deployment&gt;

        &lt;exclusions&gt;

            &lt;!-- Exclude RestEasy conflict --&gt;
            &lt;module name="javaee.api" /&gt;
            &lt;module name="javax.ws.rs.api"/&gt;
            &lt;module name="org.jboss.resteasy.resteasy-jaxrs" /&gt;

        &lt;/exclusions&gt;

    &lt;/deployment&gt;
&lt;/jboss-deployment-structure&gt;</code></pre>

<br>
Here's a simplified web.xml:

<pre class="prettyprint"><code>&lt;web-app&gt;
    &lt;display-name&gt;WebApp&lt;/display-name&gt;

    &lt;servlet&gt;
        &lt;servlet-name&gt;WebApp&lt;/servlet-name&gt;
        &lt;servlet-class&gt;org.glassfish.jersey.servlet.ServletContainer&lt;/servlet-class&gt;
        &lt;!-- This doesn't work in JBoss7 --&gt;
        &lt;!--&lt;init-param&gt;--&gt;
            &lt;!--&lt;param-name&gt;jersey.config.server.provider.packages&lt;/param-name&gt;--&gt;
            &lt;!--&lt;param-value&gt;io.minh.resources&lt;/param-value&gt;--&gt;
        &lt;!--&lt;/init-param&gt;--&gt;
        &lt;init-param&gt;
            &lt;param-name&gt;javax.ws.rs.Application&lt;/param-name&gt;
            &lt;param-value&gt;io.minh.ApplicationConfig&lt;/param-value&gt;
        &lt;/init-param&gt;
        &lt;load-on-startup&gt;1&lt;/load-on-startup&gt;
    &lt;/servlet&gt;
    &lt;servlet-mapping&gt;
        &lt;servlet-name&gt;WebApp&lt;/servlet-name&gt;
        &lt;url-pattern&gt;/rest/*&lt;/url-pattern&gt;
    &lt;/servlet-mapping&gt;


    &lt;context-param&gt;
        &lt;param-name&gt;resteasy.scan&lt;/param-name&gt;
        &lt;param-value&gt;false&lt;/param-value&gt;
    &lt;/context-param&gt;
    &lt;context-param&gt;
        &lt;param-name&gt;resteasy.scan.providers&lt;/param-name&gt;
        &lt;param-value&gt;false&lt;/param-value&gt;
    &lt;/context-param&gt;
    &lt;context-param&gt;
        &lt;param-name&gt;resteasy.scan.resources&lt;/param-name&gt;
        &lt;param-value&gt;false&lt;/param-value&gt;
    &lt;/context-param&gt;

    &lt;welcome-file-list&gt;
        &lt;welcome-file&gt;index.htm&lt;/welcome-file&gt;
    &lt;/welcome-file-list&gt;
&lt;/web-app&gt;
</code></pre>

<br>
Here's an implementation of the [javax.ws.rs.Application / ResourceConfig](https://jersey.java.net/apidocs/2.0/jersey/org/glassfish/jersey/server/ResourceConfig.html)
 referenced in the web.xml above, where each Jersey resource needs to be manually registered (there's probably a way
 to make this work automatically, but as shown below the automatic package scanning wasn't working in JBoss...):

<pre class="prettyprint"><code>package io.minh;

import org.glassfish.jersey.server.ResourceConfig;

public class ApplicationConfig extends ResourceConfig {

	public ApplicationConfig() {

		// package scanning doesn't work in Jboss for some reason
		// packages( true, "io.minh" );
		register(SomeResource.class);
	}

}
</code></pre>

<br>
Lastly, here's the Jersey library I used in my Maven pom.xml:

<pre class="prettyprint"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.glassfish.jersey.containers&lt;/groupId&gt;
    &lt;artifactId&gt;jersey-container-servlet&lt;/artifactId&gt;
    &lt;version&gt;2.5&lt;/version&gt;
&lt;/dependency&gt;
</code></pre>