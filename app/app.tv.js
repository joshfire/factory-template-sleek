define([
  'sleek.tv',
  'joshlib!utils/onready'
], function (Sleek, onReady) {
  var sleek = new Sleek();
  onReady(sleek.initialize);
});
