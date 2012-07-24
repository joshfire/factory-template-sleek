/*global define, Joshfire, document, window, Backbone*/

define([
  'sleek.custom',
  'joshlib!uielement',
  'joshlib!ui/toolbar',
  'joshlib!ui/cardpanel',
  'joshlib!ui/slidepanel',
  'joshlib!ui/verticallist',
  'joshlib!ui/grid',
  'joshlib!ui/item',
  'joshlib!ui/factorymedia',
  'joshlib!ui/imageloader',
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar'],
function(Sleek, UIElement, Toolbar, CardPanel, SlidePanel, VerticalList, Grid, Item, FactoryMedia, ImageLoader, _, $) {

  return Sleek.extend({
    initialize: function (cb) {
      var self = this;
      var $win = $(window);

      var resize = function() {
        $('body').css({
          zoom: Math.max(50, $win.height() / 10.80) + '%'
        });
      };

      $win.resize(resize);
      resize();

      Sleek.prototype.initialize.call(this, function () {
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


    /**
     * The code is specific to TV
     */
    deviceFamily: 'tv',

    setLogo: function(url) {
      $('#logo').html('<img src="' + url + '" />');
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
      var PhotoOverlay = ImageLoader.extend({
        initialize: function(options) {
          ImageLoader.prototype.initialize.call(this, options);

          this.navUp = this.navDown = this.navAction = this.exit;
          this.offset = options.offset;
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
          while ((newOffset !== this.offset) &&
            (self.activeSection.collection.at(newOffset).get('@type') !== 'ImageObject')) {
            newOffset = newOffset - 1;
            if(newOffset < 0) {
              newOffset = self.activeSection.collection.length - 1;
            }
          }

          if (newOffset != this.offset) {
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

          if (newOffset != this.offset) {
            window.location = '#' +  self.activeSection.slug + '/' + newOffset;
          }
        }
      });

      this.photoDetail = new PhotoOverlay({
        el: '#photos-detail',
        templateEl: '#template-photo',
        getImageUrl: function() {
          return this.model.get('contentURL');
        }
      });

      this.photoDetail.hide();

      // Video overlay
      var VideoOverlay = FactoryMedia.extend({
        initialize: function(options) {
          FactoryMedia.prototype.initialize.call(this, options);

          this.navUp = this.navDown = this.navLeft = this.navRight = this.navAction = this.exit;
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
            this.focused = 'toolbar'
            break;
            case 'detail':
            window.location = '#' + this.activeSection.slug;
            break;
          }
        }, this)
      });

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
    createListElement: function(section) {
      switch (section.outputType) {
        case 'video':
        case 'photo':
          return new Grid({
            templateEl: '#template-mosaic',
            itemFactory: this.itemFactory(section),
            collection: section.collection,
            className: section.outputType + ' ' + this.getClassName(section.outputType, 'list')
          });

        default:
          return new VerticalList({
            templateEl: '#template-list-view',
            offsetTop: 40,
            offsetBottom: 40,
            itemFactory: this.itemFactory(section),
            collection: section.collection,
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
     * Updates a section list.
     *
     * @function
     * @param {Object} the list section
     * @parma {Backbone.View} the section container
     */
    updateList: function(section, container) {
      section.loading = true;

      section.collection.fetch({
        success: _.bind(function() {
          this.showList(section, container);
          section.loading = false;
        }, this)
      });
    },

    /**
     * Displays a section list (assuming the section is already active).
     *
     * @function
     * @param {Object} the list section
     * @parma {Backbone.View} the section container
     */
    showList: function(section, container) {
      if(container.view.children && container.view.children.list) {
        container.view.showChild('list', 'left');
      } else if(section.collection.length === 1) {
        container.setModel(section.collection.at(0));
        container.render();
      }

      $('.loadmore').bind('click', _.bind(function(e) {
        var skiped = $('.'+section.outputType).find('.list li').length;
        this.loadMoreEntries(section, container, skiped);
        e.preventDefault();
      }, this));
    },

    /**
     * Load more entries of the datasource when the user is in the
     * bottom of the list
     *
     * @function
     * @return {Array(Object)} The list of datasources, an empty
     *   array when no datasources are defined.
     */
    loadMoreEntries: function(section, container, skiped) {
      $('.content').addClass('loading');
      // var currentHTML = $('.'+section.outputType).find('.list').html();
      var limitless   = skiped + 10;

      section.collection.fetch({
        dataSourceQuery: {
          nocache: false,
          limit: limitless
        },
        success: _.bind(function() {
          this.showList(section, container); // params if need skip/limit : , skiped, currentHTML
        }, this)
      });
    },

    /**
     * Updates a section item detail.
     *
     * @function
     * @param {Object} the detail section
     * @parma {Backbone.View} the section container
     */
    updateDetail: function(section, container, offset) {
      section.collection.fetch({
        success: _.bind(function() {
          this.showDetail(section, container, offset);
        }, this)
      });
    },

    /**
     * Displays a section item detail.
     *
     * @function
     * @param {Object} the detail section
     * @parma {Backbone.View} the section container
     */
    showDetail: function(section, container, offset) {
      var model = section.collection.at(offset);
      var detail = null;

      if(section.collection.length > offset) {
        switch(section.outputType) {
          case 'photo':
          detail = this.photoDetail;
          detail.offset = offset;
          detail.show();
          break;
          case 'video':
          detail = this.videoDetail;
          detail.offset = offset;
          detail.show();
          break;
          default:
          if(container.view.children && container.view.children.detail) {
            detail = container.view.children.detail;
            container.view.showChild('detail', 'right');
          }
        }

        if(detail) {
          detail.setModel(section.collection.at(offset));
          detail.render();
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
            return self.getThumbnail(params.model.toJSON());
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

      _.forEach(sections, function(section, position) {
        controllers.routes[section.slug] = section.slug;

        // List route
        controllers[section.slug] = function() {
          self.activeSection = section;
          document.body.id = section.outputType;
          $('iframe, audio, video, object, embed').remove();

          views.showChild(section.slug);
          var container = self.activeSection.view;

          if(section.collection.length) {
            self.showList(section, container);
          } else {
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
          $('iframe, audio, video, object, embed').remove();

          views.showChild(section.slug);
          var container = self.activeSection.view;

          if(section.collection.length) {
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
    getThumbnail: function(item, offset) {

      var width = document.body.clientWidth;

      switch(offset % 11) {
        case 0:
        case 1:
        case 7:
        width = width * 0.25;
        break;

        default:
        width = width * 0.1;
      }

      if(item.thumbnail) {
        var thumbnails = item.thumbnail;
        var best = thumbnails[0];

        for (var i=0; i < thumbnails.length; i++) {
          var thumbnail = thumbnails[i];

          if(thumbnail.width >= width && (thumbnail.width < best.width || best.width < width) || best.width < width && thumbnail.width > best.width) {
            best = thumbnails[i];
          }
        }

        if (best) {
          return best.contentURL;
        }
        else {
          return '';
        }
      }

      return Sleek.prototype.getThumbnail.call(this, item, offset);
    }
  });
});
