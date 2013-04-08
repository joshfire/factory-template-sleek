/*global define, Joshfire, document, window, Backbone*/

define([
  'sleek.custom',
  'joshlib!uielement',
  'joshlib!ui/list',
  'joshlib!ui/toolbar',
  'joshlib!ui/cardpanel',
  'joshlib!ui/slidepanel',
  'joshlib!ui/verticallist',
  'joshlib!ui/grid',
  'joshlib!ui/item',
  'joshlib!ui/factorymedia',
  'ui/imagesloader',
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar',
  'joshlib!utils/woodman'
], function (
  Sleek,
  UIElement,
  UIList,
  Toolbar,
  CardPanel,
  SlidePanel,
  VerticalList,
  Grid,
  Item,
  FactoryMedia,
  ImagesLoader,
  _, $,
  woodman) {

  var logger = woodman.getLogger('sleek.tv');

  return Sleek.extend({
    initialize: function () {
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
      logger.log('create toolbar element');
      var self = this;
      var toolbar = new Toolbar({
        name: 'toolbar',
        el: '#toolbar',
        templateEl: '#template-toolbar',
        itemTemplateEl: '#toolbar-item',
        minLengthToShow: 2
      });

      toolbar.navFocus = function(origin, event) {
        logger.log(this.logid, 'nav focus');
        UIList.prototype.navFocus.call(this, origin, event);

        if(!event && this.active === -1 && this.collection.length) {
          this.activate(0);
        }

        self.focused = 'toolbar';
      },

      toolbar.navRight = function() {
        logger.log(this.logid, 'nav right');
        if(self.activeSection && self.activeSection.collection.length) {
          var container = self.activeSection.view;
          if(container.view) {
            var view = container.view;

            if(view.children && view.children.list) {
              view.children.list.navFocus(self.toolbarView);
            } else {
              view.navFocus(self.toolbarView);
            }
            self.focused = 'list';
          }
        }
      };

      return toolbar;
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
      var PhotoOverlay = ImagesLoader.extend({
        initialize: function(options) {
          ImagesLoader.prototype.initialize.call(this, options);

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
        templateEl: '#template-photo'
      });

      this.photoDetail.render();
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

      this.videoDetail.render();
      this.videoDetail.hide();
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
      section = section || {};

      logger.log(section.slug, 'create list element',
        'type=' + section.outputType);

      var tplSel;
      switch (section.outputType) {
      case 'video':
        tplSel = isSingle ? '#template-mosaic-single-video' : '#template-mosaic';
      case 'photo':
        if(!tplSel)
          tplSel = isSingle ? '#template-mosaic-single-photo' : '#template-mosaic';

        return new Grid({
          templateEl: tplSel,
          itemFactory: this.itemFactory(section),
          listItemFactory: this.listItemFactory(section),
          collection: section.collection,
          className: section.outputType + ' ' + this.getClassName(section.outputType, 'list'),
          autoLoadMore: true,
          dataLoadingMoreClass: 'dataloadingmore'
        });

      default:
        return new VerticalList({
          templateEl: '#template-list-view',
          offsetTop: 40,
          offsetBottom: 40,
          itemFactory: this.itemFactory(section),
          listItemFactory: this.listItemFactory(section),
          collection: section.collection,
          className: section.outputType + ' ' + this.getClassName(section.outputType, 'list'),
          autoLoadMore: true,
          dataLoadingMoreClass: 'dataloadingmore'
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
      logger.log('create list and detail view', 'list=' + list.logid);
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

    viewFactory: function(section) {
      return _.bind(function(params) {
        var collection = params.collection;
        var list = null;
        var detail = null;
        var view = null;

        if (!collection || collection.length === 0) {
          logger.log(section.slug, 'view factory', 'create empty element');
          return this.createEmptyElement(section, collection);
        }

        if (collection.length === 1) {
          if ((section.outputType === 'photo') ||
            (section.outputType === 'video')) {
            logger.log(section.slug, 'view factory',
              'create detail container', 'photo/video');
            return this.createDetailContainer(section, true);
          }
          else {
            logger.log(section.slug, 'view factory',
              'create list and detail', '1 item');
            list = this.createListElement(section, true);
            detail = this.createDetailContainer(section);
            view = this.createListAndDetailView(list, detail);

            list.$el.addClass('single');
            return view;
          }
        }

        if (section.outputType === 'photo') {
          logger.log(section.slug, 'view factory',
              'create list element', 'photo/video');
          return this.createListElement(section);
        }

        logger.log(section.slug, 'view factory',
          'create list and detail');
        list = this.createListElement(section);
        detail = this.createDetailContainer(section);
        view = this.createListAndDetailView(list, detail);

        return view;
      }, this);
    },

    showList: function(section, container) {
      Sleek.prototype.showList.call(this, section, container);

      if (this.toolbarView.items.length < this.toolbarView.minLengthToShow) {
        if(container.view) {
          var view = container.view;
          if(view.children && view.children.list) {
            logger.log(section.slug, 'show list', 'focus list');
            view.children.list.navFocus();
          } else {
            logger.log(section.slug, 'show list', 'focus view');
            view.navFocus();
          }
          this.focused = 'list';
        }
      }
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

      if (section.collection.length > offset) {

        switch(section.outputType) {
        case 'photo':
          logger.log(section.slug, 'show detail', 'photo');
          detail = this.photoDetail;
          detail.offset = offset;
          detail.data = {
            getImageUrl: function() {
              return this.model.get('contentURL');
            }
          };
          break;
        case 'video':
          logger.log(section.slug, 'show detail', 'video');
          detail = this.videoDetail;
          detail.offset = offset;
          break;
        default:
          if(container.view.children && container.view.children.detail) {
            logger.log(section.slug, 'show detail', 'offset=' + offset);
            detail = container.view.children.detail;
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
      var options = {
        templateEl: '#template-' + itemType,
        scroller: true,
        offsetTop: 100,
        offsetBottom: 100,
        focusSubElements: true,
        navLeft: _.bind(function() {
          if(isSingle) {
            this.toolbarView.navFocus();
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
        return new Item(options);
      default:
        return new Item(options);
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

          toolbar.activate(self.activeSection.index);

          var view;

          if(toolbar.active === -1 || !self.activeSection.collection.length) {
            toolbar.navFocus();
            self.focused = 'toolbar';
          } else if(self.focused !== 'toolbar') {
            if(container.view) {
              view = container.view;
              if(view.children && view.children.list) {
                view.children.list.navFocus(self.toolbarView);
              } else {
                view.navFocus(self.toolbarView);
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
    }

  });
});
