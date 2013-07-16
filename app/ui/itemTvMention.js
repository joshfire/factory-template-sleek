define([
  'joshlib!ui/item',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore',
  'joshlib!utils/woodman'
], function (UIItem, $, _, woodman) {

  var UIItemTvMention = UIItem.extend({

    initialize: function (options) {

      this.videoDetail = options.videoDetail;
      this.mentions = options.mentions;

      // Call the base class constructor
      options.navUp = this.navUp;
      options.navDown = this.navDown;
      
      UIItem.prototype.initialize.call(this, options);

      this.realNavLeft = this.navLeft;
      this.navLeft = function() {
        if(this.watchingVideo) {
          this.hideVideo();
        } else {
          this.realNavLeft.call(this);
        }
      };

    },


    /**
     * Override the base "enhance" function to extract the images
     * that need to be loaded and start loading in the background.
     *
     * @function
     */
    enhance: function() {

      UIItem.prototype.enhance.call(this);
      this.trigger('enhanced');
    },

    navAction: function(e) {
      var videoImage = $(e.target).find("img.videoThumbnail");
      var cid = $(e.target).data("cid");

      if (this.watchingVideo) {
        this.hideVideo();
      } else {
        if (videoImage.length > 0) {
          var mention = _.find(this.mentions,function(mention){
            return mention.cid === cid;
          });
          this.videoDetail.setModel(mention.model);
          this.videoDetail.render();
          this.videoDetail.show();
          this.watchingVideo = true;
          this.navFocus();
        }
      }
    },
    navUp: function() {
      if(this.watchingVideo) {
        this.hideVideo();
      } else {
        UIItem.prototype.navUp.call(this);
      }
    },
    navDown: function() {
      if(this.watchingVideo) {
        this.hideVideo();
      } else {
        UIItem.prototype.navDown.call(this);
      }
    },
    navRight: function() {
      if(this.watchingVideo) {
        this.hideVideo();
      }
    },
    hideVideo: function() {
      this.videoDetail.hide();
      this.watchingVideo = false;
    },

    getFocusableSubElements: function() {
      var elements = this.$('a[href*=h], input, button, select, textarea, command, .mentionFocus');

      this.focusableElements = [];
      for(var o = 0; o < elements.length; o++) {
        if(elements.hasOwnProperty(o) && typeof elements[o] === 'object') {
          this.focusableElements.push({
            $el: $(elements[o]),
            x: $(elements[o]).offset().left,
            y: $(elements[o]).offset().top
          });
        }
      }

    }


  });

  return UIItemTvMention;
});