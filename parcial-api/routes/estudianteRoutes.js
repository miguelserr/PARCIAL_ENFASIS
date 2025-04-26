const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/estudianteController');
const { validarEstudiante } = require('../middlewares/validations');

router.post('/', validarEstudiante, estudianteController.createEstudiante);
router.get('/', estudianteController.getEstudiantes);
router.put('/:id', validarEstudiante, estudianteController.updateEstudiante);
router.delete('/:id', estudianteController.deleteEstudiante);
router.get('/:id/cursos', estudianteController.getCursosPorEstudiante);

module.exports = router;
