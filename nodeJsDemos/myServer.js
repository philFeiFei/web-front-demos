var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
  fs.readFile("./index.html", "utf-8", function(err, data) {
    if (err) {
      res.setHeader("content-Type", "text/plain");
      res.statusCode = 404;
      res.end("not found");
    } else {
      res.setHeader("content-Type", "text/html");
      res.statusCode = 200;
      //res.end(data);
      res.end("<h1>hello</h1>");
    }
  });
});

const hostname = "127.0.0.1";
const port = "3000";
server.listen(port, hostname, function() {
  console.log("server running at http://${hostname}:${port}");
});
