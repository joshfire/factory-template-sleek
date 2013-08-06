/**
 * Folders you wish to exclude from the Jasmine tests
 * 
 * @example
 * // This will not test any scripts in the templates folder
 * var excludedFolders = ['scripts/templates'];
 * @type {Array}
 */
var excludedFolders = [
  'scripts/app creation',
  'scripts/deploy',
  'scripts/external integrations',
  'scripts/integrations',
  'scripts/login:register',
  'scripts/options',
  'scripts/pages',
  'scripts/templates'
];
// example: 'scripts/integrations/dailymotion_video.js'
/**
 * Scripts you wish to exclude from the Jasmine tests
 * 
 * @example
 * // This will not test dailymotion_register.js
 * var excludedScripts = ['scripts/external integration/dailymotion_register.js'];
 * @type {Array}
 */
var excludedScripts = [

];

//requires files needed for the tests
var webdriver = require('selenium-webdriver');
var woodman = require('woodman');
var fs = require('fs');
var path = require('path');
var finder = require('findit');
var utility = require('../utility.js');
var execSync = require("exec-sync");
var prerequisite = require('../prerequisite.js');

// ".DS_Store" file deleted
execSync("find . -type f -name .DS_Store -exec rm -rf {} +");

//Defines a driver that launches a new browser window
var driver = new webdriver.Builder()
  .usingServer('http://localhost:4444/wd/hub') // http://192.168.2.168:9515
  .withCapabilities({
    'browserName': 'firefox', //chrome
    'version': '',
    'platform': 'ANY',
    'javascriptEnabled': true
  })
  .build();
/**
 * Passes the driver to each of the tests
 * 
 * @type {Object} 
 */
var driverFunctions = utility.getDriverFunctions(driver);
//counts the total number of scripts tested
//var numberOfScripts = 2;
//generates a list of all the folders and files in the scripts folder
var folders = finder.sync('./scripts');
/**
 * Determines whether the array containes the element or not
 *
 * @function indexOf
 * @return {integer} Returns the index of the item in the array. If it doesn't contain the item, it returns -1
 * @example
 * // Check if the array contains the item
 * indexOf.call(array, item)
*/
var indexOf = function(item) {
    if(typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function(item) {
            var i = -1, index;

            for(i = 0; i < this.length; i++) {
                if(this[i] === item) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, item);
};

/**
 * Creates a variable that will be defined in prerequisite.js
 * and passed along to the other tests
 * 
 * @type {Object}
 * @see {@link module:prerequisite#conditions|conditions}
 */
var presetConditions = {};

woodman.load('console');
// Instantiate a Logger
var logger = woodman.getLogger('main');
// Start logging messages
logger.log('Logger is functional');
//creates a jasmine test for prerequisite.js
describe("test", function() {
  var result;
  /**
   * Launches the prerequisite.js test
   * 
   * @function executePrerequisite
   * @return {Object} The conditions defined in the prerequisite test. Passed on to the other tests.
   */
  function executePrerequisite() {
    var completed = false;
    var error = null;
    it("prerequisite script", function(done) {
      //launches the prerequisite test
      result = prerequisite(driver, driverFunctions);
      result.then(function (conditions) {
        //when the test completes, completed = true
        presetConditions = conditions;
        completed = true;
        logger.log('prerequisite test complete');
      }, function (err) {
        error = err;
        completed = true;
        logger.error('prerequisite failed. aborting additional tests.');
        throw "prerequisite failed. aborting additional tests."
      });
      waitsFor(function() {
        return completed;
      }, "timeout", 600000);
      runs(function () {
        //if there was an error, the test fails
        expect(error).toBeNull();
        done();
      });
    });
  }
  executePrerequisite();
});

describe("test", function() {
  var result;
  //var counter = 0;
  /**
   * Launches the test
   *
   * @function executeTest
   * @param  {Module} test The test module
   */
  function executeTest(test) {
    var completed = false;
    var error = null;
    it(scripts[script], function(done) {
      result = test(driver, driverFunctions, presetConditions);
      result.then(function () {
        //when the test completes, completed = true
        completed = true;
        logger.log('test complete');
      }, function (err) {
        error = err;
        completed = true;
      });

      waitsFor(function() {
        return completed;
      }, "timeout", 600000);

      runs(function () {
        //if there was an error, the test fails
        expect(error).toBeNull();
        done();
      });
    });
  }

  afterEach(function() {
    //counter += 1;
    //the counter tells test.spec.js to stop testing
    //and quit the driver after it launches every script
    /*if(counter >= numberOfScripts) {
      logger.log('finished testing ' + numberOfScripts + ' scripts. quitting driver');
      driver.quit();
    }*/
  });

  for(var folder in folders) {
    //include only javascript testing scripts and exclude excluded folders
    if(indexOf.call(excludedFolders, folders[folder]) == -1 && folders[folder].indexOf(".js") == -1) {
      /**
       * A subfolder of scripts folder that contains several tests
       *
       * @example
       * scripts/pages
       * @type {string}
       */
      var subfolder = folders[folder];
      logger.log('launching scripts in the ' + subfolder + ' folder.')
      /**
       * An array containing the tests
       *
       * @example
       * [ 'scripts/external integration/dailymotion_register.js',
        'scripts/external integration/windows_uk_login.js',
        'scripts/external integration/windows_uk_register.js' ]
       * @type {array}
       */
      var scripts = finder.sync(subfolder);
      for(var script in scripts) {
        //include only javascript testing scripts and exclude excluded scripts
        if(indexOf.call(excludedScripts, scripts[script]) == -1 && scripts[script].indexOf(".js") !== -1) {
          //numberOfScripts += 1;
          //fixes the paths of the scripts
          var scriptPath = require(path.join('../', scripts[script]));
          //each script is launched in a jasmine test
          executeTest(scriptPath);
        }
      } 
    }
  }
});