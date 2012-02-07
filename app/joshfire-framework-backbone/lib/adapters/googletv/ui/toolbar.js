define(["joshlib!ui/list","joshlib!utils/dollar","joshlib!vendor/underscore"], function(UIList,$,_) {

  var UIToolbar = UIList.extend({

    initialize: function(options) {
      UIList.prototype.initialize.call(this, options);

      this.active = -1;
    },

    navFocus: function(origin) {
      UIList.prototype.navFocus.call(this, origin);

      if(this.active === -1 && this.collection.length) {
        this.activate(0);
      }
    },

    navDown: function() {
      if(this.collection.length) {
        this.activate(Math.min(this.active + 1, this.collection.length - 1));
      }
    },

    navUp: function() {
      if(this.collection.length) {
        this.activate(Math.max(this.active - 1, 0));
      }
    },

    activate: function(num) {
      if(num !== this.active) {
        this.$('.nav-active').removeClass('nav-active');

        var $item = $(this.items[num].view.el);

        $item.addClass('nav-active');

        var $link = $item.find('a');

        if($link.length) {
          window.location = $link.attr('href');
        }

        this.active = num;
      }
    }

  });

  return UIToolbar;
});