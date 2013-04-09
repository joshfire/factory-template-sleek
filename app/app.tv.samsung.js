define([
  'sleek.samsung',
  'joshlib!utils/onready'
], function (Sleek, onReady) {
  var sleek = new Sleek();
  window.app = sleek;
  onReady(function () {
    sleek.initialize();
  });
});
