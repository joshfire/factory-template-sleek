var cp = require('child_process');

var fork = function() {
  var ps = cp.fork(__dirname + '/less_watcher.js');

  ps.on('exit', function (code) {
    //if (code !== 0) {
      fork();
    //}
  });
}

fork();
