const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    creation : {
        type : Number,
        required : true,
        default : 2000
    },
    image : {
        type : String,
        required : false,
        default : '#'
    },
    visible : {
        type : Date,
        required : true
    },
    duration : {
        type : Number,
        required : true,
        default : 120
    },
    tags : {
        type : Array,
        required: false,
        default: []
    }
    /*
    * +créé par
    * +historique des mises à jour et par qui
    * +le réalisateur
    * +les acteurs
    * +trailer url
    * +un synopsis
    * +add a watching date
    */
})

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie
