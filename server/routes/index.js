const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");

// models import
const Items = require("../models/Items");
const Testimonials = require("../models/Testimonials");

//import the controllers
const aboutControllerExport = require("../controllers/aboutController");

const testimonialsControllerPost = require("../controllers/testimonialsControllerPost");
const testimonialsControllerGet = require("../controllers/testimonialsControllerGet");

const indexController = require("../controllers/indexController");

// operator for queries to sequelize
const op = sequelize.Op;

module.exports = function() {
  // homepage url
  router.get("/", indexController.indexController);

  // about us
  router.get("/about", aboutControllerExport.aboutController);

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

  //post to stre for the search
  router.post("/search", (req, res) => {
    // getting the datra frompost form store
    const { text, fromPrize, toPrize } = req.body;

    // check which kind to query
    console.log(text, fromPrize, toPrize);

    // split the search

    Items.findAll({
      limit: 3,
      where: {
        //       [op.gte]: parseInt(fromPrize),
        //       [op.lte]: parseInt(toPrize)
      },
      order: [["createdAt", "DESC"]]
    }).then(found => {
      res.render("store", {
        pageTitle: "store",
        items: found
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
  router.get(
    "/testimonials",
    testimonialsControllerGet.testimonialsControllerGet
  );

  // testimonials POST
  // add testimonials
  router.post(
    "/testimonials",
    testimonialsControllerPost.testimonialsControllerPost
  );

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
