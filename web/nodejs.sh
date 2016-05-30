#!/bin/sh

ID="nodejs_bonjourplus"
NODEJS_PATH="client"

# default to display help
KILL=0
START=0
HELP=1

# parse args
if [ $# = 0 ]
then
    HELP=0
    START=1
else
    # exactly 1 args
    if [ $# = 1 ]
    then
	if [ "$1" = "kill" ]
	then
	    # only kill currently running
	    HELP=0
	    KILL=1
	else
	    if [ "$1" = "restart" ]
	    then
	        # kill and restart
		HELP=0
		KILL=1
		START=1
	    fi
	fi
    fi
fi

# display help
if [ $HELP = 1 ]
then
    echo "Usage:"
    echo "$0 : normal start"
    echo "$0 kill : kill process"
    echo "$0 restart : manualy restart process"
    exit 1
fi

# get running process
RUNNING=$(ps aux|grep /usr/local/bin/node|grep -v grep|grep $ID|tr -s ' ' '\t'|cut -f2)

# kill nodejs
if [ $KILL = 1 ]
then
    if [ "$RUNNING" != "" ]
    then
	kill -9 $RUNNING
	RUNNING=""
    fi
fi

# start nodejs
if [ $START = 1 ]
then
    if [ "$RUNNING" = "" ]
    then
	cd $(dirname $(realpath $(echo $0)))/$NODEJS_PATH
	/usr/local/bin/node test1.js $ID &
    fi
fi

exit 0
