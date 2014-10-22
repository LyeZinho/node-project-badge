node-project-badge
==================
[![Build Status](https://travis-ci.org/hmil/node-project-badge.svg?branch=master)](https://travis-ci.org/hmil/node-project-badge)

Generate nice badges for your projects from the command line or in node.js

This module is a CLI wrapper for [project-badge](https://github.com/hmil/project-badge). Check project-badge's readme for more info on all available configuration parameters.

## Installation

`npm install -g node-project-badge`

node-project-badge uses [canvas](https://github.com/Automattic/node-canvas) which requires [cairo](http://cairographics.org/).
**You need to install cairo and it's dependencies before installing node-project-badge**.  
For ubuntu/debian people: `sudo apt-get install libcairo2-dev libjpeg-dev giflib-dbg`

## Usage

Create a build status badge:
`project-badge -b build-status --status 0`  
![build: success](https://raw.githubusercontent.com/hmil/node-project-badge/master/images/build-success.png)

### Options
 `-b config` : built-in configuration  
 `-c file` : custom configuration file  
All other options are directly passed as badge parameters to [project-badge](https://github.com/hmil/project-badge).  

Badge parameters can either be specified as command line arguments or in a json config file. Additionnaly, the `type` config specifies the base *project-badge* type (boolean, progress, info).

### Config file
A config file is a valid json file which contains project-badge badge parameters. See the [API Reference](https://github.com/hmil/project-badge#api-reference) for the full list of badge parameters.

### Built-in configs
The most common configurations are stored in built-in configs accessible *via* the `-b` option. Available built-ins are:
 - `build-status`: Travis-style build status. Shows a successful build when `--status` is 0
 - `coverage`: Code coverage. `--progress` gives the amount of coverage in %.
 - `last-build`: Date of last build.  Example: write a badge with the current date  
   ```project-badge -b last-build --info "`date '+%d/%m/%y %k:%M'`" badge.png```  
   ![last-build](https://raw.githubusercontent.com/hmil/node-project-badge/master/images/last-build.png)
 - `version`: creates a version badge (specify version with `--info`)
 - `npm-version`: like version but for npm packages

## Troubleshooting
If `project-badge` gives you `: No such file or directory` even when started without arguments,
then you may try to install it manually. cd to a temporary dir and run:
```
wget https://github.com/hmil/node-project-badge/archive/master.tar.gz
tar -xzvf master.tar.gz
cd node-project-badge-master
sudo npm install -g .
```
