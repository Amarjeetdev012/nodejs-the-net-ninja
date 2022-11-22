var fs = require("fs")
var http = require("http")

var server = http.createServer(function(req,res){
    console.log("request was made by " + req.url)
    res.writeHead(200, {"Content-Type":"text/plain"})
var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8")
    myReadStream.pipe(res)
})

server.listen(3000, "127.0.0.1")
console.log("yo guys , now listening on port");

