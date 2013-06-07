define([
  'sleek.tv',
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar',
  'joshlib!utils/woodman',
  'joshlib!view'
], function (Sleek, _, $, woodman, View) {
  var logger = woodman.getLogger('sleek.googletv');

  return Sleek.extend({

    initialize: function () {
      document.addEventListener('resume', _.bind(function() {
        if (this.router && this.router.navigate &&
            this.activeSection && this.activeSection.slug) {
          logger.log('resume');
          this.router.navigate(this.activeSection.slug, {
            'trigger': true
          });
        }
      }, this), false);

      Sleek.prototype.initialize.call(this);
    },

    createAdditionalViews: function (views) {
      Sleek.prototype.createAdditionalViews.call(this, views);

      var self = this;

      var VideoOverlay = View.extend({
        render: function() {
          View.prototype.render.call(this);
          if (window.plugins && window.plugins.nativeVideoPlayer) {
            if (this.model && this.model.get('url')) {
              window.plugins.nativeVideoPlayer.play(this.model.get('url'));
            }
          }
        },

        setModel: function(model) {
          this.model = model;
        }

      });

      this.videoDetail = new VideoOverlay({
        el: '#videos-detail',
        templateEl: '#template-video'
      });

      this.videoDetail.hide();

      this.videoDetail.hide = function() {
        self.playOne = false;
        VideoOverlay.prototype.hide.call(this);
      };

    }
  });
});