define(["joshlib!uielement","joshlib!vendor/underscore"], function(UIElement,_) {

  var UIHorizontalLayout = UIElement.extend({

    initialize:function(options) {
      UIElement.prototype.initialize.call(this, options);

      if(options.views) {
        this.setViews(options.views);
      }

      this.active = -1;
    },

    setViews: function(views) {
      this.views = views;
    },

    render: function() {
      _.each(this.views,function(v,k) {
        v.render();
      });
    },

    navFocus: function(origin) {
      UIElement.prototype.navFocus.call(this, origin);

      if(this.views.length) {
        if(this.active !== -1) {
          this.activate(this.active);
        } else {
          this.activate(0);
        }
      }
    },

    navBlur: function() {
      if(this.views.length && this.active !== -1) {
        this.views[this.active].navBlur();
      }

      UIElement.prototype.navBlur.call(this);
    },

    navRight: function() {
      if(this.views.length && this.active < this.views.length - 1) {
        this.activate(this.active + 1);
      }
    },

    navLeft: function() {
      if(this.views.length && this.active > 0) {
        this.activate(this.active - 1);
      }
    },

    activate: function(num) {
      if(this.active !== -1) {
        this.views[this.active].navBlur();
      }

      this.navBlur();
      this.views[num].navFocus(this);
      this.active = num;
    }

  });

  return UIHorizontalLayout;

});