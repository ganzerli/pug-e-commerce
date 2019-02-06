const Items = require("../models/Items");
const sequelize = require("sequelize");

// operator for queries to sequelize
const op = sequelize.Op;

exports.searchController = (req, res) => {
  // getting the datra frompost form store
  let { text, fromPrize, toPrize } = req.body;

  // GUARDING
  text = text.toLowerCase() || "";
  fromPrize = parseInt(fromPrize) || 0;
  toPrize = parseInt(toPrize) || 1000000;

  // check which kind to query
  console.log(text, fromPrize, toPrize);

  // Callee is the model definition. This allows you to easily map a query to a predefined model
  Items.findAll({
    where: {
      prize: {
        [op.gte]: fromPrize,
        [op.lte]: toPrize
      },
      [op.or]: [
        {
          title: {
            [op.like]: `%${text}%`
          }
        },
        {
          body: {
            [op.like]: `%${text}%`
          }
        }
      ]
    }
  }).then(result => {
    // Each record will now be an instance of Project
    res.render("store", {
      pageTitle: "store",
      items: result
    });
  });

  //

  //
};
