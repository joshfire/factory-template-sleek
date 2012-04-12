/*

  Shared code

*/

define([
  'joshlib!collection',
  'joshlib!ui/item',
  'joshlib!ui/imageloader',
  'joshlib!router',
  'joshlib!vendor/underscore'],
function(Collection, Item, ImageLoader, Router, _) {

  var Spot = function() {
    _.bindAll(this, 'initialize',  'setColor', 'slugify');
  };

  Spot.extend = function(properties) {
    var Class = function() {
      Spot.call(this);
    };

    _.extend(Class.prototype, Spot.prototype);
    _.extend(Class.prototype, properties);
    return Class;
  },

  _.extend(Spot.prototype, {
    initialize: function(cb) {
      this.title = Joshfire.factory.config.app.name;
      this.backgroundURL = Joshfire.factory.config.template.options.backgroundurl;
      this.logoURL = Joshfire.factory.config.app.logo ?
                  Joshfire.factory.config.app.logo.contentURL : null;

      // set template color from user set option
      this.setColor(Joshfire.factory.config.template.options.color || 'blue');

      document.title = this.title;

      //
      // Sections
      //
      var datasources = Joshfire.factory.getDataSource('main');
      var sections = new Array(datasources.children.length);
      var loaded = 0;

      _.forEach(datasources.children, _.bind(function(datasource, index) {
        var name = datasource.name;
        var slug = this.slugify(name.toLowerCase());
        var collection = new Collection([], {
          dataSource: datasource,
          dataSourceQuery: {}
        });
        var outputType;

        datasource.getDesc(_.bind(function(err, desc) {
          switch(desc.outputType) {
            case 'Article/Status':
            outputType = 'statuses';
            break;
            case 'NewsArticle':
            case 'BlogPosting':
            outputType = 'news';
            break;
            case 'Event':
            outputType = 'events';
            break;
            case 'ImageObject':
            outputType = 'photos';
            break;
            case 'VideoObject':
            outputType = 'videos';
            break;
            default:
            outputType = 'other';
          }

          sections[index] = {
            name: name,
            slug: index + '--' + slug,
            outputType: outputType,
            collection: collection
          };

          if(++loaded === datasources.children.length) {
            var views = this.createViews(sections);
            var controllers = this.createRoutes(sections, views);
            var router = Router(controllers);
            router.historyStart();

            cb && cb();
          }
        }, this));
      }, this));
    },

    //
    // Sets the template color
    //
    setColor: function(color) {

    },

    //
    // Creates views
    //
    createViews: function(sections) {
      return {};
    },

    //
    // Creates routes
    //
    createRoutes: function(sections, views) {
      return {};
    },

    //
    // Creates a list item view based on the type of the item.
    //
    itemFactory: function(section) {
      var self = this;

      return function(model, offset) {
        var item = model.toJSON();
        var type = item['@type'] || item.itemType;

        switch(type) {
          case 'ImageObject':
          return new ImageLoader({
            data: {section: section},
            model: model,
            offset: offset,
            templateEl: '#template-image-item',
            getImageUrl: function() {
              return self.getThumbnail(item, offset);
            }
          });
          break;

          case 'Article/Status':
          return new Item({
            data: {section: section},
            model: model,
            offset: offset,
            templateEl: '#template-status-item'
          });
          break;

          case 'VideoObject':
          return new Item({
            data: {section: section},
            model: model,
            offset: offset,
            templateEl: '#template-video-item'
          });
          break;

          case 'Event':
          return new Item({
            data: {section: section},
            model: model,
            offset: offset,
            templateEl: '#template-event-item'
          });
          break;

          case 'BlogPosting':
          case 'NewsArticle':
          return new Item({
            data: {section: section},
            model: model,
            offset: offset,
            templateEl: '#template-news-item'
          });
          break;

          default:
          return new Item({
            data: {section: section},
            model: model,
            offset: offset,
            templateEl: '#template-unknown-item'
          });
        }
      };
    },

    //
    // Returns a thumbnail URL form an image object
    //
    getThumbnail: function() {
      return '';
    },

    slugify: function(text) {
      text = text.replace(/[^-a-zA-Z0-9,&\s]+/ig, '');
      text = text.replace(/-/gi, "_");
      text = text.replace(/\s/gi, "-");
      return text;
    }
  });

  return Spot;
});
