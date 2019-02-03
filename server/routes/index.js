const express = require("express");
const router = express.Router();

const Items = require("../models/Items");
const Testimonials = require("../models/Testimonials");

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

  // testimnonials GET
  // testimonials view
  router.get("/testimonials", (req, res) => {
    Testimonials.findAll({
      limit: 9,
      where: {
        // any
      },
      order: [["createdAt", "DESC"]]
    }).then(testimonials => {
      res.render("testimonials", {
        // created at "ASC" does not work
        testimonials: testimonials,
        pageTitle: "Testimonials"
      });
    });
  });

  // testimonials POST
  // add testimonials
  router.post("/testimonials", (req, res) => {
    const { name, text } = req.body;
    const errors = {};

    if (name === "" || name === " ") {
      errors.name = "Name is Required";
    }
    if (text === "" || text === " ") {
      errors.text = "Text is Rquired!";
    }

    console.log(name, text);

    Testimonials.create({
      name,
      text,
      updatedAt: new Date().toLocaleString(),
      createdAt: new Date().toLocaleString()
    }).then(data => {
      // render the page with 6 items
      Testimonials.findAll({
        limit: 9,
        where: {
          // any
        },
        order: [["createdAt", "DESC"]]
      }).then(testimonials => {
        res.render("testimonials", {
          errors,
          // created at "ASC" does not work
          testimonials: testimonials,
          pageTitle: "Testimonials"
        });
      });
    });
  });

  //        !!!       DEV  ROUTES     !!!       DEV  ROUTES
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
        data: data.dataValues
      });
    });
  });

  return router;
};
