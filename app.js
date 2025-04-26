const express = require('express');
const app = express();
const { syncModels } = require('./parcial-api/models');

const cursoRoutes = require('./parcial-api/routes/cursoRoutes');
const estudianteRoutes = require('./parcial-api/routes/estudianteRoutes');
const matriculaRoutes = require('./parcial-api/routes/matriculaRoutes');

app.use(express.json());

app.use('/cursos', cursoRoutes);
app.use('/estudiantes', estudianteRoutes);
app.use('/matriculas', matriculaRoutes);

const PORT = process.env.PORT || 3000;

syncModels().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
});

module.exports = { app, syncModels };