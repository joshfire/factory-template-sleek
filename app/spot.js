/*

  Shared code

*/

define([
  'joshlib!factorycollection',
  'joshlib!ui/item',
  'joshlib!ui/imageloader',
  'joshlib!vendor/underscore'],
function(FactoryCollection, Item, ImageLoader, _) {

  var Spot = {

    extend: function(obj) {
      _.extend(this, obj);
    },

    initialize: function() {
      this.collections = {};
      this.title = Joshfire.factory.config.app.name;
      this.contactHTML = Joshfire.factory.config.template.options.contacthtml;
      this.latitude = parseFloat(Joshfire.factory.config.template.options.latitude);
      this.longitude = parseFloat(Joshfire.factory.config.template.options.longitude);
      this.address = Joshfire.factory.config.template.options.address;
      this.logoURL = Joshfire.factory.config.app.logo ?
                  Joshfire.factory.config.app.logo.contentURL : null;
      this.backgroundURL = Joshfire.factory.config.template.options.backgroundurl;

      // set template color from user set option
      this.setColor(Joshfire.factory.config.template.options.color);

      // Initialize collections
      var dataSourceNames = ['photos', 'videos', 'events', 'news', 'statuses'];

      for(var s in dataSourceNames) {
        var name = dataSourceNames[s];
        if(Joshfire.factory.config.datasources[name]) {
          this.collections[name] = FactoryCollection(name);
        }
      }

      document.title = this.title;
    },

    //
    // Sets the template color
    //
    setColor: function(color) {
      
    },

    //
    // Creates a list item view based on the type of the item.
    //
    itemFactory: function(model, offset) {
      var item = model.toJSON();

      switch(item.itemType) {
        case 'ImageObject':
        return new ImageLoader({
          model: model,
          offset: offset,
          templateEl: '#template-image-item',
          getImageUrl: function() {
	          return Spot.getThumbnail(item, offset);
	       }
        });
        break;

        case 'Article/Status':
        return new Item({
          model: model,
          offset: offset,
          templateEl: '#template-status-item'
        });
        break;

        case 'VideoObject':
        return new Item({
          model: model,
          offset: offset,
          templateEl: '#template-video-item'
        });
        break;

        case 'Event':
        return new Item({
          model: model,
          offset: offset,
          templateEl: '#template-event-item'
        });
        break;

        case 'BlogPosting':
        return new Item({
          model: model,
          offset: offset,
          templateEl: '#template-news-item'
        });
        break;

        default:
        return new Item({
          model: model,
          offset: offset,
          templateEl: '#template-unknown-item'
        });
      }
    },

    //
    // Returns a thumbnail URL form an image object
    //
    getThumbnail: function() {
      console.log('test');
      return '';
    }
  };

  return Spot;
});