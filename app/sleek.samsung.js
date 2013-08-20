/*global define, Joshfire, document, window, Backbone, sf*/

define([
  'sleek.custom',
  'sleek.tv',
  'joshlib!collection',
  'joshlib!uielement',
  'joshlib!ui/list',
  'joshlib!ui/toolbar',
  'joshlib!ui/cardpanel',
  'joshlib!ui/slidepanel',
  'joshlib!ui/verticallist',
  'joshlib!ui/grid',
  'joshlib!ui/item',
  'joshlib!ui/factorymedia',
  'joshlib!ui/imageloader',
  'joshlib!inputs/remote',
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar',
  'joshlib!utils/woodman',
  'collections/samsungImageObjects',
  'ui/videoOverlay'
], function (
  Sleek,
  TVSleek,
  Collection,
  UIElement,
  List,
  Toolbar,
  CardPanel,
  SlidePanel,
  VerticalList,
  Grid,
  Item,
  FactoryMedia,
  ImageLoader,
  Remote,
  _, $,
  woodman,
  ImageObjectCollection,
  VideoOverlay) {

  var logger = woodman.getLogger('sleek.samsung');

  /**
   * The Samsung TV version derives from the default TV version.
   *
   * IMPORTANT:
   * Keeping the amount of specific code that is needed for the template to
   * run on Samsung TVs to a bare minimum is good practice. Please think twice
   * (or more!) before adding a line ot code to that file!
   */
  return TVSleek.extend({
    initialize: function (opt) {
      // Note the class extends the TV version but calls the "initialize"
      // function of the base Sleek class, because the TV version would break
      // the layout on Samsung TV (the zoom feature in particular)
      var self = this;
      Sleek.prototype.initialize.call(this, opt, function () {
        // Adds a class on the body if we're on 2011 SDK
        self.setFrameworkVersionTag();
        // Handle remote events
        self.handleSamsungRemote();

        if (self.backgroundURL) {
          self.setBackground(self.backgroundURL);
        }

        if (self.logoURL) {
          self.setLogo(self.logoURL);
        } else {
          self.setTitle(self.title);
        }
      });
    },

    // a factory method to create the collections.
    // in the samsung case we have to create a specific one for
    // image ds, in order to filter out heavy images
    // (which have a tendency to brutally murder the TV firmware.)
    createCollection: function(datasource) {
      datasource = datasource || {};
      logger.log('create collection', 'datasource=' + datasource.name);

      if(datasource.config.outputType === 'ImageObject') {
        return new ImageObjectCollection([], {
          dataSource: datasource,
          dataSourceQuery: {}
        });
      }
      else {
        return new Collection([], {
          dataSource: datasource,
          dataSourceQuery: {}
        });
      }
    },

    /**
     * The code is specific to TV
     */
    deviceFamily: 'samsung',


    setColor: function(color, callback) {
      if(!this.colorSet) {
        this.colorSet = true;
        $('#color').remove();
        if (typeof sf !== 'undefined' && sf.core) {
          sf.core.loadCSS('css/' + this.deviceFamily + '.' + color + '.css');
          callback();
        } else {
          var style = document.getElementsByTagName('style')[0];
          var linkNode = document.createElement('link');
          linkNode.type = 'text/css';
          linkNode.rel = 'stylesheet';
          linkNode.href = 'css/' + this.deviceFamily + '.' + color + '.css';
          if (style && style.nextSibling) {
            style.parentNode.insertBefore(linkNode, style.nextSibling);
          } else {
            document.getElementsByTagName('body')[0].appendChild(linkNode);
          }
          callback();
        }
      }
    },


    /**
     * Creates additional views: photo and video overlays
     *
     * Overrides base function with TV-specific logic.
     *
     * @function
     * @param {Object} views Views of the application, to complete with
     *   additional views created by the function (keys are views IDs)
     */
    createAdditionalViews: function(views) {
      var self = this;

      // Photo overlay
      var PhotoOverlay = Item.extend({
        initialize: function(options) {
          Item.prototype.initialize.call(this, options);
          this.navUp = this.navDown = this.navAction = this.exit;
          this.offset = options.offset;
        },

        setContent: function (html) {
          if (window.widgetAPI) {
            window.widgetAPI.putInnerHTML(this.el, html);
          }
          else {
            this.el.innerHTML = html;
          }
          this.rendered = true;
        },

        hide: function () {
          Item.prototype.hide.call(this);
          $('#' + this.el.id).css({
            display: 'none'
          });
        },

        show: function() {
          Item.prototype.show.call(this);

          self.bind('back', _.bind(this.exit, this));

          $('#' + this.el.id).css({
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

        exit: function() {
          this.hide();
          window.location = '#' + self.activeSection.slug;
        },

        navLeft: function() {
          var newOffset = this.offset - 1;
          if (newOffset < 0) {
            newOffset = self.activeSection.collection.length - 1;
          }

          // Search for the previous image in the feed
          // (this may not be the item right before this one if feed includes
          // mixed content)
          // Samsung2011 : do not put complex instructions in the loop
          // condition. Infinite-like effect.
          while (newOffset !== this.offset) {
            var newtype = self.activeSection.collection.at(newOffset).get('@type');

            if(newtype === 'ImageObject') break;
            newOffset = newOffset - 1;
            if(newOffset < 0) {
              newOffset = self.activeSection.collection.length - 1;
            }
          }

          if (newOffset !== this.offset) {
            window.location = '#' +  self.activeSection.slug + '/' + newOffset;
          }
        },

        navRight: function() {
          var newOffset = this.offset + 1;
          if (newOffset >= self.activeSection.collection.length) {
            newOffset = 0;
          }

          // Search for the previous image in the feed
          // (this may not be the item right after this one if feed includes
          // mixed content)
          while ((newOffset !== this.offset) &&
            (self.activeSection.collection.at(newOffset).get('@type') !== 'ImageObject')) {
            newOffset = newOffset + 1;
            if (newOffset >= self.activeSection.collection.length) {
              newOffset = 0;
            }
          }

          if (newOffset !== this.offset) {
            window.location = '#' +  self.activeSection.slug + '/' + newOffset;
          }
        }
      });

      this.photoDetail = new PhotoOverlay({
        name: 'photo-overlay',
        el: '#photos-detail',
        template: this.templates.photo,
        getImageUrl: function() {
          if(this.model.get('contentURL'))
            return this.model.get('contentURL');
          else
            return self.getThumbnailUrl(this.model.toJSON());
        }
      });

      this.photoDetail.render();
      this.photoDetail.hide();

      // TODO: not sure why video overlay could not be integrated
      // within mediaplayerlib and FactoryMedia. We do want to force
      // the use of a Flash player (as opposed to, say, an iframe or HTML5
      // player) but there is nothing truly specific to Samsung in there.
      this.youtubeDetail = new VideoOverlay({
        name: 'youtube-overlay',
        el: '#youtube-detail',
        playerEl: 'object',
        onReadyFunctionName: 'onYouTubePlayerReady',
        controller: this
      });
      this.youtubeDetail.render();
      this.youtubeDetail.hide();

      this.dailymotionDetail = new VideoOverlay({
        name: 'dailymotion-overlay',
        el: '#dailymotion-detail',
        playerEl: 'object',
        onReadyFunctionName: 'onDailymotionPlayerReady',
        controller: this
      });
      this.dailymotionDetail.render();
      this.dailymotionDetail.hide();

      this.navHelper = new List({
        name: 'navhelper',
        el: '#navHelper',
        itemOptions: {
          template: this.templates.navhelperItem
        },
        collection: new Backbone.Collection([
          {
            className: 'exit',
            name: 'exit'
          },
          {
            className: 'back',
            name: 'return'
          },
          {
            className: 'action',
            name: 'action'
          },
          {
            className: 'navigate',
            name: 'navigate'
          }
        ])
      });
      this.navHelper.render();

      Sleek.prototype.createAdditionalViews.call(this, views);
    },


    /**
     * Displays a section item detail.
     *
     * @function
     * @param {Object} the detail section
     * @parma {Backbone.View} the section container
     */
    showDetail: function(section, container, offset) {
      var detail = null;
      var showChild = false;
      var self = this;

      if(section.collection.length > offset) {
        switch (section.outputType) {
        case 'photo':
          logger.log(section.slug, 'show detail', 'photo');
          detail = this.photoDetail;
          detail.offset = offset;
          break;
        case 'video':
          logger.log(section.slug, 'show detail', 'video');
          var m = section.collection.at(offset);
          var url = m.get('url');
          if (m.get('contentURL')) {
            url = m.get('contentURL');
          }

          if (url.indexOf('youtube') > -1) {
            detail = this.youtubeDetail;
            detail.offset = offset;
          }
          else if (url.indexOf('dailymotion') > -1) {
            detail = this.dailymotionDetail;
            detail.offset = offset;
          }
          break;
        default:
          if(container.view.children && container.view.children.detail) {
            logger.log(section.slug, 'show detail', 'offset=' + offset);
            detail = container.view.children.detail;
            self.bind('back', function() {
              detail.navLeft();
              self.unbind('back');
            });
            // Remove objects / videos / audio (Samsung style)
            $('object, audio, video, embed, iframe', container.view.children.detail.el).remove();
            showChild = true;
          }
        }

        if (detail) {
          detail.setModel(section.collection.at(offset), true);
          detail.navFocus();
          if (showChild) {
            container.view.showChild('detail', 'right');
          }
          else {
            detail.show();
          }
        }
      }
    },


    /**
     * Returns the URL of a thumbnail of an image object.
     *
     * Overrides base function with TV specific rules.
     *
     * @function
     * @param {object} item VideoObject to parse
     * @return {string} Thumbnail URL that best match the viewport size
     */
    getThumbnailUrl: function(item, offset) {
      // Arbitrary samsung width
      return Joshfire.schemaio.utils.getThumbnailUrl(item, 240);
    },

    setFrameworkVersionTag: function() {
      if(this.is2011()) {
        $('body').addClass('sdk2011');
      }
    },

    handleSamsungRemote: function() {
      if(!this.samsungKeysBound) {
        this.remote = new Remote();
        this.remote.unbind('press:back');
        this.remote.bind('press:back', _.bind(this.goBack, this));

        this.samsungKeysBound = true;

        this.remote.bind('press:up press:down press:left press:right', function (e) {
          var el = document.getElementById('dummysamsungdiv');
          if (window.widgetAPI && window.widgetAPI.putInnerHTML) {
            window.widgetAPI.putInnerHTML(el, 'samsungsucks');
            console.log('Did put inner html');
          }
        });
      }
    },

    goBack: function(e) {
      e.preventDefault();

      var h = document.location.hash;
      h = h.split('/');
      if(h.length > 1) {
        this.trigger('back');
      } else {
        window.widgetAPI.sendReturnEvent();
      }

      return false;
    },

    is2011: function() {
      var firmware = (document.getElementById('pluginObjectNNavi').GetFirmware)?document.getElementById('pluginObjectNNavi').GetFirmware():null;
      if(typeof firmware === 'string' && firmware.indexOf('2011') > -1)
        return true;
      return false;
    },
    is2012: function() {
      var firmware = (document.getElementById('pluginObjectNNavi').GetFirmware)?document.getElementById('pluginObjectNNavi').GetFirmware():null;
      if(typeof firmware === 'string' && firmware.indexOf('2012') > -1)
        return true;
      return false;
    }
  });
});
