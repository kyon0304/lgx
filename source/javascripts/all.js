//= require_tree .
$(document).ready(function () {
  //var $prev = $('.previous');
  //var $next = $('.next');
  var mode = 'auto';
  /*
  $prev.on({
    click: function(e) {
       e.preventDefault();
       mode = 'manual';
       showPreviousImage();
    }
  });

  $next.on({
    click: function(e) {
      e.preventDefault();
      mode = 'manual';
      showNextImage();
    }
  });
  */

  setInterval(function() {
    if(mode == 'auto') {
      showNextImage();
    }
  }, 3000);

  function showNextImage() {
    var $actEI = $('.active');
    var $actNav = $('.nav-active')
    var $nextEI = $actEI.next('.slide');
    var $nextNav= $actNav.next('.nav-slide')
    if($nextEI.length) {
      $actEI.removeClass('active');
      $actNav.removeClass('nav-active');
      $nextEI.addClass('active');
      $nextNav.addClass('nav-active');
    } else {
      $actEI.removeClass('active');
      $actNav.removeClass('nav-active');
      $('.slide:first-child').addClass('active');
      $('.nav-slide:first-child').addClass('nav-active');
    }
  }

  /*
  function showPreviousImage() {
    var $actEI = $('.active');
    var $actNav = $('.nav-active');
    var $prevEI = $actEI.prev('.slide');
    var $prevNav = $actEI.prev('.nav-slide');
    $actEI.removeClass('active');
    $actNav.removeClass('nav-active');
    if($prevEI.length) {
      $prevEI.addClass('active');
      $prevNav.addClass('nav-active');
    } else {
      $('.slide.last').addClass('active');
      $('.nav-silde.last').addClass('nav-active');
    }
  }
*/
})
