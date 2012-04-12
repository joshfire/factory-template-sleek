define([
  'spot.tablet',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore'
  ],
function(Spot, $, _) {

  return Spot.extend({
    setColor: function(color) {
      $('#color').remove();
      $('head').append('<link id="color" rel="stylesheet" href="css/desktop.' + color + '.css" type="text/css">');
    },

    setTitle: function(value) {
      $('#title').html(this.title + ' &rsaquo; ' + value);
    }
  });
});
