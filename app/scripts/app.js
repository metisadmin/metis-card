(function($) {
  'use strict';

  var $collapseButton = $('[data-toggle="card"]');

  $collapseButton.on('click', function(e) {
    e.preventDefault();
    var $parentCardContent = $(this)
      .closest('.card')
      .children('.card-content');

    var $toggleButtonImage = $(this).children();

    $parentCardContent.toggle('slide', function() {
      $toggleButtonImage.toggleClass('fa-chevron-down');
    });
  });

  $('[data-close="card"]').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.card').hide('slow');
  });

  if ((window.screenfull !== undefined) && screenfull.enabled) {
    $('[data-fullscreen="card"]').on('click', function(e) {
      var $toggledPanel = $(this).closest('.card')[0];
      $(this).children().toggleClass('fa-compress');
      screenfull.toggle($toggledPanel);
      e.preventDefault();
    });
  } else {
    $('[data-fullscreen="card"]').addClass('hidden');
  }

  $('.card-tools .metismenu').metisMenu();
})(jQuery);
