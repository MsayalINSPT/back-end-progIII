const mongoose = require('mongoose');

const mascotaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ape: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  especie: {
    type: String,
    required: true,
  },
  sexo: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
});

const Mascota = mongoose.model('Mascota', mascotaSchema);

module.exports = Mascota;
