var http=require("http"); 
// requrie is to add the module 
var dt=require('./module');
var url=require("url");

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("the date and time are \n"+dt.myDateTime());
    res.write(req.url);
    var a=url.parse(req.url,true).query;
    // var txt=a.a1;
    var txt = a.year + " " + a.month;
    res.write(txt);
    res.end("hello backand");

}).listen(8080);


// Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
//the server object listens on port 8080
// request is also an object
// one of the property of request object is url