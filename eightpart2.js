var express=require("express");
var app=express();

var eight=require("./eight.js");

app.use("/eight",eight);

app.listen(3000); 