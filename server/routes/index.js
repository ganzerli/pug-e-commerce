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
      //console.log(items[1].dataValues);
      // passing the variables from backend to the view
      res.render("store", {
        pageTitle: "store",
        items
      });
    });
  });

  // Details single item
  router.get("/itemDetails/:id", (req, res) => {
    // FITN ONE limiting the find all to 1
    Items.findAll({
      limit: 1,
      where: {
        id: req.params.id
      },
      order: [["createdAt", "DESC"]]
    }).then(allItems => {
      res.render("itemDetails", {
        item: allItems[0],
        pageTitle: "Details"
      });
    });
  });

  // add records manually form here hardcoded
  router.get("/add", (req, res) => {
    Items.create({
      title: "X box",
      body: "I have an X box collection version to give away..",
      special: "x box collection",
      updatedAt: new Date().toLocaleString(),
      createdAt: new Date().toLocaleString(),
      selected: false,
      prize: 300,
      img: "veryImage7.png"
    }).then(data => {
      console.log(data);
    });
  });

  return router;
};
