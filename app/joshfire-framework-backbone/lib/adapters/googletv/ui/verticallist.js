define(["joshlib!ui/list","joshlib!utils/dollar","joshlib!vendor/underscore"], function(UIList,$,_) {

  var UIVerticalList = UIList.extend({

    initialize: function(options) {
      UIList.prototype.initialize.call(this, options);

      this.active = -1;
    },

    navFocus: function(origin) {
      UIList.prototype.navFocus.call(this, origin);

      if(this.collection.length) {
        if(this.active === -1) {
          this.activate(0);
        } else {
          this.activate(this.active);
        }
      }
    },

    navBlur: function() {
      UIList.prototype.navBlur.call(this);

      this.$('.nav-active').removeClass('nav-active');
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

    navAction: function() {
      var $item = $(this.items[this.active].view.el);
      var $link = $item.find('a');

      if($link.length) {
        window.location = $link.attr('href');
      }
    },

    navRight: function() {
      this.navAction();
    },

    activate: function(num) {
      this.$('.nav-active').removeClass('nav-active');

      var $item = $(this.items[num].view.el);

      $item.addClass('nav-active');

      var $lastChild = $(this.items[this.items.length - 1].view.el);
      var translateY = -num * ($(this.el).height() - $(this.el).parent().height()
                     + $lastChild.height()) / this.items.length;
      var translate  = 'translate3d(0,' + translateY + 'px,0)';

      $(this.el).css({
        '-webkit-transform': translate,
        '-moz-transform': translate,
        '-ms-transform': translate,
        '-o-transform': translate,
        'transform': translate
      });

      this.active = num;
    }

  });

  return UIVerticalList;
});