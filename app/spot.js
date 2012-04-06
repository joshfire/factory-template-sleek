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
      this.title = Joshfire.factory.config.app.name;
      this.backgroundURL = Joshfire.factory.config.template.options.backgroundurl;

      // set template color from user set option
      this.setColor(Joshfire.factory.config.template.options.color || 'blue');

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
    itemFactory: function(section) {
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
              return Spot.getThumbnail(item, offset);
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
  };

  return Spot;
});
