
const mongoose = require('mongoose')
const { ObjectId } = require('mongodb');

const mascotaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  clase: {
    type: String,
    required: true,
  },
  sexo: {
    type: String,
    required: true,
  },
  edad: {
    type: String,
    required: true,
  },
  cliente_id:{
    type: ObjectId,
    ref: 'Cliente',
    required: true,
  }
})

const Mascota = mongoose.model('Mascota', mascotaSchema)

module.exports = Mascota
