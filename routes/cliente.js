const express = require('express')
//const bcrypt = require('bcrypt')

const Cliente = require('../schemas/cliente')
//const Role = require('../schemas/role')

const router = express.Router()


router.post('/', createCliente)


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


module.exports = router;