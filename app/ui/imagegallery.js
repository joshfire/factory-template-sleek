define([
  "joshlib!ui/list",
  "vendor/klass",
  "vendor/photoswipe",
  "joshlib!vendor/underscore"
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
				minUserZoom: 1
      };

      if(options.photoswipe) _.extend(this.photoswipe, options.photoswipe);

      this.linkSelector = options.linkSelector || 'a.img'

      UIList.prototype.initialize.call(this, options);
    },

    enhance: function() {
      var $links = this.$(this.linkSelector);

      if($links.length) Code.PhotoSwipe.attach($links, this.photoswipe);

      UIList.prototype.enhance.call(this);
    }
  });

  return UIImageGallery;
});