// var express = require('express');
// var app = express();
// app.get('/', function(req, res){
//    res.send("Hello world!");
// });
// app.get("/ about",function(req,res){
//    res.send("this is about page")
// })

// app.listen(3000);



// var express = require('express');
// var app = express();

// app.get('/hello', function(req, res){
//    res.send("Hello World!");
// });

// app.post('/hello', function(req, res){
//    res.send("You just called the post method at '/hello'!\n");
// });

// app.listen(3000);



var express = require('express');
var app = express();

app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});
app.listen(3000);

