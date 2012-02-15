var colors = require('colors');
var fs = require('fs');
var path = require('path');
var compile = require('./compile_less').compile;
var watch = path.join(__dirname, '/../app/less/');
var watched = {};
var compiling = false;

var recompile = function(curr, prev) {
  if(curr.mtime - prev.mtime === 0) return;
  console.log('\nRecompiling ...'.yellow);

  try {
    compile(function() {
      console.log('Done.'.green);
      process.exit(0);
    });
  } catch(e) {
    console.log(('Failed: ' + e.message).red);
    process.exit(1);
  }
}

var watchFiles = function() {
  fs.readdirSync(watch).forEach(function(file) {
    if(!watched[file]) {
      fs.watchFile(watch + file, recompile);
      watched[file] = true;
      //console.log(('Watching ' + watch + file + ' ...'));
    }
  });
};

fs.watch(watch, function(curr, prev) {
  watchFiles();
  recompile(curr, prev);
});

process.on('uncaughtException', function(err) {
  console.log(('Uncaught exception: '+ err.message).red);
  process.exit(1);
});

watchFiles();
