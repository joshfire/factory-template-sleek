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
  'joshlib!ui/cardpanel',
  'joshlib!ui/fadeinpanel',
  'joshlib!ui/factorymedia',
  'joshlib!ui/imageloader',
  'joshlib!ui/imagesloader',
  'joshlib!router',
  'joshlib!vendor/backbone',
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar',
  'ui/imagegallery'],
function (Collection, DynamicContainer, Item, List, CardPanel, FadeInPanel, FactoryMedia, ImageLoader, ImagesLoader, Router, Backbone, _, $, ImageGallery) {

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
     * Client width available in CSS pixels
     *
     * Note the value is merely used as an indication to pick up a thumbnail
     * image for listing views. It is not correct in that it does not follow
     * orientation changes, but that's normally not a big deal.
     *
     * IMPORTANT: that value used to be computed in getThumbnail but, on iPad
     * at least, accessing document.body.clientWidth forces a refresh of the
     * screen which, in turn, means the screen will flicker for half a second,
     * hence the need to store it once and for all here.
     */
    clientWidth: document.body.clientWidth,

    /**
     * Initialization flag. The flag is set once the application is ready
     * to process its first route.
     */
    initialized: false,

    /**
     * The following flag is used to determine whether the router needs to
     * trigger the "loaded" hook when the main view is done rendering or
     * not.
     *
     * The flag is set once the hook has been triggered. Once set, this
     * flag is never reset while the application is running.
     */
    loadedHookTriggered: false,


    /**
     * Selector where fastNavigate() will be activated
     * False to disable
     */
    fastNavigateSelector: false,

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
    initialize: function() {
      var self = this;
      this.title = Joshfire.factory.config.app.name;
      this.tabs = Joshfire.factory.config.template.options.tabs || [];
      this.tabicons = Joshfire.factory.config.template.options.tabicons || [];
      this.backgroundURL = Joshfire.factory.config.template.options.backgroundimage ? Joshfire.factory.config.template.options.backgroundimage.url : Joshfire.factory.config.template.options.backgroundurl;
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
          var name = this.tabs[index] || datasource.name || '';
          var icon = this.tabicons[index];
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
            icon: icon || self.convertItemType(outputType),
            outputType: self.convertItemType(outputType),
            collection: collection,
            index: index
          };
        }, self));

        // Create the views once all sections have been initialized
        var views = self.createViews(sections);

        // Initialize the router and start the application
        var controllers = self.createRoutes(sections, views);
        self.router = Router(controllers);

        self.setupFastNavigate();
        self.init();
        self.initialized = true;
        // The "loaded" hook is triggered once when the router handles
        // the first route and when the view is rendered. The hook will
        // typically hide a possibly installed splashscreen
        var loaded = function() {
          if (!self.loadedHookTriggered && self.initialized) {
            self.loadedHookTriggered = true;
            Joshfire.factory.getAddOns('loaded').run();
          }
        };

        views.bind('load', loaded);

        //failsafe if first tab fails to load for some reason
        setTimeout(loaded, 20*1000); 

        views.render();
        self.router.historyStart();
        console.log('Init done');
      });
    },

    setupFastNavigate:function() {
      if (!this.fastNavigateSelector) return;
      var self = this;

      var fastNavigate = function(evt) {
        var href = $(evt.currentTarget).attr("href");

        if (href.substring(0,1)=="#") {
          self.router.navigate(href.substring(1),true);
          evt.preventDefault();
          evt.stopPropagation();

          return false;
        }
      };

      $(this.fastNavigateSelector).live("touchstart mousedown",fastNavigate);
    },

    /**
     * Overload this to get custom initializations for devices
     */
    init:function() {},


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
      else if(context === 'single') {
        return 'single content detail';
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
          icon: section.icon,
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
     * Initializes views created from the given list of sections.
     *
     * @function
     * @param {Array(Object)} sections The list of sections
     *  (see "initialize" for format)
     * @return {Object} Views created identified by their ID
     */
    createViews: function(sections) {
      var views = {};
      var sectionsView = null;

      // Create additional views and overlays
      // (hook for derivated classes to add more logic)
      this.createAdditionalViews(views);

      if (!sections || (sections.length === 0)) {
        sectionsView = new Item({
          el: '#cards',
          model: new Backbone.Model(),
          templateEl: '#template-nodata'
        });
        return sectionsView;
      }

      // Create the toolbar
      // (not very clean to set it in "this", but TV version needs
      // to put the toolbar in a horizontal layout)
      this.toolbarView = this.createToolbar(sections);

      // Parse sections and build corresponding views
      _.forEach(sections, _.bind(function(section) {
        var sectionView = this.createSectionView(section);
        views[section.slug] = sectionView;
      }, this));

      sectionsView = new FadeInPanel({
        el: '#cards',
        children: views
      });

      return sectionsView;
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
     * Section is a dynamic container so that we can automatically
     * switch to detail view when the collection contains only one
     * item
     */
    createSectionView: function(section) {
      var view = new DynamicContainer({
        collection: section.collection,
        viewFactory: this.viewFactory(section)
      });

      section.view = view;

      return view;
    },

    viewFactory: function(section) {
      return _.bind(function(params) {
        var collection = params.collection;

        if (section.outputType === 'photo') {
          return this.createListElement(section);
        }

        if(collection.length === 1) {
          return this.createDetailContainer(section, true);
        }

        var list = this.createListElement(section);
        var detail = this.createDetailContainer(section);
        var view = this.createListAndDetailView(list, detail);

        return view;
      }, this);
    },

    createListAndDetailView: function(list, detail) {
    },

    /**
     * Refreshes a section list.
     *
     * @function
     * @param {Object} the list section
     * @parma {Backbone.View} the section container
     */
    refreshList: function(section, container) {
      console.log("REFRESH LIST");
      section.collection.fetch({
        dataSourceQuery: {
          nocache: true
        },
        success: _.bind(function() {
          console.log('SHOW LIST');
          this.showList(section, container);
        }, this)
      });
    },

    /**
     * Updates a section list.
     *
     * @function
     * @param {Object} the list section
     * @parma {Backbone.View} the section container
     */
    updateList: function(section, container) {
      console.log("UPDATE LIST");
      section.collection.fetch({
        success: _.bind(function() {
          console.log("SHOW LIST");
          this.showList(section, container);
        }, this)
      });
    },

    /**
     * Displays a section list
     * (assuming the section is already active).
     *
     * @function
     * @param {Object} the list section
     * @parma {Backbone.View} the section container
     */
    showList: function(section, container) {
      if(container.view.children && container.view.children.list) {
        container.view.showChild('list', 'left');
      } else if(section.collection.length) {
        container.setModel(section.collection.at(0));
        container.render();
      }
    },

    /**
     * Moves focus to the list view
     * (for views that have separate list and a detail sub-views)
     *
     * @function
     * @param {Backbone.View} the section container
     */
    moveToList: function(container) {
      if (container.view.children && container.view.children.list) {
        container.view.showChild('list', 'left');
      }
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
      if(container.view.children && container.view.children.detail) {
        var detail = container.view.children.detail;

        if(section.collection.length > offset) {
          detail.setModel(section.collection.at(offset));
          detail.render();
        }

        container.view.showChild('detail', 'right');
      }
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
          className: section.outputType + ' ' + this.getClassName(section.outputType, 'list'),
          dataLoadingClass: 'dataloading',
          loadingClass: 'loading'
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
     * @param {bool} whether this is a detail view for a single page
     * @return {UIElement} The container element to use.
     *  Null when section does not have any associated detail view
     *  (or when the detail view is managed by dedicated code)
     */
    createDetailContainer: function(section, isSingle) {
      var self = this;

      return new DynamicContainer({
        viewFactory: function (options) {
          // Delegate the creation to createDetailElement
          _.extend(options, { slug: section.slug });
          return self.createDetailElement(options, isSingle);
        },
        className: self.getClassName(section, isSingle ? 'single' : 'detail')
      });
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
     * @param {Object} options Rendering options
     * @return {UIElement} The element to use.
     */
    createDetailElement: function(options) {
      if(!options.model) {
        return new Item({});
      }

      var itemType = this.convertItemType(options.model.get('@type'));
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
        case 'sound':
          return new FactoryMedia({
            templateEl: '#template-' + itemType,
            mediaOptions: {
              strategy: 'html5'
            }
          });
        case 'status':
          return new ImageLoader({
            templateEl: '#template-' + itemType,
            scroller: true,
            getImageUrl: function () {
              return self.getAuthorThumbnail(options.model.toJSON());
            }
          });
        case 'photo':
        case 'product':
        case 'other':
          return new ImageLoader({
            templateEl: '#template-' + itemType,
            scroller: true,
            getImageUrl: function () {
              return self.getThumbnail(options.model.toJSON());
            }
          });
        default:
          return new ImagesLoader({
            templateEl: '#template-' + itemType,
            scroller: true,
            imageClass: 'fadein',
            processImageEl: function (el) {
              // Prepare image container and spinner
              var loader = document.createElement('div');
              loader.setAttribute('class', 'loader inv');
              var container = document.createElement('div');
              container.setAttribute('class', 'figure');
              container.appendChild(loader);

              // Constrain container width to the width of the image if known
              // so that the loader appears correctly centered on screen.
              // (it would always appear at the center of the screen otherwise)
              if (el.getAttribute('width')) {
                container.setAttribute('style',
                  'width:' + el.getAttribute('width') + 'px;max-width:100%');
              }
              else {
                container.setAttribute('style',
                  'width:' + el.getAttribute('width') + 'px;max-width:100%');
              }

              // Wrap the image in its container and return the container
              el.parentNode.replaceChild(container, el);
              container.appendChild(el);
              return container;
            }
          });
      }
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
          case 'news':
            options.getImageUrl = function () {
              return self.getThumbnail(item, offset, 0.2);
            };
            options.imageContainer = '.figure';
            return new ImageLoader(options);

          case 'status':
            options.getImageUrl = function () {
              return self.getAuthorThumbnail(item, offset);
            };
            options.imageContainer = '.figure';
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
            window.location = '#' + sections[0].slug;
          }
          else {
            $('#title').html('No data');
            document.body.id = 'nodata';
            $('#refresh').hide();
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
      return Math.floor($(activePanel).width());
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
     * @param {Integer} offset The offset position (only used in TV version)
     * @param {Number} widthRatio The fraction of screen width available
     *  for the image, e.g. 0.4 for a thumbnail that is to occupy 40% of the
     *  screen width
     * @return {string} Thumbnail URL that best match the viewport size
     */
    getThumbnail: function(item, offset, widthRatio) {
      if (!item) return '';

      widthRatio = widthRatio || 0.2;
      var neededWidth = this.clientWidth * widthRatio;
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

          if (((thumbnailWidth >= neededWidth) &&
              ((thumbnailWidth < bestWidth) || (bestWidth < neededWidth))) ||
            ((bestWidth < neededWidth) && (thumbnailWidth > bestWidth))) {
            best = thumbnails[i];
          }
        }

        thumbnailUrl = best.contentURL;
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
        thumbnailUrl = this.getThumbnail(item.author[0], offset, 0.2);
      }
      if (!thumbnailUrl) {
        // Fallback to "usual" thumbnail
        thumbnailUrl = this.getThumbnail(item, offset, 0.2);
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
