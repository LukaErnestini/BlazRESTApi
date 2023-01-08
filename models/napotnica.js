const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../db");

const Napotnica = sequelize.define("napotnica", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  veljavnost_od: DataTypes.DATE,
  veljavnost_do: DataTypes.DATE,
  stevilka: {
    type: DataTypes.STRING,
    unique: true,
  },
  pacientId: {
    type: DataTypes.INTEGER,
    references: {
      model: "pacients",
      key: "id",
    },
  },
  oddelek: DataTypes.STRING,
  ustanova: DataTypes.STRING,
  termin: DataTypes.STRING,
  zzzs: DataTypes.STRING,
});

module.exports = Napotnica;
