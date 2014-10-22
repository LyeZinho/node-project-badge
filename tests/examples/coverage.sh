#!/bin/sh

# generates a coverage badge using the file 'coverage.txt'
progress=`cat tests/examples/coverage.txt | grep "Line" | sed -r 's/^[^0-9]*([0-9]+)%.*$/\1/'`
bin/cli.js -b coverage --progress $progress "tmp/coverage.png"
