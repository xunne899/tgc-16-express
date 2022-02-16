const express = require('express');
const app = express();

// initalize hbs
const hbs = require('hbs');

// tell express that we are using hbs as our view engine
// a 'view engine' allows us to render HTML from template files
app.set('view engine', 'hbs');

app.get('/', function(req,res){
    res.render('index.hbs');
})

app.get('/lucky', function(req,res){
    let lucky = Math.floor(Math.random() * 100 + 1);
    // when we send back a HBS file a the response,
    // `use res.render()`
    res.render('lucky', {
        // the key is the object is the variable
        // name in the hbs file
        'luckyNumber': lucky
    })
})
app.listen(3000, function(){
    console.log("Server has started")
})