const mongoose = require('mongoose')
const { ObjectId } = require('mongodb');

const turnoSchema = new mongoose.Schema({
  fechaTurno: {
    type: String,
    required: true,
  },
  horaTurno: {
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
  mascota_id: {
    type: ObjectId,
    ref: 'Mascota',
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
})

const Turno = mongoose.model('Turnos', turnoSchema)

module.exports = Turno
