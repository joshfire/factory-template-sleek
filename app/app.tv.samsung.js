define([
  'sleek.samsung',
  'joshlib!utils/onready',
  'joshlib!utils/dollar'],
function(Sleek, onReady, $) {
  console.log("APP START");
  var sleek = new Sleek();
  window.app = sleek;
  onReady(sleek.initialize);
});
