require.config({
  paths: {
    tpl: 'vendor/tpl'
  }
});

define([
  'sleek.phone',
  'joshlib!utils/onready',
  'tpl!templates/phone/navbar.ejs',
  'tpl!templates/phone/contactIndex.ejs',
  'tpl!templates/phone/contactMap.ejs',
  'tpl!templates/phone/event.ejs',
  'tpl!templates/phone/eventItem.ejs',
  'tpl!templates/phone/listView.ejs',
  'tpl!templates/phone/mapOverlay.ejs',
  'tpl!templates/phone/mentionItem.ejs',
  'tpl!templates/phone/news.ejs',
  'tpl!templates/phone/newsItem.ejs',
  'tpl!templates/phone/other.ejs',
  'tpl!templates/phone/otherItem.ejs',
  'tpl!templates/phone/photo.ejs',
  'tpl!templates/phone/photoItem.ejs',
  'tpl!templates/phone/product.ejs',
  'tpl!templates/phone/productItem.ejs',
  'tpl!templates/phone/singlePhoto.ejs',
  'tpl!templates/phone/sound.ejs',
  'tpl!templates/phone/soundItem.ejs',
  'tpl!templates/phone/status.ejs',
  'tpl!templates/phone/statusItem.ejs',
  'tpl!templates/phone/sidebar.ejs',
  'tpl!templates/phone/sidebarItem.ejs',
  'tpl!templates/phone/video.ejs',
  'tpl!templates/phone/videoItem.ejs'
], function (
  Sleek,
  onReady,
  tplNavbar,
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
  tplSidebar,
  tplSidebarItem,
  tplVideo,
  tplVideoItem
) {
  var sleek = new Sleek();


  onReady(function () {
    sleek.initialize({
      templates: {
        navbar        : tplNavbar,
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
        sidebar       : tplSidebar,
        sidebarItem   : tplSidebarItem,
        video         : tplVideo,
        videoItem     : tplVideoItem
      }
    });
  });
});
