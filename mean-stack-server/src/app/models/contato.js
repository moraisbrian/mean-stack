const mongoose = require('../../config/database');
const { Schema } = require('mongoose');

const schema = new Schema({
    nome: String,
    email: String,
    telefone: String
});

const Contato = mongoose.model('Contato', schema);

module.exports = Contato;