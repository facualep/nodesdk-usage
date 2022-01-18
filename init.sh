#!/bin/bash

# cd to current dir
cd "$(dirname "$0")"

# load environment variables
export $(egrep -v '^#' .env | xargs)

if [ "$env" == "" ]; then
    echo "Error - environment missing"
    exit 200
fi

env=$(echo "$env" | awk '{print tolower($0)}') # $env to lowerstring

if [[ $env =~ local$|dev$|qa$|staging$|prod$ ]]; then
    echo "Environment: $env"

    export NVM_DIR="/home/bitnami/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

    # set node version
    nvm use 12.7
    # run server
    pm2 delete **PROJECT-NAME**-$env
    pm2 start --update-env dist/bundle.js --name **PROJECT-NAME**-$env --merge-logs -e err.log -o out.log --log-date-format "YYYY-MM-DD HH:mm" # run new server instance & save output
else
    echo "Error - unrecognized environment"
    exit 100
fi


exit 0
