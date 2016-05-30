var net = require("net");
var http = require('http');
var fs = require('fs');
// var readableStream = http.request('http://172.30.136.74:8012/');
// var writableStream = fs.createWriteStream('/tmp/file2.avi');
// readableStream.pipe(writableStream);

/*
var relaySocket = new net.Socket();
relaySocket.connect(8012, "172.30.136.74", function()
                     {
                         relaySocket.on("data", function (data) {
                             console.log("ok 2");
                         });
                     });
*/

http.get("http://172.30.136.74:8012/", function(res)
         {
             console.log("ok");
         });
