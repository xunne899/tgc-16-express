// SETUP //////////////////
const express = require('express');
const hbs = require('hbs');
const waxOn = require('wax-on');

// create the express application
const app = express();
app.set('view engine', 'hbs'); // the second argument hbs as string, not the object

waxOn.on(hbs.handlebars);  // the first argument is the hbs object, not string
waxOn.setLayoutPath('./views/layouts'); 

app.use(express.static('public')); // set the static folder to public

// ENABLE FORMS
app.use(express.urlencoded({extended:false}));


// ROUTES /////////////////

// The route below is HTTP GET /add-food
app.get('/add-food', function(req,res){
    res.render('add-food')
})

// intercept the data of the form
// that is render at GET /add-food
app.post('/add-food', function(req,res){
    let foodName = req.body.foodName || "";
    let calories = req.body.calories || "";
    let meal = req.body.meal || "breakfast";
    let description = req.body.description | "";

    // let tags = null;
    // // req.body.tags is truly if it contains something that is not undefined
    // if (req.body.tags) {
    //     // req.body.tags is either a single string or an array of strings
    //     if (Array.isArray(req.body.tags)) {
    //         tags = req.body.tags;
    //     } else {
    //         // req.body.tags is a single string
    //         tags = [ req.body.tags ]
    //     }

    // } else {
    //     // req.body.tags is undefined then we set tags to be an empty array
    //     tags = [];
    // }

    let tags = req.body.tags || [];
    tags = Array.isArray(tags) ? tags : [tags];

    console.log(req.body);
    console.log("tags=", tags);
    res.send("Form recieved");
})

// one route to display the form
app.get('/bmi', function(req,res){
    res.render('bmi');
})

// one route to process the form
app.post('/bmi', function(req,res){
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let bmi = weight / height ** 2;
    res.render('bmi_results',{
        'bmi': bmi
    })

})

// display the fruits form
app.get('/fruits', function(req,res){
    res.render('fruits')
})

app.post('/fruits', function(req,res){
    let fruits = [];
    if (req.body.items) {
        // if true, it means req.body.items is an array
        if (Array.isArray(req.body.items)) {
            fruits = req.body.items;
        } else {
            // if false, then it means req.body.items is a string
            fruits = [ req.body.items ];
            // Suppose that req.body.items is 'durian', then:
            // fruits = [ req.body.items ]
            // => fruits = [ 'durian' ]
        }
    } 
    
    // calculate the cost
    let cost = 0;
    let priceChart= {
        'durian': 15,
        'apple': 3,
        'orange': 6,
        'banana': 4,
        
    };
    cost = fruits.reduce(function(previous,current){
        return previous + priceChart[current]
    }, 0);

    // for (let f of fruits) {
    //     cost += priceChart[f] 
    // }

    // if (fruits.includes('apple')) {
    //     cost += 3;
    // }
    // if (fruits.includes('durian')) {
    //     cost += 15;
    // }
    // if (fruits.includes('orange')) {
    //     cost += 6;
    // }
    // if (fruits.includes('banana')) {
    //     cost += 4;
    // }
    res.send("Total cost is " + cost);

})

// LISTEN
app.listen(3000, function(){
    console.log("Server has started")
})