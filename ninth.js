// dynamic routing
var express=require("express");
var app=express()

// app.get("/:id",(req,res)=>{
//     res.send("the id you specified is "+req.params.id);
// })
// app.listen(3000);

//  ":" flowed by an identifier will achieve the goal of dynamic loading


app.get("/:name/:id",(req,res)=>{
    res.send("the id you specified is "+req.params.id+req.params.name);
})

app.get("*",(req,res)=>{
    res.send("404 not found");
})
app.listen(3000);

//  req.params allow us to access the request parameters
// "*" will match all the other routes
//  always mention star at last