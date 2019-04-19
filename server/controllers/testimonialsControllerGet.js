const Testimonials = require("../models/Testimonials");
const Items = require("../models/Items");

exports.testimonialsControllerGet = (req, res) => {
  //find testimonials and items
  const promises = [];

  promises.push(
    Testimonials.findAll({
      limit: 9,
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

  // joining the promises
  const result = Promise.all(promises);

  // RENDERING THE PAGE
  result.then(results => {
    res.render("testimonials", {
      // created at "ASC" does not work
      testimonials: results[0],
      pageTitle: "Testimonials",
      items: reuslts[1]
    });
  });
  //
  //
  //
};
