const Items = require("../models/Items");

exports.itemDetailsController = (req, res) => {
  // FITN ONE limiting the find all to 1
  Items.findByPk(req.params.id)
    .then(obj => {
      res.render("itemDetails", {
        item: obj,
        pageTitle: "Details"
      });
    })
    .catch(err => console.log(err));
};
