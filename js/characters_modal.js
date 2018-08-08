/* eslint-disable */
(function($) {
  "use strict"; // Start of use strict

  var charactersJson = {}
  $.getJSON("../json/characters.json", function(json) {
    charactersJson = json;
  });

  $('#characterModal').on('show.bs.modal', function(event) {
    const anchor = $(event.relatedTarget);

    const character = charactersJson.filter(function(character) {
      return character.name === anchor.data('character');
    })[0];

    if (typeof character !== 'undefined') {
      $('.characterDisplayName').text(character.displayName);
      $('#characterSubTitle').text(character.subTitle);
      $('#characterAbout').text('About - ' + character.summary+'\n\n'+character.about);
      $('#characterFamily').text(character.family);
      $('#characterOther').text(character.other);
      $('#characterImage').attr('src', 'img/characters/' + character.name + '.jpg');

      $('#characterAppearances').html('');
      $.each(character.appearances, function(j, appearance) {
        $('#characterAppearances').append('<li>' + appearance.strip + '</li>');
      });
    }
  });

  

})(jQuery); // End of use strict
