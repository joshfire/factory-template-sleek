/**
 * @fileOverview Video Flash player overlay for Samsung TV sets. Compatible
 * with Youtube and Dailymotion video players.
 *
 * The view pilots a Flash player that must be defined in some <object> tag
 * in the DOM of the view.
 *
 * The view exposes a global "onYouTubePlayerReady" or
 * "onDailymotionPlayerReady" function depending on the function name given as
 * parameter. The player typically calls that function whenever the object
 * comes into view and is ready to take commands.
 *
 * TODO:
 * - this view should rather extend Item, not sure why it does not
 * - this view could also take a real HTML template, it does not seem to be
 * necessary (anymore?) to define the <object> tag directly within the DOM
 * body at startup
 * - the "controller" option used to bind "back" events and to access the
 * "activeSection" is ugly. Get rid of it. The controller should rather listen
 * to events triggered by the view.
 * - implement pause/forward/rewind?
 */

/*global define, window:true*/
define([
  'joshlib!uielement',
  'joshlib!vendor/underscore'
], function (UIElement, _) {

  var VideoOverlay = UIElement.extend({

    initialize: function (opt) {
      UIElement.prototype.initialize.call(this, opt);
      this.player = this.$(opt.playerEl)[0];
      this.navUp = this.exit;
      this.navDown = this.exit;
      this.navLeft = this.exit;
      this.navRight = this.exit;
      this.navAction = this.exit;
      this.controller = opt.controller || this;
      this.onReadyFunctionName = opt.onReadyFunctionName ||
        'onYouTubePlayerReady';
    },
    setModel: function(model, update) {
      this.model = model;
      if (update) {
        this.render();
      }
    },
    render: function (cb) {
      var videoId = '';
      if (this.model) {
        videoId = this.model.get('embedURL') || this.model.get('url');
      }
      if (videoId) {
        videoId = videoId.split('?')[0];
        videoId = videoId.split('/').pop();
      }

      if (this.playerReady && this.player && this.player.loadVideoById) {
        this.player.loadVideoById(videoId);
      }

      window[this.onReadyFunctionName] = _.bind(function () {
        this.playerReady = true;
        this.player.loadVideoById(videoId);
      }, this);
      this.rendered = true;
      if (typeof cb === 'function') cb();
    },
    show: function() {
      UIElement.prototype.show.call(this);

      this.controller.bind('back', _.bind(this.exit, this));

      this.$el.css({
        display: 'block',
        visibility: 'visible',
        position: 'absolute',
        width: 960,
        height: 540,
        zIndex: 99,
        top: 0,
        left: 0,
        background: '#000'
      });
    },

    hide: function() {
      this.controller.unbind('back');
      UIElement.prototype.hide.call(this);
      this.$el.css({
        display: 'none',
        width: 0,
        height: 0,
        overflow: 'hidden',
        top: 540,
        left: 960
      });
      try {
        this.player.stopVideo();
        this.playerReady = false;
      }
      catch (err) {
      }
    },
    exit: function() {
      this.hide();
      window.location = '#' + this.controller.activeSection.slug;
    }
  });

  return VideoOverlay;
});