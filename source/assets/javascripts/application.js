//= require outline.js/outline.js
//= require slideout.js/dist/slideout.min.js

var html = document.documentElement;

function isInPage(node) {
  return (node === document.body) ? false : document.body.contains(node);
}

function getWidth() {
  return window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
}

// -----------------------------------------------------------------------------
// Navigation
// -----------------------------------------------------------------------------

if (isInPage(document.getElementById('menu'))) {
  html.classList.add('slideout-root');

  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': getWidth(),
    'tolerance': 70
  });

  slideout
    .on('beforeopen', function() {
      html.classList.add('slideout-root-overlay');
    })
    .on('beforeclose', function() {
      html.classList.remove('slideout-root-overlay');
    });

  slideout.disableTouch();

  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    hamburger.classList.toggle("is-inactive");
    slideout.toggle();
  });
}
