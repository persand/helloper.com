//= require slideout.js/dist/slideout.min.js

var html = document.documentElement;

// -----------------------------------------------------------------------------
// Navigation
// -----------------------------------------------------------------------------

var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': width,
  'tolerance': 70
});

html.classList.add('slideout-root');

slideout
  .on('beforeopen', function() {
    html.classList.add('slideout-root-overlay');
  })
  .on('beforeclose', function() {
    html.classList.remove('slideout-root-overlay');
  });

// --
// Hamburger button click behaviour
// --
var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  hamburger.classList.toggle("is-inactive");

  slideout.toggle();
});
