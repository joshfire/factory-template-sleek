define(["joshlib!adapters/none/uielement","joshlib!vendor/underscore","joshlib!utils/dollar"], function(UIElement,_,$) {

  var UIElementTV = UIElement.extend({

    initialize:function(options) {
      UIElement.prototype.initialize.call(this, options);

      _.bindAll(this, 'navFocus', 'navBlur', 'onKeyDown');

      this.focused = false;
    },

    navFocus: function(origin) {
      $(this.el).addClass('nav-focused');
      $(document).keydown(this.onKeyDown);
      this.origin = origin;
      this.focused = true;
    },

    navBlur: function() {
      $(this.el).removeClass('nav-focused');
      $(document).unbind('keydown');
      this.focused = false;
    },

    onKeyDown: function(event) {
      console.log(this.focused)

      switch(event.keyCode) {
        case 38:
        if(this.navUp) {
          this.navUp();
          return;
        }
        break;
        case 39:
        if(this.navRight) {
          this.navRight();
          return;
        }
        break;
        case 40:
        if(this.navDown) {
          this.navDown();
          return;
        }
        break;
        case 37:
        if(this.navLeft) {
          this.navLeft();
          return;
        }
        break;
        case 13:
        case 32:
        if(this.navAction) {
          this.navAction();
          return;
        }
        break;
      }

      if(this.origin) {
        switch(event.keyCode) {
          case 38:
          case 39:
          case 40:
          case 37:
          case 13:
          case 32:
          this.navBlur();
          this.origin.navFocus();
          this.origin.onKeyDown(event);
          break;
        }
      }
    }
  });

  return UIElementTV;
});