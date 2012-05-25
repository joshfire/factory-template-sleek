/**
 * @fileoverview Main template logic, code shared by all platforms supported
 * by the template.
 *
 * The code is extended in sleek.[platform].js to add platform-specific logic.
 * To ease maintenance, the goal is to share as much code as possible between
 * versions.
 */

/*global define, Joshfire, document*/

define([
  'joshlib!collection',
  'joshlib!ui/dynamiccontainer',
  'joshlib!ui/item',
  'joshlib!ui/list',
  'joshlib!ui/slidepanel',
  'joshlib!ui/factorymedia',
  'joshlib!ui/imageloader',
  'joshlib!router',
  'joshlib!vendor/backbone',
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar',
  'ui/imagegallery'],
function(Collection, DynamicContainer, Item, List, SlidePanel, FactoryMedia, ImageLoader, Router, Backbone, _, $, ImageGallery) {

  var Sleek = function() {
    _.bindAll(this, 'initialize',  'setColor', 'slugify');
  };

  Sleek.extend = Backbone.View.extend;

  _.extend(Sleek.prototype, {
    /**
     * Device family that identifies the platform handled by a more specific class.
     * Override this property in derivated class as appropriate. For instance, set
     * the property to 'phone' in sleek.phone.js.
     *
     * The property is typically used to target platform-specific CSS files and
     * properties.
     */
    deviceFamily: 'all',


    /**
     * Converts a schema.org type into an internal type of items
     */
    convertItemType: function(type) {
      var outputType = null;
      switch (type) {
        case 'Article/Status':
          outputType = 'status';
          break;
        case 'NewsArticle':
        case 'BlogPosting':
        case 'Article':
        case 'CreativeWork':
          outputType = 'news';
          break;
        case 'Event':
          outputType = 'event';
          break;
        case 'ImageObject':
          outputType = 'photo';
          break;
        case 'VideoObject':
          outputType = 'video';
          break;
        case 'MusicRecording':
          outputType = 'sound';
          break;
        case 'Product':
          outputType = 'product';
          break;
        default:
          outputType = 'other';
          break;
      }
      return outputType;
    },


    /**
     * Initialization of the application.
     * The function is automatically called by the framework when the application
     * is loaded.
     *
     * @function
     */
    initialize: function(cb) {
      var self = this;

      this.title = Joshfire.factory.config.app.name;
      this.backgroundURL = Joshfire.factory.config.template.options.backgroundurl;
      this.logoURL = Joshfire.factory.config.app.logo ?
                  Joshfire.factory.config.app.logo.contentURL : null;

      // Set the document's title to the application title
      document.title = this.title;

      // Set the template color based on the option selected by the user
      // (this loads the CSS)
      this.setColor(Joshfire.factory.config.template.options.color || 'gray', function () {
        //
        // Sections: one section per datasource
        //
        // (The way the list of datasources is retrieved actually depends
        // on whether the code is used in Sleek or in Spot)
        var datasources = self.getDatasources();
        var sections = new Array(datasources.length);
        var loaded = 0;

        // Prepare sections
        _.forEach(datasources, _.bind(function(datasource, index) {
          var name = datasource.name || '';
          var slug = index + '--' + this.slugify(name.toLowerCase());
          var collection = new Collection([], {
            dataSource: datasource,
            dataSourceQuery: {}
          });

          // Main section type depends on the type of content returned by the
          // datasource. Datasources that return mixed content typically fall
          // in the "other" category.
          var outputType = datasource.getOutputType();
          sections[index] = {
            name: name,
            slug: slug,
            outputType: self.convertItemType(outputType),
            collection: collection
          };

          // Bind to collection events to handle the case where there is only
          // one model.
          collection.bind('syncsuccess', function(event) {
            var slidePanel = views[slug] || views.views[1].children[slug];
            var list = slidePanel.children.list;

            // If there is no list view, we don't do anything specific.
            if(!list) return;

            // REMOVE || true
            if(collection.length === 1 || true) {
              // Make sure the slide pannel is all the way to the left.
              slidePanel.show('list');

              // We have a single model, so we try to only display the detail
              // view for that item.
              var detail = slidePanel.children.detail;

              // If there is no list view, we don't do anything specific.
              if(!detail) return;

              // Set the model for the detail view and render it.
              detail.setModel(collection.at(0));
              detail.render();

              // Hide the list view.
              list.hide();
            } else {
              // If there are multiple items, make sure the list is visible.
              list.show();
            }
          });
        }, self));

        // Create the views once all sections have been initialized
        var views = self.createViews(sections);
        var controllers = self.createRoutes(sections, views);
        var router = Router(controllers);
        router.historyStart();

        cb && cb();
      });
    },


    /**
     * Returns the list of datasources entered by the user, in the
     * right order.
     *
     * @function
     * @return {Array(Object)} The list of datasources, an empty
     *   array when no datasources are defined.
     */
    getDatasources: function() {
      var mainDatasource = Joshfire.factory.getDataSource('main');
      var datasources = [];

      if (mainDatasource && mainDatasource.children &&
        (mainDatasource.children.length > 0)) {
        datasources = datasources.concat(mainDatasource.children);
      }
      return datasources;
    },


    /**
     * Sets the template color
     *
     * @function
     * @param {string} color The color to set (value must be one of the supported
     *  colors, e.g. "gray", "blue", etc.)
     * @param {function} callback Callback function run when CSS is done loading
     */
    setColor: function(color, callback) {
      $('#color').remove();
      window.Sid.css('css/' + this.deviceFamily + '.' + color + '.css', callback);
    },


    /**
     * Sets the main title
     *
     * @function
     * @param {string} value The title to set.
     *  The string is interpreted as HTML markup.
     */
    setTitle: function(value) {
      $('#title').html(value);
    },


    /**
     * Retrieves the classname(s) to use to flag an item in a list
     * or the detail element that represents the item.
     *
     * Override this method in derivated classes as needed.
     *
     * @function
     * @param {string} itemType itemType The section's output type
     */
    getClassName: function (itemType, context) {
      if (context === 'list') {
        switch (itemType) {
          case 'status':
          case 'event':
            return 'content hashed-list';
          case 'photo':
            return 'content mosaic-list';
          default:
            return 'content simple-list';
        }
      }
      else {
        return 'content detail';
      }
    },


    /**
     * Initializes and renders the application toolbar
     *
     * @function
     * @param {Array(Object)} sections The list of sections to include
     *  in the toolbar
     * @return {UIElement} The created toolbar element
     */
    createToolbar: function(sections) {
      var sectionCollection = new Backbone.Collection();
      var section = null;

      for(var i = 0; i < sections.length; i++) {
        section = sections[i];
        sectionCollection.add({
          name: section.name,
          linkURL: '#' + section.slug,
          outputType: section.outputType,
          slug: section.slug
        });
      }

      var toolbar = this.createToolbarElement();
      toolbar.setCollection(sectionCollection);
      toolbar.render();
      return toolbar;
    },


    /**
     * Initializes and renders views created from the given list of sections.
     *
     * @function
     * @param {Array(Object)} sections The list of sections
     *  (see "initialize" for format)
     * @return {Object} Views created identified by their ID
     */
    createViews: function(sections) {
      var views = {};

      // Create the toolbar
      // (not very clean to set it in "this", but TV version needs
      // to put the toolbar in a horizontal layout)
      this.toolbarView = this.createToolbar(sections);

      // Create additional views and overlays
      // (hook for derivated classes to add more logic)
      this.createAdditionalViews(views);

      // Parse sections and build corresponding views
      _.forEach(sections, _.bind(function(section) {
        var listElement = this.createListElement(section);
        var detailElement = this.createDetailContainer(section);
        this.insertView(views, section.slug, listElement, detailElement);
      }, this));

      return views;
    },


    /**
     * Creates additional views.
     *
     * This function is an empty hook that derivated classes may use to add
     * additional views logic.
     *
     * @function
     * @param {Object} views Views of the application, to complete with
     *   additional views created by the function (keys are views IDs)
     */
    createAdditionalViews: function(views) {
    },


    /**
     * Creates the toolbar UI element. Default implementation is a Toolbar,
     * but you may want to override this in derivated classes.
     *
     * @function
     * @return {UIElement} The toolbar UI element to use
     */
    createToolbarElement: function() {
      return new List({
        el: '#toolbar',
        templateEl: '#template-toolbar',
        itemTemplateEl: '#toolbar-item'
      });
    },


    /**
     * Creates the element to use to represent a list of items
     * for the given section.
     *
     * Default implement creates a List linked to the
     * template-list-view template.
     *
     * Override this function in derivated classes to add
     * specific logic.
     *
     * @function
     * @param {Object} section Section to render
     * @return {UIElement} The element to use. May include a detailed view.
     */
    createListElement: function(section) {
      if (section.outputType === 'photo') {
        return new ImageGallery({
          templateEl: '#template-list-view',
          scroller: true,
          itemFactory: this.itemFactory(section),
          collection: section.collection,
          className: section.outputType + ' ' + this.getClassName(section.outputType, 'list')
        });
      }
      else {
        return new List({
          templateEl: '#template-list-view',
          scroller: true,
          itemFactory: this.itemFactory(section),
          collection: section.collection,
          className: section.outputType + ' ' +
            this.getClassName(section.outputType, 'list')
        });
      }
    },


    /**
     * Creates the container element for the detail view of the given section.
     *
     * Default implementation creates a DynamicContainer that uses
     * createDetailElement to select the right UI element to create
     * for the item to render. No detail view for 'photo' streams.
     *
     * Override this function in derivated class as necessary.
     *
     * @function
     * @param {Object} section Section to render
     * @return {UIElement} The container element to use.
     *  Null when section does not have any associated detail view
     *  (or when the detail view is managed by dedicated code)
     */
    createDetailContainer: function(section) {
      var self = this;

      if (section.outputType === 'photo') {
        return null;
      }
      else {
        return new DynamicContainer({
          itemFactory: function (options) {
            // Delegate the creation to createDetailElement
            _.extend(options, { slug: section.slug });
            return self.createDetailElement(options);
          },
          className: self.getClassName(section, 'detail')
        });
      }
    },


    /**
     * Creates the element to use to represent an item for the given section.
     *
     * Default implement creates a List linked to the
     * template-list-view template.
     *
     * Override this function in derivated classes to add
     * specific logic.
     *
     * @function
     * @param {Object} section Section to render
     * @return {UIElement} The element to use.
     */
    createDetailElement: function(section) {
      var itemType = this.convertItemType(section.model.get('@type'));
      var self = this;

      switch (itemType) {
        case 'video':
          return new FactoryMedia({
            templateEl: '#template-' + itemType,
            scroller: true,
            scrollerSelector: '.wrapper',
            width: self.getContentWidth(),
            height: self.getContentHeight(),
            mediaOptions: {
              strategy: 'html5',
              width: '100%',
              height: '80%',
              adjustSize: true
            }
          });
        case 'status':
          return new ImageLoader({
            templateEl: '#template-' + itemType,
            scroller: true,
            getImageUrl: function () {
              return self.getAuthorThumbnail(section.model.toJSON());
            }
          });
        case 'sound':
          return new FactoryMedia({
            templateEl: '#template-sound',
            mediaOptions: {
              strategy: 'html5'
            }
          });
        default:
          return new ImageLoader({
            templateEl: '#template-' + itemType,
            scroller: true,
            getImageUrl: function () {
              return self.getThumbnail(section.model.toJSON());
            }
          });
      }
    },


    /**
     * Inserts the list/detail views in the list of views.
     *
     * The list and detailed views are combined together in
     * a slide panel. Override this function to build another
     * layout in derivated classes.
     *
     * @function
     * @param {Object} views Existing views identified by their ID
     * @param {string} viewid The base ID of the view to insert
     * @param {UIElement} listElement The list element
     * @param {UIElement} detailElement Potential detail view
     */
    insertView: function(views, viewid, listElement, detailElement) {
      var view = new SlidePanel({
        children: {
          list: listElement,
          detail: detailElement
        },
        className: 'slide-panel'
      });

      _.each(view.children, function(child) {
        if (child) {
          $(view.el).append(child.el);
        }
      });
      view.hide();
      views[viewid] = view;
      $("#cards").append(view.el);
    },


    //
    // Creates a list item view based on the type of the item.
    //
    itemFactory: function(section) {
      var self = this;

      return function(model, offset) {
        var item = model.toJSON();
        var type = section.outputType || self.convertItemType(item['@type']);
        var templateEl = '#template-' + type + '-item';
        var options = {
          data: { section: section },
          model: model,
          offset: offset,
          templateEl: templateEl
        };

        switch(type) {
          case 'photo':
          case 'video':
          case 'product':
            options.getImageUrl = function () {
              return self.getThumbnail(item, offset);
            };
            return new ImageLoader(options);

          case 'status':
            options.getImageUrl = function () {
              return self.getAuthorThumbnail(item, offset);
            };
            return new ImageLoader(options);

          default:
            return new Item(options);
        }
      };
    },


    /**
     * Create routes for all created views.
     *
     * Function stub that only handles the home page.
     * Override this function in derivated classes.
     *
     * @function
     * @param {Array(Object)} sections The list of sections that compose the app
     * @param {Object} Created views identified by their ID
     * @return {Object} Route controllers
     */
    createRoutes: function(sections, views) {
      return {
        routes: {
          '': 'home'
        },

        home: function() {
          if (sections.length) {
            this[sections[0].slug]();
          }
        }
      };
    },


    /**
     * Returns the width that is available for detailed views.
     *
     * The function is used in particular to tell the media factory the
     * maximum width it may use.
     *
     * @function
     * @return {integer} The width available in CSS pixels
     */
    getContentWidth: function() {
      // Note the app contains more than one slide panel, but only
      // one that should be displayed at a given time
      var panels = $('.slide-panel').get();
      var activePanel = _.max(panels, function (panel) {
        return $(panel).width();
      });

      // Slide panels take twice the width available
      // (since they contain two panels)
      return Math.floor($(activePanel).width() / 2);
    },


    /**
     * Returns the height that is available for detailed views.
     *
     * The function is used in particular to tell the media factory the
     * maximum width it may use.
     *
     * @function
     * @return {integer} The width available in CSS pixels
     */
    getContentHeight: function() {
      // Note the app contains more than one slide panel, but only
      // one that should be displayed at a given time
      var panels = $('.slide-panel').get();
      var activePanel = _.max(panels, function (panel) {
        return $(panel).height();
      });
      return $(activePanel).height();
    },


    /**
     * Returns the URL of the thumbnail of an object
     *
     * @function
     * @param {object} item schema.org friendly object to parse
     * @return {string} Thumbnail URL that best match the viewport size
     */
    getThumbnail: function(item, offset) {
      if (!item) return '';

      var width = document.body.clientWidth * 0.5;
      var thumbnailWidth = 0;
      var bestWidth = 0;

      // Check the full list of thumbnails to start with
      var thumbnails = item.thumbnail;
      var thumbnailUrl = null;
      var thumbnail = null;
      var best = null;
      if (thumbnails && (thumbnails.length > 0)) {
        best = thumbnails[0];
        bestWidth = best.width || 0;

        for (var i=0; i < thumbnails.length; i++) {
          thumbnail = thumbnails[i];
          thumbnailWidth = thumbnail.width || 0;

          if (((thumbnailWidth >= width) &&
              ((thumbnailWidth < bestWidth) || (bestWidth < width))) ||
            ((bestWidth < width) && (thumbnailWidth > bestWidth))) {
            best = thumbnails[i];
          }
        }

        thumbnailUrl = best.thumbnailUrl;
      }

      if (!thumbnailUrl) {
        // No thumbnail URL found yet, return the content of the object
        // if it is an image, or the value of its image property if set
        if ((item['@type'] === 'ImageObject') && item.contentURL) {
          thumbnailUrl = item.contentURL;
        }
        else if (item.image && item.image.contentURL) {
          thumbnailUrl = item.image.contentURL;
        }
      }
      if (!thumbnailUrl) {
        thumbnailUrl = '';
      }
      return thumbnailUrl;
    },


    /**
     * Returns the URL of a thumbnail of the item's author.
     *
     * @function
     * @param {object} item schema.org friendly object to parse
     * @return {string} Thumbnail URL that best matches the viewport size
     */
    getAuthorThumbnail: function(item, offset) {
      if (!item) return '';

      var thumbnailUrl = '';
      if (item.author && item.author[0]) {
        thumbnailUrl = this.getThumbnail(item.author[0], offset);
      }
      if (!thumbnailUrl) {
        // Fallback to "usual" thumbnail
        thumbnailUrl = this.getThumbnail(item, offset);
      }
      return thumbnailUrl;
    },


    slugify: function(text) {
      text = text.replace(/[^\-a-zA-Z0-9,&\s]+/ig, '');
      text = text.replace(/-/gi, "_");
      text = text.replace(/\s/gi, "-");
      return text;
    }
  });

  return Sleek;
});
