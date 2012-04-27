define([
  'sleek.tv',
  'joshlib!utils/onready',
  'joshlib!utils/dollar'],
function(Sleek, onReady, $) {
  var sleek = new Sleek();
  onReady(function() {
    sleek.initialize(function() {
      var $win = $(window);

      var resize = function() {
        $('body').css({
          zoom: Math.max(50, $win.height() / 10.80) + '%'
        });
      };

      $win.resize(resize);

      resize();

      if(sleek.backgroundURL) {
        sleek.setBackground(sleek.backgroundURL);
      }

      if(sleek.logoURL) {
        sleek.setLogo(sleek.logoURL);
      } else {
        sleek.setTitle(sleek.title);
      }
    });
  });
});
