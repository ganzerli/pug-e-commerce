const express = require("express");
const router = express.Router();

// models import
const Items = require("../models/Items");
const Testimonials = require("../models/Testimonials");

//import the controllers
const aboutControllerExport = require("../controllers/aboutController");

const testimonialsControllerPost = require("../controllers/testimonialsControllerPost");
const testimonialsControllerGet = require("../controllers/testimonialsControllerGet");

const indexController = require("../controllers/indexController");
const storeController = require("../controllers/storeController");

const itemDetailsController = require("../controllers/itemDetailsController");
const searchController = require("../controllers/searchController");

module.exports = function() {
  // homepage url
  router.get("/", indexController.indexController);
  // about us
  router.get("/about", aboutControllerExport.aboutController);
  // get the store
  router.get("/store", storeController.storeController);
  // Details single item
  router.get("/itemDetails/:id", itemDetailsController.itemDetailsController);
  // testimonials view
  router.get(
    "/testimonials",
    testimonialsControllerGet.testimonialsControllerGet
  );
  // testimonials POST - add testimonial
  router.post(
    "/testimonials",
    testimonialsControllerPost.testimonialsControllerPost
  );

  //post to stre for the search
  router.post("/search", searchController.searchController);

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
