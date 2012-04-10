define([
  'spot',
  'joshlib!ui/list',
  'joshlib!ui/item',
  'joshlib!ui/factorymedia',
  'ui/imagegallery',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore'
  ],
function(Spot, List, Item, FactoryMedia, ImageGallery, $, _) {

  return Spot.extend({

    setColor: function(color) {
      $('#color').remove();
      $('head').append('<link id="color" rel="stylesheet" href="css/tablet.' + color + '.css" type="text/css">');
    },

    //
    // Creates views
    //
    createViews: function(sections) {
      //
      // Toolbar
      //
      var sectionCollection = new Backbone.Collection();

      for(var i = 0; i < sections.length; i++) {
        section = sections[i];
        sectionCollection.add({
          name: section.name,
          linkURL: '#' + section.slug,
          outputType: section.outputType,
          slug: section.slug
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

      _.forEach(sections, _.bind(function(section) {
        var list;
        var detail;

        switch(section.outputType) {
          case 'statuses':
          list = new List({
            templateEl: '#template-list-view',
            scroller: true,
            itemFactory: this.itemFactory(section),
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
            itemFactory: this.itemFactory(section),
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
            itemFactory: this.itemFactory(section),
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
            itemFactory: this.itemFactory(section),
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
            itemFactory: this.itemFactory(section),
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
      }, this));

      return views;
    },

    //
    // Creates routes
    //
    createRoutes: function(sections, views) {
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

        // List route
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
          $toolbar.find('.active').removeClass('active');
          $toolbar.find('.section-' + section.slug).addClass('active');

          if(section.outputType !== 'photos') {
            var detail = views[section.slug + 'Detail'];
            detail.show();
          }

          section.collection.fetch({
            success: function() {
              view.render();

              if(section.collection.length !== 0 && section.outputType !== 'photos') {
                detail.setModel(section.collection.at(0));
                detail.render();
                view.$('.active').removeClass('active');
                $(view.$('li')[0]).addClass('active');
              }
            }
          });
        }

        // Detail route
        if(section.outputType !== 'photos') {
          controllers.routes[section.slug + '/:offset'] = section.slug + 'Detail';

          controllers[section.slug + 'Detail'] = function(offset) {
            var view = views[section.slug];
            var detail = views[section.slug + 'Detail'];
            offset = parseInt(offset, 10);
            view.show();
            $('iframe').remove();
            document.body.id = section.outputType;
            $title.html(section.name);
            $toolbar.find('.active').removeClass('active');
            $toolbar.find('.section-' + section.slug).addClass('active');
            detail.show();

            if(section.collection.length === 0) {
              section.collection.fetch({
                success: function() {
                  view.render();

                  if(section.collection.length > offset) {
                    detail.setModel(section.collection.at(offset));
                    detail.render();
                    view.$('.active').removeClass('active');
                    $(view.$('li')[offset]).addClass('active');
                  }
                }
              });
            } else if(section.collection.length > offset) {
              detail.setModel(section.collection.at(offset));
              detail.render();
              view.$('.active').removeClass('active');
              $(view.$('li')[offset]).addClass('active');
            }
          };
        }
      });

      return controllers;
    },

    //
    // Returns a thumbnail URL form a video object
    //
    getVideoThumbnail: function(item) {
      if(item.thumbnails) {
        var thumbnails = item.thumbnail;
        var best = thumbnails[0];

        for (var i = 1; i < thumbnails.length; i++) {
          var thumbnail = thumbnails[i];

          if(thumbnail.width > best.width) best = thumbnail;
        };

        return best.contentURL;
      }

      return item.image.contentURL;
    },

    getThumbnail: function(item, offset) {
      var width = document.body.clientWidth * .5;

      if(item.thumbnail) {
        var thumbnails = item.thumbnail;
        var best = thumbnails[0];

        for (var i=0; i < thumbnails.length; i++) {
          var thumbnail = thumbnails[i];

          if(thumbnail.width >= width && (thumbnail.width < best.width || best.width < width) || best.width < width && thumbnail.width > best.width) {
            best = thumbnails[i];
          }
        }

        return best.contentURL;
      }

      return item.contentURL;
    }
  });
});
