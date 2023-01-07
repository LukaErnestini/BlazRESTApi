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
  pacientId: {
    type: DataTypes.INTEGER,
    references: {
      model: "pacients",
      key: "id",
    },
  },
});

module.exports = Napotnica;
