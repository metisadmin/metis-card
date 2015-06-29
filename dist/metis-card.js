/**
* metis-card v0.1.0
* Homepage : https://github.com/metisadmin/metis-card
* Author : Osman Nuri Okumuş <onokumus@gmail.com> (https://github.com/onokumus)
* Copyright 2015
* Licensed under MIT
*/

(function($) {
  'use strict';

  var $collapseButton = $('[data-toggle="card"]');

  $collapseButton.on('click', function(e) {
    e.preventDefault();
    var $parentCardContent = $(this)
      .closest('.Card')
      .children('.Card-Content');

    var $toggleButtonImage = $(this).children();

    $parentCardContent.toggle('slide', function() {
      $toggleButtonImage.toggleClass('fa-chevron-down');
    });
  });

  $('[data-close="card"]').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.Card').hide('slow');
  });

  if ((window.screenfull !== undefined) && screenfull.enabled) {
    $('[data-fullscreen="card"]').on('click', function(e) {
      var $toggledPanel = $(this).closest('.Card')[0];
      $(this).children().toggleClass('fa-compress');
      screenfull.toggle($toggledPanel);
      e.preventDefault();
    });
  } else {
    $('[data-fullscreen="card"]').addClass('hidden');
  }

  $('.Card-Tools .metismenu').metisMenu();
})(jQuery);
