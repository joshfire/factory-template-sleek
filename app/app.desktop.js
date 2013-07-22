require.config({
  paths: {
    tpl: 'vendor/tpl'
  }
});

define([
  'sleek.desktop',
  'joshlib!utils/onready',
  'tpl!templates/phone/contactIndex.ejs',
  'tpl!templates/phone/contactMap.ejs',
  'tpl!templates/phone/event.ejs',
  'tpl!templates/phone/eventItem.ejs',
  'tpl!templates/desktop/listView.ejs',
  'tpl!templates/phone/mapOverlay.ejs',
  'tpl!templates/phone/mentionItem.ejs',
  'tpl!templates/phone/news.ejs',
  'tpl!templates/phone/newsItem.ejs',
  'tpl!templates/phone/other.ejs',
  'tpl!templates/phone/otherItem.ejs',
  'tpl!templates/phone/photo.ejs',
  'tpl!templates/desktop/photoItem.ejs',
  'tpl!templates/phone/product.ejs',
  'tpl!templates/desktop/productItem.ejs',
  'tpl!templates/phone/singlePhoto.ejs',
  'tpl!templates/desktop/sound.ejs',
  'tpl!templates/phone/soundItem.ejs',
  'tpl!templates/phone/status.ejs',
  'tpl!templates/desktop/statusItem.ejs',
  'tpl!templates/phone/toolbar.ejs',
  'tpl!templates/phone/toolbarItem.ejs',
  'tpl!templates/desktop/video.ejs',
  'tpl!templates/desktop/videoItem.ejs',

  'tpl!templates/desktop/detailView.ejs',
  'tpl!templates/desktop/itemList.ejs'
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
  tplVideo,
  tplVideoItem,

  tplDetailsView,
  tplItemList
) {
  var sleek = new Sleek();
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
        news          : tplNews,
        newsItem      : tplNewsItem,
        other         : tplOther,
        otherItem     : tplOtherItem,
        photo         : tplPhoto,
        photoItem     : tplPhotoItem,
        product       : tplProduct,
        productItem   : tplProductItem,
        singlePhoto   : tplSinglePhoto,
        sound         : tplSound,
        soundItem     : tplSoundItem,
        status        : tplStatus,
        statusItem    : tplStatusItem,
        toolbar       : tplToolbar,
        toolbarItem   : tplToolbarItem,
        video         : tplVideo,
        videoItem     : tplVideoItem,

        detailsView   : tplDetailsView,
        itemList      : tplItemList
      }
    });
  });
});
