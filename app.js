var fs = require("fs");
var http = require("http");

var server = http.createServer(function (req, res) {
  console.log("request was made by " + req.url);
  res.writeHead(200, { "Content-Type": "application/json" });
  var myObj = {
    name: "riyu",
    job: "ninja",
    age: 29,
  };
  res.end(JSON.stringify(myObj));
});

server.listen(3000, "127.0.0.1");
console.log("yo guys , now listening on port");
