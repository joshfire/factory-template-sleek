define([
  'joshlib!ui/toolbar',
  'joshlib!utils/dollar',
  'joshlib!utils/woodman',
  'joshlib!vendor/underscore'
], function (UIToolbar, $, woodman, _) {
  var logger = woodman.getLogger('joshfire.framework.adapters.phone.ui.toolbar');

  var UINavigateElement = UIToolbar.extend({

    initialize: function (options) {
      UIToolbar.prototype.initialize.call(this, options);
      console.debug(this);
    },

    enhance: function() {
      logger.log(this.logid, 'enhance');
      var self = this;
    }


  });

  return UINavigateElement;
});
