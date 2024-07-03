// imports
const express = require('express');
const path = require('path')

// my custom file
const rootDir = require('../util/path')
const userRoute = require('./users');

// invoke express
const app = express();

// use express router feature
const router = express.Router();


// /all-users/users-list => GET
router.get('/users-list', (req,res,next) => {
  // sends back html files
  // res.sendFile(path.join(rootDir, 'ejs_temps', 'home.html'));

   const webUsers = userRoute.usernames;
  // sends back ejs templates
  res.render('home', {placeUser: webUsers, 'title': 'Home Page', path : '/users-list'});
})


// exports
module.exports = router;


