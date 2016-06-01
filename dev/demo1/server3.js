var v4l2camera = require("v4l2camera");

var cam = new v4l2camera.Camera("/dev/video0");
//console.log(cam.configGet().formatName);
if (cam.configGet().formatName !== "YU12") {
    console.log("NOTICE: MJPG camera required");
    process.exit(1);
}
cam.start();
cam.capture(function (success) {
    var frame = cam.frameRaw();
    require("fs").createWriteStream("result.jpg").end(Buffer(frame));
    cam.stop();
});
