/**
 * @fileoverview Base class for Joshfire datasource collections.
 *
 * This base class wraps a Joshfire Factory datasource in a Backbone
 * collection, ensuring that the "sync" method of the Backbone collection
 * calls the "find" method of the Factory datasource.
 */

define([
  'joshlib!collection',
  'joshlib!vendor/underscore'
], function (Collection, _) {
  var filteredCollection = Collection.extend({
    /**
     * Overrides base sync method to filter out entries whose images are
     * too large, because such images often result in a crash when the app
     * attempts to render them on a Samsung TV (model 2011 at least).
     */
    sync: function (method, model, options) {
      options = options || {};
      var success = options.success || function () {};
      options.success = function (model, entries, options) {
        // The goal of the following code is to update the "entries" array
        // in place to filter out images that are too large ("in place" as
        // in no call to concat, slice or other array methods that would
        // create a copy of the array)
        var copy = _.filter(entries, function (item) {
          return (item.width <= 1024);
        });
        entries.splice(0, entries.length);
        _.each(copy, function (item) {
          entries.push(item);
        });
        success(model, entries, options);
      };
      Collection.prototype.sync.call(this, method, model, options);
    }
  });
  return filteredCollection;
});