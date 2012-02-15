desc('Default task.');
task('default', [], function () {
  console.log('Run jake -T to list tasks.');
});

namespace('compile', function () {
  desc('Compile less files');
  task('less', [], function () {
    var compile = require('./compile_less').compile;

    compile(function() {
      complete();
    });
  }, true);

  /*desc('Compile javascript files');
  task('js', [], function () {
    var requirejs = require('requirejs');

    var config = {
      appDir: '../app',
	    baseUrl: '.',
	     dir: '../build',
	     modules: [
	  	  {
	  	    name: 'app.tv'
	  	  }
	    ],
      paths: {
        joshlib: 'joshfire-framework-backbone/lib/joshlib'
      }
  	};

  	requirejs.optimize(config, function (buildResponse) {
  	  complete();
  	});
  }, true);*/
  
});