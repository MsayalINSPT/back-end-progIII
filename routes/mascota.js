const express = require('express')


const Mascota = require('../schemas/mascota')

const router = express.Router()

router.post('/', createMascota)
router.post('/buscar',buscarMascotas)
//router.get('/', getAllMascotas)

//------------------------ Nueva mascota ----------------------------------
async function createMascota(req, res, next) {
    

    console.log('createMascota: ', req.body);
  
    const mascota = req.body;
    //mascota.cliente_id = '000000000000000000000000'

  
    try {
      // Validar si el usuario tiene permisos para crear clientes
  /*     if (!req.isAdmin()) {
        return res.status(403).send('Unauthorized');
      } */
  
      const mascotaCreated = await Mascota.create(mascota);
  
      res.send(mascotaCreated);
    } catch (err) {
      next(err);
    }
  }

  //------------------------ Buscar Mascota ----------------------------------

  async function buscarMascotas(req, res, next) {
    console.log('Buscar mascotas de: ', req.body)

    try{
      const id_dueno = req.body
      if (!id_dueno) {
        return res.status(400).json({ error: 'El campo cliente_id es obligatorio.' });
    }
        
        const mascotas = await Mascota.find(id_dueno)
        console.log(mascotas)
        res.send(mascotas)
    }
    catch (err) {
      next(err)
    }

  }


  module.exports = router;