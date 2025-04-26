const express = require('express');
const app = express();
const { syncModels } = require('./models');

const cursoRoutes = require('./routes/cursoRoutes');
const estudianteRoutes = require('./routes/estudianteRoutes');
const matriculaRoutes = require('./routes/matriculaRoutes');

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
