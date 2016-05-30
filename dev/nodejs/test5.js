var html = require('fs').readFileSync(__dirname+'/test5.html');
var app = require('http').createServer(function(req, res){ res.end(html); });
app.listen(8091);
var io = require("socket.io");
var io = io.listen(app);
io.sockets.on('connection', function (socket) {
    socket.emit('faitUneAlerte');
});
