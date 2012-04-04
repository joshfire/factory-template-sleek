define([
  'spot.tablet',
  'joshlib!factorycollection',
  'joshlib!ui/list',
  'ui/imagegallery',
  'joshlib!ui/item',
  'joshlib!ui/imageloader',
  'joshlib!ui/factorymedia',
  'joshlib!router',
  'joshlib!ui/cardpanel',
  'joshlib!ui/slidepanel',
  'ui/text',
  'ui/map',
  'joshlib!adapters/phone/ui/toolbar',
  'joshlib!utils/onready',
  'joshlib!collection',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore',
  'joshlib!vendor/backbone'],
function(Spot, FactoryCollection, List, ImageGallery, Item, ImageLoader, FactoryMedia, Router, CardPanel, SlidePanel, Text, Map, Toolbar, onReady, Collection,$,_,Backbone) {

  onReady(function() {
    Spot.initialize();

    //
    // Toolbar
    //

    var sectionNames = ['statuses', 'events', 'news', 'contact', 'map', 'photos', 'videos'];

    var sections = new Backbone.Collection();

    for(var i = 0; i < sectionNames.length; i++) {
      name = sectionNames[i];

      if(Spot.collections[name]
          || (name === 'contact' && Spot.contactHTML)
          || (name === 'map' && Spot.latitude && Spot.longitude)) {
        sections.add({name: name, linkURL: '#' + name});
      }

    }

    var toolbar = new List({
      el: '#toolbar',
      templateEl: '#template-toolbar',
      itemTemplateEl: '#toolbar-item'
    });

    //
    // Views
    //
    var views = {};

    // Photos
    views.photos = new ImageGallery({
      el: '#photos-content',
      templateEl: '#item-list',
      scroller: true,
      itemFactory: Spot.itemFactory,
      collection: Spot.collections.photos
    });

    // Statuses
    views.statusesList = new List({
      el: '#statuses-content',
      templateEl: '#item-list',
      contentSelector: '.first',
      scroller: true,
      itemFactory: Spot.itemFactory,
      collection: Spot.collections.statuses
    });

    views.statusesDetail = new Item({
      el: '#status-detail',
      templateEl: '#template-status',
      scroller: true
    });

    // Events
    views.eventsList = new List({
      el: '#events-content',
      templateEl: '#item-list',
      contentSelector: '.first',
      scroller: true,
      itemFactory: Spot.itemFactory,
      collection: Spot.collections.events
    });

    views.eventsDetail = new Item({
      el: '#event-detail',
      templateEl: '#template-event',
      scroller: true
    });

    // Videos
    views.videosList = new List({
      el: '#videos-content',
      templateEl: '#item-list',
      contentSelector: '.first',
      scroller: true,
      itemFactory: Spot.itemFactory,
      collection: Spot.collections.videos
    });

    views.videosDetail = new FactoryMedia({
      el: '#video-detail',
      templateEl: '#template-video',
      scroller: true,
      mediaOptions: {
        strategy: 'html5',
        width: '100%',
        height: 300
      }
    });

    // News
    views.newsList = new List({
      el: '#news-content',
      templateEl: '#item-list',
      contentSelector: '.first',
      scroller: true,
      itemFactory: Spot.itemFactory,
      collection: Spot.collections.news
    });

    views.newsDetail = new Item({
      el: '#news-detail',
      templateEl: '#template-news',
      scroller: true
    });

    // Contact
    var contactViews = {};

    contactViews.index = new Text({
      el: '#contact-index',
      templateEl: '#template-contact-index',
      textContent: Spot.contactHTML,
      scroller: true
    });

    contactViews.map = new Map({
      el: '#contact-map',
      templateEl: '#template-contact-map',
      latitude: Spot.latitude,
      longitude: Spot.longitude,
      icon: 'images/phone-location.png',
      overlayTemplateEl: '#template-map-overlay',
      overlayOptions: { address: Spot.address }
    });

    var contactCards = new SlidePanel({
      el: '#contact-cards',
      children: contactViews
    });

    views.contact = contactCards;


    // Main panel
    var Sections = Backbone.View.extend({
      el: '#cards',
      children: views,

      initialize: function() {
        _.each(this.children, function(child) {
          child.hide();
        });
      },

      showSection: function(name) {
        _.each(this.children, function(child, key) {
          if(key !== name + 'List' && key != name + 'Detail') {
            child.hide();
          }
        });

        this.children[name + 'List'].show();
        this.children[name + 'Detail'].show();
      }
    });

    var cards = new Sections();

    //
    // Router
    //
    var $title = $('#title');
    var $refresh = $('#refresh');
    var $toolbar = $('#toolbar');

    // Create a view for a list
    var makeRouteForList = function(name) {
      return function() {
        $('#video-detail iframe').remove();
        $('#video-detail object').remove();
        $title.text(Joshfire.factory.getDataSource(name).name);
        $toolbar.find('.active').removeClass('active');
        $toolbar.find('.' + name).addClass('active');
        cards.showSection(name);

        document.body.id = name;
        $refresh.show().unbind('click').bind('click', function() {
          Spot.collections[name].fetch();
          return false;
        });

        if(Spot.collections[name].length === 0) {
          Spot.collections[name].fetch({
            success: function() {
              if(Spot.collections[name].length) {
                var model = Spot.collections[name].at(0);
                var detail = views[name + 'Detail'];
                detail.setModel(model);
                detail.render();
              }
            }
          });
        }
      };
    };

    // Create a view for an item detail
    var makeRouteForItemDetail = function(name, plural) {
      plural = plural || name + 's';

      return function(offset) {
        $('#video-detail iframe').remove();
        $title.text(Joshfire.factory.getDataSource(plural).name);
        $toolbar.find('.active').removeClass('active');
        $toolbar.find('.' + plural).addClass('active');
        cards.showSection(plural);
        document.body.id = name;
        $refresh.hide();

        if(Spot.collections[plural].length === 0) {
          Spot.collections[plural].fetch({success: function() {
            var model = Spot.collections[plural].at(parseInt(offset));
            var detail = views[plural + 'Detail'];
            detail.setModel(model);
            detail.render();
          }});
        } else {
          var model = Spot.collections[plural].at(parseInt(offset));
          var detail = views[plural + 'Detail'];
          detail.setModel(model);
          detail.render();
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
      statuses: makeRouteForList('statuses'),
      videos:   makeRouteForList('videos'),
      events:   makeRouteForList('events'),
      news:     makeRouteForList('news'),

      // Detail routes
      status:   makeRouteForItemDetail('status', 'statuses'),
      video:    makeRouteForItemDetail('video'),
      event:    makeRouteForItemDetail('event'),
      article:  makeRouteForItemDetail('article', 'news'),

      // Contact
      contact: function() {
        $('#video-detail iframe').remove();
        $title.text('Contact');
        document.body.id = 'contact';
        $toolbar.find('.active').removeClass('active');
        $toolbar.find('.contact').addClass('active');
        cards.showChildren('contact');
        contactCards.showChildren('index');
        $refresh.hide();
        contactViews.index.render();
      },

      // Map
      map: function() {
        $('#video-detail iframe').remove();
        $title.text('Map');
        document.body.id = 'map';
        $toolbar.find('.active').removeClass('active');
        $toolbar.find('.map').addClass('active');
        cards.showChildren('contact');
        contactCards.showChildren('map');
        $refresh.hide();
        contactViews.map.render();
      }

    });

    toolbar.setCollection(sections);
    toolbar.render();

    router.historyStart();
  });
});
