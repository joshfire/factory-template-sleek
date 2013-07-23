define([
  'joshlib!uielement',
  'joshlib!utils/dollar',
  'joshlib!utils/woodman',
  'joshlib!vendor/underscore'
], function (UIElement, $, woodman, _) {

  var Navbar = UIElement.extend({

    initialize: function(options){
        this.containerView = options.containerView;
    },

    events:{
      "touchend #sidebar-btn":"sidebarAction"
    },

    sidebarAction: function(e) {
      this.containerView.toggleContainer();
      e.preventDefault();
      return false;
    },

    showSidebarButton: function(){
      this.$('#sidebar-btn').show();
    },

    hideSidebarButton: function(){
      this.$('#sidebar-btn').hide();
      $('#container').removeClass('showToolbar');
    },

    showBackButton: function(){
      this.$('#back').show();
    },

    hideBackButton: function(){
      this.$('#back').hide();
    },

    setTitle: function(nameSection){
      this.$('#title').html(nameSection);
    },
    setContent: function() {/*noop*/},

    enhance: function(){
      var self = this;
      UIElement.prototype.enhance.call(this);

    }
  });

  return Navbar;
});

