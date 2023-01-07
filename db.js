const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "blaz_db",
  "root",
  "BWBnlNRjU2BAw32yaNpOajnZH",
  { dialect: "mysql", host: "localhost" }
);

module.exports = sequelize;
