/*global define, Joshfire, document, Backbone*/

define([
  'sleek.custom',
  'joshlib!ui/layout',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore'
], function (Sleek, Layout, $, _) {

  return Sleek.extend({
    /**
     * The code is specific to tablets
     */
    deviceFamily: 'tablet',

    fastNavigateSelector: '#container header a',

    initialize: function(opt) {
      if (window.plugins && window.plugins.tapToScroll) {
        window.plugins.tapToScroll.initListener();
        window.addEventListener('statusTap', _.bind(function() {
          if (this.activeSection && this.activeSection.view) {
            this.activeSection.view.scrollTop();
          }
        }, this));
      }

      Sleek.prototype.initialize.call(this, opt);
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
      else if (context === 'single') {
        return 'single detail';
      }
      else {
        return 'right-panel detail';
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
        name: 'listanddetail',
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
      var activePanel = _.find(panels, function (panel) {
        return ($(panel).width() > 0);
      });
      if (activePanel) {
        return Math.floor($(activePanel).width());
      }
      else {
        // No split panel means we have the whole screen available
        return Math.floor($('#cards').width());
      }
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
      this.showDetail(section, container, 0);
    },

    /**
     * Moves focus to the list view
     * (for views that have a list and a detail sub-views)
     *
     * @function
     * @param {Backbone.View} the section container
     */
    moveToList: function(container) {},

    /**
     * Displays a section item detail.
     *
     * @function
     * @param {Object} the detail section
     * @param {Backbone.View} the section container
     * @param {Number} offset The zero-based index of the detail
     *  to render in the collection
     */
    showDetail: function(section, container, offset) {
      // Assess that we can indeed show the requested offset
      if (section.collection.length <= offset) return;
      var children = container.view.children || {};
      var $share = $('#share');
      var self = this;

      // Render detail view
      // (of full view if there are no listing)
      if (children.detail) {
        children.detail.setModel(section.collection.at(offset), true);
      }
      else if (section.outputType !== 'photo') {
        container.setModel(section.collection.at(offset), true);
      }

      var urlRegExp = /^http[s]?:\/\/.+$/;
      var shareAddOn = Joshfire.factory.getAddOns('share');
      var model = section.collection.at(offset);

      if (shareAddOn.length && urlRegExp.test(model.get('url'))) {
        $share.show()
          .unbind('touchstart mousedown')
          .bind('touchstart mousedown', function (e) {
            self.share(model);
            e.preventDefault();
            return false;
          });
      } else {
        $share.hide();
      }

      // Render listing if defined
      if (children.list) {
        children.list.$('.active').removeClass('active');
        $(children.list.$('li')[offset]).addClass('active');
      }
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
          // Mark the section as active
          self.activeSection = section;

          // Update the toolbar (title and selected element)
          self.setTitle(section.name);
          $('iframe, audio, video, object, embed', '#container').remove();
          $toolbar.find('.active').removeClass('active');
          $toolbar.find('.section-' + section.slug).addClass('active');

          $('.cards-container').attr('id', section.outputType);

          var container = views.children[section.slug];
          if (section.collection.length) {
            self.moveToList(container);
            views.showChild(section.slug);
            if (section.outputType === 'video') {
              self.showList(section, container);
            }
          } else {
            views.showChild(section.slug);
            self.updateList(section, container);
          }
        };

        // Detail route
        if(section.outputType !== 'photo') {
          controllers.routes[section.slug + '/:offset'] = section.slug + 'Detail';

          controllers[section.slug + 'Detail'] = function(offset) {
            self.activeSection = section;
            offset = parseInt(offset, 10);
            $('iframe, audio, video, object', '#container').remove();
            document.body.id = section.outputType;
            self.setTitle(section.name);
            $toolbar.find('.active').removeClass('active');
            $toolbar.find('.section-' + section.slug).addClass('active');

            var container = views.children[section.slug];
            views.showChild(section.slug);
            if (section.collection.length) {
              self.showDetail(section, container, offset);
            } else {
              self.updateDetail(section, container, offset);
            }
          };
        }
      });

      return controllers;
    },


    /**
     * Shares the given model
     *
     * @function
     * @private
     * @param {Backbone.Model} model The model to share. Its "url" property
     *  will be used
     * @param {function} callback The callback function to call when the item
     *  has been shared. First parameter is a potential error that may have
     *  occurred.
     */
    share: function (model, callback) {
      callback = callback || function () {};
      if (!model) {
        return callback('No model to share');
      }

      Joshfire.factory.getAddOns('share').startActivity({
        data : {
          msg: model.get('name'),
          url: model.get('url')
        }
      });

      return callback();
    }
  });
});
