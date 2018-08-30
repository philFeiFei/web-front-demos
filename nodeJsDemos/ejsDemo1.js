let ejs = require("ejs");
var http = require("http");
people = ['geddy', 'neil', 'alex'];
html = ejs.render('<%= people.join(", 和"); %>', { people: people });

var server = http.createServer(function(req, res) {
        res.setHeader("content-Type", "text/html;charset=utf-8");
        res.statusCode = 200;
        res.end(html);
    }

);

const hostname = "127.0.0.1";
const port = "3000";
server.listen(port, hostname, function() {
    console.log("server running at http://${hostname}:${port}");
});