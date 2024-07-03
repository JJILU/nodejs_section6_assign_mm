// imports
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// my custom file imports
const homeRoute = require('./routes/home');
const userRoute = require('./routes/users');
const rootDir = require('./util/path');

const app = express();

// setting up view engine and views folder
app.set('view engine', 'ejs');
app.set('views', 'ejs_temps');


// middleware to parse incoming 'POST' request body of form
app.use(bodyParser.urlencoded({extended: false}));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));


// Routers
app.use(homeRoute);
app.use(userRoute.routes);


// 404 page
app.use((req,res,next) => {
  //  sends back html files
  // res.sendFile(path.join(rootDir, 'ejs_temps', '404.html'));


  // sends back ejs file
  res.render('404',{'title': 'Page Not Found', path: ''});
});

// starts and listens for incoming request on port 3000
app.listen(3000);