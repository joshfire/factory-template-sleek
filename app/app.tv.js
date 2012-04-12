define([
  'spot.tv',
  'joshlib!utils/onready',
  'joshlib!utils/dollar'],
function(Spot, onReady, $) {
  var spot = new Spot();
  onReady(function() {
    spot.initialize(function() {
      $win = $(window);

      var resize = function() {
        $('body').css({
          zoom: Math.max(50, $win.height() / 10.80) + '%'
        });
      }

      $win.resize(resize);

      resize();

      if(spot.backgroundURL) {
        spot.setBackground(spot.backgroundURL);
      }

      if(spot.logoURL) {
        spot.setLogo(spot.logoURL);
      } else {
        spot.setTitle(spot.title);
      }
    });
  });
});
