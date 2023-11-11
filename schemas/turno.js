const mongoose = require('mongoose');

const turnoSchema = new mongoose.Schema({
    fechaTurno: {
    type: String,
    required: true,
  },
  nombrePaciente: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: false,
  },
  estado: {
    type: String,
    required: true,
  }
});

const Turno = mongoose.model('Turnos', turnoSchema);

module.exports = Turno;