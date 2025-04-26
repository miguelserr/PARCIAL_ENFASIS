const { Matricula, Estudiante, Curso } = require('../models');

exports.createMatricula = async (req, res) => {
  try {
    const { estudianteId, cursoId } = req.body;
    const matricula = await Matricula.create({
      estudianteId,
      cursoId,
      fecha_matricula: new Date()
    });
    res.status(201).json({ message: "Matrícula creada exitosamente", matricula });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMatriculas = async (req, res) => {
  try {
    const matriculas = await Matricula.findAll({
      include: [Estudiante, Curso]
    });
    res.json(matriculas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
