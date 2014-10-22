#!/bin/bash -e

mkdir -p tmp
rm -f tmp/*

# Tests builtins
builtins=`ls lib/configs | sed s/.json//g`
for i in $builtins; do
  echo "testing builtin/$i"
  bin/cli.js -b "$i" "tmp/builtin_$i.png"
  test -f "tmp/builtin_$i.png"
done;

# Tets custom config
echo "testing custom"
bin/cli.js -c tests/examples/custom.json --status 1 tmp/custom.png
test -f tmp/custom.png

# Real world examples
for i in tests/examples/*.sh; do
  echo "testing script/$i"
  name=`echo "$i" | sed -r 's/^(.+\/)?([^\/]+).sh$/\2/'`
  $i
  if [ ! -f "tmp/$name.png" ]; then
    echo "Command $i did not output file $name.png" 2>&1
    exit 1
  fi
done;

