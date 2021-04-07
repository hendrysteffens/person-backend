var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/db_person');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    cpf: String,
    creditCardData: String,
    lastCpfSearch: Date,
    financeMovimentation : String
});


var Person = mongoose.model('Person', personSchema);
module.exports = Person;