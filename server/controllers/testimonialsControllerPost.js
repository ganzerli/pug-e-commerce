const Testimonials = require("../models/Testimonials");
const Items = require("../models/Items");

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
  // creatin an array of promises
  const promises = [];

  // CREATE NEW TESTIMONIAL AND INSERT IN DB
  promises.push(
    Testimonials.create({
      name,
      text,
      updatedAt: new Date().toLocaleString(),
      createdAt: new Date().toLocaleString()
    })
  );

  // get 3 items to display at bottom page
  promises.push(
    Items.findAll({
      limit: 3,
      where: {},
      order: [["createdAt", "DESC"]]
    })
  );
  // get 9 testimonials ordered for nearest date
  promises.push(
    Testimonials.findAll({
      limit: 9,
      where: {},
      order: [["createdAt", "DESC"]]
    })
  );

  Promise.all(promises).then(result => {
    res.render("testimonials", {
      errors,
      testimonials: result[2],
      items: result[1],
      pageTitle: "Testimonials"
    });
  });
};
