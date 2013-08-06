// load necessary scripts
var webdriver = require('selenium-webdriver');
var woodman = require('woodman');
var async = require('async');
var path = require('path');

var visibleElement;

/**
 * @module utility
 * @requires module:prerequisite
 */

/**
 * Exports the functions to the test scripts
 *
 * @constructor
 * @param {Object} driver The driver, which is passed 
 * from either the runner or the jasmine script
 * @return {Object} Returns an Object {@link functions} containing the functions
 */
exports.getDriverFunctions = function(driver) {
  return functions = {
    /**
     * Waits for the specified number of milliseconds
     *
     * @function wait
     * @memberOf module:utility
     * @param {integer} ms The number of milliseconds to wait
     * @return {Promise} The promise that the number of milliseconds 
     * have passed since the method was called.
     */
    wait: function (ms) {
      var deferred = new webdriver.promise.defer();
      setTimeout(function () {
        deferred.resolve();
      }, ms);
      return deferred.promise;
    },
    /**
     * Waits for a few seconds for an element to come into existence
     * in the DOM
     *
     * @function waitForExistence
     * @memberOf module:utility
     * @param {By} selector The selector to use to extract the element
     * @return {Promise} The promise that the element will be around
     */
    waitForExistence: function (selector) {
      return driver.wait(function () {
        return driver.findElement(selector)
          .then(function () {
            return true;
          }, function (err) {
            if (err.name === 'NoSuchElementError') {
              return false;
            }
            throw err;
          });
      }, 10000)
        .then(function () {
          return driver.findElement(selector);
        });
    }, 
    /**
     * Waits for a few seconds for an element to come into existence, be
     * displayed and enabled.
     *
     * @function waitForEnabled
     * @memberOf module:utility
     * @param {By} selector The selector to use to extract the element
     * @return {Promise} The promise that the element will be enabled
     */
    waitForEnabled: function (selector) {
      return functions.waitForExistence(selector)
        .then(function () {
          // Wait for the element to be displayed
          return driver.wait(function () {
            return driver.findElement(selector).isDisplayed();
          }, 15000);
        })
        .then(function () {
          // Wait for the element to be enabled
          return driver.wait(function () {
            return driver.findElement(selector).isEnabled();
          }, 10000);
        })
        .then(function () {
          // Wait a bit more because reflow may take some time
          return functions.wait(5000);
        })
        .then(function () {
          return driver.findElement(selector);
        });  
    },
    /**
     * Unless provided with an alternate url,
     * Loads the joshfire factory in the browser window
     * maximizes the window, then refreshs the page 
     * 
     * @function loadPage
     * @memberOf module:utility
     * @example
     * //Loads the windows uk verision of the staging joshfire factory
     * loadPage('windows'
     * @param {string} [alternateUrl] A url to load other than factory-staging.joshfire.com
     * @return {Promise} Returns the promise that the page will load
     * @see {@link module:prerequisite.loadPage|loadPage}
     */
    loadPage: function(file) {
      var sleek = 'file://' + path.resolve('../../app/' + file); 
      return driver.get(sleek)
        .then(output('Load initial page'))
        .then(function() {
          return driver.manage().window().maximize();
        })
    },
    /**
     * Checks if the element is visible
     * @param  {object} selector The selector to use to extract the element
     * @param  {By} [element] The promise of an element
     * @return {promise} Returns the promise
     */
    isVisible: function(selector, element) {
      var d = webdriver.promise.defer();
      async.waterfall([
        function(callback) {
          return driver.findElement(selector)
            .then(function(el) {
              if(!element) {
                element = el;
                console.log('use selector');
                return element.isDisplayed();
              } else {
                console.log('use element');
                return element.isDisplayed();
              }
            })
            .then(function(visible) {
              if(visible) {
                callback(null, element);
              } else {
                driver.findElements(selector)
                  .then(function(elements) {
                    async.forEachSeries(elements, function (el, cb) {
                      el.isDisplayed()
                        .then(function(visible) {
                          console.log(visible);
                          if(visible && el) {
                            callback(null, el);
                          } else { 
                            return cb();
                          }
                        })
                    });
                  })
              }
            })
        }
      ],
      function(err, element) {
        visibleElement = element;
        d.fulfill(visibleElement);  
      });
      return d.promise;
    },
    exploreApp: function(toolbar) {
      return function() {
        wraptext = '//div[@class="joshfire-wrapper"]/div[' + toolbar + ']';
        return functions.waitForEnabled(webdriver.By.id('toolbar'))
          .then(function() {
            output('click on tab')();
            return driver.findElement(webdriver.By.xpath('//*[@id="toolbar"]/ul/li[' + toolbar + ']/a')); 
          })
          .then(function(element) {
            element.click();
          })
          .then(output('find a list of items'))
          .then(function() {
            return driver.findElement(webdriver.By.xpath(wraptext));
          })
          .then(function(wrapper) {
            return wrapper.findElements(webdriver.By.css('.list li'));
          })
          .then(function(elements) {
            if(elements.length > 30) {
              output('list is long')();  
            } else {
              elements[0].getAttribute('class')
                .then(function(cl) {
                  if(cl.indexOf('photo-item') >= 0) {
                    output('list is long')();
                  } else {
                    output('problem with list')();         
                  }
                })
            }
          })
          .then(output('click on item'))
          .then(function() {
            return driver.findElement(webdriver.By.xpath(wraptext + '//ul[contains(@class,"list")]/li[2]/div/a'));
          })
          .then(function(element) {
            element.click();
          })
          .then(function() { 
            return driver.findElement(webdriver.By.css('.mosaic-list'))
              .addErrback(function(err) {})
              .then(function(element) {
                if(element) {
                  return element.isDisplayed();
                } else {
                  return false;
                }
              })
          })
          .then(function(visible) {
            if(visible) {
              //images - explore the images
              var caption;
              var getCaptionText = function(compare) {
                return function() {
                  output('get caption text')();
                  return driver.findElement(webdriver.By.css('.ps-caption-content'))
                    .then(function(element) {
                      return element.getText();
                    })
                    .then(function(text) {
                      if(text) {
                        console.log(text);
                        if(caption) {
                          if((text == caption && compare) || (text != caption && !compare)) {
                            output('captions are good')();
                          } else {
                            throw "caption texts error - problem with next/prev button."
                          }
                        } else {
                          caption = text;
                        }
                      } else {
                        output('click on pic')();
                        return functions.waitForExistence(webdriver.By.css('.ps-carousel'))
                          .then(function(element) {
                            element.click();
                          })
                          .then(getCaptionText(false))
                      }
                    })
                }
              }
              var clickButton = function(css) {
                return function() {
                  return driver.findElement(webdriver.By.css(css))
                    .then(function(element) {
                      element.click();
                    })
                }
              }

              var picClick = function(css) {
                return function(err) {
                  console.log('err' + err);
                  if(err == "ElementNotVisibleError: Element is not currently visible and so may not be interacted with") {
                    output('click on pic')();
                    return functions.waitForExistence(webdriver.By.css('.ps-carousel'))
                      .then(function(element) {
                        element.click();
                      })
                      .then(clickButton(css))
                  } else {
                    throw '0h n0!' + err;
                  }
                }
              }
              return driver.findElement(webdriver.By.css('.ps-carousel'))
                .then(getCaptionText(false))
                .then(output('click next button'))
                .then(clickButton('.ps-toolbar-next'), picClick('.ps-toolbar-next'))
                .then(getCaptionText(false))
                .then(output('click prev button'))
                .then(clickButton('.ps-toolbar-previous'), picClick('.ps-toolbar-previous'))
                .then(getCaptionText(true))
                .then(output('click close button'))
                .then(clickButton('.ps-toolbar-close'), picClick('.ps-toolbar-close'))
            } else {
              //split-view - check if the right panel is displaying correctly
              output('check if right panel is functioning properly')();
              return functions.waitForExistence(webdriver.By.css('.media'))
                .then(output('good'))
                .then(function() {
                  output('A: find elements')();
                  return functions.waitForExistence(webdriver.By.css('h3'))
                    .then(function() { 
                      return functions.waitForExistence(webdriver.By.css('h4'));
                    })
                    .then(function() { 
                      return functions.waitForExistence(webdriver.By.css('div.article'));
                    })

                },
                function(err) {
                  output('B: find elements')();
                  return functions.waitForExistence(webdriver.By.css('.header'))
                    .then(function() { 
                      return functions.waitForExistence(webdriver.By.css('h4'));
                    })
                    .then(function() {
                      return functions.waitForExistence(webdriver.By.css('.arrow'));
                    })
                    .then(function() {
                      return functions.waitForExistence(webdriver.By.css('.message'));
                    })
                    .then(function() {
                      return functions.waitForExistence(webdriver.By.css('.cover'));
                    })
                    .then(function() {
                      return functions.waitForExistence(webdriver.By.css('p'));
                    })

                })
            }
          })
      }
    }

  };
};

// defines the context, which is used in the output hence also errorhandling
// since it's global, there's no need to redefine it in every test file
global.context = '';
/**
 * Logs the current progress
 * 
 * @function getOutput
 * @memberOf module:utility
 * @param  {Object} logger Uses the script's unique logger
 * @return {function}        Returns the output function
 * @see {@link module:prerequisite.output|output}
 */
exports.getOutput = function (logger) {
  return output = function(string) {
    return function () {
      context = string;
      logger.log(string);
    };
  };
};