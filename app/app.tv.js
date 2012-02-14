define([
  'spot.tv',
  'joshlib!factorycollection',
  'joshlib!adapters/googletv/ui/verticallist',
  'ui/imagegallery',
  'joshlib!ui/item',
  'joshlib!ui/imageloader',
  'joshlib!router',
  'joshlib!adapters/googletv/ui/cardpanel',
  'joshlib!adapters/googletv/ui/slidepanel',
  'joshlib!adapters/googletv/ui/grid',
  'ui/text',
  'ui/map',
  'joshlib!ui/toolbar',
  'joshlib!adapters/googletv/ui/horizontallayout',
  'joshlib!utils/onready',
  'joshlib!collection',
  'joshlib!utils/dollar',
  'joshlib!vendor/backbone'],
function(Spot, FactoryCollection, List, ImageGallery, Item, ImageLoader, Router, CardPanel, SlidePanel, Grid, Text, Map, Toolbar, HorizontalLayout, onReady, Collection,$,_) {

  document.title = Joshfire.factory.config.app.name;

  onReady(function() {

    Spot.initialize();

    //Spot.logoURL = 'http://upload.wikimedia.org/wikipedia/en/thumb/c/ce/University_of_California_Seal.svg/200px-University_of_California_Seal.svg.png';
    //Spot.backgroundURL = 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/UCBerkeleyCampus.jpg/800px-UCBerkeleyCampus.jpg';
    //Spot.logoURL = null;

    if(Spot.backgroundURL) {
      Spot.setBackground(Spot.backgroundURL);
    }

    //
    // Toolbar
    //

    var sectionNames = [/* 'videos',*/ 'statuses', 'events', 'news', 'contact', 'map', 'photos'];

    var sections = new Backbone.Collection();

    for(var i = 0; i < sectionNames.length; i++) {
      name = sectionNames[i];

      if(Spot.collections[name] || name == 'contact' || name == 'map') {
        sections.add({name: name, linkURL: '#' + name});
      }
    }

    var toolbar = new Toolbar({
      el: '#toolbar',
      templateEl: '#template-toolbar',
      itemTemplateEl: '#toolbar-item'
    });

    toolbar.setCollection(sections, true);

    if(Spot.logoURL) {
      Spot.setLogo(Spot.logoURL);
    } else {
      Spot.setTitle(Spot.title);
    }

    //
    // Views
    //
    var views = {};

    // Photos
    views.photos = new Grid({
      el: '#photos-content',
      templateEl: '#template-mosaic',
      itemFactory: Spot.itemFactory,
      collection: Spot.collections.photos
    });

    // Statuses
    var statusesViews = {};

    statusesViews.list = new List({
      el: '#statuses-content',
      templateEl: '#item-list',
      contentSelector: '> div:first-child',
      offsetTop: 40,
      offsetBottom: 40,
      itemFactory: Spot.itemFactory,
      collection: Spot.collections.statuses
    });

    statusesViews.detail = new Item({
      el: '#status-detail',
      templateEl: '#template-status',
      scroller: true,
      offsetTop: 100,
      offsetBottom: 100,
      navLeft: function() {
        window.location = '#statuses';
      }
    });

    var statusesCards = new SlidePanel({
      el: '#statuses-cards',
      children: statusesViews
    });

    views.statuses = statusesCards;

    // Events
    var eventsViews = {};

    eventsViews.list = new List({
      el: '#events-content',
      templateEl: '#item-list',
      contentSelector: '> div:first-child',
      offsetTop: 40,
      offsetBottom: 40,
      itemFactory: Spot.itemFactory,
      collection: Spot.collections.events
    });

    eventsViews.detail = new Item({
      el: '#event-detail',
      templateEl: '#template-event',
      scroller: true,
      offsetTop: 100,
      offsetBottom: 100,
      navLeft: function() {
        window.location = '#events';
      }
    });

    var eventsCards = new SlidePanel({
      el: '#events-cards',
      children: eventsViews
    });

    views.events = eventsCards;

    // Videos
    var videosViews = {};

    videosViews.list = new List({
      el: '#videos-content',
      templateEl: '#item-list',
      contentSelector: '> div:first-child',
      offsetTop: 40,
      offsetBottom: 40,
      itemFactory: Spot.itemFactory,
      collection: Spot.collections.videos
    });

    videosViews.detail = new ImageLoader({
      el: '#video-detail',
      templateEl: '#template-video',
      scroller: true,
      offsetTop: 100,
      offsetBottom: 100,
      getImageUrl: function() {
        return Spot.getVideoThumbnail(this.model.toJSON());
      },
      navLeft: function() {
        window.location = '#videos';
      }
    });

    var videosCards = new SlidePanel({
      el: '#videos-cards',
      children: videosViews
    });

    views.videos = videosCards;

    // News
    var newsViews = {};

    newsViews.list = new List({
      el: '#news-content',
      templateEl: '#item-list',
      contentSelector: '> div:first-child',
      offsetTop: 40,
      offsetBottom: 40,
      itemFactory: Spot.itemFactory,
      collection: Spot.collections.news
    });

    newsViews.detail = new Item({
      el: '#news-detail',
      templateEl: '#template-news',
      scroller: true,
      offsetTop: 100,
      offsetBottom: 100,
      navLeft: function() {
        window.location = '#news';
      }
    });

    var newsCards = new SlidePanel({
      el: '#news-cards',
      children: newsViews
    });

    views.news = newsCards;

    // Contact

    contactView = new Text({
      el: '#contact-content',
      templateEl: '#template-contact',
      textContent: Spot.contactHTML,
      scroller: true,
      offsetTop: 100,
      offsetBottom: 100,
    });

    views.contact = contactView;

    mapView = new Map({
      el: '#map-content',
      templateEl: '#template-map',
      latitude: Spot.latitude,
      longitude: Spot.longitude,
      icon: 'images/phone-location.png',
      overlayTemplateEl: '#template-map-overlay',
      overlayOptions: { address: Spot.address },
      openOverlay: true,
      mapOptions: {
        disableDefaultUI: true
      }
    });

    views.map = mapView;


    // Card panel
    var cards = new CardPanel({
      el: '#cards',
      children: views
    });

    // Horizontal layout
    var horizontalLayout = new HorizontalLayout({
      el: '#container',
      views: [
        toolbar,
        cards
      ]
    });

    //
    // Router
    //

    // Create a view for a list
    var makeRouteForList = function(name, sectionCards) {
      return function() {
        cards.showChildren(name);

        if(sectionCards) {
          sectionCards.showChildren('list');
        }

        document.body.id = name;

        if(Spot.collections[name].length === 0) {
          Spot.collections[name].fetch({success: function() {
            if(!toolbar.focused) cards.children[name].navFocus(horizontalLayout);
          }});
        } else {
          if(!toolbar.focused) cards.children[name].navFocus(horizontalLayout);
        }
      };
    };

    // Create a view for an item detail
    var makeRouteForItemDetail = function(name, sectionCards, plural) {
      plural = plural || name + 's';

      return function(offset) {
        cards.showChildren(plural);
        sectionCards.showChildren('detail');
        document.body.id = name;

        if(Spot.collections[plural].length === 0) {
          Spot.collections[plural].fetch({success: function() {
            var model = Spot.collections[plural].at(parseInt(offset));
            sectionCards.children.detail.setModel(model, true);
            sectionCards.children['detail'].navFocus(sectionCards);
          }});
        } else {
          var model = Spot.collections[plural].at(parseInt(offset));
          sectionCards.children.detail.setModel(model, true);
          sectionCards.children['detail'].navFocus(sectionCards);
         }
      }
    };

    var router = Router({
      routes: {
        '':                   sections.at(0).get('name'),
        'photos':             'photos',
        'statuses':           'statuses',
        'videos':             'videos',
        'events':             'events',
        'news':               'news',
        'contact':            'contact',
        'map':                'map',

        'status/:offset':     'status',
        'video/:offset':      'video',
        'event/:offset':      'event',
        'article/:offset':    'article'
      },

      // List routes
      photos:   makeRouteForList('photos'),
      statuses: makeRouteForList('statuses', statusesCards),
      videos:   makeRouteForList('videos', videosCards),
      events:   makeRouteForList('events', eventsCards),
      news:     makeRouteForList('news', newsCards),

      // Detail routes
      status:   makeRouteForItemDetail('status', statusesCards, 'statuses'),
      video:    makeRouteForItemDetail('video', videosCards),
      event:    makeRouteForItemDetail('event', eventsCards),
      article:  makeRouteForItemDetail('article', newsCards, 'news'),

      // Contact
      contact: function() {
        document.body.id = 'contact';
        cards.showChildren('contact');
        contactView.render();
      },

      // Map
      map: function() {
        document.body.id = 'map';
        cards.showChildren('map');
        mapView.render();
      }

    });

    window.location = '#';
    router.historyStart();
    horizontalLayout.activate(0);
  });
});