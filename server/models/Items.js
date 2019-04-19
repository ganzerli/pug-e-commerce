const sequelize = require("sequelize");
const db = require("../config/database");

const Items = db.define("items", {
  title: {
    type: sequelize.STRING
  },
  body: {
    type: sequelize.STRING
  },
  special: {
    type: sequelize.STRING
  },
  selected: {
    type: sequelize.BOOLEAN
  },
  price: {
    type: sequelize["DOUBLE PRECISION"]
  },
  img: {
    type: sequelize.STRING
  },
  img_bg: {
    type: sequelize.STRING
  },
  createdAt: {
    type: sequelize.DATE
  },
  updatedAt: {
    type: sequelize.DATE
  }
});

// export the defined database method
module.exports = Items;
