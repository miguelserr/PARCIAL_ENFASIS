const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('parcial_api', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
