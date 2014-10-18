#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');
var path = require('path');
var lib = require('../lib');
var config = {};

if (argv._.length === 0) {
  console.error('Usage: project-badge [-b badgefile] [options]');
  process.exit(1);
}

var outstream = fs.createWriteStream(path.join(process.cwd(), argv._[0]));

if (argv.b) {
  var configData = fs.readFileSync(path.join(process.cwd(), argv.b));
  config = JSON.parse(configData.toString());
}

for (var i in argv) {
  if (argv.hasOwnProperty(i) && i !== 'b' && i !== '_')
    config[i] = argv[i];
}

lib.outputToStream(config.type, config, outstream);
