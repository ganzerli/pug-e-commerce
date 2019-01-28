const express = require("express");
const path = require("path");
const routes = require("./routes");

// create the server
const app = express();

//import the database connection
const db = require("./config/database");

// test the connection
//db.authenticate().then(res => console.log(res)).catch(err => console.log(err));

//enable Pug
app.set("view engine", "pug");

//add the path for the folder views
app.set("views", path.join(__dirname, "./views"));

// accessing static assets
app.use(express.static("public"));

// passing variables to the view
app.use((req, res, next) => {
  res.locals.date = new Date().getFullYear();
  return next();
});

//
//listen for other routes
app.use("/", routes());

//
module.exports = app;
