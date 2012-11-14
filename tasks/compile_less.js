var fs   = require('fs');
var path = require('path');
var less = require('less');
var colors = require('colors');
var parser = new less.Parser({paths: [path.join(__dirname, '/../app/less')]});
var src  = path.join(__dirname, '/../app/less/');
var dest = path.join(__dirname, '/../app/css/');
var compress = true;

var files = [
    'phone',
    'tv',
    'samsung',
    'tablet',
    'desktop'
];

var colors = {
    blue:     '#1c3953'
  , spicy:    '#7c0000'
  , gray:     '#222222'
  , earth:    '#873612'
  , vegetal:  '#454f0f'
};

/* custom link colors, will be computed from background color if nothing is set */
var linkColors = {
  gray:     '#7397AC'
};

var colorNames = [];

for(var c in colors) {
  colorNames.push(c);
}

var srcPath = function(file) {
  return src + file + '.less';
};

var destPath = function(file, colorName) {
  return dest + file + '.' + colorName + '.css';
};

var compileColor = function(str, file, colorName, cb) {
  var color = colors[colorName];
  var linkColor = linkColors[colorName] || 'saturate(lighten(@background-color, 10%), 10%)';
  // prepend to the file the generated colors
  parser.parse('@background-color: ' + color + ';\n@link-color: ' + linkColor + ';\n' + str, function (e, tree) {
    try {
      var css = tree.toCSS({compress: compress});
      var dest = destPath(file, colorName);
      fs.writeFileSync(dest, css, 'utf8');

      console.log((' - compiled ' + file + '.' + colorName).green);
    } catch(err) {
      console.error(err.message.red);
    }


    if(cb) cb();
  });
};

var compileFile = function(file, cb) {
  console.log(('+ compiling ' + file).cyan);

  var src = srcPath(file);
  var str = fs.readFileSync(src, 'utf8');

  var i = 0;

  var doIt = function() {
    compileColor(str, file, colorNames[i], function() {
      if(++i < colorNames.length) doIt(); else if(cb) cb();
    });
  }

  doIt();
};

var compile = function(cb) {
  var i = 0;

  var doIt = function() {
    compileFile(files[i], function() {
      if(++i === files.length && cb) {
        cb();
      } else {
        doIt();
      }
    });
  };

  doIt();
};

exports.compile = compile;
