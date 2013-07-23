require.config({
  paths: {
    tpl: 'vendor/tpl'
  }
});

define([
  'sleek.tv',
  'joshlib!utils/onready',
  'tpl!templates/tv/event.ejs',
  'tpl!templates/tv/eventItem.ejs',
  'tpl!templates/tv/listView.ejs',
  'tpl!templates/tv/mentionItem.ejs',
  'tpl!templates/tv/news.ejs',
  'tpl!templates/tv/newsItem.ejs',
  'tpl!templates/tv/other.ejs',
  'tpl!templates/tv/otherItem.ejs',
  'tpl!templates/tv/photo.ejs',
  'tpl!templates/tv/photoItem.ejs',
  'tpl!templates/tv/product.ejs',
  'tpl!templates/tv/productItem.ejs',
  'tpl!templates/tv/sound.ejs',
  'tpl!templates/tv/soundItem.ejs',
  'tpl!templates/tv/status.ejs',
  'tpl!templates/tv/statusItem.ejs',
  'tpl!templates/tv/toolbar.ejs',
  'tpl!templates/tv/toolbarItem.ejs',
  'tpl!templates/tv/video.ejs',
  'tpl!templates/tv/videoItem.ejs',
  'tpl!templates/tv/mosaic.ejs'
], function (
  Sleek,
  onReady,
  tplEvent,
  tplEventItem,
  tplListView,
  tplMentionItem,
  tplNews,
  tplNewsItem,
  tplOther,
  tplOtherItem,
  tplPhoto,
  tplPhotoItem,
  tplProduct,
  tplProductItem,
  tplSound,
  tplSoundItem,
  tplStatus,
  tplStatusItem,
  tplToolbar,
  tplToolbarItem,
  tplVideo,
  tplVideoItem,
  tplMosaic
) {
  var sleek = new Sleek();
  onReady(function () {
    sleek.initialize({
      templates: {
        event         : tplEvent,
        eventItem     : tplEventItem,
        listView      : tplListView,
        mentionItem   : tplMentionItem,
        mosaic        : tplMosaic,
        news          : tplNews,
        newsItem      : tplNewsItem,
        other         : tplOther,
        otherItem     : tplOtherItem,
        photo         : tplPhoto,
        photoItem     : tplPhotoItem,
        product       : tplProduct,
        productItem   : tplProductItem,
        sound         : tplSound,
        soundItem     : tplSoundItem,
        status        : tplStatus,
        statusItem    : tplStatusItem,
        toolbar       : tplToolbar,
        toolbarItem   : tplToolbarItem,
        video         : tplVideo,
        videoItem     : tplVideoItem
      }
    });
  });
});
