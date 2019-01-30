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
    Items.findByPk(req.params.id)
      .then(obj => {
        res.render("itemDetails", {
          item: obj,
          pageTitle: "Details"
        });
      })
      .catch(err => console.log(err));
  });

  // testimonials view
  router.get("/testimonials", (req, res) => {
    Items.findAll({
      limit: 6,
      where: {
        // any
      },
      order: [["createdAt", "DESC"]]
    }).then(allItems => {
      res.render("testimonials", {
        items: allItems,
        pageTitle: "Testimonials"
      });
    });
  });

  // add testimonials
  router.post("/testimonials", (req, res) => {
    const { name, text } = req.body;
    // console.log(name, text);
    res.render("testimonials", {
      items: [],
      pageTitle: "Testimonials"
    });
  });

  // add records manually from dev view
  router.get("/add", (req, res) => {
    res.render("dev/addItem", {
      pageTitle: "addItem"
    });
  });
  // post from dev view
  router.post("/add", (req, res) => {
    const { title, body, special, prize, img } = req.body;
    console.log(title, body, special, prize, img);

    Items.create({
      title,
      body,
      special,
      updatedAt: new Date().toLocaleString(),
      createdAt: new Date().toLocaleString(),
      selected: false,
      prize,
      img
    }).then(data => {
      res.render("dev/addItem", {
        pageTitle: "addItem",
        data
      });
    });
  });

  return router;
};
