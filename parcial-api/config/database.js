const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nombre_basedatos', 'root', 'tu_contraseña', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
