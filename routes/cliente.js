const express = require('express')
const bcrypt = require('bcrypt')

const Mascota = require('../schemas/cliente')
const Role = require('../schemas/role')


const router = express.Router()


router.post('/', createCliente)


async function createCliente(req, res, next) {
    console.log('createCliente: ', req.body)
  
    const user = req.body
  
    try {
      const role = await Role.findOne({ name: user.role })
      if (!role) {
        res.status(404).send('Role not found')
      }


    } catch (err) {
      next(err)
    }
  }