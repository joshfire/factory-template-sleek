define([
  'sleek.tablet',
  'joshlib!utils/onready'
], function (Sleek, onReady) {
  var sleek = new Sleek();
  onReady(sleek.initialize);
});
