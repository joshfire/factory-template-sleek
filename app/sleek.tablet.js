/*global define, Joshfire, document, Backbone*/

define([
  'sleek.custom',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore'
  ],
function(Sleek, $, _) {

  return Sleek.extend({
    /**
     * The code is specific to tablets
     */
    deviceFamily: 'tablet',


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
     * Returns the width that is available for detailed views.
     *
     * The function is used in particular to tell the media factory the
     * maximum width it may use.
     *
     * @function
     * @return {integer} The width available in CSS pixels
     */
    getContentWidth: function() {
      // Note the app contains more than one right panel, but only
      // one that should be displayed at a given time
      var panels = $('.right-panel').get();
      var activePanel = _.max(panels, function (panel) {
        return $(panel).width();
      });
      return $(activePanel).width();
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
            $('iframe, audio, video, object').remove();
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
