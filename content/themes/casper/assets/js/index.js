/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function($, undefined) {
  'use strict';

  var $document = $(document);

  $document.ready(function() {

    var $postContent = $('.post-content');
    $postContent.fitVids();

    checkVerticalPosition();
    $('.scroll-down').arctic_scroll();

    $('.menu-button, .nav-cover, .nav-close').on('click', function(e){
      e.preventDefault();
      $('body').toggleClass('nav-opened nav-closed');
    });

  });

  // Arctic Scroll by Paul Adam Davis
  // https://github.com/PaulAdamDavis/Arctic-Scroll
  $.fn.arctic_scroll = function(options) {
    var defaults = {
      elem: $(this),
      speed: 500,
    },

    allOptions = $.extend(defaults, options);

    allOptions.elem.click(function(event) {
      fireAnimation();
      event.preventDefault();
      var $this = $(this);
      var  $htmlBody = $('html, body');
      var  offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false;
      var  position = ($this.attr('data-position')) ? $this.attr('data-position') : false;
      var  toMove;

      if (offset) {
        toMove = parseInt(offset);
        $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
      } else if (position) {
        toMove = parseInt(position);
        $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
      } else {
        $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
      }
    });

  };

  //My code

  function chooseColor() {
    var colors = ['A3B88A', 'FF702D', 'FCCA46', '7CB4B8'];
    var number = Math.round(Math.random() * (colors.length - 1));
    return '#' + colors[number];

  }

  function fireAnimation() {
    var main = $('.main');
    main.find('article').each(function(index, data) {
      var el = $(data);
      el.css('background', chooseColor());
      setTimeout(function() {
        el.addClass('show-box');
      }, index * 500);
    });
  }
  function checkVerticalPosition(){
    var main = $('.vertical');
    $('body').on('scrool', function(){
      console.log('To dela haha');
    });
  }
})(jQuery);
