// https://github.com/fivdi/onoff

var btn    = 16;
var state  = 1; // button state are reversed
var gpio   = require('onoff').Gpio;
var srv    = require('http').createServer();
var io     = require('socket.io').listen(srv);
var socket = null;
// var v4l2camera = require("v4l2camera");
//var camera = require('ffmpeg-node');
//require('node-camera');

// open button gpio port
var button = new gpio(btn, "in", "both");
button.watch(function(err, value) {
    if (err) throw err;

    // if value just changed
    if (value != state)
    {
        // store it
        state = value;

        // if button press send notification
        if (!state)
        {
            if (socket)
            {
                socket.emit("call");
                /*
                camera.mp4('/dev/video0', function(err, out, code) {
                    console.log(err, out, code);
                });
                */
                /*
                camera.start();
                camera.capture(function (success) {
                    var frame = camera.frameRaw();
                    require("fs").createWriteStream("result.jpg").end(Buffer(frame));
                    camera.stop();
                });
                */
            }
            else console.log("socket is not defined");
//            console.log("button pressed");
        }
//        else console.log("button released");
    }
});

// get camera
/*
var camera = new v4l2camera.Camera("/dev/video0");
if (camera.configGet().formatName !== "MJPG") {
    console.log("NOTICE: MJPG camera required");
    process.exit(1);
}
*/

// open socket connection
io.sockets.on("connection", function(s) {
//  console.log("connection");
    socket = s;
});

// run server
srv.listen(8087);

// clean shutdown
process.on("SIGINT", function() {
    button.unexport();
});
