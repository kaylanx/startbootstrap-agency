/* eslint-disable */
(function($) {
  "use strict"; // Start of use strict

  var stripsJson = {}
  $.getJSON("../json/strips.json", function(json) {
    stripsJson = json;
  });

  $('#stripModal').on('show.bs.modal', function(event) {
    const anchor = $(event.relatedTarget)

    const strip = stripsJson.filter(function(strip) {
      return strip.name === anchor.data('strip');
    })[0];

    if (typeof strip !== 'undefined') {
      $('#stripDisplayName').text(strip.displayName);
      $('#stripSummary').text(strip.summary);
      $('#stripImage').attr('src', strip.image);
    }
  });

})(jQuery); // End of use strict
