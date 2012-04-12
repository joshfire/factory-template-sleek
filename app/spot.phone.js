define([
  'spot',
  'joshlib!ui/toolbar',
  'joshlib!ui/slidepanel',
  'joshlib!ui/list',
  'joshlib!ui/item',
  'joshlib!ui/factorymedia',
  'ui/imagegallery',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore'
  ],
function(Spot, Toolbar, SlidePanel, List, Item, FactoryMedia, ImageGallery, $, _) {

  return Spot.extend({

    setColor: function(color) {
      $('#color').remove();
      $('head').append('<link id="color" rel="stylesheet" href="css/phone.' + color + '.css" type="text/css">');
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

      var toolbar = new Toolbar({
        el: '#toolbar',
        templateEl: '#template-toolbar',
        itemTemplateEl: '#toolbar-item',
        scroller: true,
        scrollOptions: {
          vScroll: false,
          hScrollbar: false,
          snap: true,
          bounce: false
        },
        useWindowWidth: true
      });

      toolbar.setCollection(sectionCollection);
      toolbar.render();

      //
      // Views
      //
      var views = {};
      var $cards = $('#cards');

      _.forEach(sections, _.bind(function(section) {
        var view;

        switch(section.outputType) {
          case 'statuses':
          view = new SlidePanel({
            children: {
              list: new List({
                templateEl: '#template-list-view',
                scroller: true,
                itemFactory: this.itemFactory(section),
                collection: section.collection,
                className: section.outputType + ' content hashed-list'
              }),
              detail: new Item({
                templateEl: '#template-status',
                scroller: true,
                className: 'content detail'
              })
            },
            className: 'slide-panel'
          });
          break;
          case 'news':
          view = new SlidePanel({
            children: {
              list: new List({
                templateEl: '#template-list-view',
                scroller: true,
                itemFactory: this.itemFactory(section),
                collection: section.collection,
                className: section.outputType + ' content simple-list'
              }),
              detail: new Item({
                templateEl: '#template-news',
                scroller: true,
                className: 'content detail'
              })
            },
            className: 'slide-panel'
          });
          break;
          case 'events':
          view = new SlidePanel({
            children: {
              list: new List({
                templateEl: '#template-list-view',
                scroller: true,
                itemFactory: this.itemFactory(section),
                collection: section.collection,
                className: section.outputType + ' content hashed-list'
              }),
              detail: new Item({
                templateEl: '#template-event',
                scroller: true,
                className: 'content detail'
              })
            },
            className: 'slide-panel'
          });
          break;
          case 'videos':
          view = new SlidePanel({
            children: {
              list: new List({
                templateEl: '#template-list-view',
                scroller: true,
                itemFactory: this.itemFactory(section),
                collection: section.collection,
                className: section.outputType + ' content simple-list'
              }),
              detail: new FactoryMedia({
                templateEl: '#template-video',
                scroller: true,
                className: 'content detail',
                mediaOptions: {
                  strategy: 'html5',
                  width: '100%'
                }
              })
            },
            className: 'slide-panel'
          });
          break;
          case 'photos':
          view = new SlidePanel({
            children: {
              list: new ImageGallery({
                templateEl: '#template-list-view',
                scroller: true,
                itemFactory: this.itemFactory(section),
                collection: section.collection,
                className: section.outputType + ' content mosaic-list'
              })
            },
            className: 'slide-panel'
          });
          break;
        }

        if(view) {
          _.each(view.children, function(child) {
            $(view.el).append(child.el);
          });
          view.hide();
          views[section.slug] = view;
          $cards.append(view.el);
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
      var $back = $('#back');
      var $refresh = $('#refresh');

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
          view.showChildren('list');
          //view.render();
          $('iframe').remove();
          document.body.id = section.outputType;
          $title.html(section.name);
          $toolbar.find('.active').removeClass('active');
          $toolbar.find('.section-' + section.slug).addClass('active');
          $refresh.show().unbind('click').bind('click', function(e) {
            section.collection.fetch();
            e.preventDefault();
            return false;
          });
          $back.hide();

          section.collection.length || section.collection.fetch();
        }

        // Detail route
        if(section.outputType !== 'photos') {
          controllers.routes[section.slug + '/:offset'] = section.slug + 'Detail';

          controllers[section.slug + 'Detail'] = function(offset) {
            var view = views[section.slug];
            var detail = view.children.detail;
            _.forEach(views, function(child) {
              if(child !== view) {
                child.hide();
              }
            });
            view.show();
            view.showChildren('detail');
            //view.render();
            offset = parseInt(offset, 10);
            $('iframe').remove();
            document.body.id = section.outputType;
            $title.html(section.name);
            $toolbar.find('.active').removeClass('active');
            $toolbar.find('.section-' + section.slug).addClass('active');
            $refresh.hide();
            $back.attr('href', '#' + section.slug);
            $back.css({display: 'block'});


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

          if(thumbnail.width >= width && (thumbnail.width < best.width || best.width < width)) {
            best = thumbnails[i];
          }
        }

        return best.contentURL;
      }

      return item.contentURL;
    }
  });
});
