/**
 * @fileoverview Main template logic, code shared by all platforms supported
 * by the template.
 *
 * The code is extended in sleek.[platform].js to add platform-specific logic.
 * To ease maintenance, the goal is to share as much code as possible between
 * versions.
 */

/*global define, Joshfire, document, moment, console, woodmanConfig*/

define([
  'joshlib!collection',
  'joshlib!ui/dynamiccontainer',
  'joshlib!ui/item',
  'joshlib!ui/list',
  'joshlib!ui/listitem',
  'joshlib!ui/fadeinpanel',
  'joshlib!ui/factorymedia',
  'ui/imagesloader',
  'joshlib!router',
  'joshlib!vendor/backbone',
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar',
  'joshlib!utils/i18n',
  'joshlib!utils/woodman',
  'lang/config',
  'ui/imagegallery'
], function (
  Collection,
  DynamicContainer,
  Item,
  List,
  ListItem,
  FadeInPanel,
  FactoryMedia,
  ImagesLoader,
  Router,
  Backbone,
  _,
  $,
  Localizer,
  woodman,
  LocaleConfig,
  ImageGallery) {

  var logger = woodman.getLogger('sleek');

  // The "empty" template is used to display an "Empty feed" empty view when
  // the underlying feed does not contain any item or has not yet been fetched.
  // The template should really not be different from one version to another.
  // TODO: when refactoring templates using "text!" or "tpl!" require.js
  // plugins, move the template to a separate file along with the other
  // templates.
  var templateEmpty = '<div class="single"><div>' +
    '<div class="nodata"><%= T("empty") %></div>' +
    '<div class="loader large">&nbsp;</div>' +
    '</div></div>';

  var Sleek = function () {
    _.bindAll(this, 'initialize',  'setColor', 'slugify');
  };

  Sleek.extend = Backbone.View.extend;
  _.extend(Sleek.prototype, Backbone.Events);
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
        logger.warn('convert item type', 'default case called', outputType);
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
    initialize: function (opt, callback) {

      var self = this;
      this.localizer = Localizer;
      this.title = Joshfire.factory.config.app.name;
      this.tabs = Joshfire.factory.config.template.options.tabs || [];
      this.tabicons = Joshfire.factory.config.template.options.tabicons || [];
      this.backgroundURL = Joshfire.factory.config.template.options.backgroundimage ? Joshfire.factory.config.template.options.backgroundimage.url : Joshfire.factory.config.template.options.backgroundurl;
      this.logoURL = Joshfire.factory.config.app.logo ?
                  Joshfire.factory.config.app.logo.contentURL : null;

      if (opt && opt.templates) {
        this.templates = opt.templates;
      } else {
        console.error('No templates were loaded.');
        throw new Error();
      }
      // Set the document's title to the application title
      document.title = this.title;

      var config = {};
      if (typeof woodmanConfig !== 'undefined') {
        config = woodmanConfig;
      }

      woodman.load(config, _.bind(function (err) {

        if (err) {
          console.error(err);
        }

        // Open external link in another window
        // Not necessary anymore since we now have the in-app browser.
        // Leaving the code here temporarily. (famous last words - 07/13)
        /*
        $('body').on('click', 'a', function () {
          if ($(this).is('.img, .image')) return true;
          var url = $(this).attr('href');
          if (url && url.indexOf('http://') > -1) {
            window.open(url, '_system');
            return false;
          }
        });
        */

        // Sets the locale and loads the corresponding dictionnary.
        // It is then defined in the html templates's scope.
        this.localizer.setLocale({
          locale: Joshfire.factory.config.template.options.language || 'auto',
          availableLocales: LocaleConfig.AVAILABLE,
          defaultLocale: LocaleConfig.DEFAULT
        }, function() {
          // Includes the correct dictionnary which is required by
          // moment.js's i18n native solution.
          self.setMomentLanguage();
          // Set the template color based on the option selected by the user
          // (this loads the CSS)
          self.setColor(Joshfire.factory.config.template.options.color || 'gray', function () {
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
              var collection = this.createCollection(datasource);
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
            loaded = function() {
              if (!self.loadedHookTriggered && self.initialized) {
                logger.info('trigger loaded hook');
                self.loadedHookTriggered = true;
                Joshfire.factory.getAddOns('loaded').run();
              }
              if (navigator && navigator.splashscreen) {
                setTimeout(navigator.splashscreen.hide, 500);
              }
            };

            views.bind('load', loaded);

            //failsafe if first tab fails to load for some reason
            setTimeout(loaded, 20*1000);

            self.toolbarView.render();
            views.render();

            if (callback) callback();
            self.router.historyStart();
          });
        });
      }, this));
    },

    createCollection: function(datasource) {
      logger.log('create collection', datasource.name);
      return new Collection([], {
        dataSource: datasource,
        dataSourceQuery: {}
      });
    },

    setupFastNavigate:function() {
      if (!this.fastNavigateSelector) return;
      var self = this;

      var fastNavigate = function(evt) {
        var href = $(evt.currentTarget).attr('href');

        if (href && (href.substring(0,1) === '#')) {
          self.router.navigate(href.substring(1),true);
          evt.preventDefault();
          evt.stopPropagation();

          return false;
        }
      };

      $(this.fastNavigateSelector).live('touchstart mousedown', fastNavigate);
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
      window.Sid.css('css/' + this.deviceFamily + '.' + color + '.css', callback, 'afterfirststyle');
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
      logger.log('create toolbar');
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
      toolbar.setCollection(sectionCollection, true);
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
      logger.log('create views', 'sections=' + (sections ? sections.length : 0));
      var views = {};
      var sectionsView = null;

      // Create additional views and overlays
      // (hook for derivated classes to add more logic)
      this.createAdditionalViews(views);

      if (!sections || (sections.length === 0)) {
        sectionsView = new Item({
          el: '#cards',
          model: new Backbone.Model(),
          template: '#template-nodata'
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
      logger.log('create toolbar element');
      var Toolbar = List.extend({
        generate: function (cb) {
          if (this.collection && (this.collection.length < 2)) {
            logger.info('no toolbar element needed');
            $('body').addClass('no-toolbar');
          }
          List.prototype.generate.call(this, cb);
        }
      });
      return new Toolbar({
        name: 'toolbar',
        el: '#toolbar',
        template: this.templates.toolbar,
        itemOptions: {
          template: this.templates.toolbarItem
        }
      });
    },

    /**
     * Section is a dynamic container so that we can automatically
     * switch to detail view when the collection contains only one
     * item
     */
    createSectionView: function (section) {
      logger.log('create section view', section.name);

      var view = new DynamicContainer({
        name: section.slug + '-list',
        collection: section.collection,
        viewFactory: this.viewFactory(section),
        hidden: true
      });

      section.view = view;

      return view;
    },

    viewFactory: function(section) {
      return _.bind(function(params) {
        var collection = params.collection;

        if (!collection || collection.length === 0) {
          logger.log(section.slug, 'view factory', 'create empty element');
          return this.createEmptyElement(section, collection);
        }

        if (section.outputType === 'photo') {
          logger.log(section.slug, 'view factory',
            'create list element');
          return this.createListElement(section);
        }

        if (collection.length === 1) {
          logger.log(section.slug, 'view factory',
            'create detail container');
          return this.createDetailContainer(section, true);
        }

        logger.log(section.slug, 'view factory',
          'create container with list and detail views');

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
      logger.log(section.slug, 'refresh list');
      section.collection.fetch({
        dataSourceQuery: {
          nocache: true
        },
        success: _.bind(function() {
          this.showList(section, container);
        }, this),
        error: function (err) {
          logger.error(section.slug, 'refresh list',
            'error', err);
        }
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
      logger.log(section.slug, 'update list');
      section.collection.fetch({
        success: _.bind(function() {
          this.showList(section, container);
        }, this),
        error: function (err) {
          logger.error(section.slug, 'update list',
            'error', err);
        }
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
      if (container.view.children && container.view.children.list) {
        logger.log(section.slug, 'show list', 'display list');
        container.view.showChild('list', 'left');
      }
      else if (section.collection.length) {
        logger.log(section.slug, 'show list', 'render list');
        container.setModel(section.collection.at(0), true);
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
        logger.log('move to list');
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
      logger.log(section.slug, 'update detail',
        'offset=' + offset);
      section.collection.fetch({
        success: _.bind(function() {
          this.showDetail(section, container, offset);
        }, this),
        error: function (err) {
          logger.error(section.slug, 'update detail',
            'offset=' + offset,
            'error', err);
        }
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

          detail.setModel(section.collection.at(offset), true);

        }

        container.view.showChild('detail', 'right');
      }
    },


    /**
     * Creates the element to use to represent an empty collection for
     * the given section. The collection may be empty because items have
     * not yet been fetched or because it is empty.
     *
     * The collection should be given as parameter to let the view render
     * a spinner while the collection is being fetched.
     */
    createEmptyElement: function (section, collection) {
      section = section || {};
      logger.log(section.slug, 'create empty element');

      var viewOptions = {
        name: section.slug + '-empty',
        model: new Backbone.Model(),
        template: templateEmpty
      };

      if (collection && !collection.fetched) {
        viewOptions.className = 'loading';
      }

      var emptyView = new Item(viewOptions);

      if (collection && !collection.fetched) {
        emptyView.listenTo(collection, 'load', function () {
          emptyView.$el.removeClass('loading');
        });
      }

      return emptyView;
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
      section = section || {};

      if (section.outputType === 'photo') {
        logger.log(section.slug, 'create list element',
          'image gallery');
        var isSingle = (section.collection.length > 1) ? '' : 'single';
        var t = isSingle ? this.templates.singlePhoto : this.templates.listView;
        return new ImageGallery({
          name: section.slug + '-list',
          template: t,
          scroller: true,
          itemFactory: this.itemFactory(section),
          listItemFactory: this.listItemFactory(section),
          collection: section.collection,
          className: isSingle + ' ' + section.outputType + ' ' + this.getClassName(section.outputType, 'list'),
          dataLoadingClass: 'dataloading',
          dataLoadingMoreClass: 'dataloadingmore',
          loadingClass: 'loading',
          autoLoadMore: true
        });
      }
      else {
        logger.log(section.slug, 'create list element',
          'regular list');
        return new List({
          name: section.slug + '-list',
          template: this.templates.listView,
          scroller: true,
          itemFactory: this.itemFactory(section),
          listItemFactory: this.listItemFactory(section),
          collection: section.collection,
          className: section.outputType + ' ' +
            this.getClassName(section.outputType, 'list'),
          autoLoadMore: true,
          dataLoadingClass: 'dataloading',
          dataLoadingMoreClass: 'dataloadingmore'
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
      section = section || {};

      logger.log(section.slug, 'create detail container',
        'isSingle=' + !!isSingle);
      return new DynamicContainer({
        name: section.slug + '-detail',
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


      options = options || {};
      if (!options.model) {
        logger.log('create detail element', 'no model');
        return new Item({});
      }

      var itemType = this.convertItemType(options.model.get('@type'));
      var self = this;

      logger.log('create detail element', 'itemType=' + itemType);
      switch (itemType) {
      case 'video':
        return new FactoryMedia({
          name: 'item-' + itemType,
          template: this.templates.video,
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
          name: 'item-' + itemType,
          template: this.templates.sound,
          mediaOptions: {
            strategy: 'html5'
          }
        });
      case 'status':

        var statusView = new ImagesLoader({
          name: 'item-' + itemType,
          scrollerSelector: '.joshfire-wrapper',
          template: this.templates.status,
          scroller: true,
          imageSchema: self.getAuthorImageSchema(options.model.toJSON())
        });

        mentionsView = [];

        var sectionSlug = options.slug.search('twitter');

        if(options.model.get('mentions') && sectionSlug === -1) {
          _.each(options.model.get('mentions'),function(mention) {
            var mentionView = self.createMentionView(mention);
            if(mentionView){
              mentionsView.push(mentionView);
            }
          });

          statusView.on('enhanced', function() {
            _.each( mentionsView , function(mentionView) {
              mentionView.el.className = 'attached-media';
              mentionView.render();
              mentionView.on('load', function() {
                statusView.iScroller.refresh();
              });
              statusView.$('.attached-medias').append(mentionView.el);
              statusView.iScroller.refresh();
            });

          });
        }


        return statusView;

      case 'photo':
      case 'product':
      case 'other':
        return new ImagesLoader({
          name: 'item-' + itemType,
          template: this.templates[itemType],
          scroller: true,
          imageSchema: options.model.toJSON()
        });

      case 'news':
        if (options.model.get('articleBody')) {
          var body = options.model.get('articleBody').replace(/\n|\r\n/g,'<br>');
          options.model.set('articleBody', body, {silent: true});
        }
        return new ImagesLoader({
          name: 'item-' + itemType,
          template: this.templates.news,
          scroller: true,
          imageClass: 'fadein',
          imageSchema: options.model.toJSON()
        });
      default:
        return new ImagesLoader({
          name: 'item-' + itemType,
          template: this.templates[itemType],
          scroller: true,
          imageClass: 'fadein',
          imageSchema: options.model.toJSON(),
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

    createMentionView: function(mention) {

      var self = this;
      var model = new Backbone.Model(mention);

      switch ( mention['@type'] ) {
        case 'ImageObject':
          logger.log ('Create mention ImageLoader');

          return new ImagesLoader( {
            model: model,
            template: this.templates.mentionItem,
            imageSchema: model.toJSON()
          } );

        case 'VideoObject':
          logger.log ('Create mention VideoLoader');
          return new FactoryMedia({
            model: model,
            scroller: true,
            template: this.templates.video,
            width: self.getContentWidth(),
            height: self.getContentHeight(),
            mediaOptions: {
              strategy: 'html5',
              width: '100%',
              height: '80%',
              adjustSize: true
            }
          } );

        default:
          if (mention.name && mention.description) {
            return new ImagesLoader( {
              model: model,
              template: this.templates.mentionItem,
              imageSchema: model.toJSON()
            } );
          } else {
            return false;
          }
      }

    },

    listItemFactory: function (section) {
      var self = this;

      return function (model, offset) {
        logger.log(this.logid, 'list item factory',
          'offset=' + offset,
          'section=' + section.slug);
        var item = model.toJSON(),
          type = self.convertItemType(item['@type']) || section.outputType,
          className = type + '-item';
        var params = {
          name: 'itemwrapper-' + type,
          model: model,
          offset: offset,
          view: this.itemFactory(model, offset),
          className: className
        };

        return new ListItem(params);
      };
    },

    //
    // Creates a list item view based on the type of the item.
    //
    itemFactory: function (section) {
      section = section || {};
      logger.log(section.slug, 'item factory');

      var self = this;

      return function (model, offset) {
        var item = model.toJSON();
        var type = self.convertItemType(item['@type']) || section.outputType;
        var template = self.templates[type + 'Item'];

        var options = {
          name: section.slug + '-item-' + offset + '-' + type,
          data: { section: section },
          model: model,
          offset: offset,
          template: template
        };

        logger.log(this.logid, 'item factory',
          'offset=' + offset,
          'section=' + section.slug,
          'type=' + type);

        switch(type) {
        case 'photo':
        case 'video':
        case 'product':
        case 'news':
          options.imageSchema = options.model.toJSON();
          options.imageContainer = '.figure';
          return new ImagesLoader(options);

        case 'status':
          options.imageSchema = self.getAuthorImageSchema(item);
          options.imageContainer = '.figure';
          return new ImagesLoader(options);

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
      logger.log('create routes');
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
      return Math.floor($('#cards').width());
    },


    /**
     * Returns the height that is available for detailed views.
     *
     * The function is used in particular to tell the media factory the
     * maximum width it may use.
     *
     * @function
     * @return {integer} The height available in CSS pixels
     */
    getContentHeight: function() {
      return Math.floor($('#cards').height());
    },

    /**
     * Sets the global language of the app.
     *
     * @function
     * @param {string} locale || auto ; should be sent by the factory
     * @return {null}
     */
    setMomentLanguage: function() {
      // en is the default lang here, move along
      if(this.localizer.getLocale() === 'en') return;
      window.Sid.js('lang/moment/' + this.localizer.getLocale() + '.js',
        _.bind(function() {
          moment.lang(this.localizer.getLocale());
        }, this)
      );
    },


    /**
     * Returns a data schema with the image of the item's author.
     *
     * @function
     * @param {object} item schema.org friendly object to parse
     * @return {string} Thumbnail URL that best matches the viewport size
     */
    getAuthorImageSchema: function(item) {
      if (item && item.author && item.author[0]) {
        console.warn(item.author[0]);
        return item.author[0];
      }
      return item;
    },

    /**
     * Returns a data schema with the mention of the item's author.
     *
     * @function
     * @param {object} item schema.org friendly object to parse
     * @return {string} Thumbnail URL that best matches the viewport size
     */
    getAuthorMentionSchema: function(item) {
      if (item && item.mentions && item.mentions[0]) {
        return item.mentions;
      }
      return item;
    },


    slugify: function(text) {
      text = text.replace(/[^\-a-zA-Z0-9,&\s]+/ig, '');
      text = text.replace(/-/gi, '_');
      text = text.replace(/\s/gi, '-');
      text = text.replace(/&/gi, '-');
      return text;
    }
  });

  return Sleek;
});
