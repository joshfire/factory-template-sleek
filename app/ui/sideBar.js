define([
  'joshlib!ui/toolbar',
  'joshlib!utils/dollar',
  'joshlib!utils/woodman',
  'joshlib!vendor/underscore'
], function (UIToolbar, $, woodman, _) {
  var logger = woodman.getLogger('joshfire.framework.adapters.phone.ui.toolbar');

  var sideBar = UIToolbar.extend({


    initialize: function (options) {
      console.debug(options);
      UIToolbar.prototype.initialize.call(this, options);
      this.containerView = options.containerView;
    },

    events:{
      'click li':'close'
    },

    close: function(e){
      this.trigger('close');
    },

    enhance: function() {
      logger.log(this.logid, 'enhance');
      var self = this;
    }


  });

  return sideBar;
});
