// user logs in: the page should be refreshed, the navbar should display a "Your apps" menu 

var webdriver = require('selenium-webdriver');
var woodman = require('woodman');
var utility = require('./utility.js');

/**
 * @module prerequisite
 * @requires module:utility
 */

/**
 * Creates a user, and creates an app. Passes conditions to the additional tests
 *
 * @constructor
 * @param  {Object} driver             The driver defined by the runner or jasmine file
 * @param  {Object} getDriverFunctions An Object containing the list of functions
 * @return {Promise}                    Returns a promise that the prerequisite test will be completed
 */
module.exports = function (driver, getDriverFunctions) {
  var logger = woodman.getLogger('prerequisite');
  /**
   * Logs the current progress.
   *
   * @function output
   * @memberOf module:prerequisite
   * @param {Object} logger Uses prerequisite.js's unique logger
   * @see {@link module:utility.getOutput|getOutput}
   */
  var output = utility.getOutput(logger);  
  /**
   * The conditions that are passed along to each of the tests
   * 
   * @type {Object}
   * @memberOf module:prerequisite
   * @property {string} email An email is generated using the built-in Date function to guarntee a new username
   * @property {string} password A password is defined
   */
  var conditions = {};

  //defines a date, which includes the current date as well as the current time
  var newDate = new Date();
  //sets the email and password
  conditions.email = "betatest" + ((newDate.getDate() < 10)?"0":"") + newDate.getDate() +"/"+(((newDate.getMonth()+1) < 10)?"0":"") + (newDate.getMonth()+1) +"/"+ newDate.getFullYear() + ((newDate.getHours() < 10)?"0":"") + newDate.getHours() +"-"+ ((newDate.getMinutes() < 10)?"0":"") + newDate.getMinutes() +"-"+ ((newDate.getSeconds() < 10)?"0":"") + newDate.getSeconds() + "@yopmail.com";
  conditions.password = "testtest";

  /* test begins here */

  return getDriverFunctions.loadPage()
    .then(output('register mandatory user'))
    .then(getDriverFunctions.register(conditions.email, conditions.password))
    .then(output('create an app for mandatory user'))
    .then(function() {
    	return getDriverFunctions.wait(1000);
    })
    .then(getDriverFunctions.createApp('androidphone', 'smoothie'))
    .then(output('logout'))
    .then(getDriverFunctions.logout())
    .then(output('return conditions'))
    // the error handling function.
    // if there's an error, it is thrown
    .then(function () {
      return conditions;
    }, function(err) {
      logger.error('unable to ' + context + '. ' + err);
      throw ('unable to ' + context + '. ' + err);
    });
};