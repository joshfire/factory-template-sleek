define([
  'spot.tablet',
  'joshlib!collection',
  'joshlib!ui/list',
  'ui/imagegallery',
  'joshlib!ui/item',
  'joshlib!ui/imageloader',
  'joshlib!ui/factorymedia',
  'joshlib!router',
  'joshlib!ui/cardpanel',
  'joshlib!ui/slidepanel',
  'ui/text',
  'ui/map',
  'joshlib!adapters/phone/ui/toolbar',
  'joshlib!utils/onready',
  'joshlib!collection',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore',
  'joshlib!vendor/backbone'],
function(Spot, Collection, List, ImageGallery, Item, ImageLoader, FactoryMedia, Router, CardPanel, SlidePanel, Text, Map, Toolbar, onReady, Collection,$,_,Backbone) {

  onReady(function() {
    Spot.initialize();

    var datasources = Joshfire.factory.getDataSource('main');
    var sections = new Array(datasources.children.length);

    // Called after sections are initialized
    var initialize = function() {
      //
      // Toolbar
      //
      var sectionCollection = new Backbone.Collection();

      for(var i = 0; i < sections.length; i++) {
        section = sections[i];
        sectionCollection.add({
          name: section.name,
          linkURL: '#' + section.slug,
          outputType: section.outputType
        });
      }

      var toolbar = new List({
        el: '#toolbar',
        templateEl: '#template-toolbar',
        itemTemplateEl: '#toolbar-item'
      });

      toolbar.setCollection(sectionCollection);
      toolbar.render();

      //
      // Views
      //
      var views = {};
      var $cards = $('#cards');

      _.forEach(sections, function(section) {
        var list;
        var detail;

        switch(section.outputType) {
          case 'statuses':
          list = new List({
            templateEl: '#template-list-view',
            scroller: true,
            itemFactory: Spot.itemFactory(section),
            collection: section.collection,
            className: section.outputType + ' left-panel hashed-list'
          });
          detail = new Item({
            templateEl: '#template-status',
            scroller: true,
            className: 'right-panel'
          });
          break;
          case 'news':
          list = new List({
            templateEl: '#template-list-view',
            scroller: true,
            itemFactory: Spot.itemFactory(section),
            collection: section.collection,
            className: section.outputType + ' left-panel simple-list'
          });
          detail = new Item({
            templateEl: '#template-news',
            scroller: true,
            className: 'right-panel'
          });
          break;
          case 'events':
          list = new List({
            templateEl: '#template-list-view',
            scroller: true,
            itemFactory: Spot.itemFactory(section),
            collection: section.collection,
            className: section.outputType + ' left-panel hashed-list'
          });
          detail = new Item({
            templateEl: '#template-event',
            scroller: true,
            className: 'right-panel'
          });
          break;
          case 'videos':
          list = new List({
            templateEl: '#template-list-view',
            scroller: true,
            itemFactory: Spot.itemFactory(section),
            collection: section.collection,
            className: section.outputType + ' left-panel simple-list'
          });
          detail = new FactoryMedia({
            templateEl: '#template-video',
            scroller: true,
            className: 'right-panel',
            mediaOptions: {
              strategy: 'html5',
              width: '100%'
            }
          });
          break;
          case 'photos':
          list = new ImageGallery({
            templateEl: '#template-list-view',
            scroller: true,
            itemFactory: Spot.itemFactory(section),
            collection: section.collection,
            className: section.outputType + ' section mosaic-list'
          });
          break;
        }

        if(list) {
          list.hide();
          list.render();
          views[section.slug] = list;
          $cards.append(list.el);
        }

        if(detail) {
          detail.hide();
          views[section.slug + 'Detail'] = detail;
          $cards.append(detail.el);
        }
      });

      //
      // Routes
      //
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
      var $title = $('#title');
      var $toolbar = $('#toolbar');

      _.forEach(sections, function(section) {
        controllers.routes[section.slug] = section.slug;

        controllers[section.slug] = function() {
          var view = views[section.slug];
          _.forEach(views, function(child) {
            if(child !== view) {
              child.hide();
            }
          });
          view.show();
          $('iframe').remove();
          document.body.id = section.outputType;
          $title.html(section.name);

          section.collection.fetch({
            success: function() {
              view.render();

              if(section.collection.length !== 0 &&
                _.include(['statuses', 'news', 'videos', 'events'], section.outputType)) {
                var detail = views[section.slug + 'Detail'];
                detail.setModel(section.collection.at(0));
                detail.show();
                detail.render();
              }
            }
          });
        }

        if(_.include(['statuses', 'news', 'videos', 'events'], section.outputType)) {
          controllers.routes[section.slug + '/:offset'] = section.slug + 'Detail';

          controllers[section.slug + 'Detail'] = function(offset) {
            var view = views[section.slug];
            var detail = views[section.slug + 'Detail'];
            offset = parseInt(offset, 10);
            view.show();
            $('iframe').remove();
            document.body.id = section.outputType;
            $title.html(section.name);

            if(section.collection.length === 0) {
              section.collection.fetch({
                success: function() {
                  view.render();

                  if(section.collection.length > offset) {
                    detail.setModel(section.collection.at(offset));
                    detail.show();
                    detail.render();
                  }
                }
              });
            } else if(section.collection.length > offset) {
              detail.setModel(section.collection.at(offset));
              detail.show();
              detail.render();
            }
          };
        }
      });

      var router = Router(controllers);
      router.historyStart();
    }

    //
    // Sections
    //
    var loaded = 0;

    _.forEach(datasources.children, function(datasource, index) {
      var name = datasource.name;
      var slug = Spot.slugify(name.toLowerCase());
      var collection = new Collection([], {
        dataSource: datasource,
        dataSourceQuery: {}
      });
      var outputType;

      datasource.getDesc(function(err, desc) {
        switch(desc.outputType) {
          case 'Article/Status':
          outputType = 'statuses';
          break;
          case 'NewsArticle':
          case 'BlogPosting':
          outputType = 'news';
          break;
          case 'Event':
          outputType = 'events';
          break;
          case 'ImageObject':
          outputType = 'photos';
          break;
          case 'VideoObject':
          outputType = 'videos';
          break;
        }

        sections[index] = {
          name: name,
          slug: index + '--' + slug,
          outputType: outputType,
          collection: collection
        };

        if(++loaded === datasources.children.length) {
          initialize();
        }
      });
    });
  });
});
