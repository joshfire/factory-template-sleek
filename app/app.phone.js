define([
  'sleek.phone',
  'joshlib!utils/onready'
], function (Sleek, onReady) {
  var sleek = new Sleek();
  onReady(function () {
    sleek.initialize();
  });
});
