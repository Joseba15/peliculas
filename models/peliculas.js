const { Schema, model} = require('mongoose');

const PeliculaSchema = Schema({
    title: {
        type: String,
        required: [true, 'Title is mandatory']
    },
    gender: {
        type: String,
        required: [true, 'Gender is mandatory']
    },
    duration: {
        type: Number,
        required: [true, 'Duration is mandatory'],
        unique: true
    },
    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state: {
        type: Boolean,
        default: true
    }

    
    
})

// PeliculaSchema.methods.toJSON = function() {
//     const { __v, password, _id, ...user} = this.toObject();
//     user.uid = _id;
//     return user;
// }

module.exports = model( 'Pelicula', PeliculaSchema )

