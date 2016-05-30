var http = require('http');
var net = require('net');

http.createServer(function (req, res) {

    var client = net.connect({port: 8081, host: "172.30.136.82"}, function(res2) {
        res.writeHead(200, { 'Content-Type': 'video/mp4' });
    });

    client.on("data", function(data) {
        res.write(data);
    });

}).listen(80, '172.30.136.74');
console.log('Server running at http://172.30.136.74:80/');
