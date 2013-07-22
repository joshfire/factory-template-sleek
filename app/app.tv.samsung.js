require.config({
  paths: {
    tpl: 'vendor/tpl'
  }
});

define([
  'sleek.samsung',
  'joshlib!utils/onready',
  'tpl!templates/samsung/contactIndex.ejs',
  'tpl!templates/samsung/contactMap.ejs',
  'tpl!templates/samsung/event.ejs',
  'tpl!templates/samsung/eventItem.ejs',
  'tpl!templates/samsung/listView.ejs',
  'tpl!templates/samsung/mapOverlay.ejs',
  'tpl!templates/samsung/mentionItem.ejs',
  'tpl!templates/samsung/news.ejs',
  'tpl!templates/samsung/newsItem.ejs',
  'tpl!templates/samsung/other.ejs',
  'tpl!templates/samsung/otherItem.ejs',
  'tpl!templates/samsung/photo.ejs',
  'tpl!templates/samsung/photoItem.ejs',
  'tpl!templates/samsung/product.ejs',
  'tpl!templates/samsung/productItem.ejs',
  'tpl!templates/samsung/mosaicSinglePhoto.ejs',
  'tpl!templates/samsung/sound.ejs',
  'tpl!templates/samsung/soundItem.ejs',
  'tpl!templates/samsung/status.ejs',
  'tpl!templates/samsung/statusItem.ejs',
  'tpl!templates/samsung/toolbar.ejs',
  'tpl!templates/samsung/toolbarItem.ejs',
  'tpl!templates/samsung/videoItem.ejs',
  'tpl!templates/samsung/mosaicSingleVideo.ejs',
  'tpl!templates/samsung/navhelperItem.ejs',
  'tpl!templates/samsung/mosaic.ejs'
], function (
  Sleek,
  onReady,
  tplContactIndex,
  tplContactMap,
  tplEvent,
  tplEventItem,
  tplListView,
  tplMapOverlay,
  tplMentionItem,
  tplNews,
  tplNewsItem,
  tplOther,
  tplOtherItem,
  tplPhoto,
  tplPhotoItem,
  tplProduct,
  tplProductItem,
  tplSinglePhoto,
  tplSound,
  tplSoundItem,
  tplStatus,
  tplStatusItem,
  tplToolbar,
  tplToolbarItem,
  tplVideoItem,
  tplSingleVideo,
  tplNavhelperItem,
  tplMosaic
) {
  var sleek = new Sleek();
  window.app = sleek;
  onReady(function () {
    sleek.initialize({
      templates: {
        contactIndex  : tplContactIndex,
        contactMap    : tplContactMap,
        event         : tplEvent,
        eventItem     : tplEventItem,
        listView      : tplListView,
        mapOverlay    : tplMapOverlay,
        mentionItem   : tplMentionItem,
        mosaic        : tplMosaic,
        navhelperItem : tplNavhelperItem,
        news          : tplNews,
        newsItem      : tplNewsItem,
        other         : tplOther,
        otherItem     : tplOtherItem,
        photo         : tplPhoto,
        photoItem     : tplPhotoItem,
        product       : tplProduct,
        productItem   : tplProductItem,
        singlePhoto   : tplSinglePhoto,
        singleVideo   : tplSingleVideo,
        sound         : tplSound,
        soundItem     : tplSoundItem,
        status        : tplStatus,
        statusItem    : tplStatusItem,
        toolbar       : tplToolbar,
        toolbarItem   : tplToolbarItem,
        videoItem     : tplVideoItem
      }
    });
  });
});
