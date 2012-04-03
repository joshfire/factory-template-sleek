/*

  Shared code

*/

define(['spot', 'joshlib!utils/dollar'], function(Spot, $) {

  Spot.extend({

    setColor: function(color) {
      $('#color').remove();
      $('head').append('<link id="color" rel="stylesheet" href="css/tablet.' + color + '.css" type="text/css">');
    },

    //
    // Returns a thumbnail URL form a video object
    //
    getVideoThumbnail: function(item) {
      if(item.thumbnails) {
        var thumbnails = item.thumbnail;
        var best = thumbnails[0];

        for (var i = 1; i < thumbnails.length; i++) {
          var thumbnail = thumbnails[i];

          if(thumbnail.width > best.width) best = thumbnail;
        };

        return best.contentURL;
      }

      return item.image.contentURL;
    },

    getThumbnail: function(item, offset) {
      var width = document.body.clientWidth * .5;

      if(item.thumbnail) {
        var thumbnails = item.thumbnail;
        var best = thumbnails[0];

        for (var i=0; i < thumbnails.length; i++) {
          var thumbnail = thumbnails[i];

          if(thumbnail.width >= width && (thumbnail.width < best.width || best.width < width)) {
            best = thumbnails[i];
          }
        }

        return best.contentURL;
      }

      return item.contentURL;
    }
  });

  return Spot;
});
