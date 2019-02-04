const Testimonials = require("../models/Testimonials");

exports.testimonialsControllerPost = (req, res) => {
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
};
