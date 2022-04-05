
var express=require("express");
const res = require("express/lib/response");
var app=express();
app.get("/",function(req,re){
    res.send("hello frome my chanle one")

}).listen(405)
