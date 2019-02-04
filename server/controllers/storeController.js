const Items = require("../models/Items");

exports.storeController = (req, res) => {
  Items.findAll().then(items => {
    //console.log(items[1].dataValues);
    // passing the variables from backend to the view
    res.render("store", {
      pageTitle: "store",
      items
    });
  });
};
