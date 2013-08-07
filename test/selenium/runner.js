//requires files needed for the tests
var webdriver = require('selenium-webdriver');
var woodman = require('woodman');
var utility = require('./utility.js');
var fs = require('fs');

woodman.load('console');
// Instantiate a Logger
var logger = woodman.getLogger('main');
// Start logging messages
logger.log('Logger is functional.');

var prompt = require('prompt');
prompt.start();
prompt.get(['test'], function (err, result) { 
  var exists = fs.existsSync('./scripts/' + result.test + '.js');
  if(exists) {
    run(result.test); 
  } else { 
    logger.log('doesnt exist');
  }
});

var run = function (test) {
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

  var script = require('./scripts/' + test + '.js'); 
  //Decides whether to launch prerequisite and the script, or just the script.
  
  script(driver, driverFunctions)
    .then(function() {
        prompt.get(['quitdriver'], function (err, result) { 
          if(result.quitdriver == "yes") {
            driver.quit();
          }
        });
      }, function(err) {
        prompt.get(['quitdriver'], function (err, result) { 
          if(result.quitdriver == "yes") {
            driver.quit();
          }
        });
      })
}