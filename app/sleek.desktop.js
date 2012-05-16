/*global define, Joshfire, document, Backbone*/

define([
  'sleek.custom',
  'joshlib!ui/list',
  'joshlib!ui/factorymedia',
  'ui/imagegallery',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore'
  ],
function(Sleek, List, FactoryMedia, ImageGallery, $, _) {

  return Sleek.extend({
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
      var self = this;
      var itemType = this.convertItemType(section.model.get('@type'));
      if (itemType === 'video') {
        return new FactoryMedia({
          templateEl: '#template-' + itemType,
          mediaOptions: {
            strategy: 'html5',
            width: self.getContentWidth(),
            height: 450,
            adjustSize: true
          }
        });
      }
      else {
        return Sleek.prototype.createDetailElement.call(this, section);
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

          // Render is needed to show the spinner while loading.
          view.render();

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
