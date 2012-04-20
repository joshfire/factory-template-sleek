/*global define, Joshfire, document, window, Backbone*/

define([
  'spot',
  'joshlib!ui/horizontallayout',
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
function(Spot, HorizontalLayout, Toolbar, CardPanel, SlidePanel, VerticalList, Grid, Item, FactoryMedia, ImageLoader, _, $) {

  return Spot.extend({
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
          window.location = '#' + self.section.slug;
        },

        navLeft: function() {
          var newOffset = this.offset - 1;

          if(newOffset < 0) {
            newOffset = self.section.collection.length - 1;
          }

          window.location = '#' +  self.section.slug + '/' + newOffset;
        },

        navRight: function() {
          var newOffset = this.offset + 1;

          if(newOffset >= self.section.collection.length) {
            newOffset = 0;
          }

          window.location = '#' +  self.section.slug + '/' + newOffset;
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
          window.location = '#' + self.section.slug;
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
     * Creates the element to use to represent an item for the given section.
     *
     * Overrides base function with TV specific logic.
     *
     * @function
     * @param {Object} section Section to render
     * @return {UIElement} The element to use. May include a detailed view.
     */
    createDetailElement: function(section) {
      switch (section.outputType) {
        case 'video':
        case 'photo':
          return null;
        default:
          return new Item({
            templateEl: '#template-' + section.outputType,
            scroller: true,
            offsetTop: 100,
            offsetBottom: 100,
            navLeft: function() {
              window.location = '#' + section.slug;
            },
            className: this.getClassName(section.outputType, 'detail')
          });
      }
    },


    /**
     * Initializes and renders views created from the given list of sections.
     *
     * Overrides base method to add a bit of post-processing.
     *
     * @function
     * @param {Array(Object)} sections The list of sections
     *  (see "initialize" for format)
     * @return {Object} Views created identified by their ID
     */
    createViews: function(sections) {
      var views = Spot.prototype.createViews.call(this, sections);
      var $cards = $('#cards');

      var cards = new CardPanel({
        el: $cards,
        children: views
      });

      var horizontalLayout = new HorizontalLayout({
        el: '#container',
        views: [
          this.toolbarView,
          cards
        ]
      });

      return horizontalLayout;
    },


    //
    // Creates routes
    //
    createRoutes: function(sections, layout) {
      var toolbar = layout.views[0];
      var cards = layout.views[1];
      var self = this;

      var controllers = {
        routes: {
          '': 'home'
        },

        home: function() {
          if(sections.length) {
            controllers[sections[0].slug]();
          }
        }
      };

      _.forEach(sections, function(section, position) {
        controllers.routes[section.slug] = section.slug;

        // List route
        controllers[section.slug] = function() {
          self.section = section;
          cards.showChildren(section.slug);
          cards.children[section.slug].showChildren('list');
          if(toolbar.active === -1) {
            toolbar.navFocus(layout);
          } else if(!toolbar.focused) {
            cards.children[section.slug].children.list.navFocus(cards.children[section.slug]);
          }
          toolbar.activate(position);
          $('iframe').remove();
          document.body.id = section.outputType;

          section.collection.length || section.collection.fetch();
        };

        // Detail route
        controllers.routes[section.slug + '/:offset'] = section.slug + 'Detail';

        controllers[section.slug + 'Detail'] = function(offset) {
          self.section = section;
          offset = parseInt(offset, 10);$('iframe').remove();
          document.body.id = section.outputType;
          var detail;

          if(section.outputType === 'photo') {
            detail = self.photoDetail;
            detail.offset = offset;
            detail.show();
          } else if(section.outputType === 'video') {
            detail = self.videoDetail;
            detail.show();
          } else {
            cards.showChildren(section.slug);
            cards.children[section.slug].showChildren('detail');

            detail = cards.children[section.slug].children['detail'];
          }

          detail.navFocus(layout);

          if(section.collection.length === 0) {
            section.collection.fetch({
              success: function() {
                if(section.collection.length > offset) {
                  detail.setModel(section.collection.at(offset));
                  detail.render();
                }
              }
            });
          } else if(section.collection.length > offset) {
            detail.setModel(section.collection.at(offset));
            detail.render();
          }
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

      return Spot.prototype.getThumbnail.call(this, item, offset);
    }
  });
});
