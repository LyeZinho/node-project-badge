#!/bin/sh

####
# Here you would put your ci script. It returns non-zero status in case of error
# We'll just simulate this behaviour with the following command. Replace 0 by 1
# and see what happens !
sh -c "exit 0"
####

# And now we can generate a build status badge with just one line of code
bin/cli.js -b build-status --status $? "tmp/ci-build.png"

