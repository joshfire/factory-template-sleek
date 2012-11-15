define([
  'sleek.samsung',
  'joshlib!utils/onready',
  'joshlib!utils/dollar'],
function(Sleek, onReady, $) {
  var sleek = new Sleek();
  window.app = sleek;
  onReady(sleek.initialize);
});
