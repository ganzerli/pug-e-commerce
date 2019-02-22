const Items = require("../models/Items");

exports.indexController = (req, res) => {
  Items.findAll({
    limit: 6,
    where: {},
    order: [["createdAt", "DESC"]]
  }).then(items => {
    res.render("index", {
      pageTitle: "Welcome",
      items
    });
  });
  ///
};
