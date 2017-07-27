var http = require("http");
var collection = require('./collection');

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-type": "text/plain"});
  response.write(collection.lyrics[Math.floor(Math.random() * collection.lyrics.length)]);
  response.end();
}).listen(8888);
