/*global define, document*/

define([
  'sleek.custom',
  'ui/sideBar',
  'joshlib!ui/slidepanel',
  'joshlib!utils/dollar',
  'joshlib!utils/woodman',
  'joshlib!vendor/underscore'
], function (Sleek, SideBar, SlidePanel, $, woodman, _) {

  var logger = woodman.getLogger('sleek.phone');

  return Sleek.extend({
    /**
     * The code is specific to phones
     */
    deviceFamily: 'phone',

    fastNavigateSelector: '#container header a, #container #sidebarPanel a',

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
     * Creates the sidebarPanel UI element.
     * Overrides base function to return a sidebarPanel element with appropriate
     * scrolling options.
     *
     * @function
     * @return {UIElement} The sidebarPanel UI element to use
     */
    createSidebarElement: function() {
      logger.log('create sidebarPanel element');
      return new SideBar({
        name: 'sidebarPanel',
        el: '#sidebarPanel',
        templateEl: '#template-sidebarPanel',
        itemTemplateEl: '#sidebarPanel-item',
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
      var $sidebar = $('#sidebarPanel');
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
          self.navbar.setTitle(section.name);
          document.body.id = section.outputType;

          $('iframe, audio, video, object, embed', '#container').remove();
          self.navbar.hideBackButton();
          self.navbar.showSidebarButton();
          self.containerView.enabledSlide();
          $sidebar.find('.active').removeClass('active');
          $sidebar.find('.section-' + section.slug).addClass('active');
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
            // yoyoyo
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
            self.navbar.hideSidebarButton();
            self.navbar.setTitle(section.name);
            document.body.id = section.outputType;
            $('iframe, audio, video, object, embed', '#container').remove();
            $sidebar.find('.active').removeClass('active');
            $sidebar.find('.section-' + section.slug).addClass('active');
            $refresh.hide();

            // Display the share button
            // TODO: in a proper implementation, the share button should only
            // be displayed provided Joshfire.factory.getAddOns('share')
            // returns a non empty list and provided the item to display can
            // be shared, in other words that its "url" property is a valid
            // absolute URL (as opposed to a simple ID)
            // Disabled share for the moment, while we check the presence of the share add-on
            $share.hide();
            // $share.show()
            //   .unbind('touchstart mousedown')
            //   .bind('touchstart mousedown', function (e) {
            //     var model = section.collection.at(0);
            //     self.share(model);
            //     e.preventDefault();
            //     return false;
            //   });
            $back.attr('href', '#' + section.slug);
            self.containerView.disabledSlide();
            self.navbar.showBackButton();
            self.navbar.hideSidebarButton();

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

      // TODO: in a proper implementation, this is where
      // "Joshfire.factory.getAddOns('share').startActivity" should be called.
      console.log('TODO: share me!', model);
      return callback();
    }
  });
});
