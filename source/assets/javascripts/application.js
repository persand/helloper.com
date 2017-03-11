//= require slideout.js/dist/slideout.min.js

var html = document.documentElement;

function isInPage(node) {
  return (node === document.body) ? false : document.body.contains(node);
}

// -----------------------------------------------------------------------------
// Navigation
// -----------------------------------------------------------------------------

if (isInPage(document.getElementById('menu'))) {
  html.classList.add('slideout-root');

  var navigation_settings = {
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'width': window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth,
    'tolerance': 70
  }

  var navigation_timeout = false;

  var slideout = new Slideout({
    'panel': navigation_settings.panel,
    'menu': navigation_settings.menu,
    'padding': navigation_settings.width,
    'tolerance': navigation_settings.tolerance
  });

  slideout
    .on('beforeopen', function() {
      html.classList.add('slideout-root-overlay');
    })
    .on('beforeclose', function() {
      html.classList.remove('slideout-root-overlay');
    });

  function navigation(navigation_settings) {
    if (!slideout.isOpen()) {
      slideout.destroy();

      slideout = new Slideout({
        'panel': navigation_settings.panel,
        'menu': navigation_settings.menu,
        'padding': window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth,
        'tolerance': navigation_settings.tolerance
      });

      slideout
        .on('beforeopen', function() {
          html.classList.add('slideout-root-overlay');
        })
        .on('beforeclose', function() {
          html.classList.remove('slideout-root-overlay');
        });
    }
  }

  // --
  // Destroy and recreate slideout menu on resize …
  // WIP: https://bencentra.com/code/2015/02/27/optimizing-window-resize.html
  // --
  window.addEventListener('resize', function() {
    //clearTimeout(navigation_timeout);
    navigation_timeout = setTimeout(navigation(navigation_settings), 1000);
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
}
