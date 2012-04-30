define([
  'sleek.tv',
  'joshlib!utils/onready',
  'joshlib!utils/dollar'],
function(Sleek, onReady, $) {
  var sleek = new Sleek();
  onReady(sleek.initialize);
});
