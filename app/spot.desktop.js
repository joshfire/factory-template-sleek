/*global define, Joshfire, document, Backbone*/

define([
  'spot',
  'joshlib!ui/list',
  'joshlib!ui/factorymedia',
  'ui/imagegallery',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore'
  ],
function(Spot, List, FactoryMedia, ImageGallery, $, _) {

  return Spot.extend({
    /**
     * The code is specific to desktops
     */
    deviceFamily: 'desktop',

    /**
     * Sets the main title.
     *
     * Overrides base function to add the application title.
     */
    setTitle: function(value) {
      $('#title').html(this.title + ' &rsaquo; ' + value);
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
        switch (itemType) {
          case 'status':
          case 'event':
            return 'left-panel hashed-list';
          case 'photo':
            return 'section mosaic-list';
          default:
            return 'left-panel simple-list';
        }
      }
      else {
        return 'right-panel';
      }
    },


    /**
     * Inserts the list/detail views in the list of views.
     *
     * Override base method with tablet-specific logic.
     *
     * @function
     * @param {Object} views Existing views identified by their ID
     * @param {string} viewid The base ID of the view to insert
     * @param {UIElement} listElement The list element
     * @param {UIElement} detailElement Potential detail view
     */
    insertView: function(views, viewid, listElement, detailElement) {
      if (listElement) {
        listElement.hide();
        listElement.render();
        views[viewid] = listElement;
        $("#cards").append(listElement.el);
      }

      if (detailElement) {
        detailElement.hide();
        views[viewid + 'Detail'] = detailElement;
        $("#cards").append(detailElement.el);
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
          itemFactory: this.itemFactory(section),
          collection: section.collection,
          className: section.outputType + ' ' + this.getClassName(section.outputType, 'list')
        });
      }
      else {
        return new List({
          templateEl: '#template-list-view',
          itemFactory: this.itemFactory(section),
          collection: section.collection,
          className: section.outputType + ' ' +
            this.getClassName(section.outputType, 'list')
        });
      }
    },


    /**
     * Creates the element to use to represent an item for the given section.
     *
     * @function
     * @param {Object} section Section to render
     * @return {UIElement} The element to use. May include a detailed view.
     */
    createDetailElement: function(section) {
      var itemType = this.convertItemType(section.model.get('@type'));
      if (itemType === 'video') {
        return new FactoryMedia({
          templateEl: '#template-' + itemType,
          mediaOptions: {
            strategy: 'html5',
            width: '100%',
            height: '450'
          }
        });
      }
      else {
        return Spot.prototype.createDetailElement.call(this, section);
      }
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

      var $toolbar = $('#toolbar');
      var self = this;

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
          $('iframe, audio, video, object, embed').remove();
          document.body.id = section.outputType;
          self.setTitle(section.name);
          $toolbar.find('.active').removeClass('active');
          $toolbar.find('.section-' + section.slug).addClass('active');

          if(section.outputType !== 'photo') {
            var detail = views[section.slug + 'Detail'];
            detail.show();
          }

          section.collection.fetch({
            success: function() {
              view.render();

              if(section.collection.length !== 0 && section.outputType !== 'photo') {
                detail.setModel(section.collection.at(0));
                detail.render();
                view.$('.active').removeClass('active');
                $(view.$('li')[0]).addClass('active');
              }
            }
          });
        };

        // Detail route
        if(section.outputType !== 'photo') {
          controllers.routes[section.slug + '/:offset'] = section.slug + 'Detail';

          controllers[section.slug + 'Detail'] = function(offset) {
            var view = views[section.slug];
            var detail = views[section.slug + 'Detail'];
            offset = parseInt(offset, 10);
            view.show();
            $('iframe').remove();
            document.body.id = section.outputType;
            self.setTitle(section.name);
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
    }
  });
});
