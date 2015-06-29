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
