/*global define, document, Joshfire*/

define([
  'sleek.custom',
  'joshlib!ui/toolbar',
  'joshlib!ui/slidepanel',
  'joshlib!utils/dollar',
  'joshlib!utils/woodman',
  'joshlib!vendor/underscore'
], function (Sleek, Toolbar, SlidePanel, $, woodman, _) {

  var logger = woodman.getLogger('sleek.phone');

  return Sleek.extend({
    /**
     * The code is specific to phones
     */
    deviceFamily: 'phone',

    fastNavigateSelector: '#container header a, #container #toolbar a',

    initialize: function() {
      if (window.plugins && window.plugins.tapToScroll) {
        window.plugins.tapToScroll.initListener();
        window.addEventListener('statusTap', _.bind(function() {
          if (this.activeSection && this.activeSection.view) {
            this.activeSection.view.scrollTop();
          }
        }, this));
      }
      Sleek.prototype.initialize.call(this);
    },

    /**
     * Creates the toolbar UI element.
     * Overrides base function to return a Toolbar element with appropriate
     * scrolling options.
     *
     * @function
     * @return {UIElement} The toolbar UI element to use
     */
    createToolbarElement: function() {
      logger.log('create toolbar element');
      return new Toolbar({
        name: 'toolbar',
        el: '#toolbar',
        templateEl: '#template-toolbar',
        itemTemplateEl: '#toolbar-item',
        scroller: true,
        scrollOptions: {
          vScroll: false,
          hScrollbar: false,
          snap: true,
          bounce: false,
          disabled: true
        },
        useWindowWidth: true,
        minLengthToShow: 2
      });
    },

    /**
     * Must create a list + detail view for a section.
     *
     * @param {Backbone.View} the list view
     * @param {Backbone.View} the detail view
     * @return {Backbone.View} the section viex
     */
    createListAndDetailView: function(list, detail) {
      logger.log('create list and detail view', 'list=' + list.logid);
      var view = new SlidePanel({
        name: 'listanddetail',
        children: {
          list: list,
          detail: detail
        },
        currentChild: 'list',
        className: 'slide-panel'
      });

      return view;
    },

    /**
     * Creates the routes for the phone version.
     *
     * @function
     * @param {Object} the list of sections
     * @parma {Backbone.View} the sections view container
     */
    createRoutes: function(sections, views) {
      logger.log('create routes');
      var controllers = Sleek.prototype.createRoutes.call(this, sections, views);
      var $title = $('#title');
      var $toolbar = $('#toolbar');
      var $back = $('#back');
      var $refresh = $('#refresh');
      var $share = $('#share');
      var self = this;

      _.forEach(sections, function (section) {
        section = section || {};
        controllers.routes[section.slug] = section.slug;

        // List route
        logger.log(section.slug, 'create routes', 'list');
        controllers[section.slug] = function () {
          logger.log(section.slug, 'list route');
          self.activeSection = section;
          $title.html(section.name);
          document.body.id = section.outputType;
          $('iframe, audio, video, object, embed', '#container').remove();
          $toolbar.find('.active').removeClass('active');
          $toolbar.find('.section-' + section.slug).addClass('active');
          $back.hide();

          $share.hide();
          $refresh.show().unbind('touchstart mousedown').bind('touchstart mousedown', _.bind(function(e) {
            self.refreshList(section, container);
            e.preventDefault();
            return false;
          }, this));

          var container = views.children[section.slug];
          if (section.collection.length) {
            logger.log(section.slug, 'list route', 'show');
            self.moveToList(container);
            views.showChild(section.slug);
          } else {
            logger.log(section.slug, 'list route', 'update');
            views.showChild(section.slug);
            self.updateList(section, container);
          }
        };

        // Detail route
        if (section.outputType !== 'photo') {
          logger.log(section.slug, 'create routes', 'detail');
          controllers.routes[section.slug + '/:offset'] = section.slug + 'Detail';

          controllers[section.slug + 'Detail'] = function (offset) {
            logger.log(section.slug, 'detail route');
            offset = parseInt(offset, 10);
            $title.html(section.name);
            document.body.id = section.outputType;
            $('iframe, audio, video, object, embed', '#container').remove();
            $toolbar.find('.active').removeClass('active');
            $toolbar.find('.section-' + section.slug).addClass('active');
            $refresh.hide();

            var urlRegExp = /^http[s]?:\/\/.+$/;
            var shareAddOn = Joshfire.factory.getAddOns('share');
            var model = section.collection.at(0);

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

            $back.attr('href', '#' + section.slug);
            $back.css({display: 'block'});

            var container = views.children[section.slug];
            views.showChild(section.slug);
            if (section.collection.length) {
              logger.log(section.slug, 'detail route', 'show');
              self.showDetail(section, container, offset);
            } else {
              logger.log(section.slug, 'detail route', 'update');
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
          msg: 'yo, you just shared that',
          url: model.get('url')
        }
      });

      return callback();
    }
  });
});
