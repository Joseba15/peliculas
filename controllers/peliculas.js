const {request, response} = require('express')
const Pelicula = require('../models/peliculas')

const getPeliculas= async(req,res) =>{
    const { limit=5, skip=0} = req.query;
    const peliculas = await Pelicula.find().limit(Number(limit)).skip(Number(skip))
    res.json({ limit, skip, peliculas})
}


function getPelicula(req = request, res = response) {
    const id = req.params.id
    const pelicula = db.cervezas.find({ _id: id });
    if (pelicula.length) {
        res.json(pelicula);
    } else {
        res.json({ message: `La pelicula ${id} no existe` })
    }

}
// const updatePelicula = async (req = request, res = response) => {
//     const {id} = req.params;
//     const {_id,  state, ...userBody} = req.body;
    
    
//     const pelicula = await User.findByIdAndUpdate(id,userBody)

//     res.json(user)

// }

const addPelicula = async(req, res) => {

    const { title, gender, duration,rol} = req.body;
    

    const pelicula = new Pelicula({title, gender, duration,rol})


    
    await pelicula.save();

    res.json(
        pelicula
    )

}


const delPelicula = async(req = request, res= response) => {


    const id = req.params.id;
    const pelicula = await Pelicula.remove(id)
    res.json({ pelicula})
}

module.exports = {getPeliculas,getPelicula,addPelicula,delPelicula}