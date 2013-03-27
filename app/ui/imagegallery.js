/*global Code*/
define([
  'joshlib!ui/list',
  'vendor/klass',
  'vendor/photoswipe',
  'joshlib!vendor/underscore'
], function (UIList, Klass, Photoswipe, _) {

  var UIImageGallery = UIList.extend({
    /**
     * View short name
     */
    name: 'imagegallery',

    initialize: function(options) {

      this.photoswipe = {
        getImageCaption: function(obj){
					return obj.title;
				},
				minUserZoom: 1,
        cacheMode: Code.PhotoSwipe.Cache.Mode.normal
      };

      if(options.photoswipe) _.extend(this.photoswipe, options.photoswipe);

      this.linkSelector = options.linkSelector || 'a[href$=".jpg"],a[href$=".jpeg"],a[href$=".png"],a[href$=".gif"]';

      UIList.prototype.initialize.call(this, options);
    },

    // When adding a child, we need to attach it to photoswipe
    addChild: function(model) {
      UIList.prototype.addChild.call(this,model);
      this.updatePhotoSwipe();
    },

    // Use _.debounce so it's only called once when all children have been added.
    // It otherwise fails sometimes.
    updatePhotoSwipe: _.debounce(function() {
      var $links = this.$(this.linkSelector);
      if($links.length) Code.PhotoSwipe.attach($links, this.photoswipe);
    }),

    enhance: function() {
      var $links = this.$(this.linkSelector);
      if($links.length) Code.PhotoSwipe.attach($links, this.photoswipe);

      UIList.prototype.enhance.call(this);
    }
  });

  return UIImageGallery;
});