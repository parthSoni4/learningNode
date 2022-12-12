var http=require("http");
var fs=require("fs");

http.createServer(function(req,res){
    fs.readFile('one.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);