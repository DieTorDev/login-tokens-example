const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const corsOptions = require('./config/cors.config');
const authRoutes = require('./routes/auth.routes');

require('dotenv').config();

app.use(cors(corsOptions));
app.use(express.json());

// Uso de rutas
app.use('/auth', authRoutes);

const startSever = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to database');
  } catch (err) {
    console.log('Connecting error');
  }
  app.listen(process.env.PORT, () =>
    console.log(`Servidor en ejecución en el puerto ${process.env.PORT}`)
  );
};

startSever();
