/*global define, Joshfire, document, Backbone*/

define([
  'sleek.custom',
  'joshlib!ui/layout',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore'
  ],
function(Sleek, Layout, $, _) {

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
      else if (context === 'single') {
        return 'single';
      }
      else {
        return 'right-panel';
      }
    },

    /**
     * Must create a list + detail view for a section.
     *
     * @param {Backbone.View} the list view
     * @param {Backbone.View} the detail view
     * @return {Backbone.View} the section viex
     */
    createListAndDetailView: function(list, detail) {
      var view = new Layout({
        children: {
          list: list,
          detail: detail
        },
        className: 'split-view'
      });

      return view;
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


    /**
     * Returns the height that is available for detailed views.
     *
     * The function is used in particular to tell the media factory the
     * maximum height it may use.
     *
     * @function
     * @return {integer} The height available in CSS pixels
     */
    getContentHeight: function() {
      // Note the app contains more than one right panel, but only
      // one that should be displayed at a given time
      var panels = $('.right-panel').get();
      var activePanel = _.max(panels, function (panel) {
        return $(panel).height();
      });
      return $(activePanel).height();
    },

    //
    // Creates routes
    //
    createRoutes: function(sections, views) {
      var controllers = Sleek.prototype.createRoutes.call(this, sections, views);
      var $toolbar = $('#toolbar');
      var self = this;

      _.forEach(sections, function(section) {
        controllers.routes[section.slug] = section.slug;

        // List route
        controllers[section.slug] = function() {
          document.body.id = section.outputType;
          self.setTitle(section.name);
          $('iframe, audio, video, object, embed').remove();
          $toolbar.find('.active').removeClass('active');
          $toolbar.find('.section-' + section.slug).addClass('active');

          views.showChild(section.slug);
          var container = views.children[section.slug];

          section.collection.fetch({
            success: function() {
              if(container.view.children && container.view.children.detail &&
                  section.collection.length) {
                var detail = container.view.children.detail;
                detail.setModel(section.collection.at(0));
                detail.render();

                if(container.view.children.list) {
                  var list = container.view.children.list;
                  list.$('.active').removeClass('active');
                  $(list.$('li')[0]).addClass('active');
                }
              } else if(section.collection.length) {
                container.setModel(section.collection.at(0));
                container.render();
              }
            }
          });
        };

        // Detail route
        if(section.outputType !== 'photo') {
          controllers.routes[section.slug + '/:offset'] = section.slug + 'Detail';

          controllers[section.slug + 'Detail'] = function(offset) {
            offset = parseInt(offset, 10);
            $('iframe, audio, video, object').remove();
            document.body.id = section.outputType;
            self.setTitle(section.name);
            $toolbar.find('.active').removeClass('active');
            $toolbar.find('.section-' + section.slug).addClass('active');

            views.showChild(section.slug);

            var container = views.children[section.slug];

            if(section.collection.length === 0) {
              section.collection.fetch({
                success: function() {
                  if(!container.view.children || !container.view.children.detail) {
                    return;
                  }
                  var detail = container.view.children.detail;

                  if(section.collection.length > offset) {
                    var detail = container.view.children.detail;
                    detail.setModel(section.collection.at(offset));
                    detail.render();

                    if(container.view.children.list) {
                      var list = container.view.children.list;
                      list.$('.active').removeClass('active');
                      $(list.$('li')[offset]).addClass('active');
                    }
                  }
                }
              });
            } else if(section.collection.length > offset) {
              if(!container.view.children || !container.view.children.detail) {
                return;
              }
              var detail = container.view.children.detail;
              detail.setModel(section.collection.at(offset));
              detail.render();

              if(container.view.children.list) {
                var list = container.view.children.list;
                list.$('.active').removeClass('active');
                $(list.$('li')[offset]).addClass('active');
              }
            }
          };
        }
      });

      return controllers;
    }
  });
});
