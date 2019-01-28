const express = require("express");
const router = express.Router();

module.exports = function() {
  // homepage url
  router.get("/", (req, res) => {
    res.render("index", {
      pageTitle: "Welcome"
    });
  });

  // about us
  router.get("/about", (req, res) => {
    res.render("about", {
      pageTitle: "About"
    });
  });

  // get the store
  router.get("/store", (req, res) => {
    res.render("store", {
      pageTitle: "store"
    });
  });

  return router;
};
