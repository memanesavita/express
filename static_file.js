// var express = require('express');
// var app = express();

// app.use(express.static('public'));
// app.use(express.static('images'));




// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//    res.send("Hello world!");
// });

// app.post('/post',(req,res)=>{
//     console.log(req)
//     res.send('post request', req)
// })
// app.listen(3000);


// var express = require('express');
// var app = express();

// app.get('/:id', function(req, res){
//    res.send('The id you specified is ' + req.params.id);
// });
// app.listen(3000);


// var express = require('express');
// var app = express();

// app.get('/things/:name/:id', function(req, res) {
//    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
// });
// app.listen(3000);




// var express = require('express');
// var app = express();

// //Other routes here
// app.get('*', function(req, res){
//    res.send('Sorry, this is an invalid URL.');
// });
// app.listen(3000);

// var express = require('express');
// var app = express();

// app.use(express.static('public'));
// app.use(express.static('images'));

// app.listen(3000)




// var express=require("express")
// var app=express();

// app.use(express.static(__dirname+"/public"));
// app.get("/",function(req,res){
//     res.send("GET IS called");
// })
// app.listen(3000)




var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.send("Hello world!");
 });
 
app.post('/post',(req,res)=>{
     console.log(req.body)
     res.send('post request', req)
 })
 
app.listen(3000,()=>{
    console.log('server is listening at port 3000..')
});

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
