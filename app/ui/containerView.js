define([
  'joshlib!uielement',
  'joshlib!utils/dollar',
  'joshlib!utils/woodman',
  'joshlib!vendor/underscore'
], function (UIElement, $, woodman, _) {

  var ContainerView = UIElement.extend({

    initialize: function(options){
      this.$el = $('#container');
      this.sidebar = options.sidebarPanel;
      this.limitSlide = this.sidebar.$el.width();
      this.pixelDetect = this.$el.find("div.pixelDetect");
      this.slide = false;
      this.sidebar.on('close', _.bind(this.closeContainer,this));

    },

    events: {
      'touchstart div.pixelDetect': 'startSlide',
      'touchend div.pixelDetect': 'endSlide',
      'touchmove':'moveSlide',
      'click div.pixelDetect': "toggleContainer"

    },

    toggleContainer: function(){
      var status = this.$el.hasClass('showToolbar');
      if(!status){
        this.removeTranslate();
        this.openContainer();
      }else{
        this.removeTranslate();
        this.closeContainer();
      }
    },

    openContainer: function(){
      this.$el.addClass('showToolbar');
      this.pixelDetect.addClass('full');
    },

    closeContainer: function(){
      this.$el.removeClass('showToolbar');
      this.pixelDetect.removeClass('full');
    },

    startSlide: function(e){
      var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
      this.slide = true;
      this.originalOffset = touch.clientX;
      this.$el.addClass('notransition');
      return false;
    },

    endSlide: function(e){
      this.slide = false;
      var percentage = this.actualX*100/this.limitSlide;
      var centerZone = this.limitSlide/3;
      if(this.originalOffset <= centerZone){
        //alert("je pars du début");
        if(percentage > 15){
          this.translate(this.limitSlide);
          $('#container').addClass('showToolbar');
          this.pixelDetect.addClass('full');
        }else{
          $('#container').removeClass('showToolbar');
          this.pixelDetect.removeClass('full');
          this.translate(0);
        }    
      } else {
        //alert("je pars de la fin");
        if(percentage < 80){
          $('#container').removeClass('showToolbar');
          this.pixelDetect.removeClass('full');
          this.translate(0);
        }else{
          $('#container').addClass('showToolbar');
          this.pixelDetect.addClass('full');
          this.translate(this.limitSlide);
        }     
      }

      this.$el.removeClass('notransition');
      return false;
    },

    moveSlide: function(e){     
      e.preventDefault();
      if(this.slide === true){
        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        if(touch.pageX < 0){
          this.translate(0);
        }else if(this.limitSlide >= touch.clientX) {
          this.actualX = Math.abs(touch.clientX);
          this.translate(Math.max(Math.min(this.limitSlide, this.actualX), 0));
        }

      }
    },

    translate: function(x){
      this.$el.css({
        '-webkit-transform': 'translateX('+x+'px)',
        '-moz-transform': 'translateX('+x+'px)',
        '-o-transform': 'translateX('+x+'px)',
        'transform': 'translateX('+x+'px)'
      });
    },

    removeTranslate: function(){
      this.$el.removeAttr("style");
    },

    disabledSlide: function(){
       this.pixelDetect.hide();
    },

    enabledSlide: function(){
       this.pixelDetect.show();
    }

 });

  return ContainerView;
});

