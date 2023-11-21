const express = require('express')
//const bcrypt = require('bcrypt')

const Cliente = require('../schemas/cliente')
//const Role = require('../schemas/role')

const router = express.Router()


router.post('/', createCliente)
router.get('/', getAllCliente)

//------------------------ Nuevo cliente ----------------------------------
async function createCliente(req, res, next) {

  console.log('createClient: ', req.body);

  const client = req.body;


  try {
    // Validar si el usuario tiene permisos para crear clientes
/*     if (!req.isAdmin()) {
      return res.status(403).send('Unauthorized');
    } */

    const clientCreated = await Cliente.create(client);

    res.send(clientCreated);
  } catch (err) {
    next(err);
  }
}
//------------------------ Todos los clientes ----------------------------------
async function getAllCliente(req, res) {
  console.log('getAllClientes  ')

  try {
    const clientes = await Cliente.find()
    res.send(clientes)
  } catch (err) {
    console.log(err)
  }
}


//------------------------ Buscar cliente ----------------------------------

//------------------------ Editar cliente ----------------------------------

//------------------------ Borrar cliente ----------------------------------


module.exports = router;