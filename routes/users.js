// imports
const express = require("express");
const path = require("path");

// my custom imports, used in response files
const rootDir = require("../util/path");

// Using Router Feature of express
const router = express.Router();

const userNames = [];

// /user/create-user => GET
router.get("/create-user", (req, res, next) => {
  // sends back html files
  // res.sendFile(path.join(rootDir, 'ejs_temps', 'create-user.html'));

  // sends back ejs templates
  res.render("create-users", {'title': 'Create Users Page', path: '/create-user'});
});

// /user/create-user => POST
router.post("/create-user", (req, res, next) => {
  console.log(req.body);
  userNames.push({title: req.body.username});
  console.log('array = ',userNames);
  res.redirect("/users-list");
});

// exports 2
exports.usernames = userNames;
exports.routes = router;
