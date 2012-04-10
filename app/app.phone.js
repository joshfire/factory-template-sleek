define([
  'spot.phone',
  'joshlib!utils/onready'],
function(Spot, onReady) {
  var spot = new Spot();
  onReady(spot.initialize);
});
