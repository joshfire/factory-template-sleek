define([
  'joshlib!factorycollection',
  'ui/list',
  'ui/imagegallery',
  'ui/item',
  'ui/imageloader',
  'joshlib!router',
  'joshlib!ui/cardpanel',
  'ui/slidepanel',
  'ui/text',
  'ui/map',
  'joshlib!utils/onready',
  'joshlib!collection',
  'joshlib!vendor/backbone'],
function(FactoryCollection, List, ImageGallery, Item, ImageLoader, Router, CardPanel, SlidePanel, Text, Map, onReady, Collection,_) {

  document.title = Joshfire.factory.config.app.name;

  onReady(function() {

    var contactHTML = Joshfire.factory.config.template.options.contacthtml;
    var latitude = parseFloat(Joshfire.factory.config.template.options.latitude);
    var longitude = parseFloat(Joshfire.factory.config.template.options.longitude);
    var address = Joshfire.factory.config.template.options.address;

    //
    // Sets theme color.
    //
    var setColor = function(color) {
      $('#color').remove();
      $('head').append('<link id="color" rel="stylesheet" href="css/tv.' + color + '.css" type="text/css">');
    };

    //
    // Returns a thumbnail URL form an image object
    //
    var getThumbnail = function(item, offset) {
      var width = document.body.clientWidth;

      if(offset < collections.photos.length - 1) {
        width *= .5;
      }

      if(item.thumbnails) {
        var thumbnails = item.thumbnails;

        for (var i=0; i < thumbnails.length; i++) {
          var thumbnail = thumbnails[i];

          if(thumbnail.width >= width) return thumbnail.contentURL;
        };
      }

      return item.contentURL || null;
    }

    //
    // Returns a thumbnail URL form a video object
    //
    var getVideoThumbnail = function(item) {
      if(item.thumbnails) {
        var thumbnails = item.thumbnail;
        var best = thumbnails[0];

        for (var i=1; i < thumbnails.length; i++) {
          var thumbnail = thumbnails[i];

          if(thumbnail.width > best.width) best = thumbnail;
        };

        return best.contentURL;
      }

      return item.image.contentURL;
    }

    //
    // Creates a list item view based on the type of the item.
    //
    var itemFactory = function(model, offset) {
      var item = model.toJSON();

      console.log(item);

      switch(item.itemType) {
        case 'ImageObject':
        return new ImageLoader({
          model: model,
          offset: offset,
          templateEl: '#template-image-item',
          getImageURL: function() { console.log(getThumbnail(item, offset)); return getThumbnail(item, offset); }
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
    };

    // set template color from user set option
    setColor(Joshfire.factory.config.template.options.color);

    var dataSourceNames = ['photos', 'videos', 'events', 'news', 'statuses'];

    var collections = {};

    for(var s in dataSourceNames) {
      var name = dataSourceNames[s];
      if(Joshfire.factory.config.datasources[name]) {
        collections[name] = FactoryCollection(name);
      }
    }

    //
    // Toolbar
    //

    var sectionNames = ['photos', 'videos', 'contact', 'events', 'news', 'statuses'];

    var sections = new Backbone.Collection();

    for(var i = 0; i < sectionNames.length; i++) {
      name = sectionNames[i];

      if(collections[name] || name == 'contact') {
        sections.add({name: name, linkURL: '#' + name});
      }
    }

    var toolbar = new List({
      el: '#toolbar',
      templateEl: '#template-toolbar',
      itemTemplateEl: '#template-toolbar-item',
      scroller: true,
      scrollOptions: {
        vScroll: false,
        hScrollbar: false,
        snap: true,
        bounce: false
      }
    });

    toolbar.setCollection(sections, true);

    //
    // Views
    //
    var views = {};

    // Photos
    views.photos = new ImageGallery({
      el: '#photos-content',
      templateEl: '#item-list',
      scroller: true,
      itemFactory: itemFactory,
      collection: collections.photos
    });

    // Statuses
    var statusesViews = {};

    statusesViews.list = new List({
      el: '#statuses-content',
      templateEl: '#item-list',
      scroller: true,
      itemFactory: itemFactory,
      collection: collections.statuses
    });

    statusesViews.detail = new Item({
      el: '#status-detail',
      templateEl: '#template-status',
      scroller: true
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
      scroller: true,
      itemFactory: itemFactory,
      collection: collections.events
    });

    eventsViews.detail = new Item({
      el: '#event-detail',
      templateEl: '#template-event',
      scroller: true
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
      scroller: true,
      itemFactory: itemFactory,
      collection: collections.videos
    });

    videosViews.detail = new ImageLoader({
      el: '#video-detail',
      templateEl: '#template-video',
      scroller: true,
      getImageURL: function() { return getVideoThumbnail(this.model.toJSON()); }
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
      scroller: true,
      itemFactory: itemFactory,
      collection: collections.news
    });

    newsViews.detail = new Item({
      el: '#news-detail',
      templateEl: '#template-news',
      scroller: true
    });

    var newsCards = new SlidePanel({
      el: '#news-cards',
      children: newsViews
    });

    views.news = newsCards;

    // Contact
    var contactViews = {};

    contactViews.index = new Text({
      el: '#contact-index',
      templateEl: '#template-contact-index',
      textContent: contactHTML,
      scroller: true
    });

    contactViews.map = new Map({
      el: '#contact-map',
      templateEl: '#template-contact-map',
      latitude: latitude,
      longitude: longitude,
      icon: 'images/phone-location.png',
      overlayTemplateEl: '#template-map-overlay',
      overlayOptions: { address: address }
    });

    var contactCards = new SlidePanel({
      el: '#contact-cards',
      children: contactViews
    });

    views.contact = contactCards;


    // Main panel
    var cards = new CardPanel({
      el: '#cards',
      children: views
    });

    //
    // Router
    //
    var $title = $('#title');
    var $back = $('#back');
    var $refresh = $('#refresh');
    var $toolbar = $('#toolbar');

    // Create a view for a list
    var makeRouteForList = function(name, sectionCards) {
      return function() {
        $title.text(Joshfire.factory.getDataSource(name).name);
        $toolbar.find('.active').removeClass('active');
        $toolbar.find('.' + name).addClass('active');
        cards.showChildren(name);

        if(sectionCards) sectionCards.showChildren('list');

        document.body.id = name;
        $back.hide();
        $refresh.show().unbind('click').click(function() {
          collections[name].fetch();
          return false;
        });

        if(collections[name].length === 0) {
          collections[name].fetch();
        }
      };
    };

    // Create a view for an item detail
    var makeRouteForItemDetail = function(name, sectionCards, plural) {
      plural = plural || name + 's';

      return function(offset) {
        $title.text(Joshfire.factory.getDataSource(plural).name);
        $toolbar.find('.active').removeClass('active');
        $toolbar.find('.' + plural).addClass('active');
        cards.showChildren(plural);
        sectionCards.showChildren('detail');
        document.body.id = name;
        $back.attr('href', '#' + plural + '').show();
        $refresh.hide();

        if(collections[plural].length === 0) {
          collections[plural].fetch({success: function() {
            var model = collections[plural].at(parseInt(offset));
            sectionCards.children.detail.setModel(model, true);
          }});
        } else {
          var model = collections[plural].at(parseInt(offset));
          sectionCards.children.detail.setModel(model, true);
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
        $title.text('Contact');
        document.body.id = 'contact';
        $toolbar.find('.active').removeClass('active');
        $toolbar.find('.contact').addClass('active');
        cards.showChildren('contact');
        contactCards.showChildren('index');
        $back.hide();
        $refresh.hide();
        contactViews.index.render();
      },

      // Map
      map: function() {
        $title.text('Map');
        document.body.id = 'map';
        $toolbar.find('.active').removeClass('active');
        $toolbar.find('.contact').addClass('active');
        cards.showChildren('contact');
        contactCards.showChildren('map');
        $back.attr('href', '#contact' + '').show();
        $refresh.hide();
        contactViews.map.render();
      }

    });

    router.historyStart();
  });
});