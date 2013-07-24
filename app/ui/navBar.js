define([
  'joshlib!uielement',
  'joshlib!utils/dollar',
  'joshlib!utils/woodman',
  'joshlib!vendor/underscore'
], function (UIElement, $, woodman, _) {

  var Navbar = UIElement.extend({

    initialize: function(options) {
      this.containerView = options.containerView;
      this.template = options.template;
      UIElement.prototype.initialize.call(this, options);
      console.debug(this.$el.find("#sidebar-btn"));
    },

    events:{
      "click #sidebar-btn":"sidebarAction",
      "touchstart #sidebar-btn":"sidebarAction"
    },

    sidebarAction: function(e) {
      e.preventDefault();
      this.containerView.toggleContainer();
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

    generate: function(cb) {
      var html = this.template();
      cb(null, html);
    },

    setContent: function(html) {
      this.el.innerHTML = html;
    },

    enhance: function(){
      var self = this;
      UIElement.prototype.enhance.call(this);

    }
  });

  return Navbar;
});

