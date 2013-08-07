var webdriver = require('selenium-webdriver');
var woodman = require('woodman');
var utility = require('../../utility.js');

/**
 * @module instagram_phone_optimized
 * @requires module:utility
 */

/**
 * Explores features of the instagram tab on the phone_optimized
 *
 * @constructor
 * @param  {Object} driver             The driver defined by the runner or jasmine file
 * @param  {Object} getDriverFunctions An Object containing the list of functions
 * @param {Object} conditions          An Object containing the variables created in prerequisite.js
 * @return {Promise}                   Returns a promise that the test will be completed
 */
module.exports = function (driver, getDriverFunctions, conditions) {
  var logger = woodman.getLogger('instagram phone_optimized'); 
  /**
   * Logs the current progress.
   *
   * @function output
   * @memberOf module:test
   * @param {Object} logger Uses this test's unique logger
   * @see {@link module:utility.getOutput|getOutput}
   */ 
  var output = utility.getOutput(logger);

  /* test begins here */
  
  return getDriverFunctions.loadPage('index.phone.optimized.html')
    .then(getDriverFunctions.exploreApp(4))
    // the error handling function.
    // if there's an error, it is thrown
    .then(function () {}, function(err) {
      logger.error('unable to ' + context + '. ' + err);
      throw ('unable to ' + context + '. ' + err);
    });
};