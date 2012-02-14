/*

  Shared code

*/

define(['spot', 'joshlib!utils/dollar'], function(Spot, $) {

  Spot.extend({

    setColor: function(color) {
      $('#color').remove();
      $('head').append('<link id="color" rel="stylesheet" href="css/tv.' + color + '.css" type="text/css">');
    },

    setLogo: function(url) {
      $('#logo').html('<img src="' + url + '" >');
    },

    setBackground: function(url) {
      $('body').css({
        backgroundImage: 'url(' + url + ')'
      });
    },

    //
    // Returns a thumbnail URL form a video object
    //
    getVideoThumbnail: function(item) {
      if(item.thumbnail) {
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

      var width = document.body.clientWidth;

      switch(offset % 11) {
        case 0:
        case 1:
        case 7:
        width = width * .25;
        break;

        default:
        width = width * .1;
      }

      if(item.thumbnail) {
        var thumbnails = item.thumbnail;
        var best = null;

        for (var i=0; i < thumbnails.length; i++) {
          var thumbnail = thumbnails[i];

          if(thumbnail.width >= width && (!best || thumbnail.width < best.width)) {
            best = thumbnails[i];
          }
        }

        if(best) {
          return best.contentURL;
        }
      }

      return item.contentURL;
    }
  });

  return Spot;
});