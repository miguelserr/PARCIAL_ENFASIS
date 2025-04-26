const { Estudiante, Curso } = require('../models');

exports.createEstudiante = async (req, res) => {
  try {
    const estudiante = await Estudiante.create(req.body);
    res.status(201).json({ message: "Estudiante creado exitosamente", estudiante });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiante.findAll();
    res.json(estudiantes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateEstudiante = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Estudiante.update(req.body, { where: { id } });
    if (updated) {
      res.json({ message: 'Estudiante actualizado exitosamente' });
    } else {
      res.status(404).json({ error: 'Estudiante no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteEstudiante = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Estudiante.destroy({ where: { id } });
    if (deleted) {
      res.json({ message: 'Estudiante eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Estudiante no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCursosPorEstudiante = async (req, res) => {
  try {
    const { id } = req.params;
    const estudiante = await Estudiante.findByPk(id, { include: Curso });
    res.json(estudiante ? estudiante.Cursos : []);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
