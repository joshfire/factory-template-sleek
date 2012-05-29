/*global define, Joshfire, document, Backbone*/

define([
  'sleek.custom',
  'joshlib!ui/toolbar',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore'
  ],
function(Sleek, Toolbar, $, _) {

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


    //
    // Creates routes
    //
    createRoutes: function(sections, views) {
      var controllers = Sleek.prototype.createRoutes.call(this, sections, views);
      var $title = $('#title');
      var $toolbar = $('#toolbar');
      var $back = $('#back');
      var $refresh = $('#refresh');

      _.forEach(sections, function(section) {
        controllers.routes[section.slug] = section.slug;

        // List route
        controllers[section.slug] = function() {
          $title.html(section.name);
          document.body.id = section.outputType;
          $('iframe, audio, video, object, embed').remove();
          $toolbar.find('.active').removeClass('active');
          $toolbar.find('.section-' + section.slug).addClass('active');
          $refresh.show().unbind('click').bind('click', function(e) {
            section.collection.fetch();
            e.preventDefault();
            return false;
          });
          $back.hide();

          views.showChild(section.slug);
          var container = views.children[section.slug];

            if(section.collection.length) {
              if(container.view && container.view.children && container.view.children.list) {
                container.view.showChild('list', 'left');
              }
            } else {
              section.collection.fetch({
                success: function() {
                  if(container.view && container.view.children && container.view.children.list) {
                    container.view.showChild('list', 'left');
                  }
                }
              });
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
              if(container.view && container.view.children && container.view.children.detail) {
                var detail = container.view.children.detail;

                if(section.collection.length > offset) {
                  detail.setModel(section.collection.at(offset));
                  detail.render();
                }

                container.view.showChild('detail', 'right');
              }
            } else {
              section.collection.fetch({
                success: function() {
                  if(container.view && container.view.children && container.view.children.detail) {
                    var detail = container.view.children.detail;

                    if(section.collection.length > offset) {
                      detail.setModel(section.collection.at(offset));
                      detail.render();
                    }

                    container.view.showChild('detail', 'right');
                  }
                }
              });
            }
          };
        }
      });

      return controllers;
    }
  });
});
