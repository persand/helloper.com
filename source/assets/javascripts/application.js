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

function close(eve) {
  eve.preventDefault();
  slideout.close();
}

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
  hamburger.classList.add("is-used");

  slideout.toggle();
});

// --
// Hamburger button scroll behaviour
// --
var navigationPreviousPosition = window.pageYOffset || document.documentElement.scrollTop;
window.onscroll = function() {
  var navigationCurrentPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (navigationPreviousPosition > navigationCurrentPosition) {
    // Up
    hamburger.classList.remove("is-hidden");
    hamburger.classList.add("is-scrolling-up");

    if (window.pageYOffset < 60) {
      hamburger.classList.remove("is-scrolling-up");
    }
  } else {
    // Down
    hamburger.classList.add("is-hidden");
    hamburger.classList.remove("is-scrolling-up");
  }

  navigationPreviousPosition = navigationCurrentPosition;
};
