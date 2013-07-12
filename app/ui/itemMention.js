define([
  'joshlib!ui/item',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore'
], function (UIItem, $, _) {

  var UIItemMention = UIItem.extend({

    initialize: function (options) {

      // Call the base class constructor
      UIItem.prototype.initialize.call(this, options);
    },


    /**
     * Override the base "enhance" function to extract the images
     * that need to be loaded and start loading in the background.
     *
     * @function
     */
    enhance: function() {

      UIItem.prototype.enhance.call(this);
      this.trigger('enhanced');
    }

  });

  return UIItemMention;
});