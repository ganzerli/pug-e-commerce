const Sequelize = require("sequelize");

module.exports = new Sequelize("e-commerce", "root", "123456", {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamp: false
  },
  operatorsAliases: false
});
