define(["joshlib!ui/list","joshlib!utils/dollar","joshlib!vendor/underscore"], function(UIList,$,_) {

  var UIVerticalList = UIList.extend({

    initialize: function(options) {
      UIList.prototype.initialize.call(this, options);

      this.active = -1;
    },

    navFocus: function(origin, event) {
      UIList.prototype.navFocus.call(this, origin, event);

      if(!event && this.collection.length) {
        if(this.active === -1) {
          this.activate(0);
        } else {
          this.activate(this.active);
        }
      }
    },

    navBlur: function() {
      UIList.prototype.navBlur.call(this);

      //this.$('.nav-active').removeClass('nav-active');
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
      if(this.items.length) {
        var $item = $(this.items[this.active].view.el);
        var $link = $item.find('a');

        if($link.length) {
          window.location = $link.attr('href');
        }
      }
    },

    navRight: function() {
      this.navAction();
    },

    activate: function(num) {
      this.$('.nav-active').removeClass('nav-active');

      var $item = $(this.items[num].view.el);

      $item.addClass('nav-active');

      var height = $(this.el).height();
      var parentHeight = $(this.el).parent().height();
      var $lastChild = $(this.items[this.items.length - 1].view.el);

      if(height > parentHeight) {
        var translateY = -num * (height - parentHeight + $lastChild.height()) / this.items.length;
      } else {
        translateY = 0;
      }

      var translate  = 'translate3d(0,' + translateY + 'px,0)';

      this.$('ul').css({
        '-webkit-transform': translate,
        '-moz-transform': translate,
        '-ms-transform': translate,
        '-o-transform': translate,
        'transform': translate
      });

      $(this.el).find('.list-indicator').css({
        top: (parentHeight - $lastChild.height()) * num / this.items.length,
        height: $item.height()
      });

      this.active = num;
    }

  });

  return UIVerticalList;
});