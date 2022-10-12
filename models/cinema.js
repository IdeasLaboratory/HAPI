const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModelSchema = new Schema({
    title : {
        type : String,
        required : true,
    }
})

const Model = mongoose.model('Cinema', ModelSchema)

module.exports = Model