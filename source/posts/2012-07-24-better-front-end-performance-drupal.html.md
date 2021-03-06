---
type: post
title: "Better front end performance in Drupal"
created: 1343133422
meta_description: "Apart from using aggregation (CSS and JavaScript) and minification (CSS) in the bandwidth optimization settings (admin/config/development/performance) here are a few more things that you can do."
summary: "Apart from using aggregation (CSS and JavaScript) and minification (CSS) in the bandwidth optimization settings (admin/config/development/performance) here are a few more things that you can do."
---

<p><em>Update 2012-10-21:<br>My site is now powered by Jekyll and located in <a href="https://github.com/persand/helloper">this repository</a>.</em></p>

<p>This is how I handle things on this site:</p>

<p>Apart from using aggregation (CSS and JavaScript) and minification (CSS) in the bandwidth optimization settings (admin/config/development/performance) here are a few more things that you can do.</p>

<h2>Exclude unnecessary CSS files</h2>
<p>Inspired by the <a href="http://drupal.org/project/tao">Tao theme</a> I've excluded a couple CSS files from core and contrib. They're only causing damage by increasing the amount of kb served. And not just be simply existing but also forcing me to override them in my theme if they weren't excluded.</p>
<p><a href="https://github.com/persand/helloper-com/blob/master/sites/default/themes/helloper/inc/alter.inc#L11">See source code</a></p>

<h2>Use minified core JavaScript files</h2>
<p><a href="http://drupal.org/project/speedy">Speedy</a> is an easy to use module that provides minified versions of core JavaScript files that are not already minified.</p>

<h2>Minify theme JavaScript files with UglifyJS</h2>
<p>Make sure all the JavaScript files in your theme are minified using <a href="https://github.com/mishoo/UglifyJS">UglifyJS</a>.</p>

<h2>Decrease the number of HTTP requests</h2>
<p>By using <a href="http://api.drupal.org/api/drupal/modules!system!system.api.php/function/hook_css_alter/7">hook_css_alter()</a> and <a href="http://api.drupal.org/api/drupal/modules!system!system.api.php/function/hook_js_alter/7">hook_js_alter()</a> I'm combining all the CSS and JavaScript files into just one CSS and one JavaScript file. This results in four less HTTP requests on every page load for me on this site.</p>
<p>See source code for <a href="https://github.com/persand/helloper-com/blob/master/sites/default/themes/helloper/inc/alter.inc#L29">CSS</a> and <a href="https://github.com/persand/helloper-com/blob/master/sites/default/themes/helloper/inc/alter.inc#L48">JavaScript</a>.</p>

<h4>More on this subject:</h4>

<ul>
<li><a href="http://engineeredweb.com/blog/why-front-end-performance-important/">Why front end performance is important</a></li>
<li><a href="http://www.lukew.com/ff/entry.asp?1565">Interacting Responsibly (and Responsively!)</a></li>
</ul>


