/*var cluster = require('cluster');

if (cluster.isMaster) {
  cluster.fork();

  cluster.on('death', function(worker) {
    cluster.fork();
  });
} else {
  require('./watch');
}*/

var cp = require('child_process');

var fork = function() {
  var ps = cp.fork(__dirname + '/watch.js');

  ps.on('exit', function (code) {
    if (code !== 0) {
      fork();
    }
  });
}

fork();
