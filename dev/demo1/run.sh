#!/bin/bash

if [ "$(ps aux|grep node|grep -v grep)" == "" ]
then
    cd /var/www/html
    /usr/local/bin/node server.js
fi
