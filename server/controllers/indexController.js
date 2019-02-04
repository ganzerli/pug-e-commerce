exports.indexController = (req, res) => {
  res.render("index", {
    pageTitle: "Welcome"
  });
};
