const express = require('express')
//const bcrypt = require('bcrypt')

const Turno = require('../schemas/turno')
//const Role = require('../schemas/role')

const router = express.Router()


router.post('/', createTurno)


async function createTurno(req, res, next) {
  console.log('createTurno: ', req.body);

  const turno = req.body;

  try {
    // Validar si el usuario tiene permisos para crear clientes
/*     if (!req.isAdmin()) {
      return res.status(403).send('Unauthorized');
    } */

    const turnoCreated = await Turno.create(turno);

    res.send(turnoCreated);
  } catch (err) {
    next(err);
  }
}


module.exports = router;