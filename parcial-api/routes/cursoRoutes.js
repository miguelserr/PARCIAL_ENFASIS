const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');
const { validarCurso } = require('../middlewares/validations');

router.post('/', validarCurso, cursoController.createCurso);
router.get('/', cursoController.getCursos);
router.put('/:id', validarCurso, cursoController.updateCurso);
router.delete('/:id', cursoController.deleteCurso);
router.get('/:id/estudiantes', cursoController.getEstudiantesPorCurso);

module.exports = router;
