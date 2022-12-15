const Sequelize = require("sequelize");
const db = require("../db");

class Contacto extends Sequelize.Model {}

Contacto.init(
  {
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    asunto: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    mensaje: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "Contacto" }
);

module.exports = Contacto;
