/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function($, undefined) {
  'use strict';

  var $document = $(document);
  var $window = $(window);
  var $cover =  $('header');

  $document.ready(function() {
    var $postContent = $('.post-content');
    $postContent.fitVids();

    $('.scroll-down').arctic_scroll();


    checkForCoverWidth();

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
  function fireAnimation() {
    var main = $('.main');
    main.find('article').each(function(index, data) {
      var el = $(data);
      setTimeout(function() {
        el.addClass('show-box');
      }, index * 500);
    });
  }

  function checkForCoverWidth() {
    if (checkForAniamtion($window.height(), $cover.height())) {
      fireAnimation();
    } else {
      isScrolling();
    }
  }

  function isScrolling() {
    $document.on('scroll', function(e) {
      if (checkForAniamtion($document.scrollTop(),($cover.height() / 2))) {
        fireAnimation();
        $document.off();
      }

    });
  }

  function checkForAniamtion(target, obj) {
    if (target > obj) {
      return true;
    }

    return false;
  }

})(jQuery);
