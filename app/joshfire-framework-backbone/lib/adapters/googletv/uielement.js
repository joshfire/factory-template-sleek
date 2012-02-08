define(["joshlib!adapters/none/uielement","joshlib!vendor/underscore","joshlib!utils/dollar"], function(UIElement,_,$) {

  var UIElementTV = UIElement.extend({

    initialize:function(options) {
      UIElement.prototype.initialize.call(this, options);

      _.bindAll(this, 'navFocus', 'navBlur', 'processKey');

      this.focused = false;

      if(options) {
        if(options.navUp) this.navUp = options.navUp;
        if(options.navRight) this.navRight = options.navRight;
        if(options.navBottom) this.navBottom = options.navBottom;
        if(options.navLeft) this.navLeft = options.navLeft;
        if(options.navAction) this.navAction = options.navAction;
      }
    },

    /**
     * Gives focus to the element.
     */
    navFocus: function(origin) {
      $(this.el).addClass('nav-focused');
      $(document).keydown(this.processKey);
      this.origin = origin;
      this.focused = true;

      if(UIElementTV.focusedElement) {
        UIElementTV.focusedElement.navBlur();
      }

      UIElementTV.focusedElement = this;
    },

    /**
     * Removes focus from the element.
     */
    navBlur: function() {
      $(this.el).removeClass('nav-focused');
      $(document).unbind('keydown', this.processKey);
      this.focused = false;
    },

    /**
     * Returns true if the key was not processed.
     */
    processKey: function(event) {
      console.log(this.focused)

      switch(event.keyCode) {
        case 38:
        if(this.navUp) {
          return this.navUp(event);
        }
        break;
        case 39:
        if(this.navRight) {
          return this.navRight(event);
        }
        break;
        case 40:
        if(this.navDown) {
          return this.navDown(event);
        }
        break;
        case 37:
        if(this.navLeft) {
          return this.navLeft(event);
        }
        break;
        case 13: case 32:
        if(this.navAction) {
          return this.navAction(event);
        }
        break;
      }

      if(this.origin) {
        switch(event.keyCode) {
          case 38: case 39: case 40: case 37: case 13: case 32:
          return this.origin.processKey(event);
          break;
        }
      }

      return true;
    }
  });

  return UIElementTV;
});