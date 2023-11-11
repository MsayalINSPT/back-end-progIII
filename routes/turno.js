const express = require('express')
//const bcrypt = require('bcrypt')

const Turno = require('../schemas/turno')
//const Role = require('../schemas/role')

const router = express.Router()


router.post('/', createTurno)
router.get('/', getAllTurnos)


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


async function getAllTurnos(req, res) {
    console.log('getAllTurnos  ')

    try {

      
      const turnos = await Turno.find({estado: 'pendiente'})
      res.send(turnos)

    } catch (err) {
      console.log(err)
    }
  } 


module.exports = router;