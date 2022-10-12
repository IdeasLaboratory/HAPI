const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    editable : {
        type : Boolean,
        required : true,
        default : false
    },
    resultsVisible : {
        type : Boolean,
        required : true,
        default : false
    },
    tokens : {
        type : Array,
        required: false,
        default: []
    },
    steps : {
        type : Array,
        required: false,
        default: []
    },
})

const Survey = mongoose.model('Surveys', SurveySchema)

module.exports = Survey
