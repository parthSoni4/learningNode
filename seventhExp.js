var express=require("express");
var app=express();

app.get("/hello",function(req,res){
    res.send("hello world");
});

app.all("/test",(req,res)=>{
    res.send("HTTp does not have anything for thhid");
})

app.listen(3000);