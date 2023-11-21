
const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
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
  telefono: {
    type: String,
    required: true,
  },
 
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
