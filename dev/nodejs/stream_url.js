// __Dependencies__
var rq = require('request');
var connect =  require('connect');
var http = require('http');

// __Private Module Members__
var messages = [];
var links = '<a href="/send">generate new message</a> <a href="/download-latest">latest message</a>';
var app = connect();

// __Configure the App__
app.use(connect.json());

// This routes stores messages POSTed via JSON
app.use('/save', function (request, response, next) {
  if (request.method !== 'POST') return next(new Error('Method not allowed.'));
  messages.unshift(request.body.message);
  console.log('Stored message: %s', request.body.message);
  response.end('200 OK');
});

// This route shows the latest message
app.use('/download-latest', function (request, response, next) {
  var message;
  if (messages.length === 0) message = 'No messages yet.';
  else message = messages[0];
  response.end(links + '<p>Latest mesage: ' + message + '</p>');
});

// This route generates a new message and returns (via GET) a JSON message
app.use('/message', function (request, response, next) {
  var message;
  if (Math.random() > 0.5) message = 'The glass is half full.';
  else message = 'The glass is half empty.';

  console.log('Generated message: %s', message);

  response.writeHead(200, { 'content-type': 'application/json' })
  response.end(JSON.stringify({ message: message }));
});

// This pipes the result of one URL into another
app.use('/send', function (request, response, next) {
  rq.get('http://localhost/message').pipe(rq.post('http://localhost/save'));
  response.end(links + '<p>Message sent.</p>');
});

// Just shows the meny
app.use('/', function (request, response) {
  response.end(links);
});

app.listen(80);
console.log('Server running on port ' + 80);
