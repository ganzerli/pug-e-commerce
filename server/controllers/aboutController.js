const Items = require("../models/Items");
const Testimonials = require("../models/Testimonials");

exports.aboutController = (req, res) => {
  const promises = [];

  promises.push(
    Testimonials.findAll({
      limit: 3,
      where: {},
      order: [["createdAt", "DESC"]]
    })
  );

  promises.push(
    Items.findAll({
      limit: 3,
      where: {},
      order: [["createdAt", "DESC"]]
    })
  );

  Promise.all(promises).then(resArr => {
    res.render("about", {
      pageTitle: "About",
      items: resArr[1],
      testimonials: resArr[0]
    });
  });
};
