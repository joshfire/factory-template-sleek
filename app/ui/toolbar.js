define(["joshlib!ui/list","joshlib!utils/dollar","joshlib!vendor/underscore"], function(UIList,$,_) {

  var UIToolbar = UIList.extend({

    initialize: function(options) {
      this.maxOnScreen = options.maxOnScreen || 5;
      this.margin = options.margin || 5;

      UIList.prototype.initialize.call(this, options);
    },

    enhance: function() {
      UIList.prototype.enhance.call(this);

      var resize = function() {
        if(!this.collection) return;

        var width = window.innerWidth;
        var n = Math.min(this.maxOnScreen, this.collection.length);
        var itemWidth = (width - this.margin) / n;

        this.$('> ul').width(itemWidth * this.collection.length + this.margin);

        this.$('li').css({
          width: itemWidth - this.margin,
          paddingLeft: this.margin
        });
      }

      resize.call(this);

      window.addEventListener('resize', _.bind(resize, this));
    }

  });

  return UIToolbar;
});