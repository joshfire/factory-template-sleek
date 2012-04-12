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

    setColor: function(color) {
      $('#color').remove();
      $('head').append('<link id="color" rel="stylesheet" href="css/tv.' + color + '.css" type="text/css">');
    },

    setLogo: function(url) {
      $('#logo').html('<img src="' + url + '" >');
    },

    setTitle: function(value) {
      $('#logo').html(value);
    },

    setBackground: function(url) {
      $('body').css({
        backgroundImage: 'url(' + url + ')'
      });
    },

    //
    // Creates views
    //
    createViews: function(sections) {
      var self = this;
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
        itemTemplateEl: '#toolbar-item'
      });

      toolbar.setCollection(sectionCollection);
      toolbar.render();

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
              list: new VerticalList({
                templateEl: '#template-list-view',
                offsetTop: 40,
                offsetBottom: 40,
                itemFactory: this.itemFactory(section),
                collection: section.collection,
                className: section.outputType + ' content'
              }),
              detail: new Item({
                templateEl: '#template-status',
                scroller: true,
                offsetTop: 100,
                offsetBottom: 100,
                navLeft: function() {
                  window.location = '#' + section.slug;
                },
                className: 'content detail'
              })
            },
            className: 'slide-panel'
          });
          break;
          case 'news':
          view = new SlidePanel({
            children: {
              list: new VerticalList({
                templateEl: '#template-list-view',
                offsetTop: 40,
                offsetBottom: 40,
                itemFactory: this.itemFactory(section),
                collection: section.collection,
                className: section.outputType + ' content'
              }),
              detail: new Item({
                templateEl: '#template-news',
                scroller: true,
                offsetTop: 100,
                offsetBottom: 100,
                navLeft: function() {
                  window.location = '#' + section.slug;
                },
                className: 'content detail'
              })
            },
            className: 'slide-panel'
          });
          break;
          case 'events':
          view = new SlidePanel({
            children: {
              list: new VerticalList({
                templateEl: '#template-list-view',
                offsetTop: 40,
                offsetBottom: 40,
                itemFactory: this.itemFactory(section),
                collection: section.collection,
                className: section.outputType + ' content'
              }),
              detail: new Item({
                templateEl: '#template-event',
                scroller: true,
                offsetTop: 100,
                offsetBottom: 100,
                navLeft: function() {
                  window.location = '#' + section.slug;
                },
                className: 'content detail'
              })
            },
            className: 'slide-panel'
          });
          break;
          case 'videos':
          view = new SlidePanel({
            children: {
              list: new Grid({
                templateEl: '#template-mosaic',
                itemFactory: this.itemFactory(section),
                collection: section.collection,
                className: section.outputType + ' content'
              })
            },
            className: 'slide-panel'
          });
          break;
          case 'photos':
          view = new SlidePanel({
            children: {
              list: new Grid({
                templateEl: '#template-mosaic',
                itemFactory: this.itemFactory(section),
                collection: section.collection,
                className: section.outputType + ' content'
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
          view.render();
          views[section.slug] = view;
          $cards.append(view.el);
        }
      }, this));

      var cards = new CardPanel({
        el: $cards,
        children: views
      });

      var horizontalLayout = new HorizontalLayout({
        el: '#container',
        views: [
          toolbar,
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
        }

        // Detail route
        controllers.routes[section.slug + '/:offset'] = section.slug + 'Detail';

        controllers[section.slug + 'Detail'] = function(offset) {
          self.section = section;
          offset = parseInt(offset, 10);$('iframe').remove();
          document.body.id = section.outputType;
          var detail;

          if(section.outputType === 'photos') {
            detail = self.photoDetail;
            detail.offset = offset;
            detail.show();
          } else if(section.outputType === 'videos') {
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

    //
    // Returns a thumbnail URL form a video object
    //
    getVideoThumbnail: function(item) {
      if(item.thumbnail) {
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

      var width = document.body.clientWidth;

      switch(offset % 11) {
        case 0:
        case 1:
        case 7:
        width = width * .25;
        break;

        default:
        width = width * .1;
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

        if(best) {
          return best.contentURL;
        }
      }

      return item.contentURL;
    }
  });
});
