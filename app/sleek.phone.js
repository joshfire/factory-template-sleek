/*global define, Joshfire, document, Backbone*/

define([
  'sleek.custom',
  'joshlib!ui/toolbar',
  'joshlib!ui/slidepanel',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore'
  ],
function(Sleek, Toolbar, SlidePanel, $, _) {

  return Sleek.extend({
    /**
     * The code is specific to phones
     */
    deviceFamily: 'phone',

    /**
     * Creates the toolbar UI element.
     * Overrides base function to return a Toolbar element with appropriate
     * scrolling options.
     *
     * @function
     * @return {UIElement} The toolbar UI element to use
     */
    createToolbarElement: function() {
      return new Toolbar({
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
    },

    /**
     * Must create a list + detail view for a section.
     *
     * @param {Backbone.View} the list view
     * @param {Backbone.View} the detail view
     * @return {Backbone.View} the section viex
     */
    createListAndDetailView: function(list, detail) {
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
     * Refreshes a section list.
     *
     * @function
     * @param {Object} the list section
     * @parma {Backbone.View} the section container
     */
    refreshList: function(section, container) {
      section.collection.fetch({
        dataSourceQuery: {
          nocache: true
        },
        success: _.bind(function() {
          this.showList(section, container);
        }, this)
      });
    },

    /**
     * Updates a section list.
     *
     * @function
     * @param {Object} the list section
     * @parma {Backbone.View} the section container
     */
    updateList: function(section, container) {
      section.collection.fetch({
        success: _.bind(function() {
          this.showList(section, container);
        }, this)
      });
    },

    /**
     * Displays a section list (assuming the section is already active).
     *
     * @function
     * @param {Object} the list section
     * @parma {Backbone.View} the section container
     */
    showList: function(section, container, skiped, currentHTML) {
    // Uncomment if skip/limit needed
      if(container.view.children && container.view.children.list) {
        container.view.showChild('list', 'left');
      } else if(section.collection.length) {
        container.setModel(section.collection.at(0));
        container.render();
      }

      $('.loadmore').bind('click', _.bind(function(e) {
        window.skiped = $('.'+section.outputType).find('.list li').length;
        this.loadMoreEntries(section, container, window.skiped);
        e.preventDefault();
      }, this));
    },

    /**
     * Load more entries of the datasource when the user is in the
     * bottom of the list
     *
     * @function
     * @return {Array(Object)} The list of datasources, an empty
     *   array when no datasources are defined.
     */
    loadMoreEntries: function(section, container, skiped) {
      $('.content').addClass('loading');
      // var currentHTML = $('.'+section.outputType).find('.list').html();
      var limitless   = window.skiped + 10;

      section.collection.fetch({
        dataSourceQuery: {
          nocache: false,
          limit: limitless
        },
        success: _.bind(function() {
          this.showList(section, container); // params if need skip/limit : , currentHTML
        }, this)
      });
    },

    /**
     * Updates a section item detail.
     *
     * @function
     * @param {Object} the detail section
     * @parma {Backbone.View} the section container
     */
    updateDetail: function(section, container, offset) {
      section.collection.fetch({
        success: _.bind(function() {
          this.showDetail(section, container, offset);
        }, this)
      });
    },

    /**
     * Displays a section item detail.
     *
     * @function
     * @param {Object} the detail section
     * @parma {Backbone.View} the section container
     */
    showDetail: function(section, container, offset) {
      if(container.view.children && container.view.children.detail) {
        var detail = container.view.children.detail;

        if(section.collection.length > offset) {
          detail.setModel(section.collection.at(offset));
          detail.render();
        }

        container.view.showChild('detail', 'right');
      }
    },

    /**
     * Creates the routes for the phone version.
     *
     * @function
     * @param {Object} the list of sections
     * @parma {Backbone.View} the sections view container
     */
    createRoutes: function(sections, views) {
      var controllers = Sleek.prototype.createRoutes.call(this, sections, views),
          $title = $('#title'),
          $toolbar = $('#toolbar'),
          $back = $('#back'),
          $refresh = $('#refresh'),
          self = this;

      _.forEach(sections, function(section) {
        controllers.routes[section.slug] = section.slug;

        // List route
        controllers[section.slug] = function() {
          $title.html(section.name);
          document.body.id = section.outputType;
          $('iframe, audio, video, object, embed').remove();
          $toolbar.find('.active').removeClass('active');
          $toolbar.find('.section-' + section.slug).addClass('active');
          $refresh.show().unbind('click').bind('click', _.bind(function(e) {
            self.refreshList(section, container);
            e.preventDefault();
            return false;
          }, this));

          $back.hide();

          views.showChild(section.slug);
          var container = views.children[section.slug];

          if(section.collection.length) {
            self.showList(section, container);
          } else {
            self.updateList(section, container);
          }
        };

        // Detail route
        if(section.outputType !== 'photo') {
          controllers.routes[section.slug + '/:offset'] = section.slug + 'Detail';

          controllers[section.slug + 'Detail'] = function(offset) {
            offset = parseInt(offset, 10);
            $title.html(section.name);
            document.body.id = section.outputType;
            $('iframe, audio, video, object, embed').remove();
            $toolbar.find('.active').removeClass('active');
            $toolbar.find('.section-' + section.slug).addClass('active');
            $refresh.hide();
            $back.attr('href', '#' + section.slug);
            $back.css({display: 'block'});

            views.showChild(section.slug);
            var container = views.children[section.slug];

            if(section.collection.length) {
              self.showDetail(section, container, offset);
            } else {
              self.updateDetail(section, container, offset);
            }
          };
        }
      });

      return controllers;
    }
  });
});
