define([
  'spot.tablet',
  'joshlib!collection',
  'joshlib!ui/list',
  'ui/imagegallery',
  'joshlib!ui/item',
  'joshlib!ui/imageloader',
  'joshlib!ui/factorymedia',
  'joshlib!router',
  'joshlib!ui/cardpanel',
  'joshlib!ui/slidepanel',
  'ui/text',
  'ui/map',
  'joshlib!adapters/phone/ui/toolbar',
  'joshlib!utils/onready',
  'joshlib!collection',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore',
  'joshlib!vendor/backbone'],
function(Spot, Collection, List, ImageGallery, Item, ImageLoader, FactoryMedia, Router, CardPanel, SlidePanel, Text, Map, Toolbar, onReady, Collection,$,_,Backbone) {
  var spot = new Spot();
  onReady(spot.initialize);
});
