var http = require('http');

http.createServer(function (req, res) {
    var url = "http://172.30.136.97:8081/";

    http.get(url, function(res2)
             {
                 res.writeHead(200, { 'Content-Type': 'video/mp4' });
                 res2.pipe(res);
             });

}).listen(80, '172.30.136.106');
console.log('Server running at http://172.30.136.106:80/');
