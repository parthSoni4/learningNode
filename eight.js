var express=require("express");
var router=express.Router();

router.get("/",function(req,res){

    res.send("get router on things");
});

router.post("/",function(req,res){
    res.send("post router on things");
});

module.exports=router;