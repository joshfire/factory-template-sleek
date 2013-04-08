/*global define, Joshfire, document, window, Backbone, sf, onYouTubePlayerReady:true*/

define([
  'sleek.custom',
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
  'collections/samsungImageObjects'
], function (Sleek, Collection, UIElement, List, Toolbar, CardPanel, SlidePanel, VerticalList, Grid, Item, FactoryMedia, ImageLoader, Remote, _, $, ImageObjectCollection) {

  return Sleek.extend({
    initialize: function () {

      Sleek.prototype.initialize.call(this);
      // Adds a class on the body if we're on 2011 SDK
      this.setFrameworkVersionTag();
      // Handle remote events
      this.handleSamsungRemote();

    },

    // a factory method to create the collections.
    // in the samsung case we have to create a specific one for
    // image ds, in order to filter out heavy images
    // (which have a tendency to brutally murder the TV firmware.)
    createCollection: function(datasource) {

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

    setLogo: function(url) {
      $('#logo').html('<img src="' + url + '" />');
    },

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

    setBackground: function(url) {
      $('body').css({
        backgroundImage: 'url(' + url + ')'
      });
    },


    /**
     * Creates the toolbar UI element.
     * Overrides base function to return a Toolbar element.
     *
     * @function
     * @return {UIElement} The toolbar UI element to use
     */
    createToolbarElement: function() {
      return new Toolbar({
        el: '#toolbar',
        templateEl: '#template-toolbar',
        itemTemplateEl: '#toolbar-item'
      });
    },


    /**
     * Retrieves the classname(s) to use to flag an item in a list
     * or the detail element that represents the item.
     *
     * Overrides base method.
     *
     * @function
     * @param {string} itemType itemType The section's output type
     */
    getClassName: function (itemType, context) {
      if (context === 'list') {
        return 'content';
      }
      else if(context === 'single') {
        return 'single content detail';
      }
      else {
        return 'content detail';
      }
    },

    viewFactory: function(section) {
      return _.bind(function(params) {
        var collection = params.collection,
            list,
            detail,
            view;

        if(collection.length === 1) {
          if(section.outputType !== 'photo' && section.outputType !== 'video') {
            return this.createDetailContainer(section, true);
          }
          else {
            list = this.createListElement(section, true);
            detail = this.createDetailContainer(section);
            view = this.createListAndDetailView(list, detail);

            list.$el.addClass('single');

            return view;
          }
        }

        if (section.outputType === 'photo') {
          return this.createListElement(section);
        }

        list = this.createListElement(section);
        detail = this.createDetailContainer(section);
        view = this.createListAndDetailView(list, detail);

        return view;
      }, this);
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
      var PhotoOverlay = UIElement.extend({
        initialize: function(options) {
          UIElement.prototype.initialize.call(this, options);
          this.templateEl = options.templateEl;
          this.navUp = this.navDown = this.navAction = this.exit;
          this.offset = options.offset;
        },

        setModel: function(model) {
          this.model = model;
        },

        generate: function(cb) {
          var html = _.template($(this.templateEl).text(), {
            item: this.model.toJSON()
          });
          cb(null, html);
        },

        setContent: function(html) {
          if(window.widgetAPI)
            window.widgetAPI.putInnerHTML(this.el, html);
          else
            this.el.innerHTML = html;
        },

        hide: function() {
          UIElement.prototype.hide.call(this);

          $('#' + this.el.id).css({
            display: 'none'
          });
        },

        show: function() {
          UIElement.prototype.show.call(this);

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
        el: '#photos-detail',
        templateEl: '#template-photo',
        getImageUrl: function() {
          if(this.model.get('contentURL'))
            return this.model.get('contentURL');
          else
            return self.getThumbnailUrl(this.model.toJSON());
        }
      });

      this.photoDetail.hide();

      // Video overlay
      var VideoOverlay = FactoryMedia.extend({
        initialize: function(options) {
          FactoryMedia.prototype.initialize.call(this, options);

          this.navUp = this.navDown = this.navLeft = this.navRight = this.navAction = this.exit;
        },

        show: function() {
          FactoryMedia.prototype.show.call(this);

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
          $('object, embed', '#' + this.el.id).css({
            display: 'block'
          });
        },

        hide: function() {
          FactoryMedia.prototype.hide.call(this);
          $('#' + this.el.id).css({
            display: 'none'
          });
        },

        exit: function() {
          this.hide();
          window.location = '#' + self.activeSection.slug;
        }
      });
      this.videoDetail = new VideoOverlay({
        el: '#videos-detail',
        templateEl: '#template-video',
        mediaOptions: {
          width: '100%',
          height: '100%',
          autoPlay: true,
          html5: true
        }
      });
      this.videoDetail.hide();



      var YoutubeOverlay = UIElement.extend({
        initialize: function(opt) {
          UIElement.prototype.initialize.call(this, opt);
          this.player = this.$(opt.playerEl)[0];
          this.navUp = this.navDown = this.navLeft = this.navRight = this.navAction = this.exit;
        },
        setModel: function(model) {
          this.model = model;
        },
        render: function() {
          var vId = this.model.get('url').split('v=').pop();

          if(this.playerReady && this.player && this.player.loadVideoById) {
            this.player.loadVideoById(vId);
            this.player.playVideo();
          }

          onYouTubePlayerReady = _.bind(function() {
            this.playerReady = true;
            this.player.loadVideoById(vId);
            this.player.playVideo();
          }, this);
        },
        show: function() {
          UIElement.prototype.show.call(this);

          self.bind('back', _.bind(this.exit, this));

          $(this.el).css({
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
          self.unbind('back');
          UIElement.prototype.hide.call(this);
          $(this.el).css({
            display: 'none',
            width: 0,
            height: 0,
            overflow: 'hidden',
            top: 540,
            left: 960
          });
        },
        exit: function() {
          this.hide();
          this.player.stopVideo();
          window.location = '#' + self.activeSection.slug;
        }
      });
      this.youtubeDetail = new YoutubeOverlay({
        el: '#youtube-detail',
        playerEl: 'object'
      });
      this.youtubeDetail.hide();


      // We create a 'virtual' view to handle global navigation that are not
      // tied to routes.
      this.virtualView = new UIElement({
        navRight: _.bind(function() {
          switch(this.focused) {
          case 'toolbar':
            if(this.activeSection && !this.activeSection.loading) {
              var container = this.activeSection.view;

              if(container.view) {
                var view = container.view;

                if(view.children && view.children.list) {
                  view.children.list.navFocus(this.virtualView);
                } else {
                  view.navFocus(this.virtualView);
                }

                this.focused = 'list';
              }
            }
            break;
          }
        }, this),
        navLeft: _.bind(function() {
          switch(this.focused) {
          case 'list':
            this.toolbarView.navFocus(this.virtualView);
            this.focused = 'toolbar';
            break;
          case 'detail':
            window.location = '#' + this.activeSection.slug;
            break;
          }
        }, this)
      });

      this.navHelper = new List({
        el: '#navHelper',
        itemTemplateEl: '#tpl-navhelper-item',
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
     * Creates the element to use to represent a list of items
     * for the given section.
     *
     * Overrides base function with TV specific logic.
     *
     * @function
     * @param {Object} section Section to render
     * @return {UIElement} The element to use. May include a detailed view.
     */
    createListElement: function(section, isSingle) {
      var tplSel;
      switch (section.outputType) {
      case 'video':
        tplSel = isSingle ? '#template-mosaic-single-video' : '#template-mosaic';
      case 'photo':
        if (!tplSel) {
          tplSel = isSingle ? '#template-mosaic-single-photo' : '#template-mosaic';
        }

        return new Grid({
          templateEl: tplSel,
          itemFactory: this.itemFactory(section),
          collection: section.collection,
          translate3d: false,
          className: section.outputType + ' ' + this.getClassName(section.outputType, 'list')
        });

      default:
        return new VerticalList({
          templateEl: '#template-list-view',
          offsetTop: 40,
          offsetBottom: 40,
          itemFactory: this.itemFactory(section),
          collection: section.collection,
          translate3d: false,
          className: section.outputType + ' ' + this.getClassName(section.outputType, 'list')
        });
      }
    },

    /**
     * Must create a list + detail view for a section.
     *
     * @param {Backbone.View} the list view
     * @param {Backbone.View} the detail view
     * @return {Backbone.View} the section viex
     */
    createListAndDetailView: function(list, detail) {
      var view = new SlidePanel({
        children: {
          list: list,
          detail: detail
        },
        currentChild: 'list',
        className: 'slide-panel'
      });

      return view;
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
      var self = this;

      if(section.collection.length > offset) {
        switch(section.outputType) {
        case 'photo':
          detail = this.photoDetail;
          detail.offset = offset;
          detail.show();
          break;
        case 'video':
          var m = section.collection.at(offset);
          var url = m.get('url');
          if(m.get('contentURL') && m.get('contentURL')) {
            url = m.get('contentURL')[0];
          }

          if(url.indexOf('youtube') > -1) {
            detail = this.youtubeDetail;
          }
          else {
            detail = this.videoDetail;
          }
          detail.offset = offset;
          detail.show();
          break;
        default:
          if(container.view.children && container.view.children.detail) {
            detail = container.view.children.detail;
            self.bind('back', function() {
              detail.navLeft();
              self.unbind('back');
            });
            // Remove objects / videos / audio (Samsung style)
            $('object, audio, video, embed, iframe', container.view.children.detail.el).remove();
            container.view.showChild('detail', 'right');
          }
        }

        if(detail) {
          detail.setModel(section.collection.at(offset), true);
          detail.navFocus();
        }
      }
    },

    /**
     * Creates the element to use to represent an item for the given section.
     *
     * Overrides base function with TV specific logic.
     *
     * @function
     * @param {Object} options Rendering options
     * @return {UIElement} The element to use. May include a detailed view.
     */
    createDetailElement: function(params, isSingle) {
      if(!params.model) {
        return new Item({});
      }

      var itemType = this.convertItemType(params.model.get('@type'));
      var self = this;
      var options = {
        templateEl: '#template-' + itemType,
        scroller: true,
        offsetTop: 100,
        offsetBottom: 100,
        navLeft: _.bind(function() {
          if(isSingle) {
            this.toolbarView.navFocus(this.virtualView);
            this.focused = 'toolbar';
          } else {
            window.location = '#' + params.slug;
          }
        }, this)
      };
      switch (itemType) {
      case 'video':
      case 'photo':
        return null;
      case 'sound':
        options.mediaOptions = {
          strategy: 'html5',
          autoPlay: true
        };
        return new FactoryMedia(options);
      case 'status':
        options.getImageUrl = function () {
          return self.getAuthorThumbnail(params.model.toJSON());
        };
        return new ImageLoader(options);
      default:
        options.getImageUrl = function () {
          return self.getThumbnailUrl(params.model.toJSON());
        };
        return new ImageLoader(options);
      }
    },

    //
    // Creates routes
    //
    createRoutes: function(sections, views) {
      var controllers = Sleek.prototype.createRoutes.call(this, sections, views);
      var self = this;
      var toolbar = this.toolbarView;

      _.forEach(sections, function (section) {
        controllers.routes[section.slug] = section.slug;

        // List route
        controllers[section.slug] = function() {
          self.activeSection = section;
          document.body.id = section.outputType;
          $('iframe, audio, video, object, embed', '#container').remove();

          var container = self.activeSection.view;
          if (section.collection.length) {
            self.moveToList(container);
            views.showChild(section.slug);
          } else {
            views.showChild(section.slug);
            self.updateList(section, container);
          }

          if(toolbar.active === -1 || self.activeSection.loading) {
            toolbar.activate(self.activeSection.index);
            toolbar.navFocus(self.virtualView);
            self.focused = 'toolbar';
          } else if(self.focused !== 'toolbar') {
            if(container.view) {
              var view = container.view;

              if(view.children && view.children.list) {
                view.children.list.navFocus(self.virtualView);
              } else {
                view.navFocus(self.virtualView);
              }

              self.focused = 'list';
            }
          }
        };

        // Detail route
        controllers.routes[section.slug + '/:offset'] = section.slug + 'Detail';

        controllers[section.slug + 'Detail'] = function(offset) {
          offset = parseInt(offset, 10);
          self.activeSection = section;
          document.body.id = section.outputType;
          $('iframe, audio, video, object, embed', '#container').remove();

          views.showChild(section.slug);
          var container = self.activeSection.view;
          if (section.collection.length) {
            self.showDetail(section, container, offset);
          } else {
            self.updateDetail(section, container, offset);
          }

          self.focused = 'detail';
        };
      });

      return controllers;
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
