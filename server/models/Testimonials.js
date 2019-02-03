const sequelize = require("sequelize");

// importing the db connection
const db = require("../config/database");

// definig the schema in db to export
const Testimonials = db.define("testimonials", {
  name: {
    type: sequelize.STRING
  },
  text: {
    type: sequelize.STRING
  },
  createdAt: {
    type: sequelize.DATE
  },
  updatedAt: {
    type: sequelize.DATE
  }
});

module.exports = Testimonials;
