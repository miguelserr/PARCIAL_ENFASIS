const express = require('express');
const router = express.Router();
const matriculaController = require('../controllers/matriculaController');
const { validarMatricula } = require('../middlewares/validations');

router.post('/', validarMatricula, matriculaController.createMatricula);
router.get('/', matriculaController.getMatriculas);

module.exports = router;
