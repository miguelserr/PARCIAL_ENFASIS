function validarCurso(req, res, next) {
    const { nombre, descripcion, duracion_horas } = req.body;
    if (!nombre || !descripcion || !duracion_horas) {
      return res.status(400).json({ error: "Todos los campos de Curso son obligatorios" });
    }
    next();
  }
  
  function validarEstudiante(req, res, next) {
    const { nombre, email, fecha_nacimiento } = req.body;
    if (!nombre || !email || !fecha_nacimiento) {
      return res.status(400).json({ error: "Todos los campos de Estudiante son obligatorios" });
    }
    next();
  }
  
  function validarMatricula(req, res, next) {
    const { estudianteId, cursoId } = req.body;
    if (!estudianteId || !cursoId) {
      return res.status(400).json({ error: "Debe enviar estudianteId y cursoId" });
    }
    next();
  }
  
  module.exports = { validarCurso, validarEstudiante, validarMatricula };
  