
var http = require('http');

var myServer = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type" : "text/html"});
  response.write(" Hello Jerkface");
  response.end();
});

myServer.listen(2000);
