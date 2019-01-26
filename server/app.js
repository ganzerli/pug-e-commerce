const express = require("express");
const path = require("path");
const routes = require("./routes");

// create the server
const app = express();

//enable Pug
app.set("view engine", "pug");

//add the path for the folder views
app.set("views", path.join(__dirname, "./views"));

// accessing static assets
app.use(express.static("public"));

// passing variables to the view
app.use((req, res, next) => {
  const date = new Date().getFullYear();
  res.locals.date = date;
  return next();
});

//listen for other routes
app.use("/", routes());

//
module.exports = app;
