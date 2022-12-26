var express=require("express");
var app=express()
var fs=require("fs");
var path=require("path");
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,"public")));


app.get("/login.html",(req,res)=>{
    fs.readFile('two.html',function(err,data){
    
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end();
    })
})

app.post('/handler', (req,res)=>{
    console.log(req.body);
    res.send(req.body["username"]);
})

app.listen(8080);

//  express.urlencoded is used to process the text data
// we can access individual record by square brackets and name as identifier inside them
