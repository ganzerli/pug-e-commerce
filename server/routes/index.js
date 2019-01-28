const express = require("express");
const router = express.Router();
const Items = require("../models/Items");

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
    Items.findAll().then(items => {
      console.log(items);
      res.render("store", {
        pageTitle: "store",
        items
      });
    });
  });

  // add records manually form here hardcoded
  router.get("/add", (req, res) => {
    Items.create({
      title: "Item2",
      body: "very nice item here ",
      special: "extremely",
      updatedAt: new Date().toLocaleString(),
      createdAt: new Date().toLocaleString(),
      selected: true,
      prize: 1000,
      img: "veryImage2.png"
    }).then(data => {
      console.log(data);
    });
  });

  return router;
};
