const { Curso, Estudiante } = require('../models');

exports.createCurso = async (req, res) => {
  try {
    const curso = await Curso.create(req.body);
    res.status(201).json({ message: "Curso creado exitosamente", curso });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCursos = async (req, res) => {
  try {
    const cursos = await Curso.findAll();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCurso = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Curso.update(req.body, { where: { id } });
    if (updated) {
      res.json({ message: 'Curso actualizado exitosamente' });
    } else {
      res.status(404).json({ error: 'Curso no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCurso = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Curso.destroy({ where: { id } });
    if (deleted) {
      res.json({ message: 'Curso eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Curso no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEstudiantesPorCurso = async (req, res) => {
  try {
    const { id } = req.params;
    const curso = await Curso.findByPk(id, { include: Estudiante });
    res.json(curso ? curso.Estudiantes : []);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
