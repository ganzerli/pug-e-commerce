const express = require("express");
const path = require("path");

// getting all the routes to set for express, from THIS FOLDER
const routes = require("./routes");
const bodyParser = require("body-parser");

// create the server
const app = express();

//import the database connection
const db = require("./config/database");
//test the connection
db.authenticate()
  .then(console.log("SQL DB CONNECTED"))
  .catch(err => console.log(err));

// accessing static assets
// ALL PATHS USED FROM HTML ARE TAKEN FROM THE PUBLIC FOLDER
app.use(express.static("public"));

//enable Pug
app.set("view engine", "pug");

// THE VIEWS FOLDER IS ACCESSIBLE FROM EXPRESS, ALL PATHS SPECIFIED IN VIEWS (EX: POST FORM; GET A PATH.) FOLDER BEGIN FROM /vievs
//add the path for the folder views, EVERYTHING CALLED FROM THE FOLDERS, ANY FOLDER, WILL BEGIN FROM THIS PATH
// rendering the response the path begins from here
app.set("views", path.join(__dirname, "./views"));

// passing variables to the view, available for all routes in "views"
app.use((req, res, next) => {
  res.locals.date = new Date().getFullYear();
  res.locals.currentPage = req.path; // returns /view
  return next();
});

//enable body parser for form submit action
app.use(bodyParser.urlencoded({ extended: true }));

//listen for router from this path
app.use("/", routes());

// exporting for server.js
module.exports = app;
