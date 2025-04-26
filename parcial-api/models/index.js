const sequelize = require('../config/database');
const Curso = require('./curso');
const Estudiante = require('./estudiante');
const Matricula = require('./matricula');

const syncModels = async () => {
  await sequelize.sync({ alter: true });
};

module.exports = { Curso, Estudiante, Matricula, syncModels };
