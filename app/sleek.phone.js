/*global define, document*/

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
        useWindowWidth: true
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
      var self = this;

      _.forEach(sections, function (section) {
        section = section || {};
        controllers.routes[section.slug] = section.slug;

        // List route
        logger.log(section.slug, 'create routes', 'list');
        controllers[section.slug] = function () {
          logger.log(section.slug, 'list route');
          $title.html(section.name);
          document.body.id = section.outputType;
          $('iframe, audio, video, object, embed', '#container').remove();
          $toolbar.find('.active').removeClass('active');
          $toolbar.find('.section-' + section.slug).addClass('active');
          $refresh.show().unbind('touchstart mousedown').bind('touchstart mousedown', _.bind(function(e) {
            self.refreshList(section, container);
            e.preventDefault();
            return false;
          }, this));
          $back.hide();

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
    }
  });
});
