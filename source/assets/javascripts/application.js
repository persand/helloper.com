
// -----------------------------------------------------------------------------
// Navigation
// -----------------------------------------------------------------------------

// --
// Hamburger button click behaviour
// --
var hamburger = document.querySelector(".hamburger");
var hamburger_background = document.querySelector(".hamburger-background");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  hamburger.classList.toggle("is-inactive");
  hamburger.classList.add("is-used");
  document.documentElement.classList.toggle("show-navigation");
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
    hamburger_background.classList.add("is-active");

    if (window.pageYOffset < 60) {
      hamburger_background.classList.add("is-hidden");
      hamburger.classList.remove("is-scrolling-up");
    }
  } else {
    // Down
    hamburger.classList.add("is-hidden");
    hamburger.classList.remove("is-scrolling-up");
    hamburger_background.classList.remove("is-active");

    if (window.pageYOffset > 60) {
      hamburger_background.classList.remove("is-hidden");
    }
  }

  navigationPreviousPosition = navigationCurrentPosition;
};
