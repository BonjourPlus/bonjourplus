#!/bin/sh

cd /var/www/html

for module in socket.io onoff
do
    sudo npm install $module
done

sudo chown -R pi:www-data .
