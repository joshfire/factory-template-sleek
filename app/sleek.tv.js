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
  'joshlib!utils/dollar'],
function(Sleek, UIElement, UIList, Toolbar, CardPanel, SlidePanel, VerticalList, Grid, Item, FactoryMedia, ImagesLoader, _, $) {

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
      var self = this;
      var toolbar = new Toolbar({
        el: '#toolbar',
        templateEl: '#template-toolbar',
        itemTemplateEl: '#toolbar-item'
      });

      toolbar.navFocus = function(origin, event) {
        UIList.prototype.navFocus.call(this, origin, event);

        if(!event && this.active === -1 && this.collection.length) {
          this.activate(0);
        }
        self.focused = 'toolbar';
      },

      toolbar.navRight = function() {
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
        templateEl: '#template-photo'
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
          if(!tplSel)
            tplSel = isSingle ? '#template-mosaic-single-photo' : '#template-mosaic';

          return new Grid({
            templateEl: tplSel,
            itemFactory: this.itemFactory(section),
            listItemFactory: this.listItemFactory(section),
            collection: section.collection,
            className: section.outputType + ' ' + this.getClassName(section.outputType, 'list')
          });

        default:
          return new VerticalList({
            templateEl: '#template-list-view',
            offsetTop: 40,
            offsetBottom: 40,
            itemFactory: this.itemFactory(section),
            listItemFactory: this.listItemFactory(section),
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

    viewFactory: function(section) {
      return _.bind(function(params) {
        var collection = params.collection,
            list,
            detail,
            view;

        if(collection.length === 1) {
            console.log(section);
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
          detail.data = {
              getImageUrl: function() {
                return this.model.get('contentURL');
              }
          };
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
            detail.setModel(section.collection.at(offset));
            detail.render();
            detail.navFocus();
            container.view.showChild('detail', 'right');
          }
        }

        if(detail) {
          detail.setModel(section.collection.at(offset));
          
          if(section.outputType === 'photo' || section.outputType === 'video') {
            detail.render();
          }

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

      _.forEach(sections, function(section, position) {
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
          
          if(toolbar.active === -1 || !self.activeSection.collection.length) {
            toolbar.navFocus();
            self.focused = 'toolbar';
          } else if(self.focused !== 'toolbar') {
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
