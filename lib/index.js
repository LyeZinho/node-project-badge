var Canvas = require('canvas');
var finder = require('./finder');
var measureCtx = (new Canvas(1, 1)).getContext('2d');
measureCtx.font = '11px Verdana';

var lib = module.exports = {
  makePngStream: function makePngStream(name, config) {
    var badge = new (finder(name))(config);
    var dim = badge.measure(measureCtx);
    var canvas = new Canvas(dim.w, dim.h);
    ctx = canvas.getContext('2d');
    badge.renderTo(ctx);
    return canvas.pngStream();
  },
  outputToStream: function(name, config, outStream, cb) {
    var stream = lib.makePngStream(name, config);
    stream.pipe(outStream);
/*    stream.on('data', function(chunk){
      outStream.write(chunk);
    });*/

    stream.on('end', function(){
      if (cb) cb();
    });
  }
};

