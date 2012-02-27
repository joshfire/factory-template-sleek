
define([
  'spot.tv',
  'joshlib!factorycollection',
  'joshlib!adapters/googletv/ui/verticallist',
  'joshlib!ui/item',
  'joshlib!ui/imageloader',
  'joshlib!ui/video',
  'joshlib!router',
  'joshlib!adapters/googletv/ui/cardpanel',
  'joshlib!adapters/googletv/ui/slidepanel',
  'joshlib!adapters/googletv/ui/grid',
  'ui/text',
  'joshlib!ui/map',
  'joshlib!adapters/googletv/ui/toolbar',
  'joshlib!adapters/googletv/ui/horizontallayout',
  'joshlib!utils/onready',
  'joshlib!collection',
  'joshlib!utils/dollar',
  'joshlib!vendor/backbone'],
function(Spot, FactoryCollection, List, Item, ImageLoader, Video, Router, CardPanel, SlidePanel, Grid, Text, Map, Toolbar, HorizontalLayout, onReady, Collection,$,_) {

  onReady(function() {

    $win = $(window);

    var resize = function() {
      $('body').css({
        zoom: Math.max(50, $win.height() / 10.80) + '%'
      });
    }

    $win.resize(resize);

    resize();

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

    var sectionNames = ['statuses', 'events', 'news', 'contact', 'map', 'photos', 'videos'];

    var sections = new Backbone.Collection();

    for(var i = 0; i < sectionNames.length; i++) {
      name = sectionNames[i];

      if(Spot.collections[name]
          || (name === 'contact' && Spot.contactHTML)
          || (name == 'map' && Spot.latitude && Spot.longitude)) {
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
    views.videos = new Grid({
      el: '#videos-content',
      templateEl: '#template-mosaic',
      itemFactory: Spot.itemFactory,
      collection: Spot.collections.videos
    });

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

    // Photo overlay

    var PhotoOverlay = ImageLoader.extend({
      initialize: function(options) {
        ImageLoader.prototype.initialize.call(this, options);

        this.navUp = this.navDown = this.navAction = this.exit;
        this.offset = options.offset;
      },

      exit: function() {
        this.hide();
        window.location = '#photos';
      },

      navLeft: function() {
        var newOffset = this.offset - 1;

        if(newOffset < 0) {
          newOffset = Spot.collections.photos.length - 1;
        }

        window.location = '#photo/' + newOffset;
      },

      navRight: function() {
        var newOffset = this.offset + 1;

        if(newOffset >= Spot.collections.photos.length) {
          newOffset = 0;
        }

        window.location = '#photo/' + newOffset;
      }
    });

    var photoDetail = new PhotoOverlay({
      el: '#photos-detail',
      templateEl: '#template-photo',
      getImageUrl: function() {
        return this.model.get('contentURL');
      }
    });

    photoDetail.hide();

    // Video overlay

    var VideoOverlay = Video.extend({
      initialize: function(options) {
        Video.prototype.initialize.call(this, options);

        this.navUp = this.navDown = this.navLeft = this.navRight = this.navAction = this.exit;
      },

      exit: function() {
        this.$('iframe').remove();
        this.hide();
        window.location = '#videos';
      }
    });

    var videoDetail = new VideoOverlay({
      el: '#videos-detail',
      templateEl: '#template-video',
      getVideoUrl: function() {
        var id = this.model.get('url').replace('http://www.youtube.com/watch?v=', '');
        return 'http://www.youtube-nocookie.com/embed/' + id + '?rel=0&autoplay=1';
      }
    });

    videoDetail.hide();

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

        'photo/:offset':      'photo',
        'status/:offset':     'status',
        'video/:offset':      'video',
        'event/:offset':      'event',
        'article/:offset':    'article'
      },

      // List routes
      photos:   makeRouteForList('photos'),
      statuses: makeRouteForList('statuses', statusesCards),
      videos:   makeRouteForList('videos'),
      events:   makeRouteForList('events', eventsCards),
      news:     makeRouteForList('news', newsCards),

      // Detail routes
      status:   makeRouteForItemDetail('status', statusesCards, 'statuses'),
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
      },

      // Photo
      photo: function(offset) {
        photoDetail.show();
        photoDetail.navFocus();

        if(Spot.collections.photos.length === 0) {
          Spot.collections.photos.fetch({success: function() {
            var model = Spot.collections.photos.at(parseInt(offset));
            photoDetail.setModel(model, true);
            photoDetail.offset = parseInt(offset);
          }});
        } else {
          var model = Spot.collections.photos.at(parseInt(offset));
          photoDetail.setModel(model, true);
          photoDetail.offset = parseInt(offset);
        }
      },

      // Video
      video: function(offset) {
        videoDetail.show();
        videoDetail.navFocus();

        if(Spot.collections.videos.length === 0) {
          Spot.collections.videos.fetch({success: function() {
            var model = Spot.collections.videos.at(parseInt(offset));
            videoDetail.setModel(model, true);
          }});
        } else {
          var model = Spot.collections.videos.at(parseInt(offset));
          videoDetail.setModel(model, true);
        }
      }

    });

    window.location = '#';
    router.historyStart();
    horizontalLayout.activate(0);
  });
});