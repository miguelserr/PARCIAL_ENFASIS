const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Estudiante = require('./estudiante');
const Curso = require('./curso');

const Matricula = sequelize.define('Matricula', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  fecha_matricula: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
});

// Relaciones de los modelos
Estudiante.belongsToMany(Curso, { through: Matricula });
Curso.belongsToMany(Estudiante, { through: Matricula });
Matricula.belongsTo(Estudiante);
Matricula.belongsTo(Curso);

module.exports = Matricula;
