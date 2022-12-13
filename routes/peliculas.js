const express = require('express');
const router = express.Router()
const {getPeliculas,getPelicula,addPelicula,delPelicula} = require('../controllers/peliculas')
//,addUser, getUsers, delUser, updateUser


router.get('/', getPeliculas);
router.get('/:id', getPelicula);
router.post('/',addPelicula);
router.delete('/:id',delPelicula);


module.exports = (router)