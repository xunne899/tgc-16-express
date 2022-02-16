// import in the express function
// from node_modules/express and assigned it to
// a variable named `express`
const express = require('express');

// create an express application
const app = express();

// ROUTES
// must come before app.listen but after creating `app`
// 1st parameter - req: request, that is being by sent browser (or the client)
// 2nd parameter - res: response, what the server will send back
app.get('/', function(req,res){
    res.send("Hello world");
})

app.get('/about-us', function(req,res){
    res.send('<h1>about us</h1>');
})

app.get('/contact-us', function(req,res){
    res.send("<h1>contact us</h1>")
})


app.get('/say-hi/:fullname', function(req,res){
    let = fullname = req.fullname;
    res.send("hello" + fullname);
})

app.get('/say-hi/:fullname/:lastname', function(req,res){
    res.send("Hello, " + req.params.fullname + " " + req.params.lastname)
})
// start the server
// 1st arg of app.listen is port number
app.listen(3000, function(){
    console.log("Server has started");
})


