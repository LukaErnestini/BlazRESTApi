const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db");

const Napotnica = require("./napotnica");

const Pacient = sequelize.define("pacient", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  ime: DataTypes.STRING,
  priimek: DataTypes.STRING,
  zzzs_stevilka: DataTypes.STRING,
});

Pacient.hasMany(Napotnica);

module.exports = Pacient;
