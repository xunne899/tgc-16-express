const express = require('express');
const app = express();
const hbs = require('hbs');
const waxOn = require('wax-on');

app.set('view engine', 'hbs');

// setup wax-on
waxOn.on(hbs.handlebars);

// set the layout directory
waxOn.setLayoutPath('./views/layouts')

// ROUTES
app.get('/', function(req,res){
    res.render('index')
})

app.get('/about-us', function(req,res){
    res.render('about-us')
});

app.listen(3000, function(){
    console.log("Server has started");
})